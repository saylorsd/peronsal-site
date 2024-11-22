---
title: Reverse Engineering my Cat's Water Fountain
slug: cat-fountain
description: >
  My new pet water fountain comes with an app which is both neat and troublesome. I want to reverse engineer how it
  operates so I can use my own app to control and monitor it.
order: 0
---

I have one of [these water fountains](https://petkit.com/products/eversweet-solo-2) for my cat. It comes with an app,
and from what I could tell, it was using Bluetooth Low Energy (Bluetooth LE, BLE) for communicating with the fountain. I
really don't
want to use the company's app for privacy and security reasons. I also think that reverse engineering the fountain's API
will lead to other fun projects like building a new app and integrating my own smart home features.

So far, I've been able to reverse engineer a bit of how the fountain and app work. Here's my best attempt collect
notes and document what I did a while ago. It is not complete, but I plan to clean this up and add more in the future.

## Packet Sniffing

I knew I would need to sniff the packets being sent between my phone and the fountain. Some web searching led
me [a post](https://novelbits.io/nordic-ble-sniffer-guide-using-nrf52840-wireshark/) which led me to try
the packet sniffing software [Wireshark](https://www.wireshark.org/) with a BLE plugin, and
a [nRF52840 BLE development dongle](https://www.nordicsemi.com/Products/Development-hardware/nrf52840-dongle) from
Nordic Semiconductor.

To use the dongle to sniff packets (i.e. simply listen to and report them), I need to install
the [sniffer firmware](https://www.nordicsemi.com/Products/Development-tools/nRF-Sniffer-for-Bluetooth-LE)
using [Nordic's desktop software](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop).

<figure>
<img alt="NRF dongle sniffing away" height="400px" src="/images/side-projects/cat-fountain/nrf.gif"/>
<figcaption>nRF dongle sniffing packets</figcaption>
</figure>

With the sniffer running in wireshark without any further filtering, I was looking at a firehose of all the bluetooth
packets flying around me. Luckily wireshark allows for lots of filters and I could filter to just the packets from and
for the fountain.

<figure>
<img alt="Sniffing" src="/images/side-projects/cat-fountain/sniffing.gif"/>
<figcaption>Wireshark output of communications between fountain and my phone</figcaption>
</figure>


The next thing I did was explore the packets while playing with the app. I discovered that communication was done
using [GATT](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy#Software_model) and from there I was able to narrow now
the packets to the ones I wanted as Wireshark labeled the protocol being used in the packet.

Exploring the (G)ATT packets I found the payload data being sent and started to explore it. I updated Wireshark to
report the payload data and then I exported it to excel to play around with it.

## Examining raw data

### Fountain control commands

I started playing with the data and a [Python BLE library](https://bleak.readthedocs.io/en/latest/) and was able to
reverse engineer the On/Off switch of the fountain. One interesting thing I noticed was a few bytes used to keep track
of a sequence. If you send a command with teh sequence bytes behind, the fountain will ignore it.

_This python script shows my breakdown of the bytes sent by the app and can send on and off requests to the fountain._

```python
import asyncio
import os
from pathlib import Path

from bleak import BleakClient, BleakScanner, BleakGATTCharacteristic

NAME = 'Petkit_CTW2'

# CHARACTERISTICS
CHAR13 = '0000aaa2-0000-1000-8000-00805f9b34fb'  # Petkit_CTW2_TX
CHAR16 = '0000aaa1-0000-1000-8000-00805f9b34fb'  # Petkit_CTW2_RX

# DESCRIPTORS
DESC15 = '00002901-0000-1000-8000-00805f9b34fb'  # CHAR13  - bytearray(b'Petkit_CTW2_TX')
DESC18 = '00002902-0000-1000-8000-00805f9b34fb'  # CHAR16  - bytearray(b'')
DESC19 = '00002901-0000-1000-8000-00805f9b34fb'  # CHAR16  - bytearray(b'Petkit_CTW2_RX')

# SERVICES
SERV12 = '0000aaa0-0000-1000-8000-00805f9b34fb'

# DATA PARTS
MAGIC_NUMBER = b'\xFA\xFC\xFD'
PAUSE_CMD = b'\xDC'
SOMETHING = b'\x02\x00'
ON = b'\x01'
OFF = b'\x00'
END = b'\x01\xFB'

DIR = Path(os.path.dirname(os.path.realpath(__file__)))

INIT_CMD = b'\xD5'

INIT_MESSAGE = MAGIC_NUMBER  + INIT_CMD + b'\x01\x00\x00\x00\xfb'


WRITE_CHAR = CHAR13
READ_CHAR = CHAR16


def get_next_sequence() -> int:
    file_name = DIR / 'sequence'
    with open(file_name, 'r') as f:
        seq = int(f.readline())

    with open(DIR / 'sequence', 'w') as f:
        f.write(str(seq + 1))
    return seq


def get_pause_data(pause: bool, seq: int) -> bytes:
    """
    Generates data packet to pause or restart the fountain.

    The fountain will automatically restart in 10 mins.

    :param pause: If true, pause the fountain otherwise restart it.
    :param seq: current sequence number. must be greater than last one used.
    :return:
    """
    signal = OFF if pause else ON
    seq = seq.to_bytes(2, 'big')
    return MAGIC_NUMBER + PAUSE_CMD + seq + SOMETHING + signal + END

def callback(sender: BleakGATTCharacteristic, data: bytearray):
    print(f"NOTIFY:  {data.hex()}")



async def main():
    scanner = BleakScanner()
    fountain = await scanner.find_device_by_name(NAME)

    client = BleakClient(fountain)


    try:
        print('Connecting')
        await client.connect()
        await client.start_notify(16, callback)

        print(f'SENDING: {INIT_MESSAGE.hex()}')
        await client.write_gatt_char(WRITE_CHAR, INIT_MESSAGE)

        await asyncio.sleep(4)

        print('Closing connection.')
        await client.stop_notify(CHAR16)


    except Exception as e:
        print(e)
    finally:
        await client.disconnect()


asyncio.run(main())

```

**🎉 I can now pause the fountain without the app.**

### App display data

The next part of the fountain's interface that I want to reverse engineer is the data it sends to the app to be
displayed. To do this, my plan is to capture the packet communication when the app starts up and compare the data to
what I see in the app and the differences between runs.

<figure>
<img alt="startup-data.png" src="/images/side-projects/cat-fountain/startup-data.png"/>
<figcaption>Looking at app startup packets.  The data that populates the apps.</figcaption>
</figure>

<br/>


<figure>
<img alt="startup-comparisons.png" src="/images/side-projects/cat-fountain/startup-comparisons.png"/>
<figcaption>Comparing a few startup communications with app states</figcaption>
</figure>

**📌 I'm here now**

## Extra notes about packets

**When the app connects, it sends these two every time.**

```
fafcfdd501000000fb
fafcfd560101080000008767fea7039dfb
```

**The first signal seems to trigger this response:**

```
fafcfdd5020016000000000005f73b713230323430353135573231313237fb
```

*I captured this same response value on two of the app init captures. The third init attempt didn't capture any response
at this point.*

like other data, it starts with `fafcfd`

The first byte seems to represent an identifier of what the rest of the data is for - like a command name or endpoint or
something. Each response starts withe the same byte.

The sequence when the app connects:

- `d5`
- `56`
- `54`
- `c8`
- `c9`
- `d3`
- `d4`
- `d7`
- `d8`
- *(receives an `e6` response)*
- `e6` - *final command, seems like an acknowledgment*

The next byte seems to be some sort of call/response sequence. The sender uses `01` and the replier uses `02`

The next byte looks like a sequence that increments with each request.

**first response (SEQ = 00)**

```
1600000000000 5f73b7132303234303531355732313132 77
1600000000000 5f73b7132303234303531355732313132 37
```

**3rd command (only one that's different between two two runs i'm looking at)**

```
070000 2e82 5340 0800
070000 2e8b 25a4 0800
```

**5th response (SEQ = 05)**

```
18000000000000000000 0019ea6c0019df14 0000000000000000
18000000000000000000 0022b92c0022b160 0000000000000000
```

**6th response**

```
10000101 0000000000 19df1422 010000 007f
10000101 0000000000 22b1600c 010000 e9e7
```  

**final response**

```
98 1e0001010000000000 19df16220100000081 03030102000005a0000528010000
a5 1e0001010000000000 22b1610c010000e9e8 03030102000005a0000528010000
```


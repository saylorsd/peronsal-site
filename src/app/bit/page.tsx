import couch from "../../../public/images/bit/couch.jpg";
import mac from "../../../public/images/bit/mac.jpeg";
import fur from "../../../public/images/bit/fur.jpeg";
import window from "../../../public/images/bit/window.jpeg";
import sunshine from "../../../public/images/bit/sunshine.jpeg";
import loungin from "../../../public/images/bit/loungin.jpeg";
import monitor from "../../../public/images/bit/monitor.jpeg";
import maxXmas from "../../../public/images/bit/max-xmas.jpeg";
import { ModalImage } from "@/components/modal-image";
import Image from "next/image";

export default function BitPage() {
  const images = [
    {
      alt: "The author and his black cat Bit on a couch.",
      src: couch,
      caption: "Couch buds!",
    },
    {
      alt: "Bit looking at a mid 90's Apple Performa",
      src: mac,
      caption: '"How do you work this thing?"',
    },
    {
      alt: "Bit laying on a reindeer fur.",
      src: fur,
      caption: "...as if she hunted it herself.",
    },
    {
      alt: "Bit yawning on a window perch.",
      src: window,
      caption: "Yawning in the afternoon.",
    },
    {
      alt: "Bit in a cat tree box",
      src: sunshine,
      caption: '🎶 "I\'m loafing in sunshine!  Meow-eow-ow."',
    },
    {
      alt: "Bit lounging on the bed.",
      src: loungin,
      caption: "Morning stretches",
    },
    {
      alt: "Bit looking over a monitor",
      src: monitor,
      caption: '"What you workin\' on?"',
    },
    {
      alt: "Bit and her brother Max",
      src: maxXmas,
      caption: "Visiting her brother Max (bottom) during the holidays.",
    },
  ];

  return (
    <article className="content">
      <div className="hero">
        <h1>Bit</h1>
        <p>My pet cat</p>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4/3",
        }}
      >
        <Image
          alt={"Bit"}
          src={sunshine}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 50%",
            border: "1px solid black",
          }}
        />
      </div>
      <h2>Early Bio</h2>
      <p>
        Bit was born on the streets of Monroeville, PA sometime in April 2019.
        Bit, her sister and her brother Max were fostered by a colleague of
        mine. Bit and her sister bonded quickly.
      </p>
      <p>
        At the time, my mom and I were each looking to adopt; I was looking for
        a bonded pair while my mom was looking for a singleton.
      </p>
      <p>
        Max moved up to my Mom&apos;s as soon as he was ready. However, I
        couldn&apos;t adopt the girls for another month while I moved out of my
        apartment. During that time, Bit&apos;s sister, who was having
        development troubles, was seriously injured during a bout of kitten
        rough-housing and had to be euthanized.
      </p>
      <p>
        At the end of that summer, Bit moved in with me and we&apos;ve been best
        buds ever since.
      </p>
      <h2>Quick Stats</h2>
      <div className="dl-list">
        <dl>
          <dt>Species</dt>
          <dd style={{ fontStyle: "italic" }}>Felus catus</dd>
          <dt>Posture</dt>
          <dd>loafy</dd>
          <dt>Kills</dt>
          <dd>1x🐁; ?x🐛</dd>
        </dl>
        <dl>
          <dt>Born</dt>
          <dd>April, 2019</dd>
          <dt>Behavior</dt>
          <dd>precocious, cuddly</dd>
        </dl>
        <dl>
          <dt>Coat</dt>
          <dd>black, scruffly</dd>

          <dt>Breath</dt>
          <dd>stinky</dd>
        </dl>
      </div>

      <h2>Photos</h2>
      <div className="grid">
        {images.map((image) => (
          <div key={image.alt}>
            <ModalImage
              alt={image.alt}
              src={image.src}
              caption={image.caption}
            />
          </div>
        ))}
      </div>
    </article>
  );
}

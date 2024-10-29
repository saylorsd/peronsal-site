import couch from "../../../public/images/bit/couch.jpg";
import mac from "../../../public/images/bit/mac.jpeg";
import fur from "../../../public/images/bit/fur.jpeg";
import window from "../../../public/images/bit/window.jpeg";
import hello from "../../../public/images/bit/hello.jpeg";
import loungin from "../../../public/images/bit/loungin.jpeg";
import monitor from "../../../public/images/bit/monitor.jpeg";
import maxXmas from "../../../public/images/bit/max-xmas.jpeg";
import { ModalImage } from "@/components/modal-image";

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
    { alt: "Bit in a cat tree box", src: hello, caption: "Hello there." },
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
      caption: "Visiting her brother Max during the holidays!",
    },
  ];

  return (
    <div>
      <h2>Bit</h2>
      <h3>Quick Stats</h3>
      <div className="dl-list">
        <dl>
          <dt>Species</dt>
          <dd style={{ fontStyle: "italic" }}>Felus catus</dd>
          <dt>Posture</dt>
          <dd>loafy</dd>
          <dt>Kills</dt>
          <dd>2</dd>
        </dl>
        <dl>
          <dt>Born</dt>
          <dd>April, 2019</dd>
          <dt>Behavior</dt>
          <dd>precocious</dd>
        </dl>
        <dl>
          <dt>Coat</dt>
          <dd>black, scruffly</dd>

          <dt>Breath</dt>
          <dd>stinky</dd>
        </dl>
      </div>

      <h3>Photos</h3>
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
    </div>
  );
}

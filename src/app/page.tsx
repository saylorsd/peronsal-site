import { Link } from "@/components/link";
import { DD, DL, DT } from "@/components/dl";

export default function HomePage() {
  return (
    <>
      <p>
        Welcome to my digital garden! There&apos;s not much here right now, but
        I&apos;ll be using this as a place to share my side projects,
        collections, writings, and other random creations.
      </p>
      <div className="relative mt-12">
        <p className="italic absolute m-0 -mt-3  pl-[.75ch] w-full">
          <span className="bg-white border-2 px-[.25ch]">Personal Details</span>
        </p>
        <DL className="mt-4 border-2 p-[1ch]">
          <DT className="font-bold">Location</DT>
          <DD>Pittsburgh, PA, USA</DD>
          <DT>Workplace</DT>
          <DD>
            <Link href="https://www.wprdc.org" target="_blank">
              Western Pennsylvania Regional Data Center
            </Link>
          </DD>
          <DD>
            <Link href="https://ucsur.pitt.edu/">
              University Center for Social and Urban Research
            </Link>
          </DD>
          <DD>
            <Link href="https://www.pitt.edu" target="_blank">
              University of Pittsburgh
            </Link>
          </DD>
          <DT>Code</DT>
          <DD>
            <div>
              <Link href="https://github.com/wprdc" target="_blank">
                github.com/wprdc
              </Link>
            </div>
            <div>
              <Link href="https://github.com/saylorsd" target="_blank">
                github.com/saylorsd
              </Link>
            </div>
          </DD>
        </DL>
      </div>
    </>
  );
}

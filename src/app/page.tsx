import Image from "next/image";
import Link from "next/link";

//ingen storyblok
export default function Home() {
  return (
    <main>
      <div className="container">
        <Image
          src="/assets/Giovannis.png"
          alt="Giovannis"
          width={303}
          height={163}
          className="giovannis"
        />

        <div className="arrowContainer">
          <Image
            src="/assets/Icon-arrow.png"
            alt="Arrow"
            width={51}
            height={41}
            className="arrow"
          />
        </div>
        <div className="box bg-green">
          <Image
            src="/assets/stadax-logo.png"
            alt="Städax logo"
            width={250}
            height={85}
            className="stadax"
          />
        </div>
      </div>
      <div className="contentWrapper">
        <h1 className="work-sans-unique-bold">
          Hej! Giovanni’s har gått och blivit Städax. Kom ett steg närmare
          skinande rena fönster, putsade med gott samvete.
        </h1>
        <Link
          className="link"
          href={
            "https://stadax.nu/?gad_source=1&gclid=Cj0KCQiAu8W6BhC-ARIsACEQoDDb3IECTuIUJdp1WYZEAJAOAhVcvDrne-G9LB2P2YcvrIBcn8bnWnoaAkGDEALw_wcB"
          }
        >
          Städax &gt;&gt;
        </Link>
      </div>
    </main>
  );
}

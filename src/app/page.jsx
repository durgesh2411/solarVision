import Header from "@/componentscopy/ui/Header";
import { BackgroundBeamsDemo } from "@/container/beams";
import { FlipWordsDemo } from "@/container/FlipWords";
import Footer from "@/container/Footer";
import { LampDemo } from "@/container/lampBar";
import { InfiniteMovingCardsDemo } from "@/container/movingCards";
import { NavbarDemo } from "@/container/navbar";
import { TimelineDemo } from "@/container/pipeline";
import Title from "@/container/projectTitle";
import { TypewriterEffectSmoothDemo } from "@/container/typewriter";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Header />
      <setion className="flex flex-row bg-black-1">
      <TypewriterEffectSmoothDemo />
      <Image src="/rocket.png"
      alt="" width={660} height={350} className="absolute left-[58%] top-[5.75rem] bg-transparent z-50" />
      </setion>
      {/* <Title /> */}
      <FlipWordsDemo />
      <TimelineDemo />
      <InfiniteMovingCardsDemo />
      <Footer />
    </section>
  );
}

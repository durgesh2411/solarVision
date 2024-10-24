import Header from "@/componentscopy/ui/Header";
import { BackgroundBeamsDemo } from "@/container/beams";
import { FlipWordsDemo } from "@/container/FlipWords";
import Footer from "@/container/Footer";
import { BackgroundBeamsWithCollisionDemo } from "@/container/holi";
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
      <setion className="flex flex-row">
      <TypewriterEffectSmoothDemo />
      <Image src="/rocket.png"
      alt="" width={600} height={350} className="absolute left-[58%] top-[5.75rem] bg-transparent" />
      </setion>
      <Title />
      <FlipWordsDemo />
      {/* <BackgroundBeamsWithCollisionDemo /> */}
      {/* <LampDemo /> */}
      {/* <BackgroundBeamsDemo /> */}
      <TimelineDemo />
      <InfiniteMovingCardsDemo />
      <Footer />
    </section>
  );
}

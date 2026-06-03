import CallToJoin from "./components/CallToJoin/CallToJoin";
import Coaching from "./components/Coaching/Coaching";
import Divider from "./components/Divider/Divider";
import Hero from "./components/Hero/Hero";
import ImpactCards from "./components/ImpactCards/ImpactCards";
import Organizations from "./components/Organizations/Organizations";
import Testimonials from "./components/Testimonials/Testimonials";
import VisionMission from "./components/VisionMission/VisionMission";

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactCards />
      <VisionMission/>
      <Divider />
      <CallToJoin/>
      <Coaching/>
      <Testimonials/>
      <Organizations/>

      {/* Other sections will go here later */}
    </main>
  );
}

import AboutHero from "../components/About/AboutHero";
import AboutBio from "../components/About/AboutBio";
import KeyInitiatives from "../components/About/KeyInitiatives";
import BrandValues from "../components/About/BrandValues";
import MyJourney from "../components/About/MyJourney";
import MyPassion from "../components/About/MyPassion";
import AboutCTA from "../components/About/AboutCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutBio />
      <KeyInitiatives />
      <BrandValues />
      <MyJourney />
      <MyPassion />
      <AboutCTA />
    </main>
  );
}
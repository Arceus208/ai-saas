import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar></LandingNavbar>
      <LandingHero></LandingHero>
      <LandingContent></LandingContent>
    </div>
  );
};

export default LandingPage;

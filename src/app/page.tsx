import Business from "@/components/home-components/Business";
import FeaturedWorks from "@/components/home-components/FeaturedWorks";
import PulsarNonCode from "@/components/home-components/PulsarNonCode";
import RockRoll from "@/components/home-components/RockRoll";
import TalentedPeople from "@/components/home-components/TalentedPeople";
import WelcomePulsar from "@/components/home-components/WelcomePulsar";

export default function Home() {
  return (
    <div>
      <Business />
      <PulsarNonCode />
      <WelcomePulsar />
      <RockRoll />
      <TalentedPeople />
      <FeaturedWorks />
    </div>
  );
}

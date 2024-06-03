import Footer from "@/components/(landing)/Footer";
import Hero from "@/components/(landing)/Hero";
import Information from "@/components/(landing)/Information";
import Narbar from "@/components/(landing)/Narbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function LandingPage() {
  return (
    <div className="flex-row">
      <Narbar />
      <Hero />
      <Information />
      <Footer />
    </div>
  );
}

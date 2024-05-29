import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex-row">
      <h2>LandingPage</h2>
      <Link href="/signin">
        <Button>Login to system</Button>
      </Link>
    </div>
  );
}

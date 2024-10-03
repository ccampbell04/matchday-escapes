import { Accordion } from "@/components/Accordion";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MatchdayEscapes",
  };
}

export default function Home() {
  return (
    <>
      <div>
        <h1>Home</h1>
        <p>Welcome to the home page</p>

        <Accordion />
      </div>
    </>
  );
}

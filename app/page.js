import Image from "next/image";
import { Hero } from "./herosection/page";
export default function Home() {
  return (
    <div className="w-screen h-screen bg-black text-black">
     <Hero />
    </div>
  );
}

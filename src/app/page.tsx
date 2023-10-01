import "@/lib/schedule";
import dynamic from "next/dynamic";

const Events = dynamic(() => import("@/components/events"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Events />
    </main>
  );
}

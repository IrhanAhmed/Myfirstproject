import Herosection from "@/components/Herosection";
import Head from "next/head"; // Import the Head component

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div>
      {/* Set the page title using the metadata */}
      <Head>
        <title>{metadata.title}</title>
      </Head>

      <Herosection />
    </div>
  );
}

import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});

import SystemContainer from "./components/Systems/SystemContainer";

export default async function Home() {
  const pets = await client.fetch(`*[_type == "pet"]`);
  console.log("My pets", pets);
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SystemContainer />
    </main>
  )
}
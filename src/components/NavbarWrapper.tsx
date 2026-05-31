import { client } from "@/sanity/lib/client";
import Navbar from "@/components/Navbar";

const SETTINGS_QUERY = `*[_type == "siteSettings"][0]{commissionsOpen}`;

export default async function NavbarWrapper() {
  // Fetch settings on the server
  const settings = await client.fetch(SETTINGS_QUERY);
  const commissionsOpen = settings?.commissionsOpen ?? true;

  return <Navbar commissionsOpen={commissionsOpen} />;
}

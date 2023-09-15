import { createClient } from "$lib/prismicio";

export async function load({ fetch, request }) {
  const client = createClient({ fetch, request });

  const document = await client.getByUID("home", "home");
  console.log(document);
  return document.data;
}

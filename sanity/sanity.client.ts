// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "v4ufi909",
  dataset: "production",
  apiVersion: "2024-01-15",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
};

const client = createClient(config);

export default client;
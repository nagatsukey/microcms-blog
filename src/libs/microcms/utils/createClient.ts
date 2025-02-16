import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "nagatsukey",
  apiKey: process.env.MICROCMS_API_KEY!,
});

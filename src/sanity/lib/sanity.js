import { createClient } from "next-sanity";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = createClient({
    projectId: 'vlw6okmg',
    dataset: 'production',
    useCdn: true,
    apiVersion:'2025-05-05'
})

// helper
const builder = ImageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
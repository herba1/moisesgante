// schemas/hero.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      description: "Supporting text for the hero section",
    }),
    defineField({
      name: "featuredArtwork",
      title: "Featured Artwork",
      type: "reference",
      to: [{ type: "artwork" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      subtitle: "subtitle",
      artworkTitle: "featuredArtwork.title",
      media: "featuredArtwork.mainImage",
    },
    prepare({ subtitle, artworkTitle, media }) {
      return {
        title: "Hero Section",
        subtitle: subtitle || artworkTitle || "No content",
        media,
      };
    },
  },
});

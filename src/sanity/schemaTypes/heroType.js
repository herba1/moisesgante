
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
      title: "Main Featured Artwork",
      type: "reference",
      to: [{ type: "artwork" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "artworks",
      title: "Additional Artworks",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "artwork" }],
        },
      ],
      validation: (Rule) => Rule.min(5).max(10),
      description: "Select 3-10 additional artworks to display in the hero section",
    }),
  ],
  preview: {
    select: {
      subtitle: "subtitle",
      mainArtworkTitle: "featuredArtwork.title",
      media: "featuredArtwork.mainImage",
    },
    prepare({ subtitle, mainArtworkTitle, media }) {
      return {
        title: "Hero Section",
        subtitle: subtitle || mainArtworkTitle || "No content",
        media,
      };
    },
  },
});
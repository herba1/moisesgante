
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
      name: "secondaryArtwork1",
      title: "Secondary Artwork 1",
      type: "reference",
      to: [{ type: "artwork" }],
    }),
    defineField({
      name: "secondaryArtwork2",
      title: "Secondary Artwork 2",
      type: "reference",
      to: [{ type: "artwork" }],
    }),
    defineField({
      name: "secondaryArtwork3",
      title: "Secondary Artwork 3",
      type: "reference",
      to: [{ type: "artwork" }],
    }),
    defineField({
      name: "secondaryArtwork4",
      title: "Secondary Artwork 4",
      type: "reference",
      to: [{ type: "artwork" }],
    }),
    defineField({
      name: "secondaryArtwork5",
      title: "Secondary Artwork 5",
      type: "reference",
      to: [{ type: "artwork" }],
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
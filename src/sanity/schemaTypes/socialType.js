import { defineField, defineType } from "sanity";

export default defineType({
  name: "socialMediaLinks",
  title: "Social Media Links",
  type: "document",
  fields: [
    defineField({
      name: "links",
      title: "Social Media Links",
      type: "array",
      description: "💡 Tip: For best display, keep your top 4 most important social media links at the beginning of this list",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: "Name of social media platform (e.g. Instagram, Facebook, etc.)",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "Profile URL",
              type: "url",
              description: "Full URL to your social media profile",
              validation: (Rule) => Rule.required().uri({
                scheme: ["http", "https"]
              }),
            }),
          ],
          preview: {
            select: {
              label: "label",
              url: "url",
            },
            prepare({ label, url }) {
              return {
                title: label || "Social Media Link",
                subtitle: url || "No URL provided",
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      links: "links",
    },
    prepare({ links }) {
      const linkCount = links ? links.length : 0;
      return {
        title: "Social Media Links",
        subtitle: `${linkCount} ${linkCount === 1 ? 'link' : 'links'} configured`,
      };
    },
  },
});
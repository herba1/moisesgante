import { defineField, defineType } from "sanity";

export default defineType({
  name: "extraFooter",
  title: "Footer extra links and downloads",
  type: "document",
  fields: [
    defineField({
      name: "items",
      title: "Links & Downloads",
      type: "array",
      description: "Add any links or downloadable files (PDFs, images, etc.) try to keep minimum extra links 4 is a good amount",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: "Display text (e.g. 'Resume', 'Portfolio', 'LinkedIn', etc.)",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "linkType",
              title: "Link Type",
              type: "string",
              options: {
                list: [
                  { title: "External URL", value: "url" },
                  { title: "Downloadable File", value: "file" },
                ],
                layout: "radio",
              },
              initialValue: "url",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              description: "External link (website, social media, etc.)",
              hidden: ({ parent }) => parent?.linkType !== "url",
              validation: (Rule) => 
                Rule.custom((url, context) => {
                  const { parent } = context;
                  if (parent?.linkType === "url" && !url) {
                    return "URL is required when link type is External URL";
                  }
                  return true;
                }),
            }),
            defineField({
              name: "file",
              title: "File",
              type: "file",
              description: "Upload a file (PDF, image, etc.) for download",
              hidden: ({ parent }) => parent?.linkType !== "file",
              validation: (Rule) => 
                Rule.custom((file, context) => {
                  const { parent } = context;
                  if (parent?.linkType === "file" && !file) {
                    return "File is required when link type is Downloadable File";
                  }
                  return true;
                }),
            }),
          ],
          preview: {
            select: {
              label: "label",
              linkType: "linkType",
              url: "url",
              fileName: "file.asset.originalFilename",
            },
            prepare({ label, linkType, url, fileName }) {
              const subtitle = linkType === "url" 
                ? url || "No URL provided"
                : fileName || "No file uploaded";
              
              const icon = linkType === "url" ? "🔗" : "📄";
              
              return {
                title: `${icon} ${label || "Untitled"}`,
                subtitle,
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      items: "items",
    },
    prepare({ items }) {
      const itemCount = items ? items.length : 0;
      return {
        title: "Links & Downloads",
        subtitle: `${itemCount} ${itemCount === 1 ? 'item' : 'items'} configured`,
      };
    },
  },
});
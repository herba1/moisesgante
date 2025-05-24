import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "briefDescription",
      title: "Brief Description",
      type: "text",
      description: "Short summary or tagline",
    }),
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      description: "Your name here",
    }),
    defineField({
      name: "fullDescription",
      title: "Full Description",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [{ title: "Bullet List", value: "bullet" }],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                title: "Link",
                type: "object",
                fields: [
                  {
                    name: "href",
                    title: "URL",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
      ],
      description: "Standard detailed description with rich text formatting",
    }),
    defineField({
      name: "artistStatement",
      title: "Artist Statement",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
        },
      ],
      description: "Personal artist statement block",
    }),
    defineField({
      name: "qna",
      title: "Q&A Section",
      type: "array",
      of: [
        {
          type: "object",
          name: "questionAnswer",
          title: "Question & Answer",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "text",
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
            },
          ],
          preview: {
            select: {
              title: "question",
            },
          },
        },
      ],
      description: "Frequently asked questions and answers",
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Required for accessibility and SEO",
        },
      ],
      description: "Primary image for the about page",
    }),
  ],
  preview: {
    select: {
      briefDescription: "briefDescription",
      media: "mainImage",
    },
    prepare({ briefDescription, media }) {
      return {
        title: "About Page",
        subtitle: briefDescription || "No description",
        media,
      };
    },
  },
});
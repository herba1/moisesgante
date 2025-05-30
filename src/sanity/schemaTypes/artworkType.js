// schemas/artwork.ts
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the artwork.',
      validation: Rule => Rule.required(), // Title is essential
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // Automatically generate from the title
        maxLength: 96,
      },
      description: 'Unique URL path for this artwork (e.g., /artworks/my-great-piece).',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      description: 'The year the artwork was created.',
      validation: Rule => Rule.required().integer().min(1000).max(new Date().getFullYear() + 5),
    }),
        defineField({
      name: 'medium',
      title: 'Medium',
      type: 'string',
      description: 'The medium or materials used for the artwork (e.g., "Charcoal on Bristol Paper", "Oil on Canvas").',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      description: 'The dimensions of the artwork (e.g., "18x24\"", "24x36 inches").',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array', // Use 'array' for rich text (Portable Text)
      of: [
        {
          type: 'block', // Standard Portable Text block for paragraphs, headings, etc.
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' }, // Add a quote style if desired
          ],
          lists: [{ title: 'Bullet List', value: 'bullet' }], // Allow bullet lists
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [
                  {
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: Rule => Rule.required(),
                  },
                ],
              },
            ],
          },
        },
        // Optionally, allow images to be embedded directly within the description text
        // {
        //   type: 'image',
        //   options: { hotspot: true },
        //   fields: [
        //     { name: 'alt', title: 'Alternative Text', type: 'string', description: 'Important for SEO and accessibility.', validation: Rule => Rule.required() },
        //     { name: 'caption', title: 'Caption', type: 'string' }
        //   ]
        // }
      ],
      description: 'A detailed description of the artwork. Use rich text formatting as needed.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true, // Enables cropping and focal points in Sanity Studio
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Required for accessibility and SEO. Describes the image for screen readers.',
          validation: Rule => Rule.required(),
        },
      ],
      description: 'The primary image representing this artwork (e.g., for thumbnails or hero sections).',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'additionalImages', // Clear name for multiple images
      title: 'Additional Images',
      type: 'array', // An array to hold zero or more images
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Required for accessibility and SEO.',
              validation: Rule => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption (optional)',
            },
          ],
        },
      ],
      description: 'Additional images for a gallery view of the artwork (e.g., detail shots, different angles).',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      media: 'mainImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled Artwork',
        subtitle: subtitle ? `Year: ${subtitle}` : '',
        media,
      };
    },
  },
});

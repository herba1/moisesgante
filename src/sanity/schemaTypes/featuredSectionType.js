// schemas/featuredSection.ts
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'featuredSection',
  title: 'Featured Artworks Section',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Heading for this featured section',
    }),
    defineField({
      name: 'artwork1',
      title: 'First Featured Artwork',
      type: 'reference',
      to: [{ type: 'artwork' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'artwork2',
      title: 'Second Featured Artwork',
      type: 'reference',
      to: [{ type: 'artwork' }],
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
      artwork1: 'artwork1.title',
      artwork2: 'artwork2.title',
      media: 'artwork1.mainImage',
    },
    prepare({ title, artwork1, artwork2, media }) {
      return {
        title: title || 'Featured Section',
        subtitle: `${artwork1 || 'TBD'} & ${artwork2 || 'TBD'}`,
        media,
      };
    },
  },
});
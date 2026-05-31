import { defineField, defineType } from 'sanity'

export const artworkType = defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('A title is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('A slug is required. Click "Generate" if you have a title.'),
    }),
    defineField({
      name: 'type',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
          { title: 'Multiple Images', value: 'storybook' },
        ],
        layout: 'radio',
      },
      initialValue: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Thumbnail / Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('A cover image is required.'),
    }),
    defineField({
      name: 'images',
      title: 'Storybook Pages',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      hidden: ({ document }) => document?.type !== 'storybook',
      description: 'Add multiple pages for your storybook.',
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      hidden: ({ document }) => document?.type !== 'video',
      description: 'Upload a video file (MP4, MOV, etc.) for animations.',
    }),
    defineField({
      name: 'medium',
      title: 'Medium',
      type: 'string',
      description: 'e.g. Oil on Canvas, Digital, Charcoal',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.min(1).error('Please add at least one tag.'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})

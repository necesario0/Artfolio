import { defineField, defineType } from 'sanity'

export const commissionType = defineType({
  name: 'commission',
  title: 'Commission Type',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Type Name',
      type: 'string',
      description: 'e.g. Head, Half Body, Full Body',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Example Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'prices',
      title: 'Pricing',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label (e.g. Flat Price)' },
            { name: 'value', type: 'string', title: 'Value (e.g. $10)' },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'The position in the carousel (smaller numbers appear first)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})

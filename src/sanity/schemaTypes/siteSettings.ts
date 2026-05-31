import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'commissionsOpen',
      title: 'Commissions Open',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle this to open or close the commission section site-wide.',
    }),
  ],
})

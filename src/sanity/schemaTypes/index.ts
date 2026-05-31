import { type SchemaTypeDefinition } from 'sanity'
import { artworkType } from './artworkType'
import { siteSettingsType } from './siteSettings'
import { commissionType } from './commissionType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artworkType, siteSettingsType, commissionType],
}

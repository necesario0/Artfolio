import { type SchemaTypeDefinition } from 'sanity'
import { artworkType } from './artworkType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artworkType],
}

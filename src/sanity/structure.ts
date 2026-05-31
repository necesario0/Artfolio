import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Site Settings Singleton
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      // Standard List Items
      S.documentTypeListItem('artwork').title('Artworks'),
      S.documentTypeListItem('commission').title('Commission Types'),
      // Filter out singletons from the main list if needed, 
      // but here we manually listed everything we want.
    ])

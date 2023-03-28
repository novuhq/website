export const deskStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Technical Use Cases')
        .child(S.documentTypeList('technical-use-case').title('All Technical Use Cases')),
      S.listItem().title('Channels').child(S.documentTypeList('channel').title('All Channels')),
      S.listItem().title('Providers').child(S.documentTypeList('provider').title('All Providers')),
    ]);

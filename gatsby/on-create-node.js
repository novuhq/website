module.exports = async ({ node, actions, reporter, createNodeId, cache, store }) => {
  const { createNodeField, createRemoteFileNode } = actions;

  if (node.internal.type === `WpMediaItem` && node.sourceUrl) {
    try {
      await createRemoteFileNode({
        url: node.sourceUrl,
        parentNodeId: node.id,
        createNode: actions.createNode,
        createNodeId,
        cache,
        store,
      });
    } catch (e) {
      reporter.warn(`⚠️ Media skipped (404): ${node.sourceUrl}`);
      return;
    }
  }

  if (
    node.internal.type === 'Mdx' &&
    node.internal.contentFilePath?.includes('/src/data/pages/directory/')
  ) {
    const raw = node.internal.contentFilePath.split('/src/data/pages/directory/')[1];
    const slug = raw.replace(/\.mdx?$/, '');

    createNodeField({
      node,
      name: 'directorySlug',
      value: slug,
    });
  }
};

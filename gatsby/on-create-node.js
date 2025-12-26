module.exports = ({ node, actions, reporter }) => {
  const { createNodeField } = actions;

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

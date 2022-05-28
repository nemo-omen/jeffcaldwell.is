import dirTree from 'directory-tree';

export const getDirTree = function (path) {
  const tree = dirTree(path);
  return tree;
};

export const normalizeTreePaths = function (tree) {
  for (let node in tree) {
    node.path = node.path.replace('./', '').replace('src/pages', '');
  }
}
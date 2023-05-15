module.exports = {
  name: 'modulea',
  exposes: {
    './Module': 'apps/modulea/src/app/remote-entry/entry.module.ts',
  },
};

module.exports = {
  name: 'moduleb',
  exposes: {
    './Module': 'apps/moduleb/src/app/remote-entry/entry.module.ts',
  },
};

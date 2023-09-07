module.exports = {
  name: 'moduleb',
  exposes: {
    './Module': 'apps/moduleb/src/app/remote-entry/entry.module.ts',
  },
  shared: (libraryName, sharedConfig) => {
    if (libraryName === '@ng-mf/shared')
      return sharedConfig;

    return undefined;
  }
};

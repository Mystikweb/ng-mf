module.exports = {
  name: 'modulea',
  exposes: {
    './Module': 'apps/modulea/src/app/remote-entry/entry.module.ts',
  },
  shared: (libraryName, sharedConfig) => {
    if (libraryName === '@ng-mf/shared')
      return sharedConfig;

    return undefined;
  }
};

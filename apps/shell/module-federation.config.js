module.exports = {
  name: 'shell',
  remotes: [],
  shared: (libraryName, sharedConfig) => {
    if (libraryName === '@ng-mf/shared')
      return sharedConfig;

    return undefined;
  }
};

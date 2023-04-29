module.exports = api => {
  api.extendPackage({
    description: api.options.description
  });

  if (api.options.axios) {
    api.extendPackage({
      dependencies: {
        axios: '^0.20.0',
      },
    });
  }

  if (api.options.cosmjs) {
    api.extendPackage({
      dependencies: {
        cosmjs: '^0.20.0',
      },
    });
  }  
};

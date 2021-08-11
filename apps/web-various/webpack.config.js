module.exports = (config, context) => {
  console.log(
    'Disable babel loader caching to immediately get feedback on .babelrc changes'
  );

  config.module.rules.forEach((rule) => {
    if (rule.options && rule.options.cacheDirectory) {
      rule.options.cacheDirectory = false;
    }
  });
  return config;
};

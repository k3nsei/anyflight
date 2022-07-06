const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');
const svgr = require('@svgr/rollup').default;

module.exports = (config) => {
  const nxConfig = nrwlConfig(config);

  return Object.assign({}, nxConfig, {
    plugins: [svgr(), ...nxConfig.plugins],
  });
};

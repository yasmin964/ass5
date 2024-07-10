// next.config.js
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  webpack: (config) => {
    config.resolve.extensions.push('.svelte');
    config.module.rules.push({
      test: /\.svelte$/,
      use: {
        loader: 'svelte-loader',
        options: {
          preprocess: sveltePreprocess(),
        },
      },
    });
    return config;
  },
};

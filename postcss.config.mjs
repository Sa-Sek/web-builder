/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
   // ...other configuration
   experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
};

export default config;

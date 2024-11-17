import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',  // Output directory for HTML files
      assets: 'build', // Output directory for assets
      fallback: null,  // Use `index.html` for fallback routing, if needed
      precompress: false,
      strict: true
    })
  }
};

export default config;

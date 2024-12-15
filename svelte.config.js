import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
		}),
		paths: {
			base: '/eve-frontier-types',
		},
		prerender: {
			crawl: true,
			entries: ['*'],
		},
	}
};

export default config;

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from '@unocss/svelte-scoped/vite'

export default defineConfig({
	plugins: [UnoCSS(), sveltekit()],
	server: {
		port: 1420,
		strictPort: true
	}
});

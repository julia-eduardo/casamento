import {svelte} from '@sveltejs/vite-plugin-svelte';
import {defineConfig} from 'vite';

export default defineConfig({
  base: '/casamento/',
  plugins: [svelte()],
});

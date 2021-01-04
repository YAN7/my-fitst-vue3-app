import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

module.exports = defineConfig({
	server: {
		port: 3211
	},
	plugins: [vue()],
})
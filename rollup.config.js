import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		file: 'public/bundle.js',
		name: 'app'
	},
	plugins: [
		svelte({
			compilerOptions: {
				customElement: true
			},
			include: 'src/**/*.svelte'
		}),
		resolve(),
		commonjs(),
		production && terser()
	]
};

const path = require('path');
const webpack = require('webpack');

const common = {
	mode: 'production',
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			loader: 'ts-loader',
			options: {
				configFile: require.resolve('./tsconfig.json')
			}
		}]
	},
	optimization: {
		minimize: true
	},
	node: {
		__dirname: false
	}
};

module.exports = [Object.assign({
	target: 'electron-main',
	entry: './src/main.ts',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
}, common), Object.assign({
	target: 'electron-renderer',
	entry: './src/renderer.tsx',
	output: {
		filename: 'renderer.js',
		path: path.resolve(__dirname, 'dist')
	},
}, common)];

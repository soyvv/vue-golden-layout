const {FuseBox, JSONPlugin, UglifyJSPlugin, CSSPlugin, EnvPlugin, QuantumPlugin, VuePlugin, HTMLPlugin} = require("fuse-box");
const fuse = FuseBox.init({
	homeDir: "src",
	output: "dist/$name.js",
	cache: false,
	//debug: true,
	sourceMaps: true,
	plugins: [
		//EnvPlugin({NODE_ENV: production ? "production" : "development"}),
		CSSPlugin(),
		VuePlugin(),
		HTMLPlugin(),
		JSONPlugin(),
		QuantumPlugin({
			bakeApiIntoBundle : 'vue-golden-layout',
			containedAPI : true,
			target: 'npm'
		})
	],
	package: {
		name: "vue-golden-layout",
		main: 'index.ts'
	},
	alias: {
		//vue: 'vue/dist/vue.common.js'
	},
	globals: {
		'vue-golden-layout': '*'
	}
});
fuse.bundle("vue-golden-layout")
	.instructions('> [index.ts]');

fuse.run();

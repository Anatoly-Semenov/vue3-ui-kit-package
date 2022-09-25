import { defineConfig } from "@vue/cli-service"
import path from "path"

export default defineConfig({
	chainWebpack: (config: any) => {
		config.module.rules.delete("svg")
		config.module
			.rule("svg")
			.test(/\.(svg)(\?.*)?$/)
			.use("vue-loader")
			.loader("vue-loader")
			.end()
			.use("vue-svg-loader")
			.loader("vue-svg-loader")
	}
})

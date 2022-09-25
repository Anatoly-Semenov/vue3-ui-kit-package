/* eslint-disable */
declare module "*.vue" {
	import type { DefineComponent } from "vue"
	const component: DefineComponent<{}, {}, any>
	export default component
}

declare module "*.svg" {
	const content: any
	export default content
}

declare module "*.png" {
	const value: any
	export default value
}

declare module "*.mp3" {
	const content: any
	export default content
}

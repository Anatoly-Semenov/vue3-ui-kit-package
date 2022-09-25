<template>
	<a-image
		class="ui-image"
		:alt="alt"
		:fallback="fallback"
		:placeholder="placeholder"
		:preview="preview"
		:src="src"
		:height="height"
		:width="width"
	>
		<slot name="previewMask" />
		<slot name="placeholder" />
	</a-image>
</template>

<script setup lang="ts">
import { defineProps } from "vue"

// Components
import AImage from "ant-design-vue/lib/image"

const props = defineProps({
	// Image description
	alt: String,
	// Load failure fault-tolerant src
	fallback: String,
	// Image height
	height: [String, Number],
	// Image width
	width: [String, Number],
	// Load placeholder, use default placeholder when set true
	placeholder: Boolean,
	preview: {
		type: Boolean,
		default: false
	},
	src: String
})
</script>

<style lang="stylus" scoped>
@import "~ant-design-vue/lib/image/style/index.css"

.ui-image
	opacity 1
</style>

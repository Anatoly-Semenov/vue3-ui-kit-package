<template>
	<div :class="selector">
		<ui-image :src="src" :preview="preview" />
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps, PropType } from "vue"

// Components
import uiImage from "./ui-image.vue"

// Types
import type { UiLogo } from "@/types"

const props = defineProps({
	src: String,
	size: {
		type: String as PropType<UiLogo.Size>,
		default: "middle"
	},
	border: {
		type: Boolean,
		default: false
	},
	shadow: {
		type: Boolean,
		default: false
	},
	background: {
		type: Boolean,
		default: true
	},
	preview: {
		type: Boolean,
		default: false
	}
})

const selector = computed(() => {
	let selectorReady = `ui-logo ${"_" + props.size}`

	if (props.border) selectorReady += " _border"
	if (props.shadow) selectorReady += " _shadow"
	if (!props.background) selectorReady += " _without-bg"

	return selectorReady
})
</script>

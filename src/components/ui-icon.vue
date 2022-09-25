<template>
	<component :class="selector" :is="icon(name)" />
</template>

<script setup lang="ts">
import {
	defineAsyncComponent,
	defineProps,
	computed,
	PropType,
	Component
} from "vue"

// Types
import type { UiIcon } from "@/types"

const props = defineProps({
	name: {
		type: String as PropType<UiIcon.Name>,
		default: "link"
	},
	size: {
		type: [String, Number] as PropType<UiIcon.Size>,
		default: "m"
	},
	hasHover: {
		type: Boolean,
		default: false
	}
})

const selector = computed((): string => {
	let selectorReady = "ui-icon"

	if (typeof props.size === "string") {
		selectorReady += ` _${props.size}`
	}

	if (props.hasHover) {
		selectorReady += ` _hover`
	}

	return selectorReady
})

const icon = (name: UiIcon.Name): Component => {
	return defineAsyncComponent(
		() =>
			import(
				/* webpackChunkName: "icon" */ `../assets/img/icons/icon-${name}.svg`
			)
	)
}
</script>

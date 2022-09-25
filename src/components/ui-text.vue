<template>
	<component :is="tag" :class="selector">
		<slot />
	</component>
</template>

<script setup lang="ts">
import { computed, defineProps, PropType } from "vue"

// Types
import type { UiText } from "@/types/ui-text"

const props = defineProps({
	type: {
		type: String as PropType<UiText.Type>,
		default: "text"
	},
	size: {
		type: String as PropType<UiText.Size>,
		default: "m"
	},
	device: {
		type: String as PropType<UiText.Device>,
		default: "mobile"
	}
})

const selector = computed(() => {
	return `ui-text ${"_" + props.type} ${"_" + props.size} ${"_" + props.device}`
})

const tag = computed(() => {
	if (props.type === "title") {
		switch (props.size) {
			case "xs":
				return "h4"
			case "s":
				return "h3"
			case "m":
				return "h2"
			case "l":
				return "h1"
		}
	}

	return "p"
})
</script>

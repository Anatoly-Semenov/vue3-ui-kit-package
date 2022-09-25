<template>
	<button :class="selector" :disabled="disabled" @click="$emit('click')">
		<ui-icon :name="name" />
	</button>
</template>

<script setup lang="ts">
import { computed, defineProps, PropType } from "vue"

// Components
import uiIcon from "./ui-icon.vue"

// Types
import { UiButtonIcon } from "@/types"

const props = defineProps({
	iconName: {
		type: String as PropType<UiButtonIcon.IconName>,
		default: "alert-circle"
	},
	loading: {
		type: Boolean,
		default: false
	},
	disabled: {
		type: Boolean,
		default: false
	},
	type: {
		type: String as PropType<UiButtonIcon.Type>,
		default: "icon"
	},
	size: {
		type: String as PropType<UiButtonIcon.Size>,
		default: "m"
	}
})

const name = computed(() => {
	return props.loading ? "loading" : props.iconName
})

const selector = computed(() => {
	return `ui-button-icon _${props.type} _${props.size}${
		props.loading ? " _loading" : ""
	}${props.disabled ? " _disabled" : ""}`
})
</script>

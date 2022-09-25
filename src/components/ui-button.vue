<template>
	<a-button class="ui-button" v-bind="props" @click="$emit('click')">
		<slot name="icon" />
		<slot />
	</a-button>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue"

// Components
import AButton from "ant-design-vue/lib/button"

// Interfaces
import { UiButton } from "@/types"

const props = defineProps({
	type: {
		type: String as PropType<UiButton.Type>,
		default: "primary"
	},
	size: {
		type: String as PropType<UiButton.Size>,
		default: "middle"
	},
	disabled: {
		type: Boolean,
		default: false
	},
	loading: {
		type: Boolean,
		default: false
	},
	ghost: {
		type: Boolean,
		default: false
	},
	block: {
		type: Boolean,
		default: false
	},
	danger: {
		type: Boolean,
		default: false
	},
	htmlType: {
		type: String as PropType<UiButton.HtmlType>,
		default: "button"
	},
	shape: {
		type: String as PropType<UiButton.Shape>,
		default: "default"
	},
	href: String,
	target: {
		type: String,
		default: "_blank"
	}
})
</script>

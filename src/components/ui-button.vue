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

<style lang="stylus" scoped>
@import "~ant-design-vue/lib/button/style/index.css"
@import "../assets/styles/base/variables.styl"

.ui-button
	border-radius $border-radius
	font-size 14px
	font-weight $regular
	padding 0 $padding
	transition border-color $transition

	// Type styles
	&:not(&.ant-btn-dashed,
   &.ant-btn-primary, &.ant-btn-danger, &.ant-btn-ghost, &.ant-btn-link)
		background-color transparent
		color $color-text
		border 1px solid $color-ui

	&.ant-btn-primary
		background-color $color-ui
		border none

	// Size styles
	&:not(&.ant-btn-sm,&.ant-btn-lg)
		min-width 93px
		height 36px

	&.ant-btn-sm
		min-width 77px
		height 28px

	&.ant-btn-lg
		min-width 106px
		height 42px

&.ant-btn-link
	color $color-ui
	font-size 16px
	font-weight $bold
</style>

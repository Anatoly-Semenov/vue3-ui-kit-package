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

<style lang="stylus" scoped>
@import "../assets/styles/base/variables.styl"

.ui-logo
	width 100%
	background-color $color-text
	border-radius $border-radius
	transition background-color $transition

	&._small
		width 88px
		height 40px

		&::v-deep .ant-image
			padding 0 12px

	&._middle
		width 104px
		height 48px

		&::v-deep .ant-image
			padding 0 15px

	&._large
		width 144px
		height 72px

		&::v-deep .ant-image
			padding 0 $padding

	&._shadow
		box-shadow $box-shadow

	&._border
		border $border

	&._without-bg
		background-color transparent

	&._border._without-bg
		border 1px solid $color-border-inversion

	&::v-deep
		& .ant-image
			display flex
			justify-content center
			align-items center
			height 100%
			width 100%

			& .ant-image-mask
				border-radius $border-radius

		& .ant-image-img
			height auto
			max-height 100%
			max-width 100%
			width auto
</style>

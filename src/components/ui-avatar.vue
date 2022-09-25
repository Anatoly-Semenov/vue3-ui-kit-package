<template>
	<div class="ui-avatar__wrapper" :class="{ _square: shape === 'square' }">
		<a-avatar
			class="ui-avatar"
			:size="size"
			:src="src"
			:shape="shape"
			:draggable="draggable"
			:alt="alt"
			:srcset="srcset"
			:loadError="loadError"
		>
			<slot />
			<slot name="icon" />
		</a-avatar>
		<ui-image class="ui-avatar__preview" :src="src" :preview="preview" />
	</div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue"

// Components
import uiImage from "./ui-image.vue"
import AAvatar from "ant-design-vue/lib/avatar"

// Types
import { UiAvatar } from "@/types"

const props = defineProps({
	// The address of the image for an image avatar
	src: String,
	// The size of the avatar
	size: {
		type: String as PropType<UiAvatar.Size>,
		default: "default"
	},
	// The shape of avatar
	shape: {
		type: String as PropType<UiAvatar.Shape>,
		default: "square"
	},
	// Whether the picture is allowed to be dragged
	draggable: {
		type: Boolean,
		default: false
	},
	// 	This attribute defines the alternative text describing the image
	alt: String,
	// A list of sources to use for different screen resolutions
	srcset: String,
	// Handler when img load error, return false to prevent default fallback behavior
	loadError: {
		type: Function,
		default: () => {
			console.log("Failed to load image")
		}
	},
	// Preview image in modal
	preview: {
		type: Boolean,
		default: false
	}
})
</script>

<style lang="stylus" scoped>
@import "~ant-design-vue/lib/avatar/style/index.css"
@import "../assets/styles/base/variables.styl"

.ui-avatar
	border 2px solid #FFFFFF
	box-shadow 1.5px 3px 3px 0 #0000001F

	&.ant-avatar.ant-avatar-square
		border-radius $border-radius

	&__wrapper
		position relative
		width fit-content

		&::v-deep
			& .ant-image
				position absolute
				left 0
				top 0
				height 100%
				width 100%

				&-mask
					height 100%
					width 100%
					border-radius $circle-radius

				&-img.ui-image
					display none

		&._square ::v-deep(.ant-image-mask)
			border-radius $border-radius

	&__preview
		opacity .7
</style>

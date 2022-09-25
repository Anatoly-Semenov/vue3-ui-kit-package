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

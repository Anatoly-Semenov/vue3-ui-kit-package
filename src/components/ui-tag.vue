<template>
	<a-tag
		class="ui-tag"
		:color="color"
		:closable="closable"
		@close="$emit('close')"
		:visible="visible"
	>
		<slot />
	</a-tag>
</template>

<script setup lang="ts">
import { defineProps } from "vue"

// Components
import ATag from "ant-design-vue/lib/tag"

const props = defineProps({
	color: {
		type: String,
		default: "var(--color-ui)"
	},
	closable: {
		type: Boolean,
		default: false
	},
	visible: {
		type: Boolean,
		default: true
	}
})
</script>

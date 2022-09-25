<template>
	<swipe-modal
		class="ui-modal-swipe"
		v-model="model"
		@close="$emit('close')"
		contentsHeight="90vh"
		border-top-radius="16px"
		:persistent="persistent"
		:fullscreen="fullscreen"
		:dark="dark"
		darkContentsColor="var(--color-background-secondary)"
	>
		<div class="ui-modal-swipe__header">
			<ui-button
				class="ui-modal-swipe__close"
				type="link"
				@click="$emit('close')"
			>
				Close
			</ui-button>
		</div>
		<div class="ui-modal-swipe__content">
			<slot />
		</div>
	</swipe-modal>
</template>

<script setup lang="ts">
// @ts-ignore
import swipeModal from "@takuma-ru/vue-swipe-modal"
import uiButton from "./ui-button.vue"

import { computed, defineProps, defineEmits } from "vue"

// Types
type Props = {
	value: boolean
	persistent: boolean
	fullscreen: boolean
	dark: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(["update:value", "open", "close"])

const model = computed({
	get(): boolean {
		return props.value
	},
	set(data: boolean): void {
		emit("update:value", data)
	}
})
</script>

<style lang="stylus" scoped>
@import "../assets/styles/base/variables.styl"

.ui-modal-swipe
	opacity 1

	&__header
		display flex
		align-items center
		justify-content space-between
		height 55px
		padding $padding

	&__close
		padding 0
		text-align left

	&__content
		padding $padding
		width 100%
		height 100%

	& :deep(.modal-background)
		background-color #000000b3 !important
</style>

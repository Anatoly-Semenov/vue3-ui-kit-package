<template>
	<div class="ui-links">
		<button
			class="ui-links__item"
			v-for="({ text, link }, index) in data"
			:key="index"
			@click="$router.push(link)"
		>
			<div class="ui-links__info">
				<ui-icon name="user" />
				<p class="ui-links__text">
					{{ text }}
				</p>
			</div>
			<ui-icon name="chevron-right" />
		</button>
	</div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue"

// Components
import uiIcon from "./ui-icon.vue"

// Types
import { UiLinks } from "@/types"

const props = defineProps({
	data: {
		type: Array as PropType<UiLinks.Data>,
		default: () => []
	}
})
</script>

<style scoped lang="stylus">
@import "../assets/styles/base/variables.styl"
@import "../assets/styles/mixins/flex-center.styl"

.ui-links
	display flex
	flex-direction column
	background-color $color-background-secondary
	border-radius $border-radius
	min-width 200px

	&__item
		display flex
		justify-content space-between
		align-items center
		width 100%
		height 40px
		padding $padding-small
		transition opacity $transition

		&:hover
			opacity .7

		&:active
			opacity .5

	&__info
		flex-center()

	&__text
		font-size 14px
		color $color-text
		margin-left 10px
</style>

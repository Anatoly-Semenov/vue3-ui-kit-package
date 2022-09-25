<template>
	<div class="ui-contacts">
		<div
			class="ui-contacts__item"
			v-for="({ contact, name }, index) in data"
			:key="index"
		>
			<ui-icon name="user" />
			<div class="ui-contacts__info">
				<p class="ui-contacts__contact">{{ contact }}</p>
				<p class="ui-contacts__name">{{ name }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue"

// Components
import uiIcon from "./ui-icon.vue"

// Types
import type { UiContacts } from "@/types"

const props = defineProps({
	data: {
		type: Array as PropType<UiContacts.Data>,
		default: () => []
	}
})
</script>

<style lang="stylus" scoped>
@import "../assets/styles/base/variables.styl"

.ui-contacts
	display flex
	flex-direction column
	width 100%
	min-width 300px
	background-color $color-background-secondary
	border-radius $border-radius

	&__item
		display flex
		justify-content flex-start
		align-items center
		width 100%
		height 55px
		padding $padding
		transition opacity $transition
		cursor pointer

		&:hover
			opacity .7

		&:active
			opacity .5

	&__info
		margin-left $padding
		display flex
		flex-direction column
		justify-content flex-start
		align-items flex-start

	&__contact
		font-size 14px
		color $color-text

	&__name
		font-size 12px
		color $color-text-secondary
</style>

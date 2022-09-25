<template>
	<component :is="tag" :class="selector">
		<slot />
	</component>
</template>

<script setup lang="ts">
import { computed, defineProps, PropType } from "vue"

// Types
import type { UiText } from "@/types/ui-text"

const props = defineProps({
	type: {
		type: String as PropType<UiText.Type>,
		default: "text"
	},
	size: {
		type: String as PropType<UiText.Size>,
		default: "m"
	},
	device: {
		type: String as PropType<UiText.Device>,
		default: "mobile"
	}
})

const selector = computed(() => {
	return `ui-text ${"_" + props.type} ${"_" + props.size} ${"_" + props.device}`
})

const tag = computed(() => {
	if (props.type === "title") {
		switch (props.size) {
			case "xs":
				return "h4"
			case "s":
				return "h3"
			case "m":
				return "h2"
			case "l":
				return "h1"
		}
	}

	return "p"
})
</script>

<style lang="stylus" scoped>
@import "../assets/styles/base/variables.styl"

.ui-text
	font-size 15px
	font-weight $regular

	&._title
		color $color-text
		font-weight $bold

		&._desktop, &._tablet
			&._l
				font-size 48px

			&._m
				font-size 32px

			&._s
				font-size 25px

			&._xs
				font-size 20px

		&._mobile
			&._l
				font-size 32px

			&._m
				font-size 25px

			&._s
				font-size 20px

			&._xs
				font-size 18px

	&._subtitle
		color $color-text
		font-weight $regular

		&._desktop, &._tablet, &._mobile
			&._l
				font-size 16px

			&._m
				font-size 16px

			&._s
				font-size 14px

			&._xs
				font-size 12px

	&._text
		color $color-text
		font-weight $regular
		font-size 14px
		line-height 21px

&._description
	color $color-text-secondary
	font-weight $regular
	font-size 14px
	line-height 21px

	&._s, &._xs
		font-size: 12px
		line-height 18px
</style>

<template>
	<div :class="selector" @click="onClick" v-click-away="onClickAway">
		<span class="ui-input__title" :class="{ _top: value || isFocus }">
			{{ titleValue }}
		</span>
		<a-input
			v-model:value="model"
			:placeholder="placeholder"
			:type="type"
			:size="size"
			:maxLength="maxLength"
			:defaultValue="defaultValue"
			:id="id"
			:allowClear="allowClear"
			:bordered="bordered"
			:disabled="disabled"
			:showCount="showCount"
		>
			<slot name="suffix" />
		</a-input>
	</div>
</template>

<script setup lang="ts">
import { computed, ref, defineProps, PropType, defineEmits } from "vue"

// Components
import AInput from "ant-design-vue/lib/input"

// Types
import { UiInput } from "@/types"

const props = defineProps({
	size: {
		type: String as PropType<UiInput.Size>,
		default: "default"
	},
	type: {
		type: String as PropType<UiInput.Type>,
		default: "text"
	},
	error: {
		type: String as PropType<string>,
		default: ""
	},
	value: {
		type: String as PropType<string>,
		default: ""
	},
	placeholder: String as PropType<string>,
	title: String as PropType<string>,
	maxLength: Number as PropType<number>,
	defaultValue: String,
	id: String,
	allowClear: Boolean,
	bordered: {
		type: Boolean,
		default: true
	},
	disabled: Boolean,
	showCount: Boolean
})

const emit = defineEmits(["input:value"])

const isFocus = ref<boolean>(false)

const model = computed({
	get(): string {
		return props.value
	},
	set(data: string): void {
		emit("input:value", data)
	}
})

const onClick = () => {
	if (!isFocus.value && !props.disabled) {
		isFocus.value = true
	}
}

const onClickAway = () => {
	if (isFocus.value) isFocus.value = false
}

const selector = computed((): string => {
	let selectorReady = `ui-input _${props.type}`

	if (props.value) selectorReady += " _focus"
	if (props.error) selectorReady += " _error"

	return selectorReady
})

const titleValue = computed((): string => {
	let titleReady: string = props.title || ""

	if (props.error) titleReady += ` - ${props.error}`

	return titleReady
})
</script>

<style lang="stylus" scoped>
@import "~ant-design-vue/lib/input/style/index.css"
@import "~ant-design-vue/lib/input-number/style/index.css"
@import "../assets/styles/base/variables.styl"

.ui-input
	display flex
	flex-direction column
	justify-content flex-start
	align-items flex-start
	position relative

	& .ant-input-affix-wrapper, &::v-deep .ant-input
		background-color $color-background

	& .ant-input-affix-wrapper
		border $border
		border-radius $border-radius

	&::v-deep .ant-input
		border 0
		padding 4px 0
		color $color-text
		font-size 14px

	& .ant-input-affix-wrapper-focused, &._focus .ant-input-affix-wrapper
		border-color $color-ui

	&:placeholder
		color $color-text

	&:focus
		box-shadow none
		border-color $color-ui

	&__title
		position absolute
		top 9px
		left 16px
		color $color-border
		font-size 14px
		z-index 2
		background-color $color-background
		transition-property color, top, left, padding, font-size
		transition-duration 0.4s
		transition-timing-function ease
		transition-delay 0s

		&._top
			top -7px
			left 6px
			font-size 10px
			padding 0 6px
			color $color-ui

	&._color .ant-input
		height 33px
		width 30px
		border none
		background none

	&._error &__title
		color $color-error

	&._error .ant-input-affix-wrapper-focused, &._error .ant-input-affix-wrapper
		border-color $color-error
</style>

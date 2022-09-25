<template>
	<a-modal
		class="ui-modal"
		:class="{
			'_transparent-content': isTransparentContent,
			'_max-height': isMaxHeight,
			'_full-screen': isFullScreen
		}"
		v-model:visible="model"
		:width="width"
		:centered="centered"
		@ok="$emit('ok')"
		@cancel="$emit('cancel')"
		:okText="okText"
		:cancelText="cancelText"
		:okButtonProps="{ props: { disabled: okDisabled } }"
		:cancelButtonProps="{ props: { disabled: cancelDisabled } }"
		:okType="okType"
		:footer="isFooter ? undefined : null"
		:closable="closable"
		:bodyStyle="bodyStyle"
		:dialogStyle="dialogStyle"
		:confirmLoading="confirmLoading"
		:destroyOnClose="destroyOnClose"
		dialogClass="dialog"
		wrapClassName="dialog"
	>
		<template #closeIcon v-if="closable">
			<div class="ui-modal__close">
				<icon-close :style="{ color: colorCloseIcon }" />
			</div>
		</template>
		<template #title v-if="!disableHeader">
			{{ title }}
			<slot name="head" />
		</template>
		<slot></slot>
		<template #footer v-if="isFooterCustom">
			<slot name="footer"></slot>
		</template>
	</a-modal>
</template>

<script setup lang="ts">
import {
	defineProps,
	defineAsyncComponent,
	defineEmits,
	computed,
	PropType
} from "vue"

// Components
import AModal from "ant-design-vue/lib/modal"

// Icons
const iconClose = defineAsyncComponent(
	() =>
		import(
			/* webpackChunkName: "icon-close" */ "../assets/img/icons/icon-x.svg"
		)
)

// Types
import { UiModal } from "@/types"

const props = defineProps({
	title: String,
	visible: Boolean,
	okText: String,
	cancelText: String,
	okDisabled: {
		type: Boolean,
		default: false
	},
	cancelDisabled: {
		type: Boolean,
		default: false
	},
	okType: {
		type: String as PropType<UiModal.ButtonType>,
		default: "primary"
	},
	width: Number,
	centered: {
		type: Boolean,
		default: false
	},
	isFooter: {
		type: Boolean,
		default: true
	},
	isFooterCustom: {
		type: Boolean,
		default: false
	},
	confirmLoading: {
		type: Boolean,
		default: false
	},
	disableHeader: {
		type: Boolean,
		default: false
	},
	closable: {
		type: Boolean,
		default: true
	},
	bodyStyle: Object,
	dialogStyle: Object,
	isTransparentContent: {
		type: Boolean,
		default: false
	},
	colorCloseIcon: {
		type: String,
		default: ""
	},
	isMaxHeight: {
		type: Boolean,
		default: false
	},
	isFullScreen: {
		type: Boolean,
		default: false
	},
	destroyOnClose: {
		type: Boolean,
		default: true
	}
})

const emit = defineEmits(["cancel:visible", "ok:visible"])

const model = computed({
	get(): boolean {
		return props.visible
	},
	set(val: boolean): void {
		emit("cancel:visible", val)
		emit("ok:visible", val)
	}
})
</script>

<style lang="stylus">
@import "~ant-design-vue/lib/modal/style/index.css"

@import "../assets/styles/base/variables.styl"
@import "../assets/styles/mixins/custom-scrollbar.styl"
@import "../assets/styles/mixins/flex-center.styl"

.ui-modal

	&__close
		flex-center()
		height 32px
		width 32px
		background-color $color-text-secondary
		border-radius $circle-radius

		& path
			fill $color-text-secondary

	& .ant-modal
		&-close-x
			flex-center()

		&-content, &-header
			background-color $color-background-secondary

		&-header
			border none
			border-top-left-radius $border-radius
			border-top-right-radius $border-radius
			height 60px
			display flex
			justify-content flex-start
			align-items center
			padding $padding

		&-content
			border-radius $border-radius
			color $color-text

		&-title
			color $color-text
			font-size 20px
			font-weight $bold

		&-footer
			border none
			padding $padding

			& .ant-btn
				border-radius $border-radius

				&:first-child
					background-color transparent
					border $border-ui
					color $color-text

	&._max-height .ant-modal-body
		max-height calc(100vh - 270px)
		overflow auto
		custom-scrollbar()

	&._transparent-content
		& .ant-modal-content
			background transparent
			box-shadow none

	&._full-screen
		&.ant-modal
			width 100% !important
			max-width 100%
			top 0
			padding-bottom 0
			margin 0

		& .ant-modal
			&-content
				border-radius 0
				display flex
				flex-direction column
				height calc(100vh)

			&-body
				flex 1

			&-header
				border-top-left-radius 0
				border-top-right-radius 0

	&-header
		padding-top 18px
		padding-bottom 13px
		padding-left 21px

	&-title:first-letter
		text-transform capitalize

	&-footer
		border-top none

	& .ant-btn
		padding 0 23px
		color $color-panel-text
		border-color $color-ui

		&.ant-btn-primary
			color $color-text-light
			background-color $color-ui
</style>

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

<template>
	<a-tabs
		class="ui-tabs"
		:defaultActiveKey="defaultKey"
		:destroyInactiveTabPane="destroyInactiveTabPane"
		:animated="animated"
		v-model="model"
		:size="size"
		:type="type"
		@tabClick="tabClick"
	>
		<a-tab-pane
			v-for="({ title, component }, index) in tabsList"
			:key="index"
			:tab="title"
		>
			<component :is="component" />
		</a-tab-pane>
	</a-tabs>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, PropType } from "vue"

// Components
import ATabs from "ant-design-vue/lib/tabs"

// Types
import type { UiTabs } from "@/types"

const props = defineProps({
	value: String as PropType<string>,
	defaultKey: {
		type: String as PropType<string>,
		default: "1"
	},
	type: {
		type: String as PropType<UiTabs.Type>,
		default: "line"
	},
	size: {
		type: String as PropType<UiTabs.Size>,
		default: "default"
	},
	tabPosition: {
		type: String as PropType<UiTabs.Position>,
		default: "top"
	},
	tabsList: Array as PropType<UiTabs.Item[]>,
	destroyInactiveTabPane: {
		type: Boolean,
		default: false
	},
	animated: {
		type: Boolean,
		default: true
	}
})

const emit = defineEmits(["change:value", "tabClick"])

const model = computed({
	get(): string {
		return props.value || ""
	},
	set(val: string): void {
		emit("change:value", val)
	}
})

const tabClick = (val: string) => {
	emit("tabClick", val)
}
</script>

<style lang="stylus" scoped>
@import "~ant-design-vue/lib/tabs/style/index.css"
@import "../assets/styles/base/variables.styl"

.ui-tabs
	&::v-deep
		& .ant-tabs-nav
			&-list
				background-color $color-background-secondary
				border-radius 20px
				height 30px

			&::before
				border none

		&.ant-tabs-card
			& .ant-tabs-tab
				color $color-text
				background-color $color-background-secondary
				font-size 15px
				margin 0
				padding 11px $padding-big
				min-width 85px
				border none
				border-radius 20px

				&.ant-tabs-tab-active
					background-color $color-ui

				&:not(:first-child)
					margin-left 8px

			& .ant-tabs-nav-list
				background-color transparent

		& .ant-tabs
			&-bar
				margin 0 0 25px 0
				border-bottom none

			&-tab
				color $color-text
				font-size 15px
				margin 0
				padding 11px $padding-big
				min-width 85px

				&:hover
					color $color-text-secondary

				&:active
					color $color-text-secondary

				&-active
					font-size 15px
					color $color-text-secondary
					z-index 2

					& .ant-tabs-tab-btn
						color $color-text

				&-active:hover
					color $color-text-secondary

			&-ink-bar
				z-index 1
				height 30px
				border-radius 20px
				background-color $color-ui
</style>

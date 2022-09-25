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

<template>
	<component :is="listTag" class="ui-list" :class="`_${type}`">
		<li class="ui-list__item" v-for="(item, index) in data" :key="index">
			<ui-checkbox v-if="item?.text" :checked="item.value">
				{{ item.text }}
			</ui-checkbox>
			<template v-else>
				{{ item }}
			</template>
		</li>
	</component>
</template>

<script setup lang="ts">
import { computed, defineProps, PropType } from "vue"

// Components
import uiCheckbox from "./ui-checkbox.vue"

// Types
import type { UiList } from "@/types"

const props = defineProps({
	type: {
		type: String as PropType<UiList.Type>,
		default: "default"
	},
	data: {
		type: Array as PropType<UiList.Data>,
		default: () => []
	}
})

const listTag = computed(() => {
	return props.type === "number" ? "ol" : "ul"
})
</script>

-
<style lang="stylus" scoped>
@import "../assets/styles/base/variables.styl"

.ui-list
	&:not(._checkbox)
		padding-left 13px
		color $color-text

		&:not(._checkbox) &__item
			font-size 14px
			color $color-text

			&:not(:first-child)
				margin-top $padding-small

	&._checkbox
		list-style none
</style>

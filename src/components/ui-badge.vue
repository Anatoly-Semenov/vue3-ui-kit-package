<template>
	<a-badge
		class="ui-badge"
		:color="color"
		:count="count"
		:dot="dot"
		:offset="offset"
		:overflowCount="overflowCount"
		:showZero="showZero"
		:status="status"
		:text="text"
		:numberStyle="numberStyle"
		:title="title"
	>
		<div class="ui-badge__content">
			<slot />
			<slot name="count" />
		</div>
	</a-badge>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue"

// Components
import ABadge from "ant-design-vue/lib/badge"

// Types
import { UiBadge } from "@/types"

const props = defineProps({
	// Customize Badge dot color
	color: {
		type: String,
		default: "#FF8469"
	},
	// Number to show in badge
	count: [String, Number] as PropType<UiBadge.Count>,
	// Whether to display a red dot instead of count
	dot: Boolean,
	// Set offset of the badge dot, like [x, y]
	offset: Array as PropType<Array<string | number>>,
	// Max count to show
	overflowCount: Number,
	// Whether to show badge when count is zero
	showZero: Boolean,
	// Set Badge as a status dot
	status: String as PropType<UiBadge.Status>,
	// If status is set, text sets the display text of the status dot
	text: String,
	// Sets the display style of the status dot
	numberStyle: {
		type: Object,
		default: () => {
			return {
				marginTop: "1px",
				fontSize: "12px"
			}
		}
	},
	// Text to show when hovering over the badge
	title: String
})
</script>

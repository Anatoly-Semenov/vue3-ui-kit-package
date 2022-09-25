<template>
	<a-tooltip
		class="ui-tooltip"
		:overlayClassName="overlayClassName"
		:placement="placement"
		:title="title"
		:trigger="trigger"
	>
		<template #title>
			<slot name="title" />
		</template>
		<slot />
	</a-tooltip>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue"

// Components
import ATooltip from "ant-design-vue/lib/tooltip"

// Types
import { UiTooltip } from "@/types"

const props = defineProps({
	placement: {
		type: String as PropType<UiTooltip.Placement>,
		default: "top"
	},
	title: String,
	trigger: {
		type: String as PropType<UiTooltip.Trigger>,
		default: "hover"
	},
	overlayClassName: {
		type: String,
		default: "ui-tooltip__wrapper"
	}
})
</script>

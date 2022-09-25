<template>
	<hr
		class="ui-delimiter"
		:class="`_${type}`"
		role="separator"
		aria-orientation="horizontal"
	/>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue"

const props = defineProps({
	type: {
		type: String as PropType<"solid" | "dashed">,
		required: true,
		default: "solid"
	}
})
</script>

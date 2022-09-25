<template>
	<div class="ui-links">
		<button
			class="ui-links__item"
			v-for="({ text, link }, index) in data"
			:key="index"
			@click="$router.push(link)"
		>
			<div class="ui-links__info">
				<ui-icon name="user" />
				<p class="ui-links__text">
					{{ text }}
				</p>
			</div>
			<ui-icon name="chevron-right" />
		</button>
	</div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue"

// Components
import uiIcon from "./ui-icon.vue"

// Types
import { UiLinks } from "@/types"

const props = defineProps({
	data: {
		type: Array as PropType<UiLinks.Data>,
		default: () => []
	}
})
</script>

<template>
	<div class="ui-contacts">
		<div
			class="ui-contacts__item"
			v-for="({ contact, name }, index) in data"
			:key="index"
		>
			<ui-icon name="user" />
			<div class="ui-contacts__info">
				<p class="ui-contacts__contact">{{ contact }}</p>
				<p class="ui-contacts__name">{{ name }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue"

// Components
import uiIcon from "./ui-icon.vue"

// Types
import type { UiContacts } from "@/types"

const props = defineProps({
	data: {
		type: Array as PropType<UiContacts.Data>,
		default: () => []
	}
})
</script>

<template>
	<div :class="classname">
		<div class="ui-alert__icon">
			<icon-alert-circle v-if="type === 'warning' || type === 'info'" />
			<icon-circle-x v-if="type === 'error'" />
			<icon-circle-check v-if="type === 'success'" />
		</div>
		<div class="ui-alert__description">
			<div class="ui-alert__title" v-if="title">
				<ui-text type="subtitle">{{ title }}</ui-text>
			</div>
			<div class="ui-alert__description">
				<ui-text type="description">
					<slot />
				</ui-text>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineAsyncComponent } from "vue"

// Components
const UiText = defineAsyncComponent(() => import("./ui-text.vue"))
const IconAlertCircle = defineAsyncComponent(
	() => import("../assets/img/icons/icon-alert-circle.svg")
)
const IconCircleX = defineAsyncComponent(
	() => import("../assets/img/icons/icon-circle-x.svg")
)
const IconCircleCheck = defineAsyncComponent(
	() => import("../assets/img/icons/icon-circle-check.svg")
)

// Types
type Props = {
	type: "success" | "info" | "warning" | "error"
	title?: string
}

const props = defineProps<Props>()
const classname = computed(() => `ui-alert _${props.type}`)
</script>

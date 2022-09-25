<template>
	<a-checkbox
		class="ui-checkbox"
		:class="{ _loading: loading }"
		v-if="type === 'checkbox'"
		:autofocus="autofocus"
		:checked="checked"
		:disabled="disabled"
		:indeterminate="indeterminate"
		v-model:checked="model"
	>
		<slot />
	</a-checkbox>
	<a-switch
		class="ui-checkbox__switch"
		v-else
		:size="size"
		:checkedValue="checkedValue"
		:unCheckedValue="unCheckedValue"
		:autofocus="autofocus"
		:disabled="disabled"
		:loading="loading"
		v-model:checked="model"
	>
		<slot />
	</a-switch>
</template>

<script setup lang="ts">
import {
	defineEmits,
	defineAsyncComponent,
	computed,
	PropType,
	defineProps
} from "vue"

// Components
const ACheckbox = defineAsyncComponent(
	() =>
		import(/* webpackChunkName: "a-checkbox" */ "ant-design-vue/lib/checkbox")
)
const ASwitch = defineAsyncComponent(
	() => import(/* webpackChunkName: "a-switch" */ "ant-design-vue/lib/switch")
)

// Types
import { UiCheckbox } from "@/types"

const props = defineProps({
	// Type of checkbox
	type: {
		type: String as PropType<UiCheckbox.Type>,
		default: "checkbox"
	},
	// the size of the Switch, options: default small
	size: {
		type: String as PropType<UiCheckbox.Size>,
		default: "default"
	},
	// Value for checked state
	checkedValue: {
		type: [Boolean, String, Number] as PropType<UiCheckbox.CheckedValue>,
		default: false
	},
	// Value for unchecked state
	unCheckedValue: {
		type: [Boolean, String, Number] as PropType<UiCheckbox.UnCheckedValue>,
		default: false
	},
	// loading state of checkbox
	loading: {
		type: Boolean,
		default: false
	},
	// get focus when component mounted
	autofocus: {
		type: Boolean,
		default: false
	},
	// Specifies whether the checkbox is selected.
	checked: {
		type: Boolean,
		default: false
	},
	// Disable checkbox
	disabled: {
		type: Boolean,
		default: false
	},
	// Only type === "checkbox"
	// value of checkbox in CheckboxGroup
	value: {
		type: [Boolean, String, Number] as PropType<UiCheckbox.Value>,
		default: false
	},
	// indeterminate checked state of checkbox
	indeterminate: {
		type: Boolean,
		default: false
	}
})

const emit = defineEmits(["change:checked"])

const model = computed({
	get(): boolean {
		return props.checked
	},
	set(data: boolean): void {
		emit("change:checked", data)
	}
})
</script>

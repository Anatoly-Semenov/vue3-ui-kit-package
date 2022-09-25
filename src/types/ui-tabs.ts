import { Component } from "vue"

export namespace UiTabs {
	export type Type = "line" | "card" | "editable-card"

	export type Size = "large" | "default" | "small"

	export type Position = "top" | "right" | "bottom" | "left"

	export interface Item {
		title: string
		component: Component
	}
}

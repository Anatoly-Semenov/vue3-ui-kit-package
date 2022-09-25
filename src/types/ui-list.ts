export namespace UiList {
	export type Type = "default" | "number" | "checkbox"

	export type Data = string[] | CheckboxData[]

	export interface CheckboxData {
		text: string
		value: boolean
	}
}

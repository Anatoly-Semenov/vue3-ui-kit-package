export namespace UiStory {
	export interface Item {
		username: string
		picture: string
		time: string
		images: Image[]
	}

	export interface Image {
		url: string
		viewed: boolean
		type?: "video" | "photo"
	}
}

import { message } from "ant-design-vue"

export default function useCopy() {
	const textMessage = {
		title: "Copy link",
		copied: "link is copied",
		already: "Link has already been copied",
		permission: "The browser does not have permission to write the clipboard"
	}

	const copyLink = (route: string, id: string) => {
		const link: string = id
			? `${window.location.origin}/${route}/${id}/`
			: `${window.location.origin}/${route}/`

		navigator.clipboard
			.readText()
			.then(text => {
				if (text !== link) {
					navigator.clipboard
						.writeText(link)
						.then(() => {
							message.success(textMessage.copied)
						})
						.catch(() => {
							message.error(textMessage.permission)
						})
				} else {
					message.warning(textMessage.already)
				}
			})
			.catch(() => {
				message.error(textMessage.permission)
			})
	}

	return { copyLink }
}

<template>
	<div class="ui-stories">
		<div @click="closeStories" class="ui-stories__close"></div>
		<div class="ui-stories__container">
			<div
				v-for="(story, index) in storiesList"
				:key="index"
				class="ui-stories__item"
				:style="storyStyle(index)"
				@click="index !== indexSelected ? selectSlide(index) : ''"
				v-click-away="closeStories"
			>
				<div
					class="ui-stories__item__source"
					@click="isPaused ? playStory($event) : pauseStory($event)"
				>
					<video
						:id="getSrc(story, index).url"
						v-if="getSrc(story, index).type === 'video'"
						:src="getSrc(story, index).url"
						autoplay
					></video>
					<img v-else :src="getSrc(story, index).url" alt="" />
					<div class="ui-stories__item__header" v-if="index === indexSelected">
						<div class="ui-stories__time">
							<div
								class="ui-stories__time-item"
								v-for="(elm, index) in story.images.length"
								:key="index"
							>
								<div
									class="ui-stories__time-fill"
									:style="storyTimeStyle(index)"
								></div>
							</div>
						</div>
						<div class="ui-stories__item__top">
							<div class="ui-stories__user">
								<div class="ui-stories__user__image">
									<img :src="story.picture" alt="" />
								</div>
								<div class="ui-stories__user__name">
									{{ story.username }}
								</div>
							</div>
							<div class="ui-stories__item__time">{{ story.time }}</div>
						</div>
					</div>
					<div class="ui-stories__item__body">
						<div class="ui-stories__user" v-if="index !== indexSelected">
							<div
								class="ui-stories__user__image"
								:style="
									getNotViewedIndex(story) === -1 ? `background: #FFFFFF` : ''
								"
							>
								<img :src="story.picture" alt="" />
							</div>
							<div class="ui-stories__user__name">
								{{ story.username }}
							</div>
						</div>
						<slot
							v-if="showInnerContent && index === indexSelected"
							name="innerContent"
							:story="story"
						></slot>
					</div>
				</div>
				<div
					v-if="index === indexSelected"
					class="ui-stories__item__icon story__icon--prev"
					@click="prev(index)"
				></div>
				<div
					v-if="index === indexSelected"
					class="ui-stories__item__icon story__icon--next"
					@click="next(index)"
				></div>
				<slot
					v-if="showOuterContent && index === indexSelected"
					name="outerContent"
					:story="story"
				></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import type { PropType } from "vue"
import type { UiStory } from "@/types/ui-stories"

export default {
	name: "ui-stories",
	props: {
		stories: {
			type: Array as PropType<UiStory.Item[]>,
			required: true
		},
		duration: {
			type: Number,
			default: 3000
		},
		currentIndex: {
			type: Number,
			default: 0
		},
		showInnerContent: {
			type: Boolean,
			default: false
		},
		showOuterContent: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			indexSelected: 0,
			difference: 0,
			key: 0,
			percent: 0,
			timer: 0,
			progress: 0,
			interval: 0,
			isPaused: false,
			newDur: 0,
			pausePer: 0,
			storiesList: []
		}
	},
	created() {
		this.storiesList = this.stories
		document.addEventListener("keydown", this.keyDownEsc)
	},
	beforeUnmount() {
		document.removeEventListener("keydown", this.keyDownEsc)
	},
	mounted() {
		this.play()
		this.selectSlide(this.currentIndex)
	},
	computed: {
		isAllStoriesEnd(): any {
			return (
				this.indexSelected >= this.storiesList.length - 1 &&
				this.isCurrentAllImagesEnd
			)
		},
		isCurrentAllImagesEnd(): any {
			return this.key >= this.storiesList[this.indexSelected].images.length - 1
		}
	},
	methods: {
		storyStyle(index: number): string {
			if (index === this.indexSelected) {
				return `transform: translate(0px)`
			}

			return `transform: translate(${this.calculateTransform(
				index
			)}px) scale(0.3)cursor:pointer`
		},
		storyTimeStyle(index: number): string {
			if (index === this.key ? `width: ${this.percent}%` : this.key > index) {
				return "width:100%"
			}

			return "width:0%"
		},
		keyDownEsc({ code }: { code: string }) {
			if (code === "Escape") {
				this.closeStories()
			}
		},
		getSrc(story: any, index: number): any {
			const viewedIndex = this.getLastViewedIndex(story)

			if (index === this.indexSelected) {
				return {
					url: story.images[this.key].url,
					type: story.images[this.key].type
				}
			}

			return {
				url: story.images[viewedIndex].url,
				type: story.images[viewedIndex].type
			}
		},
		getNotViewedIndex(story: any) {
			return story.images.findIndex((item) => !item.viewed)
		},
		getLastViewedIndex(story: any) {
			const keyIndex = this.getNotViewedIndex(story)
			const index = story.images.length - 1
			return keyIndex === -1 ? index : keyIndex
		},
		selectSlide(index: number) {
			this.isPaused = false
			this.difference += this.indexSelected - index
			this.stopVideo(this.storiesList[this.indexSelected].images[this.key].url)
			this.indexSelected = index
			this.key = this.getLastViewedIndex(this.storiesList[this.indexSelected])
			this.reset()
		},
		onAllStoriesEnd() {
			this.difference = 0
			this.indexSelected = 0
			this.key = 0
			this.$emit("allStoriesEnd")
		},
		onCurrentAllImagesEnd(index: number) {
			this.difference += index - (index + 1)
			this.stopVideo(this.storiesList[this.indexSelected].images[this.key].url)
			this.storiesList[index].images[this.key].viewed = true
			this.indexSelected++
			this.key = this.getLastViewedIndex(this.storiesList[this.indexSelected])
			this.$emit("сurrentAllImagesEnd", index)
		},
		onCurrentImageEnd(index: number) {
			this.storiesList[index].images[this.key].viewed = true
			this.$emit("сurrentImageEnd", this.key)
			this.key++
		},
		next(index: number) {
			this.isPaused = false
			if (this.isAllStoriesEnd) {
				this.onAllStoriesEnd()
			} else if (this.isCurrentAllImagesEnd) {
				setTimeout(() => {
					this.onCurrentAllImagesEnd(index)
				})
			} else {
				this.storiesList[this.indexSelected].images[this.key].viewed = true
				this.key++
			}
			this.reset()
		},
		prev(index: number) {
			this.isPaused = false
			if (this.indexSelected <= 0 && this.key <= 0) {
				this.key = 0
			} else if (this.key <= 0) {
				// Without delay
				setTimeout(() => {
					this.difference += index - (index - 1)
					this.indexSelected--
					this.key = this.getLastViewedIndex(
						this.storiesList[this.indexSelected]
					)
				})
			} else {
				this.key--
				this.storiesList[this.indexSelected].images[this.key].viewed = false
			}
			this.reset()
		},
		autoPlay() {
			if (this.isAllStoriesEnd) {
				this.onAllStoriesEnd()
			} else if (this.isCurrentAllImagesEnd) {
				this.onCurrentAllImagesEnd(this.indexSelected)
			} else {
				this.onCurrentImageEnd(this.indexSelected)
			}
			this.reset()
		},
		play() {
			this.timer = new Date().getTime()
			this.progress = setInterval(() => {
				// forward
				const time = new Date().getTime()
				if (this.newDur > 0) {
					this.percent =
						this.pausePer +
						Math.floor((100 * (time - this.timer)) / this.duration)
				} else {
					this.percent = Math.floor((100 * (time - this.timer)) / this.duration)
				}
			}, this.duration / 100)
			if (this.newDur > 0) {
				this.interval = setInterval(this.autoPlay, this.newDur)
			} else {
				this.interval = setInterval(this.autoPlay, this.duration)
			}
		},
		reset() {
			this.percent = 0
			clearInterval(this.interval)
			clearInterval(this.progress)
			this.newDur = 0
			this.play()
		},
		pauseStory(event: any) {
			if (event) {
				this.toggleVideo("pause", event)
			}
			this.isPaused = true
			this.pausePer = this.percent
			clearInterval(this.progress)
			clearInterval(this.interval)
			this.newDur = this.duration - (this.pausePer * this.duration) / 100
		},
		playStory(event) {
			if (event) {
				this.toggleVideo("play", event)
			}
			this.isPaused = false
			this.play()
		},
		toggleVideo(type, event) {
			const video = document.getElementById(event.target.id)
			if (video) {
				video[type]()
			}
		},
		stopVideo(id) {
			const video = document.getElementById(id)
			if (video) {
				video.pause()
				video.currentTime = 0
			}
		},
		calculateTransform(index: number) {
			if (
				this.indexSelected - index === -1 ||
				this.indexSelected - index === 1
			) {
				return 315 * (index + this.difference)
			}
			if (index > this.indexSelected) {
				return (315 + 315 * (index + this.difference)) * 0.5
			} else {
				return Math.abs((315 - 315 * (index + this.difference)) * 0.5) * -1
			}
		},
		closeStories() {
			this.$emit("closeStories")
		}
	}
}
</script>

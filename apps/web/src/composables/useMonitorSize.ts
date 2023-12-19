import { onMounted, onUnmounted, reactive, toRefs } from 'vue'

export default function useMonitorSize() {
	const MOBILE_WIDTH = 600
	const sizes = reactive({
		browserWidth: window.innerWidth,
		deviceWidth: screen.width,
		isMobile: false,
	})

	const browserResized = () => {
		sizes.browserWidth = window.innerWidth
		sizes.deviceWidth = screen.width
		sizes.isMobile = isMobile()
	}

	const isMobile = () => {
		return window.innerWidth <= MOBILE_WIDTH ? true : false
	}

	onMounted(() => {
		window.addEventListener('resize', browserResized)
	})

	onUnmounted(() => {
		window.removeEventListener('resize', browserResized)
	})

	return { ...toRefs(sizes) }
}

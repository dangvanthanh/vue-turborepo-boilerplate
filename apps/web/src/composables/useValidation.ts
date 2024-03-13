import { get, groupBy } from 'lodash-es'
import { type MaybeRefOrGetter, ref, toValue, watch } from 'vue'
import type { ZodTypeAny, z } from 'zod'

export default function useValidation<T extends ZodTypeAny>(
	schema: T,
	data: MaybeRefOrGetter<Record<string, unknown>>,
	options?: { mode: 'eager' | 'lazy' },
) {
	const opts = Object.assign({}, { mode: 'lazy' }, options)
	const isValid = ref(true)
	const errors = ref<Record<string, z.ZodIssue[]> | null>(null)

	const clearErrors = () => {
		errors.value = null
	}

	let unwatch: null | (() => void) = null
	const validationWatch = () => {
		if (unwatch !== null) {
			return
		}

		unwatch = watch(
			() => toValue(data),
			async () => {
				await validate()
			},
			{ deep: true },
		)
	}

	const validate = async () => {
		clearErrors()

		const result = await schema.safeParseAsync(toValue(data))

		isValid.value = result.success

		if (!result.success) {
			errors.value = groupBy(result.error.issues, 'path')
			validationWatch()
		}

		return errors
	}

	const scrollToError = (selector = '.is-error', options = { offset: 0 }) => {
		const element = document.querySelector(selector)

		if (element) {
			const topOffset =
				element.getBoundingClientRect().top -
				document.body.getBoundingClientRect().top -
				options.offset

			window.scrollTo({
				behavior: 'smooth',
				top: topOffset,
			})
		}
	}

	const getError = (path: string) =>
		get(errors.value, `${path.replace(/\./g, ',')}.0.message`)

	if (opts.mode === 'eager') {
		validationWatch()
	}

	return { validate, errors, isValid, clearErrors, getError, scrollToError }
}

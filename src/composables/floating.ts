/* eslint-disable vue/one-component-per-file */
import type { Component, StyleValue } from 'vue'
import { h } from 'vue'

export function createFloating<T extends Component>(component: T) {
  const metadata = reactive<any>({
    props: {},
    attrs: {},
  })

  const proxyEl = ref<HTMLElement | null>()

  const container = defineComponent({
    setup() {
      let rect = $ref<DOMRect | undefined>()

      function update() {
        rect = proxyEl.value?.getBoundingClientRect()
      }

      useMutationObserver(proxyEl, update, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      })

      useEventListener('resize', update)
      watchEffect(update)

      const style = computed((): StyleValue => {
        return {
          transition: 'all 1s ease-in-out',
          position: 'fixed',
          left: `${rect?.left ?? 0}px`,
          top: `${rect?.top ?? 0}px`,
        }
      })

      return () => h('div', { style: style.value }, [
        h(component, metadata.attrs),
      ])
    },
  })
  const proxy = defineComponent({
    setup(props, ctx) {
      const attrs = useAttrs()
      metadata.attrs = attrs

      const el = ref<HTMLElement>()

      onMounted(() => {
        proxyEl.value = el.value
      })

      return () => h('div', { ref: el }, [
        ctx.slots.default
          ? h(ctx.slots.default)
          : null,
      ])
    },
  })

  return {
    metadata,
    proxyEl,
    container,
    proxy,
  }
}

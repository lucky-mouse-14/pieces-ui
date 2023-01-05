import { defineComponent, PropType } from 'vue'
import 'uno.css'

export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
export type ISize = 'mini' | 'small' | 'medium' | 'large'
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: 'blue' // 设定默认颜色
  },
  size: {
    type: String as PropType<ISize>,
    default: 'medium'
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: ''
  }
}
export default defineComponent({
  name: 'PiButton',
  props, // 注册属性
  setup(props, {slots}) {
    const size = {
      mini: {
        x: "2",
        y: "0.5",
        text: "xs",
      },
      small: {
        x: "3",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "4",
        y: "1.5",
        text: "base",
      },
      large: {
        x: "5",
        y: "2",
        text: "lg",
      },
    }

    return () => <button
      class={`
        box-border
        border
        cursor-pointer
        border-solid
        m-1
        hover:text-white
        transition duration-300 ease-in-out transform hover:scale-105
        py-${size[props.size].y}
        px-${size[props.size].x}
        hover:bg-${props.color}-400
        ${props.round ? 'rounded-full' : 'rounded-lg'}
        text-${props.plain ? props.color + '-500' : 'white'}
        bg-${props.color}-${props.plain ? '100' : '500'}
        border-${props.color}-${props.plain ? '500' : '500'}
        size-${size[props.size].text}
      `}
    >
      { props.icon !== '' ? <i class={`i-ic-baseline-${props.icon} p-2`}></i> : '' }
      { slots.default ? slots.default() : '' }
    </button>
  }
})
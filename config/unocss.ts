import { presetUno, presetAttributify, presetIcons } from 'unocss'
import Unocss from 'unocss/vite'

const colors = [
  'white',
  'black',
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink',
]

const sizes = [
  'xs',
  'sm',
  'base',
  'lg',
  'xl',
  '2xl',
  '3xl'
]

const iconsIC = [
  'search',
  'edit',
  'check',
  'message',
  'star-off',
  'delete',
  'add',
  'share',
]

const safelist = [
  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `bg-${v}-400`),
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-100`),
  ...colors.map((v) => `hover:bg-${v}-300`),
  ...colors.map((v) => `hover:bg-${v}-400`),
  ...colors.map((v) => `hover:bg-${v}-500`),
  ...colors.map((v) => `border-${v}-400`),
  ...colors.map((v) => `border-${v}-500`),
  ...colors.map((v) => `text-${v}-500`),
  ...sizes.map((v) => `hover:text-${v}-500`),
  'text-white',
  ...Array.from({ length: 16 }, (_, i) => `px-${i / 2}`),
  ...Array.from({ length: 16 }, (_, i) => `py-${i / 2}`),
  ...['rounded-full', 'rounded-lg'],
  ...iconsIC.map((v) => `i-ic-baseline-${v}`)
]

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  })
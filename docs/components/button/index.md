# Button 按钮
常用的操作按钮

## 基础用法

基础的函数用法

:::demo 使用 `size`、`color`、`plain`、`round` 属性来定义 Button 的样式

```vue
<template>
  <div style="margin-bottom:10px;">
    <PiButton color="blue">我是按钮</PiButton>
    <PiButton color="green">我是按钮</PiButton>
    <PiButton color="gray">我是按钮</PiButton>
    <PiButton color="yellow">我是按钮</PiButton>
    <PiButton color="red">我是按钮</PiButton>
  </div>
  <div style="margin-bottom:10px;">
    <PiButton color="blue" plain>我是按钮</PiButton>
    <PiButton color="green" plain>我是按钮</PiButton>
    <PiButton color="gray" plain>我是按钮</PiButton>
    <PiButton color="yellow" plain>我是按钮</PiButton>
    <PiButton color="red" plain>我是按钮</PiButton>
  </div>
  <div style="margin-bottom:10px;">
    <PiButton color="blue" plain size="mini">迷你按钮</PiButton>
    <PiButton color="blue" plain size="small">小按钮</PiButton>
    <PiButton color="blue" plain size="medium">中按钮</PiButton>
    <PiButton color="blue" plain size="large">大按钮</PiButton>
  </div>
  <div style="margin-bottom:10px;">
    <PiButton color="blue" plain round>我是按钮</PiButton>
    <PiButton color="green" plain round>我是按钮</PiButton>
    <PiButton color="gray" plain round>我是按钮</PiButton>
    <PiButton color="yellow" plain round>我是按钮</PiButton>
    <PiButton color="red" plain round>我是按钮</PiButton>
  </div>
  <div style="margin-bottom:10px;">
    <PiButton color="blue" plain round icon="search"></PiButton>
    <PiButton color="green" plain round icon="edit"></PiButton>
    <PiButton color="gray" plain round icon="check"></PiButton>
    <PiButton color="yellow" plain round icon="message"></PiButton>
    <PiButton color="red" plain round icon="delete"></PiButton>
  </div>
</template>
```
:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置再文字右边的 icon，只要使用 i 标签即可，可以使用自定义图标。

```vue
<template>
  <div class="flex flex-row">
    <PiButton color="blue" icon="search">搜索</PiButton>
    <PiButton color="green" plain icon="edit">编辑</PiButton>
    <PiButton color="red" round icon="delete"></PiButton>
    <PiButton color="yellow" plain round icon="message"></PiButton>
    <PiButton color="blue">分享 <i class="i-ic-baseline-share p-2"></i></PiButton>
  </div>
</template>
```
:::


<template>
  <div>
    <SFCButton>SFCButton</SFCButton>
    <JSXButton>JSXButton</JSXButton>
    <div>
      <PiButton color="blue">我是按钮</PiButton>
      <PiButton color="green">我是按钮</PiButton>
      <PiButton color="gray">我是按钮</PiButton>
      <PiButton color="yellow">我是按钮</PiButton>
      <PiButton color="red">我是按钮</PiButton>
    </div>
    <div>
      <PiButton color="blue" plain>我是按钮</PiButton>
      <PiButton color="green" plain>我是按钮</PiButton>
      <PiButton color="gray" plain>我是按钮</PiButton>
      <PiButton color="yellow" plain>我是按钮</PiButton>
      <PiButton color="red" plain>我是按钮</PiButton>
    </div>
    <div>
      <PiButton color="blue" plain size="mini">迷你按钮</PiButton>
      <PiButton color="blue" plain size="small">小按钮</PiButton>
      <PiButton color="blue" plain size="medium">中按钮</PiButton>
      <PiButton color="blue" plain size="large">大按钮</PiButton>
    </div>
    <div>
      <PiButton color="blue" plain round>我是按钮</PiButton>
      <PiButton color="green" plain round>我是按钮</PiButton>
      <PiButton color="gray" plain round>我是按钮</PiButton>
      <PiButton color="yellow" plain round>我是按钮</PiButton>
      <PiButton color="red" plain round>我是按钮</PiButton>
    </div>
    <div>
      <PiButton color="blue" plain round icon="search"></PiButton>
      <PiButton color="green" plain round icon="edit"></PiButton>
      <PiButton color="gray" plain round icon="check"></PiButton>
      <PiButton color="yellow" plain round icon="message"></PiButton>
      <PiButton color="red" plain round icon="delete"></PiButton>
    </div>
  </div>
</template>
<script lang="ts" setup>
import PiButton from "./button/index";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
</script>

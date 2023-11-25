<script setup lang="ts">
const props = defineProps<{
  size: string,
  readonly?: boolean,
}>();

const upload = () => {
  if (props.readonly) return
  // TODO 打开上传页面
}


</script>

<template>
  <div>
    <div class="main" @click="upload" :style="{width: props.size, height: props.size}">123</div>
  </div>
</template>

<style scoped lang="scss">
.main {
  border: 1px dashed rgba(180, 179, 179, 0.6);
  border-radius: 5px;
}
</style>
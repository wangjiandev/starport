<script setup lang="ts">
let size = $(useStorage('size', 100))

const increment = () => {
  size += 20
}
const reset = () => {
  size = 100
}
</script>

<template>
  <div flex flex-col justify-center items-center>
    <div>
      <router-link to="/" class="btn m-3 text-sm">
        back
      </router-link>
      <button btn mr-2 @click="increment">
        Increment
      </button>
      <button btn @click="reset">
        reset
      </button>
    </div>
    <div flex sm:flex-row flex-col justify-start items-center gap-2>
      <div flex-1>
        @pointbiz @mat-h7 Thanks for pushing on this. I believe the proper fix is included in ed4c974, which includes an update of the utility library used for S3 operations (make sure you do an npm install or npm up). If you update to the latest code, please let me know if you have any more problems here.
      </div>
      <FloatProxy :style="{ width: `${size}px`, height: `${size}px` }" rounded-full />
    </div>
  </div>
</template>

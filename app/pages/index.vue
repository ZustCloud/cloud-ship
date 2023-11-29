<script setup lang="ts">
import Welcome from '../components/welcome.vue';
import Register from '../components/register.vue';
import RegisterPro from '../components/registerpro.vue';
</script>

<template>
	<swiper class="swiper" style="width: 100%;height: 100vh;" indicator-dots="true">
		<swiper-item>
			<uni-card><Welcome></Welcome></uni-card>
		</swiper-item>
		<swiper-item>
			<uni-card><Register></Register></uni-card>
		</swiper-item>
		<swiper-item>
			<uni-card><RegisterPro></RegisterPro></uni-card>
		</swiper-item>
	</swiper>
</template>

<style></style>

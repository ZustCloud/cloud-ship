<script setup lang="ts">
import {useauthStore} from '../store/auth'

const authStore = useauthStore();
</script>

<template>
	<view>
		{{ authStore.id }}
	</view>
</template>

<style>

</style>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goNews() {
  router.push("/register");
}
</script>

<template>
	<button @click="goNews">跳转新闻</button>
</template>

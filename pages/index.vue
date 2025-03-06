<template>
    <a href="drunkdeerUpgradev1.2_20240802 (1).zip" download>drunkdeerUpgradev1.2_20240802 (1).zipをダウンロードする</a><br>
  <a href="drunkdeerUpgradev1.2_20240929 (1).zip" download>drunkdeerUpgradev1.2_20240929 (1).zipをダウンロードする</a><br>
  a
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>

<script setup>
const { data: users } = await useFetch('/api/users');
</script>
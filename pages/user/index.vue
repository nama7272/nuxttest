<template>
  <q-markup-table class="q-ma-lg">
    <thead>
    <tr>
      <th class="text-left">ID</th>
      <th class="text-right">Name</th>
      <th class="text-right">EmailAddress</th>
      <th class="text-right">編集ボタン</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="post in user" :key="user.id">
      <td class="text-left">{{post.id}}</td>
      <td class="text-right">{{post.name}}</td>
      <td class="text-right">{{post.email}}</td>
      <td class="text-right">
        <q-btn :to="`/user/${post.id}/`">編集</q-btn>
      </td>
    </tr>
    </tbody>
  </q-markup-table>

  <form @submit.prevent="createPost">
    <q-card class="q-ma-lg">
      <q-card-section>
        <div class="text-h6">ユーザー登録</div>
        <div>
          <q-input outlined id="name" v-model="post.name" label="name" />
        </div>
        <div class="q-mt-md">
          <q-input outlined id="email" v-model="post.email" label="email" />
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions vertical>
        <q-btn flat type="submit" color="primary" label="登録" />
      </q-card-actions>
    </q-card>
  </form>


</template>

<script setup lang="ts">
const { data: user } = await useFetch("/api/user");
console.log(user.value)

const router = useRouter();
const post = ref({ name: "", email: "" });
async function createPost() {
  await $fetch("/api/user/", {
    method: "POST",
    body: post.value,
  });
  router.push("/user/");
}

</script>
<template>

  <div class="row">
    <div class="row">
      <q-input rounded outlined v-model="searchId" label="ID" />
      <q-input rounded outlined v-model="searchName" label="NAME" />
      <q-input rounded outlined v-model="searchEmail" label="EMAIL" />
      <q-btn @click="search" color="primary">検索</q-btn>
    </div>
  </div>

  <q-markup-table class="q-ma-lg">
    <thead>
    <tr>
      <th class="text-left">ID</th>
      <th class="text-right">Name</th>
      <th class="text-right">EmailAddress</th>
      <th class="text-right">編集</th>
      <th class="text-right">削除</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="post in user" :key="user.id">
      <td class="text-left">{{post.id}}</td>
      <td class="text-right">{{post.name}}</td>
      <td class="text-right">{{post.email}}</td>
      <td class="text-right">
        <q-btn :to="`/user/${post.id}/`" color="green">編集</q-btn>
      </td>
      <td class="text-right">
        <q-btn @click="deletePost(post.id)" color="red">削除</q-btn>
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
        <div v-if="postError">{{postError.message}}</div>
      </q-card-section>
      <q-separator />
      <q-card-actions vertical>
        <q-btn flat type="submit" color="primary" label="登録" />
      </q-card-actions>
    </q-card>
  </form>


</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const { data: user } = await useFetch("/api/user");

const post = ref({ name: "", email: "" });

const postError = ref()

const createPost = async () => {
  const createPostResponse = await $fetch("/api/user/", {
    method: "POST",
    body: post.value,
  });
  const response = await $fetch("/api/user");
  user.value = response;
  post.value = { name: "", email: "" };
  postError.value = createPostResponse
}

const deletePost = async (userId) => {
  await $fetch(`/api/user/${userId}`, {
    method: "DELETE",
  });
  const response = await $fetch("/api/user");
  user.value = response;
}

const searchId = ref()
const searchName = ref()
const searchEmail = ref()

const search = async () => {
  const response = await $fetch(`/api/user/search`, {
    query: {
      id: searchId.value,
      name: searchName.value,
      email: searchEmail.value,
    }
  });
  user.value = response;
}

</script>
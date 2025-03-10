<template>
  <form @submit.prevent="updatePost">
    <q-card class="q-ma-lg">
      <q-card-section>
        <div class="text-h6">ユーザー編集</div>
        {{user.id}}
        <div>
          <q-input outlined id="name" v-model="post.name" label="name" />
        </div>
        <div class="q-mt-md">
          <q-input outlined id="email" v-model="post.email" label="email" />
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions vertical>
        <q-btn flat type="submit" color="primary" label="更新" />
      </q-card-actions>
    </q-card>
  </form>



  <q-btn label="削除" @click="deletePost" />
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const { data: user } = await useFetch(`/api/user/${route.params.id}`);


const post = ref({ name: user.value.name, email: user.value.email });

async function updatePost() {
  await $fetch(`/api/user/${route.params.id}`, {
    method: "PUT",
    body: post.value,
  });
  router.push(`/user/${route.params.id}`);
}

async function deletePost() {
  await $fetch(`/api/user/${route.params.id}`, {
    method: "DELETE",
  });
  router.push("/user/");
}


</script>
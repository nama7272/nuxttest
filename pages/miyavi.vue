<template>
  <div style="background: black;">
    <div style="position: sticky;top:0;z-index: 1;">
      <div class="q-px-md">
        <div class="row q-gutter-md items-center justify-between">
          <div>
            <div style="background: white;">
              <img width="120px" height="30px" style="vertical-align: bottom;" src="https://japan.miyavi.com/static/fcopen/contents/logo_image/596/44a399764060c602e0a8a3c34697cf6c.png" />
            </div>
          </div>
          <div class="row">
            <q-btn flat style="color:white" label="Fuchsia Flat" />
            <q-btn flat style="color: white" label="Fuchsia Flat" />
            <q-btn flat style="color: white" label="Fuchsia Flat" />
            <q-btn flat style="color: white" label="Fuchsia Flat" />
            <q-btn flat style="color: white" label="Fuchsia Flat" />
          </div>
        </div>
      </div>
    </div>
      <div class="row justify-between">
        <q-parallax :height="800">
          <template v-slot:media>
            <img src="https://ogre.natalie.mu/media/news/music/2024/0809/MIYAVI_art202408.jpg?imwidth=750&imdensity=1">
          </template>
          <template v-slot:content="scope">
            <div
                class="absolute column items-center"
                :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
            >
<!--              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" style="width: 150px; height: 150px">-->
              <div class="text-h1 text-white text-center">MIYAVI</div>
              <div class="text-h6 text-grey-3 text-center">
                NOW ON SALE
              </div>
            </div>


          </template>


        </q-parallax>
      </div>
    <div class="q-pa-md row items-start q-gutter-md justify-center">
      <q-icon size="38px" class="text-white" :name="ionLogoYoutube"></q-icon>
      <q-icon size="38px" class="text-white" :name="ionLogoDiscord"></q-icon>
      <q-icon size="38px" class="text-white" :name="ionLogoX"></q-icon>
      <q-icon size="38px" class="text-white" :name="ionLogoInstagram"></q-icon>
      <q-icon size="38px" class="text-white" :name="ionLogoX"></q-icon>
      <q-icon size="38px" class="text-white" :name="ionLogoX"></q-icon>
    </div>
    <div class="q-ma-md">
      <div class="q-pa-md row items-start q-gutter-md justify-center">
        <q-card style="width: 300px;max-width: 300px;background: black" dark class="my-card">
          <q-img style="max-width: 300px; height: 150px;" fit="cover" src="https://japan.miyavi.com/static/fcopen/fanplakit/artist/miyavi_A7w9XvkS/img/logo--fcA7w9.png" />
          <q-card-section>
            <div class="text-subtitle2">FAN CLUB　→</div>
          </q-card-section>
        </q-card>
        <q-card style="width: 300px;max-width: 300px;background: black" dark class="my-card">
          <q-img style="max-width: 300px; height: 150px;" fit="cover" src="https://d1rjcmiyngzjnh.cloudfront.net/prod/public/fcopen/contents/banner/d833c631f284b281bc432c89bf8a78e0.jpeg" />
          <q-card-section>
            <div class="text-subtitle2">ONLINE STORE　→</div>
          </q-card-section>
        </q-card>
        <q-card style="width: 300px;max-width: 300px;background: black" dark class="my-card">
          <q-img style="max-width: 300px; height: 150px;" fit="cover" src="https://miyavisake.jp/img/index_gallery02.jpg" />
          <q-card-section>
            <div class="text-subtitle2">MIYAVI SAKE　→</div>
          </q-card-section>
        </q-card>
        <q-card style="width: 300px;max-width: 300px;background: black" dark class="my-card">
          <q-img style="max-width: 300px; height: 150px;" fit="cover" src="https://d1rjcmiyngzjnh.cloudfront.net/prod/public/fcopen/contents/banner/414d07d971a789102ab09e4c4fa336f6.jpeg" />
          <q-card-section>
            <div class="text-subtitle2">bubble　→</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="q-py-xl">
      <div class="text-white text-h2 text-center q-mb-lg">MOVIE</div>
      <q-parallax :height="600">
        <template v-slot:media>
          <video width="100%"  poster="https://cdn.quasar.dev/img/polina.jpg" autoplay loop muted>
            <source type="video/mp4" :src="generateImgPath('video')">
          </video>
        </template>
      </q-parallax>
        <div class="q-pa-md row items-start q-gutter-md justify-center">
          <q-card style="width: 300px;max-width: 300px;background: black" dark class="my-card" v-for="item in 8">
            <q-img style="max-width: 300px; height: 150px;" fit="cover" src="https://d1rjcmiyngzjnh.cloudfront.net/prod/movie/thumbnail/1000000/596/44e6aa80cfeef7bc67620654aaf1a459104913ce82d9c01756447657f95e917e_t.jpeg" />
            <q-card-section>
              <div class="text-subtitle2 text-grey-7">2022/1/2</div>
              <div class="text-subtitle2">FC限定生配信#13</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    <div class="q-py-xl">
      <div class="text-white text-h2 text-center q-mb-lg">NEWS</div>
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label class="text-grey-7" caption>2022/12/12</q-item-label>
            <q-item-label class="text-white">第13回 MIYAVI FC限定 生配信のお知らせ</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator spaced inset dark />
        <q-item>
          <q-item-section>
            <q-item-label class="text-grey-7" caption>2022/12/12</q-item-label>
            <q-item-label class="text-white">第13回 MIYAVI FC限定 生配信プレゼント企画のお知らせ</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator spaced inset dark />
        <q-item>
          <q-item-section>
            <q-item-label class="text-grey-7" caption>2022/12/12</q-item-label>
            <q-item-label class="text-white">7/25(金)開催「FUJI ROCK FESTIVAL '25」に出演決定！</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator spaced inset dark />
        <q-item>
          <q-item-section>
            <q-item-label class="text-grey-7" caption>2022/12/12</q-item-label>
            <q-item-label class="text-white">MIYAVI×デジリアトレカ 第1弾リリース！</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="q-py-xl">
      <div class="text-white text-h2 text-center q-mb-lg">BLOG</div>
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label class="text-grey-7" caption>2022/12/12</q-item-label>
            <q-item-label class="text-white">第13回 MIYAVI FC限定 生配信のお知らせ</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator spaced inset dark />
        <q-item>
          <q-item-section>
            <q-item-label class="text-grey-7" caption>2022/12/12</q-item-label>
            <q-item-label class="text-white">第13回 MIYAVI FC限定 生配信プレゼント企画のお知らせ</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator spaced inset dark />
        <q-item>
          <q-item-section>
            <q-item-label class="text-grey-7" caption>2022/12/12</q-item-label>
            <q-item-label class="text-white">7/25(金)開催「FUJI ROCK FESTIVAL '25」に出演決定！</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator spaced inset dark />
        <q-item>
          <q-item-section>
            <q-item-label class="text-grey-7" caption>2022/12/12</q-item-label>
            <q-item-label class="text-white">MIYAVI×デジリアトレカ 第1弾リリース！</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script setup lang="ts">
const generateImgPath = (fileName: string): string => {
  return new URL(`../assets/movie/${fileName}.mp4`, import.meta.url).href
}

import { ionLogoYoutube,ionLogoDiscord,ionLogoX,ionLogoInstagram,ionLogoTiktok } from '@quasar/extras/ionicons-v7';

</script>
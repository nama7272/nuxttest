<template>
  <div style="background: white;">
    <div style="position: sticky;top:0;z-index: 1;">
      <div class="q-px-md">
        <div class="row q-gutter-md items-center justify-between">
          <div>
            <div style="background: white;">
              SAWA<br>brothers
            </div>
          </div>
          <div class="row">
            <q-btn flatlabel="Fuchsia Flat" />
            <q-btn flat label="Fuchsia Flat" />
            <q-btn flat label="Fuchsia Flat" />
            <q-btn flat label="Fuchsia Flat" />
            <q-btn flat label="Fuchsia Flat" />
          </div>
        </div>
      </div>
    </div>
      <div class="row">
        <div class="text-h1">SAWA<br>BROTHERS</div>
        <div>
          <q-avatar size="300px">
            <img src="https://nuxtship.netlify.app/_nuxt/hero.FbnOsFWO.jpg">
          </q-avatar>
        </div>
      </div>
    <div class="text-h6">アーティストや俳優の可能性を高めるための活動を行っています。</div>
    <div class="q-pa-md row items-start q-gutter-md justify-center">
      <q-icon size="38px" :name="ionLogoYoutube"></q-icon>
      <q-icon size="38px" :name="ionLogoDiscord"></q-icon>
      <q-icon size="38px" :name="ionLogoX"></q-icon>
      <q-icon size="38px" :name="ionLogoInstagram"></q-icon>
      <q-icon size="38px" :name="ionLogoX"></q-icon>
      <q-icon size="38px" :name="ionLogoX"></q-icon>
    </div>
    <div class="q-ma-md">
      <div class="q-pa-md row items-start q-gutter-md justify-center">
        <q-card style="width: 300px;max-width: 300px;background: black" class="my-card">
          <q-img style="max-width: 300px; height: 150px;" fit="cover" src="https://japan.miyavi.com/static/fcopen/fanplakit/artist/miyavi_A7w9XvkS/img/logo--fcA7w9.png" />
          <q-card-section>
            <div class="text-subtitle2 text-white">FAN CLUB　→</div>
          </q-card-section>
        </q-card>
        <q-card style="width: 300px;max-width: 300px;background: black" class="my-card">
          <q-img style="max-width: 300px; height: 150px;" fit="cover" src="https://d1rjcmiyngzjnh.cloudfront.net/prod/public/fcopen/contents/banner/d833c631f284b281bc432c89bf8a78e0.jpeg" />
          <q-card-section>
            <div class="text-subtitle2 text-white">ONLINE STORE　→</div>
          </q-card-section>
        </q-card>
        <q-card style="width: 300px;max-width: 300px;background: black" class="my-card">
          <q-img style="max-width: 300px; height: 150px;" fit="cover" src="https://miyavisake.jp/img/index_gallery02.jpg" />
          <q-card-section>
            <div class="text-subtitle2 text-white">MIYAVI SAKE　→</div>
          </q-card-section>
        </q-card>
        <q-card style="width: 300px;max-width: 300px;background: black" class="my-card">
          <q-img style="max-width: 300px; height: 150px;" fit="cover" src="https://d1rjcmiyngzjnh.cloudfront.net/prod/public/fcopen/contents/banner/414d07d971a789102ab09e4c4fa336f6.jpeg" />
          <q-card-section>
            <div class="text-subtitle2 text-white">bubble　→</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="q-py-xl">


      {{generateImgPath('video')}}
      <div style="position: relative;display: flex">
        <video width="100%" autoplay loop muted>
          <source src="/assets/movie/video.mp4" type="video/mp4">
        </video>
        <div style="position: absolute;top: 0;display:flex;justify-content:center;align-items:center;width: 100%;height: 100%;background: rgba(0,0,0,0.7);">
          <div style="" class="text-white text-h1 text-center q-mb-lg">MIYAVI</div>
        </div>
      </div>
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
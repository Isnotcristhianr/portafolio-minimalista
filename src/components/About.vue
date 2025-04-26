<script setup>
//icons
import { Icon } from "@iconify/vue";
import { Vue3Marquee } from "vue3-marquee";
</script>

<template>
  <div class="mx-auto">
    <div class="flex flex-col md:flex-row gap-4">
      <div class="flex-1">
        <div class="mockup-code rounded-lg">
          <div class="space-y-4 p-2 m-3">
            <p>
              {{ $t("about.me.1.p1") }}
              <span class="font-extrabold">
                {{ $t("about.me.1.p1on") }}
              </span>
              {{ $t("about.me.1.p2") }}
              <span class="font-extrabold">
                {{ $t("about.me.1.p2on") }}
              </span>
              {{ $t("about.me.1.p3") }}
              <span class="font-extrabold">
                {{ $t("about.me.1.p3on") }}
              </span>
              {{ $t("about.me.1.p4") }}
            </p>
            <p>
              {{ $t("about.me.2.p1") }}
              <span class="font-extrabold">
                {{ $t("about.me.2.p1on") }}
              </span>
            </p>
            <p>
              {{ $t("about.me.3.p1") }}
              <span class="font-extrabold">
                {{ $t("about.me.3.p1on") }}
              </span>
              {{ $t("about.me.3.p2") }}
            </p>
            <p>
              {{ $t("about.me.4.p1") }}
              <span class="font-extrabold">
                {{ $t("about.me.4.p1on") }}
              </span>
              {{ $t("about.me.4.p2") }}
              <span class="font-extrabold">
                {{ $t("about.me.4.p2on") }}
              </span>
              {{ $t("about.me.4.p3") }}
            </p>
          </div>
        </div>
      </div>

      <div class="md:w-1/2">
        <img
          src="/imgs/meGoogle.jpg"
          alt="about"
          class="rounded-lg shadow-2xl w-full transition-all duration-300 hover:scale-105"
          width="384"
          height="384"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          style="mask-image: linear-gradient(black 50%, transparent); content-visibility: auto;"
          
        />
      </div>
    </div>
  </div>
  <!-- tecnologias -->
  <Vue3Marquee
    :gradient="true"
    :gradient-color="['#FF0080', '#7928CA', '#00C6A7', '#FF0080']"
    :pause-on-hover="true"
    :gradient-length="25"
    :hover-pause="true"

  >
    <div class="flex p-2 items-center justify-center gap-4 mt-4">
      <!-- Frontend Frameworks -->
      <Icon icon="logos:vue" width="40" height="40" class="m-1"/>
      <Icon icon="logos:react" width="40" height="40" class="m-1"/>
      <Icon icon="ri:nextjs-fill" width="40" height="40" class="m-1"/>

      <!-- Styling -->
      <Icon icon="logos:tailwindcss-icon" width="40" height="40" class="m-1"/>
      <Icon icon="logos:bootstrap" width="40" height="40" class="m-1"/>
      <Icon icon="logos:daisyui" width="40" height="40" class="m-1"/>
      <Icon icon="logos:headlessui-icon" width="40" height="40" class="m-1"/>

      <!-- Languages -->
      <Icon icon="logos:html-5" width="40" height="40" class="m-1"/>
      <Icon icon="logos:css-3" width="40" height="40" class="m-1"/>
      <Icon icon="logos:javascript" width="40" height="40" class="m-1"/>
      <Icon icon="logos:dart" width="40" height="40" class="m-1"/>

      <!-- Libraries -->
      <Icon icon="logos:jquery" width="40" height="40" class="m-1"/>
      <Icon icon="logos:highcharts" width="40" height="40" class="m-1"/>
    </div>

    <!-- Backend Frameworks -->
    <Icon icon="logos:codeigniter-icon" width="40" height="40" class="m-1"/>

    <!-- Hosting & Deployment -->
    <Icon icon="logos:firebase" width="40" height="40" class="m-1"/>
    <Icon icon="vscode-icons:file-type-vercel" width="40" height="40" class="m-1"/>
    <Icon
      icon="vscode-icons:file-type-light-firebasehosting"
      width="40"
      height="40"
      class="m-1"
    />

    <!-- Design Tools -->
    <Icon icon="logos:figma" width="40" height="40" class="m-1"/>
    <Icon icon="logos:adobe-xd" width="40" height="40" class="m-1"/>
    <Icon icon="logos:adobe-photoshop" width="40" height="40" class="m-1"/>
    <Icon icon="logos:adobe-premiere-pro" width="40" height="40" class="m-1"/>

    <!-- Version Control -->
    <Icon icon="logos:github-icon" width="40" height="40" class="m-1"/>

    <!-- UI Libraries -->
    <Icon icon="simple-icons:shadcnui" width="40" height="40" class="m-1"/>
    <Icon icon="logos:flutter" width="40" height="40" class="m-1"/>
  </Vue3Marquee>
</template>

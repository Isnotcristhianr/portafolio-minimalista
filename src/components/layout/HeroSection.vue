<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="hero min-h-screen p-10 pl-10 pr-10">
    <div class="hero-content flex-col lg:flex-row">
      <img
        src="/imgs/me.png"
        alt="me"
        class="hero-image max-w-60 md:max-w-60 lg:max-w-sm w-full h-auto mb-2 sm:mb-6 lg:mb-0"
        style="mask-image: linear-gradient(black 80%, transparent)"
      />
      <div>
        <div class="md:text-center lg:text-start">
          <div class="indicator">
            <span class="indicator-item badge badge-xs badge-success rounded-xl"></span>
            <a
              href="https://www.linkedin.com/in/isnotcristhianr/"
              target="_blank"
              class="btn btn-xs btn-block btn-success btn-outline mb-4 rounded-lg"
              >{{ $t('hero.disponible') }}</a
            >
          </div>

          <h1 class="text-5xl font-bold">
            {{ $t('hero.title') }} <span class="text-blue-500">Cristhian</span>!
          </h1>

          <!-- presentacion -->
          <p class="py-6 text-xl">
            {{ $t('hero.description') }}
          </p>
          <!-- btns -->
          <div class="flex flex-wrap gap-2 mt-4 justify-center">
            <a
              href="mailto:isnotcristhian@gmail.com"
              class="btn  btn-outline rounded"
            >
              <Icon icon="mdi:email" width="24" height="24" />
              {{ $t('hero.actions.contact') }}
            </a>
            <a href="/resume/Cristhian Recalde Resume.pdf" download class="btn  btn-outline rounded">
              <Icon icon="pepicons-pop:cv" width="24" height="24" />
                {{ $t('hero.actions.cv') }}
            </a>
            <a
              class="btn  btn-outline rounded"
              href="https://github.com/Isnotcristhianr"
              target="_blank"
            >
              <Icon icon="mdi:github" width="24" height="24" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

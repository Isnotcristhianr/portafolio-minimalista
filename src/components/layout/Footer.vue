<script setup>
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <footer
    class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 mt-15"
  >
    <aside class="flex flex-row items-center justify-center">
      <RouterLink to="/">
        <img
          src="/imgs/branding/isnotcr_whiteblack.jpg"
          alt="logo"
          class="w-15 h-15 rounded"
        />
      </RouterLink>
      <p>
        IsnotCristhian
        <br />
        {{ $t("footer.copyright") }}
        <br />
        {{ $t("footer.inspo") }}
        <a href="https://porfolio.dev/" target="_blank"> Midudev </a>
      </p>
    </aside>
    <nav>
      <h6 class="footer-title">Social</h6>
      <div class="grid grid-flow-col gap-4">
        <!-- linkendIn -->
        <a
          href="https://www.linkedin.com/in/isnotcristhianr/"
          target="_blank"
          class="btn btn-ghost btn-circle"
        >
          <Icon icon="uil:linkedin" width="30" height="30" />
        </a>
        <!-- github -->
        <a href="https://github.com/Isnotcristhianr" target="_blank" class="btn btn-ghost btn-circle">
          <Icon icon="mdi:github" width="30" height="30" />
        </a>
        <!-- twitter -->
        <a href="https://x.com/itsnotcristhr?s=21" target="_blank" class="btn btn-ghost btn-circle">
          <Icon icon="pajamas:twitter" width="30" height="30" />
        </a>
        <!-- instagram -->
        <a href="https://www.instagram.com/itsnotcristhian.dev/" target="_blank" class="btn btn-ghost btn-circle">
          <Icon icon="mdi:instagram" width="30" height="30" />
        </a>
        <!-- Youtube -->
        <a href="https://www.youtube.com/@cristhianrecalde5253" target="_blank" class="btn btn-ghost btn-circle">
          <Icon icon="mdi:youtube" width="30" height="30" />
        </a>
      </div>
    </nav>
  </footer>
</template>

<script setup>
import { ref, computed } from "vue";
//router
import { RouterLink } from "vue-router";

//i18n
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const currentLanguage = ref(locale.value === "es");

const currentTheme = ref(
  document.documentElement.getAttribute("data-theme") || "black"
);

const themeClass = computed(() => {
  return currentTheme.value === "black" ? "black" : "wireframe";
});

//funcion para cambiar el idioma segun estado del toggle
const toggleLanguage = () => {
  currentLanguage.value = !currentLanguage.value;
  locale.value = currentLanguage.value ? "es" : "en";
};

//fucnion para cambiar el tema segun estado del toggle
const toggleTheme = () => {
  currentTheme.value = currentTheme.value === "black" ? "wireframe" : "black";
  document.documentElement.setAttribute("data-theme", currentTheme.value);
};
</script>

<template>
  <div
    class="navbar shadow-sm rounded-full z-10 top-0
     backdrop-blur-sm left-0 right-0 fixed w-full
      max-w-screen-md mx-auto px-2 mt-2 mb-2
      dark:shadow-blue-50 dark:drop-shadow-xs min-h-0 py-1"
  >
    <div class="navbar-start">
      <div class="dropdown">
        <div 
          tabindex="0" 
          role="button" 
          class="btn btn-ghost btn-circle btn-sm"
          aria-label="Menú de navegación"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow"
        >
          <li>
            <router-link to="/">{{ t("navbar.home") }}</router-link>
          </li>
          <li>
            <router-link to="/proyects">{{ t("navbar.projects") }}</router-link>
          </li>
          <li>
            <router-link to="/certificate">{{ t("navbar.certificate") }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <router-link to="/" class="btn btn-ghost btn-sm text-lg p-0">IsnotCristhian</router-link>
    </div>
    <div class="navbar-end">
      <!-- theme toggle -->
      <div class="btn btn-ghost btn-sm">
        <label class="swap swap-rotate">
          <input type="checkbox" class="theme-controller" @change="toggleTheme" />
          <!-- sun icon -->
          <svg
            class="swap-off h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>
          <!-- moon icon -->
          <svg
            class="swap-on h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
        </label>
      </div>
      <!-- toggle idioma -->
      <div class="flex items-center gap-1 btn btn-ghost btn-sm p-0">
        <span class="text-sm">🇺🇸</span>
        <input
          type="checkbox"
          class="toggle toggle-xs language-toggle"
          id="language-toggle"
          checked="true"
          @change="toggleLanguage"
        />
        <span class="text-sm">🇪🇸</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
//components
import HeroSection from "@/components/layout/HeroSection.vue";
import Stats from "@/components/Stats.vue";
import TimeLine from "@/components/TimeLine.vue";
import Sections from "@/components/Sections.vue";
import ProyectSection from "@/components/ProyectSection.vue";
import About from "@/components/About.vue";
import Certificates from "@/components/Certificates.vue";
</script>

<template>
  <main>
    <!-- hero section -->
    <HeroSection />
    <!-- stats -->
    <Stats />
    <!-- sections -->
    <!-- timeline -->
    <Sections icon="pajamas:work" title="Timeline">
      <template #title>
        <h2>{{ $t("timeline.section.title") }}</h2>
      </template>
      <div class="pl-4 pr-4 p-5">
        <ol class="relative border-s border-gray-200 dark:border-gray-700">
          <TimeLine
            :title="$t('timeline.experience.1.title')"
            :company="$t('timeline.experience.1.company')"
            :date="$t('timeline.experience.1.date')"
            :description="$t('timeline.experience.1.description')"
            :url="`https://www.neaternotes.com/company/neaternotes-team`"
            :actions="$t('timeline.experience.1.actions.view')"
          />
          <TimeLine
            :title="$t('timeline.experience.2.title')"
            :company="$t('timeline.experience.2.company')"
            :date="$t('timeline.experience.2.date')"
            :description="$t('timeline.experience.2.description')"
          />
          <TimeLine
            :title="$t('timeline.experience.3.title')"
            :company="$t('timeline.experience.3.company')"
            :date="$t('timeline.experience.3.date')"
            :description="$t('timeline.experience.3.description')"
          />
          <TimeLine
            :title="$t('timeline.experience.4.title')"
            :company="$t('timeline.experience.4.company')"
            :date="$t('timeline.experience.4.date')"
            :description="$t('timeline.experience.4.description')"
          />
        </ol>
      </div>
    </Sections>
    <!-- projects -->
    <Sections icon="pajamas:work" title="Projects">
      <template #title>
        <h2>{{ $t("projects.section.title") }}</h2>
      </template>

      <section>
        <div class="stack-cards">
          <div class="card">
            <div class="container">
              <ProyectSection
                :title="$t('projects.proy.0.title')"
                :description="$t('projects.proy.0.description')"
                :technologies="['Flutter', 'Dart', 'Firebase', 'Playstore']"
                imgUrl="/proyectos/0.webp"
                altText="ChullaCash"
                url="https://play.google.com/store/apps/details?id=com.chullacash.app"
                type="app"
                githubUrl="https://github.com/Isnotcristhianr/ChullaCash-App"
                previewUrl="https://play.google.com/store/apps/details?id=com.chullacash.app"
              />
            </div>
          </div>
          <div class="card">
            <div class="container">
              <ProyectSection
                :title="$t('projects.proy.26.title')"
                :description="$t('projects.proy.26.description')"
                :technologies="['VueJs', 'Tailwind', 'Supabase', 'Vercel']"
                imgUrl="/proyectos/26.webp"
                altText="Binesai"
                url="https://binesai.com"
                type="web"
                githubUrl="https://github.com/Isnotcristhianr/binesai"
                previewUrl="https://binesai.com"
              />
            </div>
          </div>
          <div class="card">
            <div class="container">
              <ProyectSection
                :title="$t('projects.proy.1.title')"
                :description="$t('projects.proy.1.description')"
                :technologies="[
                  'Flutter',
                  'Dart',
                  'Firebase',
                  'Playstore',
                  'Appstore',
                ]"
                imgUrl="/proyectos/1.webp"
                altText="Swapme"
                url="https://play.google.com/store/apps/details?id=com.company.swapme"
                type="app"
                githubUrl="https://github.com/Isnotcristhianr/SwapMe---Code-0"
                previewUrl="https://play.google.com/store/apps/details?id=com.company.swapme"
              />
            </div>
          </div>
          <div class="card">
            <div class="container">
              <ProyectSection
                :title="$t('projects.proy.2.title')"
                :description="$t('projects.proy.2.description')"
                :technologies="['Figma', 'AdobeXd', 'Tailwind', 'Vercel']"
                imgUrl="/proyectos/2.webp"
                altText="Nike App"
                url="https://github.com/Isnotcristhianr/Desgin-Nike-App"
                type="web"
                githubUrl="https://github.com/Isnotcristhianr/Desgin-Nike-App"
                previewUrl="https://github.com/Isnotcristhianr/Desgin-Nike-App"
              />
            </div>
          </div>
          <div class="card">
            <div class="container">
              <ProyectSection
                :title="$t('projects.proy.14.title')"
                :description="$t('projects.proy.14.description')"
                :technologies="[
                  'Php',
                  'Bootstrap',
                  'HighCharts',
                  'Coidegniter',
                ]"
                imgUrl="/proyectos/14.webp"
                altText="PUCE-I"
                url="https://github.com/Isnotcristhianr/SistemaGestionDocumental"
                type="web"
                githubUrl="https://github.com/Isnotcristhianr/SistemaGestionDocumental"
                previewUrl="https://github.com/Isnotcristhianr/SistemaGestionDocumental"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- ver mas -->
      <div class="flex justify-center">
        <RouterLink to="/proyects" class="btn btn-secondary rounded">
          Ver más <Icon icon="pajamas:arrow-right" />
        </RouterLink>
      </div>
    </Sections>

    <!-- About me -->
    <Sections icon="heroicons:user-circle-solid" title="About me">
      <template #title>
        <h2>{{ $t("about.section.title") }}</h2>
      </template>
      <About />
    </Sections>

    <!-- Certifications -->
    <Sections icon="heroicons-solid:academic-cap" title="Certifications">
      <template #title>
        <h2>{{ $t("certifications.section.title") }}</h2>
      </template>
      <Certificates
        name="Microsoft Certified AZ-900: Azure AI Fundamentals"
        icon="logos:microsoft-icon"
        link="https://learn.microsoft.com/api/credentials/share/es-es/CristhianRecalde-4665/10D25DF28F252BB7?sharingId=A2098A03866B3733"
      />
      <Certificates
        name="Development Web II"
        icon="logos:google-icon"
        link="https://drive.google.com/file/d/1Pg0lJnZtYOdj2Rv4q5SZsnA9ieFsBtm2/view?usp=sharing"
      />
      <Certificates
        name="Diseño Wev con HTML5 y CSS3"
        icon="cbi:movistar-plus"
        link="https://drive.google.com/file/d/1s5PNJ8tnrnGJX66TqLs8ZWoCDnfUwMpD/view?usp=sharing"
      />
      <Certificates
        name="Administración Windows Server 2016"
        icon="logos:udemy-icon"
        link="https://drive.google.com/file/d/17DjdcP5cJCeFaJCk7IUUrXv-An8SK59B/view?usp=sharing"
      />
      <Certificates
        name="VueJs 3 - Desde 0"
        icon="logos:udemy-icon"
        link="https://drive.google.com/file/d/1SSqaYjPIGwO9LCkHOwUOZB4r7Yh6OIYE/view?usp=sharing"
      />

      <!-- ver mas -->
      <div class="flex justify-center">
        <RouterLink to="/certificate" class="btn btn-secondary rounded">
          Ver más <Icon icon="pajamas:arrow-right" />
        </RouterLink>
      </div>
    </Sections>
  </main>
</template>

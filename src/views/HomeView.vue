<script setup>
//components
import HeroSection from "@/components/layout/HeroSection.vue";
import Stats from "@/components/Stats.vue";
import TimeLine from "@/components/TimeLine.vue";
import Sections from "@/components/Sections.vue";
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
      
    </Sections>
  </main>
</template>

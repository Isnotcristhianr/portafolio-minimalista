<script setup>
import { ref } from "vue";
//sweetalert2
import Swal from "sweetalert2";

const formData = ref({
  email: "",
  name: "",
  message: "",
});

const handleSubmit = async () => {
  console.log(formData.value);

  //formSubmit
  try {
    const response = await fetch("https://formsubmit.co/ajax/isnotcristhian@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.value),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Form submitted successfully");
      formData.value = {
        email: "",
        name: "",
        message: "",
      };
      Swal.fire({
        icon: "success",
        title: "Form submitted successfully",
      });
    } else {
      console.error("Form submission failed");
      formData.value = {
        email: "",
        name: "",
        message: "",
      };
      Swal.fire({
        icon: "error",
        title: "Form submission failed",
      });
    }
  } catch (error) {
    console.error(error);
    Swal.fire({
      icon: "error",
      title: "Form submission failed",
    });
  }
};
</script>

<template>
  <div class="flex justify-center items-center container mx-auto p-8">
    <form class="w-full max-w-lg mx-auto card bg-base-100 shadow-xl p-8" @submit.prevent="handleSubmit">
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-base-content">{{
          $t("contact.form.email")
        }}</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          class="input input-bordered w-full bg-base-200 focus:outline-none focus:border-primary"
          placeholder="name@mail.com"
          required
        />
      </div>
      <div class="mb-6">
        <label for="name" class="block mb-2 text-sm font-medium text-base-content">{{
          $t("contact.form.name")
        }}</label>
        <input
          type="text"
          id="name"
          class="input input-bordered w-full bg-base-200 focus:outline-none focus:border-primary"
          required
          v-model="formData.name"
        />
      </div>
      <div class="mb-6">
        <label for="message" class="block mb-2 text-sm font-medium text-base-content">{{
          $t("contact.form.message")
        }}</label>
        <textarea
          id="message"
          rows="4"
          class="textarea textarea-bordered w-full bg-base-200 focus:outline-none focus:border-primary"
          :placeholder="$t('contact.form.placeholder')"
          required
          v-model="formData.message"
        ></textarea>
      </div>
      <div class="flex justify-center items-center">
        <button type="submit" class="btn btn-primary w-full hover:opacity-90 transition-opacity">
          {{ $t("contact.form.submit") }}
        </button>
      </div>
    </form>
  </div>
</template>

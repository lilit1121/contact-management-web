<template>
    <div class="flex w-full items-center justify-center text-3xl">
        <!-- Contacts List page -->
        <Card :contact="contact" />
    </div>
</template>

<script setup lang="ts">
import Card from "@/components/Card.vue";
import type { CardInterface } from "@/interfaces/card.interface";
import { reactive } from "vue";

// Example
const contact: CardInterface = reactive({
    id: 1,
    name: "John Doe",
    email: "test@rmail",
    phone: "15641651",
});
</script>

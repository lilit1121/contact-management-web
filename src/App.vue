<template>
    <div class="flex flex-col w-full">
        <header class="bg-orange-700 w-full px-3 py-2 mb-16">
            <h2>Contacts List page</h2>
        </header>

        <RouterView />
    </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
    <div class="rounded-md lg:p-4 p-3 w-full flex flex-col gap-3 border border-gray-800 max-w-[400px]">
        <h3 class="text-2xl font-bold">Contact details</h3>
        <div class="flex flex-col gap-2 text-base">
            <h4>ID: {{ props.contact.id }}</h4>
            <h4>Email: {{ props.contact.email }}</h4>
            <h4>Name: {{ props.contact.name }}</h4>
            <h4>Phone: {{ props.contact.phone }}</h4>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CardInterface } from "../interfaces/card.interface";

const props = defineProps<{
    contact: CardInterface;
}>();

console.log(props.contact);
</script>

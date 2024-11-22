import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "/contacts",
        },
        {
            path: "/contacts",
            name: "contacts",
            component: () => import("../views/ContactList/ContactList.vue"),
        },
        {
            path: "/contacts/:id",
            name: "contact-details",
            component: () => import("../views/ContactDetails/ContactDetails.vue"),
        },
        {
            path: "/",
            redirect: "/contacts",
        },
    ],
});

export default router;

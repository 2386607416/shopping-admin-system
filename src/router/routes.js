export default [
    {
        name: "home",
        path: "/",
        component: () => import("@/views/Home/index.vue"),
        strict: false,
    },
    {
        name: "statement",
        path: "/statement",
        component: () => import("@/views/Statement/index.vue"),
        strict: true,
    },
    {
        name: "setting",
        path: "/setting",
        component: () => import("@/views/Setting/index.vue"),
        strict: true,
    },
];

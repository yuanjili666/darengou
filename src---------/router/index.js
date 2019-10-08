import {
    Home,
    Find,
    Order,
    Mine,
    Login
} from "@pages"



export const layoutRoutes = [
    {
        key: "/home",
        path: "/home",
        name: "首页",
        icon: "\ue628",
        component: Home,
        exact: true,
        meta: {
            requireAuth: false,
            flag:true
        }
    },
    {
        key: "/find",
        path: "/find",
        name: "发现",
        icon: "\ue663",
        component: Find,
        exact: true,
        meta: {
            requireAuth: false,
            flag:true
        }
    },
    {
        key: "/order",
        path: "/order",
        name: "订单",
        icon: "\ue737",
        component: Order,
        exact: true,
        meta: {
            requireAuth: true,
            flag:true
        }
    },
    {
        key: "/mine",
        path: "/mine",
        name: "我的",
        icon: "\ue617",
        component: Mine,
        exact: true,
        meta: {
            requireAuth: true,
            flag:true
        }
    },

]

export const noLayoutRoutes = [
    {
        key: "/login",
        path: "/login",
        name: "登陆",
        icon: "",
        component: Login,
        exact: true,
        meta: {
            requireAuth: false
        }
    }
]

export const baseConfigRoutes = layoutRoutes.concat(noLayoutRoutes);
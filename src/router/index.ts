import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
    {
        path:'/',
        name:"home",
        component:()=>import("../page/home/home.vue")
    },
    {
        path:'/goodsDetails',
        name:"goodsDetails",
        component:()=>import("../page/goodsDetails/index.vue")
    },
    {
        path:'/complaintPage',
        name:"complaintPage",
        component:()=>import("../page/complaintPage/index.vue")
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router;

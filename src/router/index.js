import{
    Home,
    Classify,
    Collect,
    Mine,
    Nine,
    Login,
    HomeOne
} from "@pages"


export const layoutRoutes=[
    {
        key:"/home",
        path:"/home",
        name:"首页",
        icon:"\ue625",
        component:Home,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true
        }
        
    },
    {
        key:"/nine",
        path:"/nine",
        name:"9.9包邮",
        icon:"\ue627",
        component:Nine,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true
        }
    },
    {
        key:"/classify",
        path:"/classify",
        name:"分类",
        icon:"\ue637",
        component:Classify,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true
        }
    },
    {
        key:"/collect",
        path:"/collect",
        name:"收藏",
        icon:"\ue66f",
        component:Collect,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true
        }
    },

    {
        key:"/mine",
        path:"/mine",
        name:"我的",
        icon:"\ue63b",
        component:Mine,
        exact:true,
        meta:{
            requireAuth:true,
            flag:true
        }
    }

]

export const nolayoutRoutes=[
    
    {
        key:"/login",
        path:"/login",
        name:"登录",
        icon:"",
        component:Login,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false
        }
    }

]

export const baseConfigRoutes=layoutRoutes.concat(nolayoutRoutes);   //合并数组
import {createWebHashHistory,createRouter} from 'vue-router'
import Test from '../components/Test.vue'
import Test2 from '../components/Test2.vue'

const history = createWebHashHistory();

const router =  createRouter({
    history:history,
    routes:[
        {
            path:'/',
            component:Test
        },{
            path:'/test2',
            component:Test2
        }
    ]
})
export default router
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main1 from '@/components/Main1'
import Main2 from '@/components/Main2'
import Main3 from '@/components/Main3'
import Main4 from '@/components/Main4'
import Main5 from '@/components/Main5'
import Main6 from '@/components/Main6'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Main1',
            component: Main1
        },

        {
            path: '/main1',
            name: 'Main1',
            component: Main1
        },
        {
            path: '/main2',
            name: 'Main2',
            component: Main2
        },
        {
            path: '/main3',
            name: 'Main3',
            component: Main3
        },
        {
            path: '/main4',
            name: 'Main4',
            component: Main4
        },
        {
            path: '/main5',
            name: 'Main5',
            component: Main5
        },
        {
            path: '/main6',
            name: 'Main6',
            component: Main6
        },
    ]
})
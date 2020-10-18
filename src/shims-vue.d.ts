/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-18 20:19:12
 * @FilePath: /gulu-vue3/src/shims-vue.d.ts
 * @LastEditTime: 2020-10-18 20:29:05
 * @不想有bug xinghe@gaoding.com
 */

/**
 * 解决引入.vue 找不到的情况
 */
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}
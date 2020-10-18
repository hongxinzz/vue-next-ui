<!--
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-13 22:51:04
 * @FilePath: /gulu-vue3/src/App.vue
 * @LastEditTime: 2020-10-18 20:47:02
 * @不想有bug xinghe@gaoding.com
-->
<template>
  <div>导航栏 |
  <router-link to="/">Test</router-link> |
  <router-link to="/test2">Test2</router-link></div>
  <hr/>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

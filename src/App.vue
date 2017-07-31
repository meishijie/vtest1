<template>
  <div id="app">
    <naver></naver>
    <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  margin-top: 100px;
}
.btn_detail {
    font-size: 20px;
    width: 100%;
    border: 1px #0085D8 solid;
    padding: 10px;
    margin: 20px 0;
    background-color: #ECF8FF;
}
.detailPageTitle p {
    margin-top: 20px;
    color: #000000;
    text-align: left;
    font-size: 20px;
}
.detailPageTitle {
    margin-top: 40px;
    font-family: "Helvetica";
    font-size: 25px;
    color: #0085D8;
    padding: 20px;
}
.part-title {
    text-align: center;
    position: relative;
}
.part-title-mar {
    padding-top: 10px;
    padding-bottom: 5px;
}
.projects-header {
    width: 60%;
    text-align: center;
    margin: 60px 0 10px;
    font-weight: 200;
    margin-bottom: 40px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.smallNav{
  padding-left: 0;
}
.smallNav a{
  color: #000;
}
.smallNavText{
  color: #999999;
}
.breadcrumb-box {
    border-bottom: 1px solid #e9e9e9;
    margin-bottom: 30px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

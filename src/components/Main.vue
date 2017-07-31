<template>
  <div class="container">
    <div class="breadcrumb-box">
      <div class="am-container padding-left0">
          <ol class="smallNav">
              <li><a href="index.html">Home ></a></li>
              <li class="am-active smallNavText">E-commerce Whole-channel Construction</li>
          </ol>
      </div>
    </div>
    <div class="projects-header page-header">
        <h2>Bootstrap相关优质项目推荐</h2>
        <p>这些项目或者是对Bootstrap进行了有益的补充，或者是基于Bootstrap开发的</p>
        <img src="../../static/img/m/logo.jpg" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main',
    data () {
      return {
        msg: '订单msg'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

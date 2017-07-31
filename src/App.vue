<template>
  <div id="app">
    <div class="navbar navbar-default navbar-fixed-top" >
    <div class="container">
      <div class="navbar-header" style="height:80px;">
        <button class="navbar-toggle collapsed " style="margin-top:25px;" type="button" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand hidden-sm" style="padding:0; margin:0; margin-left:20px;" href="" onclick="_hmt.push(['_trackEvent', 'navbar', 'click', 'navbar-首页'])"><img src="../static/img/m/logo.jpg" /></a>
        <div class="am-fl " style="line-height:24px;margin-top:30px;margin-left:100px; font-weight:bold;">Stock Code : 833031 </div>
      </div>
      <div class="navbar-collapse collapse" role="navigation">
        <ul class="nav navbar-nav">
          <li class="hidden-sm hidden-md"><a href="http://v2.bootcss.com/" target="_blank" onclick="_hmt.push(['_trackEvent', 'navbar', 'click', 'v2doc'])">Bootstrap2中文文档</a></li>
          <li><a href="http://v3.bootcss.com/" target="_blank" onclick="_hmt.push(['_trackEvent', 'navbar', 'click', 'v3doc'])">Bootstrap3中文文档</a></li>
          <li><a href="http://v4.bootcss.com/" target="_blank" onclick="_hmt.push(['_trackEvent', 'navbar', 'click', 'v4doc'])">Bootstrap 4.0 预览</a></li>
          <li><a href="/p/lesscss/" target="_blank" onclick="_hmt.push(['_trackEvent', 'navbar', 'click', 'less'])">Less 教程</a></li>
          <li><a href="http://www.jquery123.com/" target="_blank" onclick="_hmt.push(['_trackEvent', 'navbar', 'click', 'jquery'])">jQuery API</a></li>
          <li><a href="http://expo.bootcss.com" target="_blank" onclick="_hmt.push(['_trackEvent', 'navbar', 'click', 'expo'])">网站实例</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right hidden-sm">
          <li><a href="/about/" onclick="_hmt.push(['_trackEvent', 'navbar', 'click', 'about'])">关于</a></li>
        </ul>
      </div>
    </div>
  </div>
  <router-view></router-view>
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
</style>

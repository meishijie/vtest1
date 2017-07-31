<template>
  <div class="navbar navbar-default navbar-fixed-top" >
    <div class="container">
      <div class="navbar-header" style="height:80px;">
        <button class="navbar-toggle collapsed " style="margin-top:25px;" type="button" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand hidden-sm" style="padding:0; margin:0; margin-left:20px;" href="" onclick="_hmt.push(['_trackEvent', 'navbar', 'click', 'navbar-首页'])"><img src="../../static/img/m/logo.jpg" /></a>
        <div class="am-fl " style="line-height:24px;margin-top:30px;margin-left:100px; font-weight:bold;">Stock Code : 833031 </div>
      </div>
      <div class="navbar-collapse collapse" role="navigation">
        <ul class="nav navbar-nav">
          <li v-for="(title,index) in title">
            <a :href="urls[index]" data-toggle="collapse" data-target=".navbar-collapse" target="_self" >{{title }}</a>
          </li>
        </ul>
         
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'nav',
      data () {
        return {
          title:['Marketing','Online Store Operation','E-commerce Whole-channel Construction','Cross-boarder Financial Solutions','Data Analysis','Cross-boarder Supply Chain Solutions'],
          urls:['#/main1','#/main2','#/main3','#/main4','#/main5','#/main6']
        }
    }
  }
</script>


<template>
  <div class="container">
    <div class="breadcrumb-box">
      <div class="am-container padding-left0">
          <ol class="smallNav">
              <li><a href="index.html">Home ></a></li>
              <li class="am-active smallNavText">{{title}}</li>
          </ol>
      </div>
    </div>
    <div class="part-title part-title-mar detailPageTitle">
            <span>{{title}}</span>
            <p>{{title}}</p>
            <div class="btn_detail">{{title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main1',
    data () {
      return {
        title: 'Marketing'
      }
    }
  }
</script>

 
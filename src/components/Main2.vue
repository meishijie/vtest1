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
            <p>{{pagetext}}</p>
            <div v-for="btntxt in btnText" class="btn_detail">{{btntxt}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main2',
    data () {
      return {
        title: 'Online Store Operation',
        pagetext:"One of the core business of Accel E-commerce Company is to provide complete online platform for each shop operating plan to the brand and help the brand operate and manage its online store with years of practice accumulation.",
        btnText:['Online customer service','Online store visual design','Commodity management','Promotion plan for activities','Associate platform resources','Make operation reports']
      }
    }
  }
</script>

 
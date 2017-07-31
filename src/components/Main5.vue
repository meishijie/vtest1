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
    name: 'main5',
    data () {
      return {
        title: 'Data Analysis',
        pagetext:"One of the core business of Accel E-commerce Company is to provide the brand owner with relevant data report of China online market，including the market environment report, competitive products analysis report, brand data report, consumer research report and multi-dimensional data analysis report, and with many years operation of e-commerce, we supply the conclusion with professional data analysis.",
        btnText:['Market environment report of category','Competitive products sales analysis report','Consumer research report','Brand operation analysis report','Operation data analysis report of online store']
      }
    }
  }
</script>

 
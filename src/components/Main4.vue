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
    name: 'main4',
    data () {
      return {
        title: 'Cross-boarder Financial Solutions',
        pagetext:"Relying on the self-developed cross-border e-commerce financial settlement system, Accel E-commerce Company can help the brand to precisely calculate the profit and loss of each order, and provide detailed, professional financial data.",
        btnText:['Calculate operating income and expense','Calculate Sales profit','Commodity sales pricing model']
      }
    }
  }
</script>

 
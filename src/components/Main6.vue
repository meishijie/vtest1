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
    name: 'main6',
    data () {
      return {
        title: 'Cross-boarder Supply Chain Solutions',
        pagetext:"According to years of cross-border e-commerce operations management, , Accel E-commerce Company can provide individualized logistic solutions by the brand’s supply chain, and provide the handling of warehouse logistic docking routine processing,and help the brand deal with the problem of warehousing logistics.",
        btnText:['Recommend logistics service providers','Report to the bonded warehouse for the record','Deal with the returns and exchanges','Help check warehouse inventory','Make purchasing plan']
      }
    }
  }
</script>

 
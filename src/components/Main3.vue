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
    name: 'main3',
    data () {
      return {
        title: 'E-commerce Whole-channel Construction',
        pagetext:"With many years experience of e-commerce operating, Accel E-commerce Company helps associate brands with online major platforms, and provide targeted channel development plan by the brand features .",
        btnText:['Independent B2C website development','Recruit online distributors','Supply goods to e-commerce direct-sale platform','POP stores on platform']
      }
    }
  }
</script>

 
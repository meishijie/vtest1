<template>
    <div class="footers " style=" margin-top:30px;">
        <ul>
            <li class="">
                <div class="part-5-title">
                    <p>E-commerce Whole-channel Construction</p>
                </div>
                <div class="part-5-words2">
                    <p><span>|+61 452502038|Room 1502, OOCL Plaza, No. 841, Yanan Road (M.), Jing’an District, Shanghai|</span>
                        <span>Copyright © 2017 Accel E-commerce Co., Ltd. All rights reserved.</span>
                        <!--<span><i class="am-icon-phone"></i><em ></em></span>-->
                    </p>
                </div>
            </li>
            <div class="clear"></div>
        </ul>
    </div>
</template>
<script>
  export default {
    name: 'footers',
    data () {
      return {
        msg: '页尾'
      }
    }
  }
</script>
<style>
.footers {
    margin-top:30px;
    width: 100%;
    height: auto;
    background-color: #2d2d2d;
    overflow: hidden;
    padding: 0 5% 25px 5%;
    background: url(../../static/img/bg-pic2.png) no-repeat;
    background-size: 100% 100%;
}
.footer ul {
    padding-top: 40px;
    width: 85%;
    margin: 0 auto;
}
.footer ul li {
    color: #fff;
}
.clear {
    clear: both;
}

.part-5-title {
    margin-top: 30px;
}
.part-5-title {
    color: #fff;
    font-weight: bold;
    margin-bottom: 20px;
}
.part-5-words2 p {
    line-height: 23px;
    font-size: 13px;
}
.part-5-words2 span {
    color: #FFFFFF;
    display: block;
    margin-bottom: 10px;
    font-size: 13px;
}
</style>

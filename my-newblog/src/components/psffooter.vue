<template>
    <div class="footer">
      <div></div>
      <div class="footlibox" v-for="item of footerdata" @click="windowgoto(item.linkurl,item.target)" :title="item.imgtitle">
        <img :src="item.iconimgurl" alt="">
        <div class="footlifloat">
          <img v-if="item.imgurl !=''" :src="item.imgurl" :title="item.imgtitle">
          <p :title="item.imgtitle">{{item.tiptitle}}</p>
        </div>
      </div>

      <!--<div class="footlibox">
        <img src="" alt="">
        <div class="footlifloat">
          <img src="" alt="扫描查看Demo">
          <p>扫描查看Demo</p>
        </div>
      </div>
      <div class="footlibox">
        <img src="" alt="">
        <div class="footlifloat">
          <img src="" alt="扫描查看Demo">
          <p>扫描查看Demo</p>
        </div>
      </div>
      <div class="footlibox">
        <img src="" alt="">
        <div class="footlifloat">
          <img src="" alt="扫描查看Demo">
          <p>扫描查看Demo</p>
        </div>
      </div>
      <div class="footlibox">
        <img src="" alt="">
        <div class="footlifloat">
          <img src="" alt="扫描查看Demo">
          <p>扫描查看Demo</p>
        </div>
      </div>-->
      <div></div>
    </div>
</template>

<script>
    export default {
        name: "psffooter",
        data(){
          return{
            footerdata:[
              {
                iconimgurl:require('../assets/weixin.png'),
                tiptitle:'我的微信',
                imgurl:require('../assets/myselfweixin.png'),
                imgtitle:'扫描添加微信好友',
                linkurl:'',
                target:'_self'
              },
              {
                iconimgurl:require('../assets/weibo.png'),
                tiptitle:'我的微博',
                imgurl:'',
                imgtitle:'个人微博账号暂未添加',
                linkurl:'',
                target:'_self'
              },
              {
                iconimgurl:require('../assets/email.png'),
                tiptitle:'我的E-mail',
                imgurl:'',
                imgtitle:'点击发送邮件',
                linkurl:'mailto:pangshifeng0539@126.com',
                target:'_self'
              },
              {
                iconimgurl:require('../assets/qq.png'),
                tiptitle:'我的QQ',
                imgurl:'',
                imgtitle:'QQ账号暂未添加',
                linkurl:'',
                target:'_self'
              },
              {
                iconimgurl:require('../assets/github.png'),
                tiptitle:'我的github',
                imgurl:'',
                imgtitle:'点击查看我的github页',
                linkurl:'https://github.com/Chinegoodman',
                target:'_blank'
              },
              {
                iconimgurl:require('../assets/dingding.png'),
                tiptitle:'我的钉钉',
                imgurl:'',
                imgtitle:'钉钉暂未添加',
                linkurl:'',
                target:'_self'
              },
              {
                iconimgurl:require('../assets/gototop.png'),
                tiptitle:'返回到顶部',
                imgurl:'',
                imgtitle:'返回到顶部',
                linkurl:'gototop',
                target:''
              },
            ]
          }
        },
        methods:{
          windowgoto(url,target){
            if(url==''){
              return;
            }else if(url=='gototop'){
              document.body.scrollTop = document.documentElement.scrollTop = 0;
              return;
            }
            window.open(url,target);
          }
        }
    }
</script>

<style lang="scss" scoped>
  $domwidth:1333px;
  $footercolor:#6f6f6f;
  $footerfocusboxbgcolor:#fff;
  $footerfocusboxshadow:0 0 6px #EBEBEB;
  $dombgcolor:#f6f6f6;
  $footertipsbg: rgba(255,255,255,0.8);
  $footerbgcolor:#333;
  $footerfocusbgcolor:#000;
  .footer{
    background-color: $dombgcolor;
    min-width: $domwidth;
    width: 100%;
    height: 40px;
    padding-top: 10px;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .footlibox{
    position: relative;
    cursor: pointer;
    >img{
      width: 30px;
      height: 30px;
      border-radius: 50%;

    }
    &:hover .footlifloat{
       display: block;
     }
    .footlifloat{
      border-radius: 5px 5px 0 0 ;
      display: none;
      width: auto;
      position: absolute;
      left: 50%;
      bottom: 30px;
      transform: translate(-50%,0);
      padding-bottom: 20px;
      >*{
        box-shadow: $footerfocusboxshadow;
      }
      img{
        /*max-width: 50px;*/
        /*min-width:110px;*/
        width: 100%;
        height: auto;
        min-height: 40px;
        background-color: $footertipsbg;
        border-radius: 5px 5px 0 0 ;
        overflow: hidden;
      }
      p{
        font-size: 16px;
        line-height: 25px;
        padding: 5px 20px 0;
        color: #000;
        min-width:110px;
        background-color: $footertipsbg;
        border-radius: 10px;
        overflow: hidden;
        border-radius: 0 0  5px 5px;
      }
    }
  }
  .footlifloat{
    display: none;
    &:hover{
      display: block;
    }
  }
</style>

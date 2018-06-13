<template>
    <div class="header">
      <div class="headerbox">
        <img class="headerlogo" :src="logoicon" :title="logotitle">
        <ul class="headerleft">
          <li @click="routerclick(item.url)" v-for="item of headerleftrouters">{{item.urlname}}</li>
          <!--<li>首页</li>-->
          <!--<router-link to="/usefulurls">常用站点</router-link>-->
        </ul>
        <div class="headerright">
          <p class="headernickname">{{usermsg.nickname}}</p>
          <div class="selfheaderbox">
            <img class="selfheader" :src="usermsg.userheaderimg" alt="">
          </div>
          <div class="headersubmitbtn" @click="routerclick('donewnote')">
            <img src="../assets/h_writebtn.png" alt="" class="headersubmitbtnimg">
            <p>新纪录</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "psfheader",
        data(){
          return{
            logoicon:'https://www.ooo0o.com/images/xiaopangxiaji.png',
            logotitle:'小庞侠记',

            headerleftrouters:[
              {
                urlname:'首页',
                url:'/',
                title:''
              },
              {
                urlname:'查看常用站点',
                url:'/usefulurls',
                title:''
              },
              {
                urlname:'查看路上的风景',
                url:'beautifulpics',
                title:''
              },
              {
                urlname:'查看笔记集合',
                url:'notebox',
                title:''
              },
            ],
            usermsg:{
              nickname:'未登录用户',
              userheaderimg:require('../assets/h_defaultheaderpic.png'),
            },
          }
        },
        methods:{
          routerclick(url){
            // this.$emit('routergo',url)
            this.$router.push({ path :url})
          }
        }
    }
</script>

<style lang="scss" scoped>
  $domwidth:1333px;
  $fontcolor:#b6b6b6;
  $fontfocuscolor:#333;
  $dombgcolor:#f6f6f6;
  .header{
    background-color: $dombgcolor;
    min-width: $domwidth;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
  }
  .headerbox{
    width: $domwidth;
    height: 50px;
    margin: 0 auto;
  }
  .headerlogo{
    float: left;
    margin: 5px 62px 5px 40px;
    height: 40px;
    width: 153px;
  }
  .headerleft{
    float: left;
    height: 50px;
    line-height: 50px;
    li{
      float: left;
      color: $fontcolor;
      margin-right: 32px;
      font-size: 14px;
      &:hover{
        color: $fontfocuscolor;
        cursor: pointer;
      }
    }
  }
  .headerright{
    float: right;
    margin-right: 40px;
    height: 50px;
    >*{
      float: left;
      height: 30px;
      line-height: 30px;
      margin-top: 10px;
      margin-right: 25px;
    }
    .headersubmitbtn{
      padding: 0 25px;
      background-color: #ffea00;
      border-radius: 15px;
      &:hover{
        background-color: #f4e000;
      }
      .headersubmitbtnimg{
        padding-top: 5px;
        margin-right: 8px;
        margin-left: -8px;
      }
      >*{
        /*display: inline-block;*/
        float: left;
        font-size: 14px;
      }
    }
  }
  .headernickname{
    color: $fontcolor;
    &:hover{
      color: $fontfocuscolor;

    }
  }
  .selfheaderbox{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    &:hover{
      box-shadow: 0 0 5px #42b983;
    }
    .selfheader{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
</style>

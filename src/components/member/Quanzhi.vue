<style lang="less" scoped>
@import "../../stylesheet/variables.less";
.jobs {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 3.4rem;
  padding-top: 0.6rem;
  box-shadow: 0 0.02rem 0 #ebebeb;
  * {
    margin: 0;
    padding: 0;
  }
  .head {
    display: inline-block;
    margin-right: 0.6rem;
    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    * {
      color: @theme-color-darkgray-default;
      font-size: @theme-font-size-csmall-default;
    }
    .title {
      margin-bottom: 0.3rem;
      font-size: @theme-font-size-mtitle-default;
    }
    .row {
      span {
        margin-right: 0.12rem;
        line-height: @theme-font-lineheight-mtitle-default;
      }
      .renZheng {
        display: inline-block;
        transform-origin: center;
        transform: scale(0.75);
        width: 0.7rem;
        height: 0.4rem;
        color: #f00;
        text-align: center;
        line-height: 0.4rem;
        border: 0.02rem solid #f00;
        border-radius: 0.15rem;
      }
      .serve {
        margin-left: 0.8rem;
      }
    }
    p {
      line-height: @theme-font-lineheight-header-default;
    }
    .interaction {
      color: @theme-color-darkgray-lighter;
      span {
        margin-right: 0.6rem;
      }
    }
  }
}
</style>

<template>
  <div class="jobs" style="">
    <div class="head">
      <img :src="userSrc" alt="">
    </div>
    <div class="info">
      <h3 class="title">看电影</h3>
      <div class="row">
        <span class="home">山西</span>
        <span class="name">jemmy</span>
        <span class="renZheng">认证</span>
        <span class="serve">线下服务</span>
        <span class="hour">150/小时 </span>
      </div>
      <p>一句话描述一句话描述一句话描述一句话描述一句话描述一句话描述</p>
      <div class="interaction">
        <span class="like">点赞 2063</span>
        <span class="comment">评论 630</span>
        <span class="invite">约 TA 1686</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userSrc: "http://i2.cfimg.com/611341/c69b534d645c1d55.png"
    };
  },
  created() {
    this.consoleRouter();
  },
  methods: {
    consoleRouter() {
      console.log(this.$router.history.current.path);
      let curPath = this.$router.history.current.path;
      console.log(123213, curPath);
      this.componentName = curPath;
    }
  }
};
</script>


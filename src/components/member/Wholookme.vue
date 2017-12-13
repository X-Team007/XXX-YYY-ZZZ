<style lang="less" scoped>
@import "../../stylesheet/variables.less";
.Check {
  * {
    margin: 0;
    padding: 0;
  }
  .panel {
    h1 {
      margin-bottom: 0.12rem;
    }
    .title {
      display: inline-block;
    }
    .menu {
      display: flex;
      float: right;
      font-size: 0;
      .active {
        color: #fff;
        background: #5d86b3;
      }
      p {
        display: inline-block;
        width: 2rem;
        height: 0.8rem;
        margin-right: 0.5rem;
        color: #5d86b3;
        font-size: 0.3rem;
        line-height: 0.8rem;
        text-align: center;
        border: 0.02rem solid #5d86b3;
      }
    }
    .jobs {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      height: 3.25rem;
      padding-top: 0.6rem;
      letter-spacing: 0.04rem;
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
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding-top: 0.2rem;
        * {
          color: @theme-color-darkgray-default;
          font-size: @theme-font-size-csmall-default;
        }
        .row1 {
          display: flex;
          flex-direction: row;
          margin-bottom: 0.1rem;
          .name {
            margin-bottom: 0.1rem;
            font-size: @theme-font-size-csmall-default;
          }
          .sex {
            margin-left: 0.5rem;
          }
        }
        .row2 {
          margin-bottom: 0.1rem;
          span {
            margin-right: 0.12rem;
            line-height: @theme-font-lineheight-mtitle-default;
          }
          // .renZheng {
          // display: inline-block;
          // transform-origin: center;
          // transform: scale(0.75);
          // width: 0.7rem;
          // height: 0.4rem;
          // color: #f00;
          // text-align: center;
          // line-height: 0.4rem;
          // border: 0.02rem solid #f00;
          // border-radius: 0.15rem;
          // }
          .home {
          }
          .exp {
            margin-left: 0.2rem;
          }
        }
        .interaction {
          color: @theme-color-darkgray-lighter;
          span {
            margin-right: 0.1rem;
            padding: 0.03rem;
          }
          span:nth-child(1),
          span:nth-child(3),
          span:nth-child(4) {
            color: @theme-color-orange-lightes;
            border: 0.01rem solid @theme-color-yellow-lightes;
            box-shadow: @theme-boxshadow-border-default;
            border-radius: 0.1rem;
          }
          span:nth-child(2) {
            color: @theme-color-accent-lightes;
            border: 0.02rem solid @theme-color-accent-lightes;
            box-shadow: @theme-boxshadow-border-default;
            border-radius: 0.1rem;
          }
          span:nth-child(5) {
            color: @theme-color-red-darkest;
            border: 0.02rem solid @theme-color-red-default;
            box-shadow: @theme-boxshadow-border-default;
            border-radius: 0.1rem;
          }
        }
      }
    }
    div.jobs:nth-last-child(1) {
      box-shadow: none;
    }
    .text-align-center {
      margin-top: 0.3rem;
    }
  }
}
</style>

<template>
  <div class="viewport-ucenter-person Check">
    <div class="viewport-privacy panel">
      <h1>
        <div class="title">{{templateData.title}}</div>
        <div class="menu">
          <template v-for="(item,index) in jobs">
            <a href="javascript:;" :key="index">
              <p :key="index" :class="{'active':infoInd==index}" @click="getInfo(index)">{{item}}</p>
            </a>
          </template>
        </div>
      </h1>
      <template v-if="jobsContent.length === 0">
        <p class="tips">没有内容</p>
      </template>
      <template v-else v-for="(job,ind) in jobsContent">
        <div class="jobs" :key="ind">
          <div class="head">
            <img :src="job.userSrc" alt="">
          </div>
          <div class="info">
            <div class="row1">
              <h3 class="name">{{job.name}}</h3>
              <span class="sex">{{job.sex}}</span>
            </div>
            <div class="row2">
              <span class="home">{{job.home}}</span>
              <!-- <span class="renZheng">{{job.renZheng}}</span> -->
              <span class="exp">{{job.exp}}</span>
              <!-- <span class="hour">{{job.hour}}</span> -->
            </div>
            <!-- <p class="description">{{job.description}}</p> -->
            <div class="interaction">
              <span class="label1">{{job.label1}}</span>
              <span class="label2">{{job.label2}}</span>
              <span class="label3">{{job.label3}}</span>
              <span class="label4">{{job.label4}}</span>
              <span class="post">{{job.post}}</span>
            </div>
          </div>
        </div>
      </template>
      <el-pagination :total=" data.total " :page-size=" data.limit " :current-page=" data.begin " layout="prev, pager, next" class="text-align-center" @current-change=" selectPage " :key="ind"></el-pagination>
    </div>
  </div>
</template>

<script>
import { lang, langType } from "../../locales";
import { api, auth, uriPath } from "../../utils";
import { Pagination } from "element-ui";
import setting from "../../config/setting";

export default {
  data() {
    return {
      data: {
        begin: 0,
        total: 0,
        pages: 0,
        limit: 10,
        items: []
      },
      auth: auth(),
      lang: lang(),
      langCode: langType(),
      infoInd: "allTime",
      jobs: { allTime: "", fullTime: "", partTime: "" },
      userSrc: "http://i2.cfimg.com/611341/c69b534d645c1d55.png",
      templateData: {
        title: ""
      },
      jobsContent: [
        {
          userSrc: "http://i2.cfimg.com/611341/c69b534d645c1d55.png",
          name: "张山",
          sex: "女",
          home: "山西",
          exp: "3年工作经验",
          label1: "保姆月嫂",
          label2: "游泳健身",
          label3: "聊天",
          label4: "逛街",
          post: "全职"
        },
        {
          userSrc: "http://i2.cfimg.com/611341/c69b534d645c1d55.png",
          name: "张山",
          sex: "女",
          home: "山西",
          exp: "3年工作经验",
          label1: "保姆月嫂",
          label2: "游泳健身",
          label3: "聊天",
          label4: "逛街",
          post: "全职"
        },
        {
          userSrc: "http://i2.cfimg.com/611341/c69b534d645c1d55.png",
          name: "张山",
          sex: "女",
          home: "山西",
          exp: "3年工作经验",
          label1: "保姆月嫂",
          label2: "游泳健身",
          label3: "聊天",
          label4: "逛街",
          post: "全职"
        },
        {
          userSrc: "http://i2.cfimg.com/611341/c69b534d645c1d55.png",
          name: "张山",
          sex: "女",
          home: "山西",
          exp: "3年工作经验",
          label1: "保姆月嫂",
          label2: "游泳健身",
          label3: "聊天",
          label4: "逛街",
          post: "全职"
        },
        {
          userSrc: "http://i2.cfimg.com/611341/c69b534d645c1d55.png",
          name: "张山",
          sex: "女",
          home: "山西",
          exp: "3年工作经验",
          label1: "保姆月嫂",
          label2: "游泳健身",
          label3: "聊天",
          label4: "逛街",
          post: "全职"
        }
      ]
    };
  },
  components: {
    "el-pagination": Pagination
  },
  created() {
    this.getJobs();
    this.getJobTit();
  },
  mounted() {},
  methods: {
    getJobTit() {
      // 获取 不同组件的 标题
      let td = this.templateData;
      let ur = uriPath().split("/")[3]; // 截取路径的 字段 信息
      switch (ur) {
        case "wholookme":
          td.title = lang("memberNavV");
          break;

        case "iseewho":
          td.title = lang("memberNavIV");
          break;

        case "like":
          td.title = lang("memberNavVI");
          break;

        case "follow":
          td.title = lang("memberNavVII");
      }
    },
    getJobs() {
      // 获取 全职/兼职 字段
      let job = this.jobs;
      job.allTime = lang("allTime");
      job.fullTime = lang("fullTime");
      job.partTime = lang("partTime");
    },
    getInfo(index) {
      // 设置绑定 全职/兼职 样式类名
      this.infoInd = index;
    },
    selectPage(num) {
      // let parts = uriPath().split("/");
      let ur = uriPath().split("/")[3];
      switch (ur) { // 做路由判断
        case "wholookme":
          // this.selectTab(parts[3] ? "wholookme#" + parts[3] : null, parts[1], num);
          // 调用selectTab()方法
          console.log("wholookme");
          break;

        case "iseewho":
          // td.title = lang("memberNavIV");
          console.log("我是Iseewho");
          break;

        case "like":
          // td.title = lang("memberNavVI");
          break;

        case "follow":
          // td.title = lang("memberNavVII");
          break;
      }
    },
    selectTab(articleType, code, begin) {
      // 分页组件监听selectPage()方法，然后传参并调用
      api(
        "/article/listKnowledge",
        {
          articleType: articleType,
          articleLang: code || langType(),
          begin: begin || 1,
          limit: 10
        },
        callback => {
          if (callback.code === 200) {
            this.data = callback.data;
          }
        }
      );
    }
  }
};
</script>


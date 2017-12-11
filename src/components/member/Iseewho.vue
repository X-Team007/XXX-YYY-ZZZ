<style lang="less" scoped>
@import "../../stylesheet/variables.less";
.Check {
  * {
    margin: 0;
    padding: 0;
  }
  .panel {
    .title {
      display: inline-block;
    }
    .menu {
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
      height: 3.4rem;
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
    div.jobs:nth-last-child(1) {
      box-shadow: none;
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
            <a href="javascript:;" :key="index"><p :key="index" :class="{'active':infoInd==index}" @click="getInfo(index)">{{item}}</p></a>
          </template>
        </div>
      </h1>
      <template v-if="jobsContent.length == 0">
        <p class="tips">没有内容</p>
      </template>
      <template v-else v-for="(job,ind) in jobsContent">
        <div class="jobs" :key="ind">
          <div class="head">
            <img :src="job.userSrc" alt="">
          </div>
          <div class="info">
            <h3 class="title">{{job.title}}</h3>
            <div class="row">
              <span class="home">{{job.home}}</span>
              <span class="name">{{job.name}}</span>
              <span class="renZheng">{{job.renZheng}}</span>
              <span class="serve">{{job.serve}}</span>
              <span class="hour">{{job.hour}}</span>
            </div>
            <p class="description">{{job.description}}</p>
            <div class="interaction">
              <span class="like">{{job.like}}</span>
              <span class="comment">{{job.comment}}</span>
              <span class="invite">{{job.invite}}</span>
            </div>
          </div>
        </div>
        <!-- <el-pagination :total=" data.total " :page-size=" data.limit " :current-page=" data.begin " layout="prev, pager, next" class="text-align-center" @current-change=" selectPage " :key="ind">
        </el-pagination> -->
      </template>
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
        total: 0,
        pages: 0,
        limit: 10,
        items: []
      },
      auth: auth(),
      lang: lang(),
      langCode: langType(),
      infoInd: "fullTime",
      jobs: { fullTime: "", partTime: "" },
      userSrc: "http://i2.cfimg.com/611341/c69b534d645c1d55.png",
      templateData: {
        title: ""
      },
      jobsCon: [],
      jobsContent: [
        {
          userSrc: "http://i2.cfimg.com/611341/c69b534d645c1d55.png",
          title: "看电影",
          home: "山西",
          name: "jemmy",
          renZheng: "认证",
          serve: "线下服务",
          hour: "150/小时",
          description:
            "一句话描述一句话描述一句话描述一句话描述一句话描述一句话描述",
          like: "点赞 2063",
          comment: "评论 630",
          invite: "约 TA 1686"
        },
        {
          userSrc: "http://i2.cfimg.com/611341/c69b534d645c1d55.png",
          title: "看电影",
          home: "山西",
          name: "jemmy",
          renZheng: "认证",
          serve: "线下服务",
          hour: "150/小时",
          description:
            "一句话描述一句话描述一句话描述一句话描述一句话描述一句话描述",
          like: "点赞 2063",
          comment: "评论 630",
          invite: "约 TA 1686"
        },
        {
          userSrc: "http://i2.cfimg.com/611341/c69b534d645c1d55.png",
          title: "看电影",
          home: "山西",
          name: "jemmy",
          renZheng: "认证",
          serve: "线下服务",
          hour: "150/小时",
          description:
            "一句话描述一句话描述一句话描述一句话描述一句话描述一句话描述",
          like: "点赞 2063",
          comment: "评论 630",
          invite: "约 TA 1686"
        },
        {
          userSrc: "http://i2.cfimg.com/611341/c69b534d645c1d55.png",
          title: "看电影",
          home: "山西",
          name: "jemmy",
          renZheng: "认证",
          serve: "线下服务",
          hour: "150/小时",
          description:
            "一句话描述一句话描述一句话描述一句话描述一句话描述一句话描述",
          like: "点赞 2063",
          comment: "评论 630",
          invite: "约 TA 1686"
        },
        {
          userSrc: "http://i2.cfimg.com/611341/c69b534d645c1d55.png",
          title: "看电影",
          home: "山西",
          name: "jemmy",
          renZheng: "认证",
          serve: "线下服务",
          hour: "150/小时",
          description:
            "一句话描述一句话描述一句话描述一句话描述一句话描述一句话描述",
          like: "点赞 2063",
          comment: "评论 630",
          invite: "约 TA 1686"
        }
      ]
    };
  },
  created() {
    this.getJobs();
    this.getJobTit();
  },
  methods: {
    getJobTit() { // 获取 不同组件的 标题
      let td = this.templateData;
      let ur = uriPath().split("/")[3];
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
      let job = this.jobs;
      job.fullTime = lang("fullTime");
      job.partTime = lang("partTime");
    },
    getInfo(index) {
      this.infoInd = index;
      console.log(123, index);
    }
  }
};
</script>


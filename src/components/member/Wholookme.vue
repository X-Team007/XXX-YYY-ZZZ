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
          <template v-for="(item,key) in jobs">
            <a href="javascript:;" :key="key">
              <p :class="{active:infoKey==key}" @click="getInfo(key)">{{item}}</p>
            </a>
          </template>
        </div>
      </h1>
      <template v-if="jobsContent.length === 0">
        <p class="tips">{{lang.tips}}</p>
      </template>
      <template v-else v-for="(job,ind) in jobsContent">
        <div class="jobs" :key="ind">
          <div class="head">
            <img :src="job.userSrc" alt="">
          </div>
          <div class="info">
            <div class="row1">
              <h3 class="name">{{job.name}}</h3>
              <span class="sex" :class="{'qiye':job.sex==='企业', 'zhengfu':job.sex==='政府', 'zuzhi':job.sex==='组织'}">{{job.sex}}</span>
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
      <el-pagination :total="data.total" :page-size="data.limit" :current-page="data.begin" layout="prev, pager, next" class="text-align-center" @current-change="selectPage"></el-pagination>
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
        begin: 1, // 开始
        total: 0, // 总数、合计
        pages: 0,
        limit: 2, // 限制、极限
        items: []
      },
      auth: auth(),
      lang: lang(),
      langCode: langType(),
      infoKey: "all",
      jobs: { all: "", enterprise: "", person: "" },
      userSrc: "http://i2.cfimg.com/611341/c69b534d645c1d55.png",
      templateData: {
        title: "" // 动态模板的标题
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
    this.getJobTit(); // 获取标题 // 判断字段信息
    this.judge(); // 每次初始化获取固定参数
  },
  mounted() {},
  computed: {
    toUp() {
      let toUp = this.infoKey.toUpperCase();
      return toUp;
    }
  },
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
      // 根据语言标识路由判断当前语种 获取 全职/兼职 字段
      let job = this.jobs;
      job.all = lang("allTime");
      job.enterprise = lang("enterprise");
      job.person = lang("person");
    }, // 初始化获取标题和语言包数据
    getInfo(key) {
      this.infoKey = key;
      this.data.begin = 1;
      this.judge();
      console.log("我是点击时的getInfo");
    }, // 设置绑定 全职/兼职 样式类名; 并请求judge()进行路由判断，并通过selectTab()获取详细数据.
    selectPage(num) {
      console.log("我是分页函数");
      this.judge(num);
    },
    judge(num) {
      let parts = uriPath().split("/");
      // console.log(uriPath);
      switch (parts[3]) { // 做路由判断
        case "wholookme":
          this.selectTab("/member/listMe", num);
          console.log("我请求了wholookme");
          break;

        case "iseewho":
          this.selectTab("/member/listWho", num);
          console.log("我请求了iseewho");
          break;

        case "like":
          console.log("我是like");
          break;

        case "follow":
          console.log("我是follow");
          break;
      }
    }, // 路由判断
    selectTab(uri, number) {
      let o = {
        openID: auth().openID,
        type: this.toUp,
        begin: number || 1,
        limit: 2
      };
      api(uri, o, callback => {
        console.log(o, callback);
        if (callback.code === 200) {
          this.data = callback.data;
          this.jobsContent = [];
          let items = callback.data.items;
          for (let key in items) {
            let obj = {};
            // 判断企业/个人
            if (items[key].isEnterprise === "true") {
              switch (items[key].enterpriseType) {
                case 1:
                  console.log("企业");
                  obj.sex = "企业";
                  break;

                case 2:
                  console.log("政府");
                  obj.sex = "政府";
                  break;

                case 3:
                  console.log("组织");
                  obj.sex = "组织";
                  break;
              }
              obj.isEnterprise = items[key].isEnterprise;
              obj.userSrc = items[key].img;
              obj.name = items[key].username || items[key].mobile;
              obj.home = items[key].enterpriseAddress;
              obj.exp = items[key].enterpriseDescription;
              obj.label1 = "";
              obj.label2 = "";
              obj.label3 = "";
              obj.label4 = "";
              obj.post = "";
              this.jobsContent.push(obj);
            } else {
              obj = {
                userSrc: "items[key].img",
                name: "",
                sex: "",
                home: "",
                exp: "",
                label1: "",
                label2: "",
                label3: "",
                label4: "",
                post: ""
              };
              this.jobsContent.push(obj);
            }
            console.log(this.jobsContent);
          }
        } else {
        }
      });
    } // 分页组件监听selectPage()方法，然后传参并调用
  }
};
</script>


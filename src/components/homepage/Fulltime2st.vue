<style lang="less" scoped>
@import "../../stylesheet/variables.less";
</style>
<template>
	 <div class="viewport-fulltime1st resume">
		  <div class="wrapper flex-layout flex-layout-raw step">
                        <div class="step-common step-common-3th step-active">
                                <em>{{ lang.fulltimeStep1 }}</em>
                        </div>
                        <div class="step-common step-common-3th step-active">
                                <em>{{ lang.fulltimeStep2 }}</em>
                        </div>
                        <div class="step-common step-common-3th">
                                <em>{{ lang.fulltimeStep3 }}</em>
                        </div>
                  </div>
		  <div class="wrapper panel">
			  <h1>最近工作/实习经历</h1>
			  <form class="pure-form pure-form-aligned">
				<div class="pure-control-group label-text">
					<label>
						<em>*</em>
						公司名称
					</label>
					<input type="text" v-model="text">
				</div>
				<div class="pure-control-group label-text">
					<label>
						<em>*</em>
						行业类别
					</label>
					<input type="text" v-model="text">
				</div>
				<div class="pure-control-group label-text">
					<label>
						<em>*</em>
						职位名称
					</label>
					<input type="text" v-model="text">
				</div>
				<div class="pure-control-group label-text">
					<label>
						<em>*</em>
						职位类别
					</label>
					<input type="text" v-model="text">
				</div>
				<div class="pure-control-group label-text">
					<label>
						<em>*</em>
						工作时间
					</label>
					<input type="text" v-model="text">
				</div>
				<div class="pure-control-group label-text">
					<label>
						<em>*</em>
						现居住城市
					</label>
					<input type="text" v-model="text">
				</div>
				<div class="pure-control-group">
					<label>
						<em>*</em>
						工作描述
					</label>
					<input type="texterea" v-model="text">
				</div>
			  </form>
		  </div>
	 </div>
</template>
<script>
import { lang, langType } from "../../locales";
import { redirect, auth, api } from "../../utils";
import setting from "../../config/setting";
import { Upload, Dialog } from "element-ui";
export default {
	data: function () {
		let code = langType();
		let cache = setting.cache || {};
		let regions = cache.regions || "";
		if (regions.indexOf("-") !== -1) {
			let buffers = cache.regions.split("-");
			regions = buffers[2];

			if (buffers.length === 4) {
				regions = `${regions}/${buffers[3]}`;
			}
		}
		return {
			realname: "",
			sex: 0,
			img: "",
			birthdayYear: new Date().getFullYear(),
			birthdayMonth: new Date().getMonth() + 1,
			birthdayDay: new Date().getDate(),
			birthday: "",
			localeCountry: "",
			localeProvince: "",
			localeCity: "",
			localeTown: "",
			mobile: "",
			mobileArea: "+86",
			email: "",
			text: "",
			idcardNumber: "",
			statusIDCard: false,
			regions: regions,
			country: cache.countries,
			province: [],
			city: [],
			town: [],
			mobileAreaBuf: window.mobileArea || {},
			uploadURI: setting.pathAPI.replace("/ajax", "") + "/service/ajax/upload",
			errors: 0,
			langCode: code,
			lang: lang()
		};
	}
};
</script>

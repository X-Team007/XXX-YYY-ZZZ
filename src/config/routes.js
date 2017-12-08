import * as utils from '../utils'
import setting from './setting'
import Normalize from '../normalize.vue'
import Colors from '../components/Colors'
import Home from '../components/homepage/Home'
import News from '../components/homepage/News'
import Knowledge from '../components/homepage/Knowledge'
import Article from '../components/homepage/Article'
import Entry from '../components/homepage/Entry'
import Search from '../components/homepage/Search'
import Share from '../components/homepage/Share'
import Fulltime1st from '../components/homepage/Fulltime1st'
import Fulltime2st from '../components/homepage/Fulltime2st'

import Signin from '../components/member/Signin'
import Signup from '../components/member/Signup'
import SignupEnterprise from '../components/member/SignupEnterprise'
import SignupPerson from '../components/member/SignupPerson'
import Person from '../components/member/Person'
import Enterprise from '../components/member/Enterprise'
import PersonCenter from '../components/member/PersonCenter'
import Password from '../components/member/Password'
import Privacy from '../components/member/Privacy'
import Account from '../components/member/Account'
import Finance from '../components/member/Finance'
import Check from '../components/member/Check'
import Quanzhi from '../components/member/Quanzhi'
import Jianzhi from '../components/member/Jianzhi'

export default [{
		path: '/:lang/member',
		component: Person,
		children: [{
				path: '',
				component: PersonCenter,
				meta: {
					auth: true
				}
			},
			{
				path: 'resume', // 简历管理
				redirect: '/:lang/entry',
				meta: {
					auth: true
				}
			},
			{
				path: 'account', // 账号管理
				component: Account,
				meta: {
					auth: true
				}
			},
			{
				path: 'finance', // 财务管理
				component: Finance,
				meta: {
					auth: true
				}
			},
			{
				path: 'privacy', // 隐私设置
				component: Privacy,
				meta: {
					auth: true
				}
			},
			{
				path: 'password', // 修改密码
				component: Password,
				meta: {
					auth: true
				}
			},
			{
				path: 'info',
				meta: {
					auth: true
				}
			},
			{
				path: 'iseewho',
				component: Check, // 重定向也得写模板
				redirect: 'iseewho/quanzhi',
				children: [{
						path: 'quanzhi',
						component: Quanzhi,
						meta: {
							auth: true
						}
					},
					{
						path: 'jianzhi',
						component: Jianzhi,
						meta: {
							auth: true
						}
					}
				],
				meta: {
					auth: true
				}
			},
			// {
			// 	path: 'iseewho',
			// 	meta: {
			// 		auth: true
			// 	}
			// },
			{
				path: 'wholookme',
				redirect: 'wholookme/quanzhi'
			},
			{
				path: 'wholookme',
				component: Check, // 重定向也得写模板
				children: [{
						path: 'quanzhi',
						component: Quanzhi,
						meta: {
							auth: true
						}
					},
					{
						path: 'jianzhi',
						component: Jianzhi,
						meta: {
							auth: true
						}
					}
				],
				meta: {
					auth: true
				}
			},
			{
				path: 'like',
				meta: {
					auth: true
				}
			},
			{
				path: 'follow',
				meta: {
					auth: true
				}
			}
		]
	},
	{
		path: '/:lang/enterprise',
		component: Enterprise,
		children: [{
				path: '',
				meta: {
					auth: true
				}
			},
			{
				path: 'resume',
				meta: {
					auth: true
				}
			},
			{
				path: 'account',
				component: Account,
				meta: {
					auth: true
				}
			},
			{
				path: 'finance',
				component: Finance,
				meta: {
					auth: true
				}
			},
			{
				path: 'privacy',
				component: Privacy,
				meta: {
					auth: true
				}
			},
			{
				path: 'password',
				component: Password,
				meta: {
					auth: true
				}
			},
			{
				path: 'info',
				meta: {
					auth: true
				}
			},
			{
				path: 'iseewho',
				meta: {
					auth: true
				}
			},
			{
				path: 'wholookme',
				meta: {
					auth: true
				}
			},
			{
				path: 'like',
				meta: {
					auth: true
				}
			},
			{
				path: 'follow',
				meta: {
					auth: true
				}
			}
		]

	},
	{
		path: '/:lang',
		component: Normalize,
		children: [{
				path: '',
				component: Home
			},
			{
				path: 'entry',
				component: Entry,
				meta: {
					auth: true
				}
			},
			{
				path: 'search',
				component: null
			},
			{
				path: 'share',
				component: null
			},
			{
				path: 'team',
				component: null,
				meta: {
					auth: true
				}
			},
			{
				path: 'news',
				component: News
			},
			{
				path: 'news/:cate',
				component: News
			},
			{
				path: 'knowledge/',
				component: Knowledge
			},
			{
				path: 'knowledge/:cate',
				component: Knowledge
			},
			{
				path: 'a/:id',
				component: Article
			},
			{
				path: 'about',
				component: null
			},
			{
				path: 'privacy',
				component: null
			},
			{
				path: 'terms',
				component: null
			},
			{
				path: 'help',
				component: null
			},
			{
				path: 'signin',
				component: Signin
			},
			{
				path: 'signup',
				component: Signup
			},
			{
				path: 'signup/enterprise',
				component: SignupEnterprise
			},
			{
				path: 'signup/person',
				component: SignupPerson
			},
			{
				path: 'fulltime/first',
				component: Fulltime1st,
				meta: {
					auth: true
				}
			},
			{
				path: 'fulltime/two',
				component: Fulltime2st,
				meta: {
					auth: true
				}
			},

			{
				path: 'colors',
				component: Colors
			}
		]
	}

]

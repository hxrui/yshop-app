/* vant组件引入 */

import Vue from 'vue'

// Tabbar底部
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);

// loading组件
import { Loading } from 'vant';
Vue.use(Loading);

// 轮播组件
import {Swipe,SwipeItem} from "vant";
Vue.use(Swipe).use(SwipeItem)


// 懒加载
import {Lazyload} from "vant";
Vue.use(Lazyload)

// 栅栏宫格
import {Grid, GridItem} from 'vant';
Vue.use(Grid).use(GridItem);

// icon图标
import { Icon } from "vant";
Vue.use(Icon)


// panel面板
import { Panel } from 'vant';
Vue.use(Panel);

// 倒计时
import { CountDown } from 'vant';
Vue.use(CountDown);
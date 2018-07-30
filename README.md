# comelifeadmin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 组件
### 表格

> var grid={
	columes:[{
		title:'序号',
		key:'order'
	},{
		title:'内容',
		key:'content'
	},{
		title:'作者',
		key:'author'
	},{
		title:'创建时间',
		key:'createTime'
	}],
	data:[{
		_id:'z123',
		content:'如果你了解以前的我，也许你就会原谅现在的我1',
		author:'张爱玲',
		createTime:'2018-7-25'
	}，{
		_id:'z124',
		content:'如果你了解以前的我，也许你就会原谅现在的我2',
		author:'张爱玲',
		createTime:'2018-7-25'
	}]
}

## 开发思路
vue+vue-router+webpack+element-ui  
组件化开发方式

采用vue-router为单页面应用驱动开发，监听url为基础，若该组件含link则，含嵌套；若一个link
出口为多个视图，则用同级组件。

命名路由，命名视图。
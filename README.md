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
var grid={
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


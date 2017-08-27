## 初始化项目
```
npm init -y
```

## 安装必备插件 -- 使用者直接  `npm install` 即可
```
此处略过插件列表，详见package.json文件
```

## 项目启动方式(本地启动项目)
```
npm run dev-web
```

## 服务端启动
```
npm run dev-node
```

## 引入了weUI
> demo地址：`https://weui.io/`

> 使用方法：
- 控制台找到页面你想使用的dom元素`注意一定要找全`，
- 右键`Edit as HTML`,
- 手动拷贝到项目的render函数对应位置
- 修改拷贝的内容中`class=` 为`className=`
- 修改`style=''` 为对象形式 `style={}`,注意如果使用变量，需要再包裹一层`{}`
- 将未闭合的标签进行闭合，如拷贝过来的是`<img src....>`这样 ， 应在最后增加闭合，修改为`<img src.... />`
- 其他问题暂未碰到，后续补充


## 克隆项目
```
git clone https://github.com/sageliu/uusee.git
```

## 进到对应目录
```
cd uusee
```

## 安装必备插件 -- (插件列表详见package.json文件)
```
npm install
```

## 项目启动方式(本地启动项目)
```
npm run dev-web
```

## 服务端启动
```
npm run dev-node
```

## 合作开发规范
> 分支
- 主分支 `master`
- 开发环境分支 `develop`
- - 每个人在`develop`下建立自己的分支
>- 分支切换命令`git checkout 分支名` ，如果没有则创建并切换，有则切换

> 代码合并
- 如果你的代码本地运行没有问题，将自己的代码提交到自己的分支
```
git add .
git commit -m '你需要写的注释内容'
git pull origin 你的分支名
git push origin 你的分支名
```
- 将自己的代码提交到develop分支 
```
git checkout develop
git merge 你的分支名
```
- 再切回你自己的分支进行代码的开发
```
git checkout 你的分支名
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

## 我们的代码主要写在`client`文件夹下
> 下面简单介绍下`client`下存放的每个文件夹的作用及规范
- components    组件的文件夹
- - Wrap  有header和footer的页面的包裹层    --不建议操作
- - MHeader     公共头部    -- 目前没有写
- - MFooter     公共底部    -- 目前只是写了一个临时版本的
- - 注意这里的文件夹的下级目录建议一个index.js，一个index.less(视实际情况添加) 
- containers    页面级组件文件夹
- - Home        主页       -- 需要完善
- - profile     个人中心页  -- 需要完善
- main          入口文件文件夹
- - main.js     项目入口文件
- redux         redux相关内容文件夹    -- 现在是空的，预留
- template      模板文件夹
- - fullPage      没有header和footer的页面的模板， -- 预留
- - index.html  主模板文件

## router文件夹下
> 主要存放的是api接口
- 本地启动node服务端
```
npm run dev-node
```
- 可以本地测试一下接口
```
http://localhost:16666/api/homepage
```
对应的是 `mock` 文件夹下的`api`文件夹下的`homePage.json`中的数据

## mock文件夹下
> 主要存放的是模拟的数据
- 放在`api`文件夹下，例如`homePage.json`文件夹存放的是主页的数据
- 如果需要创造数据，请写到对应页面的json文件中

## 关于自己模拟数据
> 
- 监听请求写在`router/api.js`中，
- 模拟的数据写在`mock/api/`这个文件夹下，自己对应的写一个json文件
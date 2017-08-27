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


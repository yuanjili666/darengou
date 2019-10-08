# 项目环境的配置
>基于create-react-app创建的项目环境
>react-app-rewired 对create-react-app进行自定义配置

**环境相关依赖**
- react-app-rewired      //这是ant
- customize-cra
- babel-plugin-import

```javascript
    yarn add react-app-rewired customize-cra babel-plugin-import --dev
```


# 技术栈
- 高阶组件
- react-router-dom       //路由跳转
- redux      //公共状态管理
- react-redux      //  ui组件 容器组件的拆分， 频繁的引入store， 每个组件都需要做监听 以及触发
- redux-actions     // redux-actions的产生，是为了简化redux的使用。
- redux-thunk    //中间件，主要是解决异步请求数据的时候要把数据存在store中
- whatwg-fetch     //主要是用于请求数据
- react-loadable    //主要是react的路由懒加载，解决单文件spa中首屏加载白屏现象，这个添加了一个loading
- qs     //fetch 在post请求的时候需要用到
- styled-components     //css组件化
- http-proxy-middleware   //用于解决
- @babel/plugin-proposal-decorators 装饰器

```javascript
    yarn add react-router-dom redux react-redux redux-actions redux-thunk whatwg-fetch react-loadable qs styled-components
```



# 装饰器出现的问题
- @babel/plugin-transform-react-jsx-source  安装
- react-scripts  安装




# 装饰器使用流程(基于create-react-app)
- git add .    git commit -m "xxx"
- npm run eject
- 安装 yarn add  @babel/plugin-proposal-decorators  --dev
- 找到package.json文件中的babel属性
    ```javascript
        "plugins": [
        [
            "@babel/plugin-proposal-decorators",
            {
            "legacy": true
            }
        ]
        ]
    ```
- 
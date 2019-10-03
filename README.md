# 项目环境的配置

>基于create-react-app    创建的项目环境
>react-app-rewired  对 create-react-app 进行自定义配置

**环境相关依赖**
> react-app-rewired
>customize-cra
>babel-plugin-import

```javascript
    yarn add react-app-rewired customize-cra babel-plugin-import-dev
```
# 技术栈
- 高阶组件
- react-router-dom
- redux
- react-redux
- redux-actions
- redux-thunk
- whatwg-fetch
- react-loadable
- qs
- styled-components
- http-proxy-middleware
- @babel/plugin-proposal-decorators 装饰器
- js-cookie

```javascript
    yarn add react-router-dom redux react-redux redux-actions  whatwg-fetch redux-thunk react-loadable qs styled-components 

```

- http.js  请求数据的封装使用

- 登录注册基本编辑


- tabBar 显示/隐藏控制方法{
    创建一个layout，在这个layout组件中引入tabBar组件，通过{this.props.children}来显示组件标签内的元素/组件
    路由配置项中的meta携带flag 属性的true/false来控制是否渲染  <tabBar/> 这个组件
    那么整个<layout/> 在哪里使用呢？  这个在路由的遍历中去使用，renderRoutes.js 中使用
    这样就实现了控制是否显示了
    {其实老赵也想过通过高阶组件的反向继承来实现，结果不会，后台自己想办法整理一下}
}

- 201910031840 代理跨域   yarn add http-proxy-middleware --dev
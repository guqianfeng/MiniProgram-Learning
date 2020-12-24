# 学习微信小程序

## 小程序中使用less
* 使用vscode
* 安装easy less
* 配置
```json
{
    "workbench.iconTheme": "vscode-icons",
    "editor.fontSize": 18,
    "editor.tabSize": 2,
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "git.autofetch": true,
    "files.associations": {
        "*.cjson": "jsonc",
        "*.wxss": "css",
        "*.wxs": "javascript"
    },
    "emmet.includeLanguages": {
        "wxml": "html"
    },
    "minapp-vscode.disableAutoConfig": true,
    "less.compile": {
        "outExt": ".wxss"
    }
}
```
* 安装CSS Tree
* 选中页面, Ctrl+Shift+P, 选中generate css tree, 就可以生成 

## 压缩图片文件

* [tinypng](https://tinypng.com/)

## 手机屏幕尺寸&&设计稿规范

* [手机屏幕尺寸](https://uiiiuiii.com/screen/)
* [设计稿规范](https://www.25xt.com/appsize)

## 内容安全接口

* [官方文档](https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/Content_Security_API.html)
* [例子参考](https://zhuanlan.zhihu.com/p/121613584)

## 实战项目
* [接口文档](https://www.showdoc.cc/128719739414963?page_id=2513235043485226)
* [发布小程序](https://mp.weixin.qq.com/)

## 适配的相关问题
* 标准规范iphone6尺寸750 * 1334，状态栏高40，导航栏高88
* [微信小程序自定义navigationBar顶部导航栏，兼容适配所有机型（附完整案例）](https://www.jianshu.com/p/b7d92192d97b)
* 小程序scroll-view的问题 - 根据不同手机的屏幕，如果使用百分比布局，会出现无法滚动的问题，所以在外面套一层父级，父级的父级使用flex布局，这样父级flex：1就能撑满，同时给scroll-view高度设置百分百，这里注意个问题，父级虽然flex：1能撑满，但也需要设置高度，否则依然不能滚动

## taro踩坑建议

* 根据官方文档快速开始，注意如果安装依赖sass相关报错，可以先执行`npm install -g mirror-config-china`
* 开发者工具不显示云开发按钮，可以更新工具版本，其次注意appId要用真实的不能用测试的，还要注意要用小程序的appid，如果用小游戏也是会有问题的
* 云开发模板，使用微信开发者工具调试项目，请将项目 整个文件夹 作为运行目录。 注意： 不是 client 中生成的 dist 文件夹
* 路由跳转获取参数 - @tarojs/taro中解构Current，然后通过`Current.router.params`
* 安装tao-ui时,如果出现报错，可以尝试安装taro-ui版本，因为目前taro ui2.+和taro3.+版本不兼容,使用以下命令可解决`npm install taro-ui@3.0.0-alpha.3`
* 下拉刷新最外层不能用scroll-view,否则无法触发，[这里有同款遇到这个坑的兄弟](https://blog.csdn.net/ygy211715/article/details/109032482)


## 其他

* [分享功能](https://www.jianshu.com/p/3e47f000bb64) - 设置button的open-type属性,然后在函数onShareAppMessage中实现
* [小程序云函数读取阿里云数据库](https://www.jb51.net/article/167160.htm)
* [云函数登陆功能](https://gitpress.io/@rainy/weixin-authorization)
* 一开始导航栏标题不显示，通过滚动一定范围后在显示，可以通过API`setNavigationBarTitle`设置
* `Taro.getSystemInfoSync();`获取手机型号及系统等
* [支付相关-csdn大佬](https://blog.csdn.net/gf771115/article/details/100917779), [支付相关-掘金大佬](https://juejin.cn/post/6909458628667768839)

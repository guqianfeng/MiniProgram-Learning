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

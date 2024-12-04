# my-website


## 这是什么

这是一个学校作业玩具项目，同时也会在重新设计之后成为我的正式个人网站。

[我的个人网页](https://fiy-pc.github.io/my-website/)

## 如何使用本仓库

在开始之前，确保你已安装以下软件：

- [Node.js](https://nodejs.org/) （版本建议：18.x 或更高版本）
- [npm](https://www.npmjs.com/) (通过Node.js官网安装包安装Node.js时将会被自动安装)

> **Node.js** 和 **npm** 是前端开发的基础工具。如果你还没有安装，请访问 Node.js 官网，安装完成后 `npm` 会自动安装。



### 使用方法

1. 克隆本仓库到本地

2. 进入website文件夹

   ```shell
   cd your/path/to/repo/website
   ```

   ​

3. 安装依赖

   ```shell
   npm install
   ```

4. 运行开发服务器

   ```shell
   npm start
   ```

   ​

通过上面的步骤，你可以启动基本的开发环境并能在本地查看网页，你对代码所做的任何更改都会被实时渲染到本地打开的页面上，所有的JS代码错误也会被自动检查。

### 如何做进一步的开发

确保你已经有了一定的HTML,CSS,JS基础，你可以通过[React中文文档](https://zh-hans.react.dev/)学习如何使用React进行网页开发。

### 如何部署更改后的网站

#### github page部署方法

1. 安装gh-pages包

   ```shell
   npm install gh-pages
   ```

   ​

2. 打开APP.js，找到App组件js代码，将<Router >组件后的basename参数改成`/你的仓库名`

   ```react
   <Router basename="/your-repo-name">
       ...
   </Router>
   ```

   ​

3. 打开package.json，找到homepage条目，将后面的网站改成你的仓库地址

   ```json
   {
       "homepage": "your-repo-url"
   }
   ```

   ​

4. 执行部署命令

   ```shell
   npm run deploy
   ```

   ​


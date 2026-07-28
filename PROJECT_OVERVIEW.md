# 当前文件夹代码和内容说明

## 1. 当前文件夹总体情况

当前工作目录是：

```text
D:\GitHubProjects\Qingnilai-Digital-Twin
```

目录中包含两类内容：

- 仓库根目录下的干净 Web 项目源码：`index.html`、`style.css`、`script.js`、`images/`、`videos/` 等。
- 本机 `Trae/` 混合目录：包含 Trae/Electron 运行程序、依赖、日志、资源包，以及一份重复的网页源码。

真正应该作为项目源码维护和上传的是仓库根目录下的静态 Web 项目。`Trae/` 目录属于本机运行环境混合产物，体积大、包含依赖和二进制文件，已加入 `.gitignore`，不应提交。

## 2. 仓库根目录主要内容

```text
.
├── index.html
├── style.css
├── script.js
├── images/
├── videos/
├── README.md
├── PROJECT_OVERVIEW.md
├── PROJECT_DESIGN.md
└── .gitignore
```

### `index.html`

项目主入口文件，定义页面结构和功能区域。主要包含：

- 顶部导航：`首页`、`康养中心`、`宝藏铺`、`酒店预订`、`旅趣营`、`我的`。
- 首页内容：青海介绍视频、热门景点容器、个性化行程输入框。
- 康养中心页：地点搜索和康养结果展示区域。
- 酒店预订页：类型筛选、酒店搜索、酒店卡片容器。
- 宝藏铺页：产品分类筛选、产品搜索、产品展示容器。
- 旅趣营页：游客广场、意见箱、发布弹窗。
- 我的页：用户信息、订单、收藏和更多入口。
- 多个弹窗：景点详情、产品详情、酒店详情、支付方式、银行卡支付、二维码支付、发帖等。

### `style.css`

项目样式文件，负责整体视觉与响应式布局。主要覆盖：

- 页面基础字体、背景、容器布局。
- 顶部导航横向滚动和选中状态。
- 视频容器、图片网格、卡片 hover 效果。
- 景点、康养、酒店、产品、收藏、订单等卡片样式。
- 弹窗、支付表单、二维码占位、按钮和输入框样式。
- 移动端响应式适配。

### `script.js`

项目核心交互脚本，包含静态数据和页面逻辑。主要数据结构包括：

- `attractionsData`：青海景点数据。
- `foodData`：地方美食和适老化饮食推荐数据。
- `wellnessData`：康养中心数据。
- `hotelsData`：酒店和民宿数据。
- `treasuresData`：农牧产品、手工艺品、饮品、文创产品数据。
- `plazaData`：旅趣营广场帖子数据。
- `ordersData`：订单示例数据。
- `favoritesData`：收藏示例数据。

主要逻辑包括：

- 页面导航切换。
- 景点、康养、酒店、产品列表渲染。
- 搜索和分类筛选。
- 详情弹窗打开与关闭。
- 收藏、下单、删除订单、模拟支付。
- 旅趣营发帖和意见箱提交。
- 根据用户输入生成简易个性化行程建议。

### `images/`

页面所需图片资源目录，包含：

- 景点图片：`attraction-*`
- 农牧产品图片：`agri-*`
- 手工艺品图片：`craft-*`
- 饮品图片：`drink-*`
- 文创图片：`culture-*`
- 酒店图片：`hotel-*`
- 商品图片：`product-*`
- 康养中心图片：`wellness-*`
- 用户头像：`avatar-*`

这些资源是页面展示所必需，应保留在仓库中。

### `videos/`

首页视频资源目录，目前包含：

```text
videos/qinghai-intro.mp4
```

该视频用于首页展示青海生态旅游氛围。

### `.gitignore`

用于防止误提交依赖、缓存、日志、密钥、本机 IDE 文件和 Trae/Electron 运行时目录。重点忽略：

- `node_modules/`
- `.env`、`.env.*`
- `*.log`
- `.venv/`、`venv/`
- `dist/`、`build/`、`coverage/`
- `.idea/`、`.vscode/`
- `Trae/`
- `*.dll`、`*.exe`、`*.pak`、`*.asar`

## 3. `Trae/` 混合目录说明

`Trae/` 目录中存在一份可运行网页源码：

```text
Trae/index.html
Trae/style.css
Trae/script.js
Trae/images/
Trae/videos/
```

同时也包含大量不应进入 Git 仓库的本机程序文件：

```text
Trae/Trae.exe
Trae/*.dll
Trae/*.pak
Trae/node_modules/
Trae/resources/
Trae/locales/
Trae/tools/
Trae/bin/
Trae/debug.log
```

这些内容更像是 Trae 客户端或 Electron 应用运行目录，不是项目源码。为了仓库安全和体积控制，当前 Git 只维护根目录下的干净源码。

## 4. 运行方式

在仓库根目录运行：

```bash
python -m http.server 8000
```

浏览器访问：

```text
http://127.0.0.1:8000/
```

## 5. 已知问题

- 当前项目是纯前端静态原型，没有后端接口和数据持久化。
- 支付流程仅用于演示，不连接真实支付系统。
- 如果直接运行 `Trae/` 下的重复源码，曾发现二维码占位图片引用缺失；根目录版本已改为 CSS 占位样式。

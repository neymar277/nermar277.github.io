# EDMG - Enhanced Dynamic Motion Generation

## 🎯 项目简介

EDMG（Enhanced Dynamic Motion Generation）是一个创新的动态运动生成项目的官方主页。本网站展示了最新的研究成果、技术方法和实验结果。

**🌐 在线访问**: [https://neymar277.github.io](https://neymar277.github.io)

## 📁 项目文件结构

```
EDMG/
├── index.html              # 🏠 主页面文件
├── styles.css              # 🎨 样式文件
├── script.js               # ⚡ 交互脚本
├── _config.yml             # ⚙️ GitHub Pages配置
├── .gitignore              # 📝 Git忽略文件
├── README.md               # 📖 项目说明
├── EDMG.mp4               # 🎬 项目演示视频
└── EDMG_5191 (13).pdf     # 📄 论文PDF文件
```

## ✨ 网站特色功能

- **📱 响应式设计** - 完美适配桌面端、平板和移动设备
- **🎨 现代化界面** - 采用最新的Web设计趋势和用户体验标准
- **⚡ 高性能优化** - 优化的CSS和JavaScript，确保快速加载
- **🎬 视频展示** - 集成项目演示视频播放
- **📊 数据可视化** - 直观的实验结果和性能对比图表
- **💻 代码集成** - 集成GitHub仓库和代码示例
- **📄 论文下载** - 直接下载论文PDF文件

## 🚀 快速部署到GitHub Pages

### 方法一：直接上传到GitHub

1. **创建仓库**: 在GitHub创建名为 `neymar277.github.io` 的仓库
2. **上传文件**: 将以下文件上传到仓库根目录：
   ```
   ✅ index.html
   ✅ styles.css
   ✅ script.js
   ✅ _config.yml
   ✅ .gitignore
   ✅ README.md
   ```
3. **等待部署**: 5-10分钟后访问 `https://neymar277.github.io`

### 方法二：使用Git命令行

```bash
# 1. 克隆仓库
git clone https://github.com/neymar277/neymar277.github.io.git
cd neymar277.github.io

# 2. 复制项目文件
# 将EDMG目录中的所有文件复制到仓库根目录

# 3. 提交并推送
git add .
git commit -m "Add EDMG project homepage"
git push origin main
```

## 🛠️ 技术栈

- **HTML5** - 语义化标记和现代Web标准
- **CSS3** - Flexbox/Grid布局、CSS变量、动画效果
- **JavaScript ES6+** - 现代JavaScript特性和API
- **响应式设计** - 移动优先的设计理念
- **Web字体** - Google Fonts (Inter字体)
- **图标库** - Font Awesome 6

## 📋 主要功能模块

### 1. 导航系统
- 固定顶部导航栏
- 平滑滚动到对应section
- 移动端汉堡菜单
- 当前页面高亮显示

### 2. 内容展示
- 项目介绍和论文摘要
- 方法概述的卡片式展示
- 实验结果表格和图表
- 代码仓库和资源链接
- 视频演示播放

### 3. 交互功能
- 一键复制引用信息
- 响应式视频播放器
- 滚动动画效果
- 移动端优化

### 4. 文件集成
- 论文PDF下载链接
- 演示视频嵌入播放
- GitHub仓库链接

## 🎨 自定义配置

### 修改项目信息

编辑 `index.html` 中的以下部分：

```html
<!-- 更新项目标题 -->
<h1 class="hero-title">您的项目名称</h1>
<p class="hero-subtitle">项目副标题</p>

<!-- 更新论文摘要 -->
<p class="abstract-text">
    您的论文摘要内容...
</p>

<!-- 更新作者信息 -->
<span>作者: 您的姓名</span>
```

### 更新文件链接

确保以下文件路径正确：

```html
<!-- 论文PDF链接 -->
<a href="./EDMG_5191 (13).pdf" target="_blank">下载论文PDF</a>

<!-- 演示视频 -->
<source src="./EDMG.mp4" type="video/mp4">

<!-- GitHub仓库链接 -->
<a href="https://github.com/neymar277/EDMG" target="_blank">
```

### 主题定制

在 `styles.css` 的 `:root` 部分修改CSS变量：

```css
:root {
    --primary-color: #2563eb;    /* 主色调 */
    --secondary-color: #64748b;  /* 次要色调 */
    --accent-color: #0ea5e9;     /* 强调色 */
}
```

## 📊 性能指标

- **首次内容绘制 (FCP)**: < 1.5s
- **最大内容绘制 (LCP)**: < 2.5s
- **累积布局偏移 (CLS)**: < 0.1
- **首次输入延迟 (FID)**: < 100ms

## 🔧 浏览器兼容性

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+
- ⚠️ Internet Explorer 不支持

## 📈 SEO优化

网站已包含完整的SEO优化：

- Meta标签优化
- Open Graph协议
- 结构化数据
- 语义化HTML标签
- 响应式设计

## 🔍 故障排除

### 常见问题

1. **404 Not Found**
   - 检查仓库名是否为 `neymar277.github.io`
   - 确认 `index.html` 在根目录
   - 等待5-10分钟部署时间

2. **视频无法播放**
   - 检查 `EDMG.mp4` 文件是否已上传
   - 确认视频文件格式和编码

3. **样式不显示**
   - 检查 `styles.css` 文件路径
   - 确认CSS文件编码为UTF-8

4. **PDF无法下载**
   - 检查 `EDMG_5191 (13).pdf` 文件是否已上传
   - 确认文件名和路径正确

## 📞 技术支持

如遇到问题，可以：

1. 查看GitHub Pages官方文档
2. 检查仓库的Actions标签页（部署日志）
3. 在GitHub Issues中寻求帮助

## 📄 许可证

本项目采用 MIT 许可证。详情请参阅 LICENSE 文件。

## 🎉 致谢

感谢所有为这个项目做出贡献的开发者和研究者。

---

**🌟 如果这个项目对您有帮助，请给个Star支持一下！**

**📧 联系方式**: 通过GitHub Issues或Pull Requests与我们交流

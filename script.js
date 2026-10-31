<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>我的接单作品集</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- 导航栏 -->
<nav class="navbar">
    <div class="logo">我的接单作品集</div>
    <ul class="nav-links">
        <li><a href=" ">首页</a ></li>
        <li><a href="#services">服务</a ></li>
        <li><a href="#works">作品</a ></li>
        <li><a href="#contact">联系我</a ></li>
        <li><a href="admin.html">后台</a ></li>
    </ul>
</nav>

<!-- 首屏 -->
<section class="hero" id="home">
    <h1>你好，我是前端开发者</h1>
    <p>专注为个人、学生和小商家提供官网、活动页、简单系统开发服务</p >
    <a class="btn" href="#contact">立即咨询</a >
</section>

<!-- 服务 -->
<section class="section" id="services">
    <h2 class="section-title">我的服务</h2>
    <div class="cards">
        <div class="card">
            <h3>单页宣传页</h3>
            <p>产品介绍、活动宣传、个人主页，1-3天交付</p >
            <p class="price">300元起</p >
        </div>
        <div class="card">
            <h3>企业/个人官网</h3>
            <p>5页以内展示型网站，含首页、关于、服务、作品、联系</p >
            <p class="price">800元起</p >
        </div>
        <div class="card">
            <h3>简单后台系统</h3>
            <p>用户注册登录、留言管理、数据展示等基础功能</p >
            <p class="price">2000元起</p >
        </div>
    </div>
</section>

<!-- 作品 -->
<section class="section" id="works">
    <h2 class="section-title">作品案例</h2>
    <div class="cards">
        <div class="card">
            <h3>个人作品集网站</h3>
            <p>展示个人技能、服务项目和联系方式，适合接单使用</p >
        </div>
        <div class="card">
            <h3>活动宣传页</h3>
            <p>简洁大气的活动介绍页面，支持报名和留言</p >
        </div>
        <div class="card">
            <h3>简单登录系统</h3>
            <p>用户注册、登录、信息校验，适合课程设计和小工具</p >
        </div>
    </div>
</section>

<!-- 联系 -->
<section class="section" id="contact">
    <h2 class="section-title">联系我</h2>
    <form class="contact-form" id="contactForm">
        <input type="text" id="name" placeholder="你的称呼" required>
        <input type="text" id="contactInfo" placeholder="微信 / 手机号" required>
        <input type="text" id="budget" placeholder="预算（选填）">
        <textarea id="message" rows="5" placeholder="说说你的需求，比如：想要一个几页的官网、什么时候要" required></textarea>
        <button type="submit">提交需求</button>
        <p class="tip">提交后，需求会保存到后台，我会尽快联系你。</p >
    </form>
</section>

<footer>
    © 2026 我的接单作品集 | 用技术创造价值
</footer>

<script src="script.js"></script>
</body>
</html>
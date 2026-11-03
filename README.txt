网站修改说明（2026-11-03）
================================

本次修改 25 个 .htm 文件。图片、样式、脚本文件一律未动。

1) 邮箱替换
   全站页脚 + Contact Us 页面里的
       baoqing.zhao@cangzhou-qinghong-foundry.com.cn
   统一改为 info@cangzhou-qinghong-foundry.com.cn，
   连 mailto: 链接一起改，点击直接唤起邮件客户端。
   顶部条未改动（仍为 jun.zhao@）。

2) 页脚导航乱码修复
   20 个页面的页脚 About Us / Products 两行被之前一次全局替换改坏，
   中间漏出半截邮箱字符串，渲染成乱码且链接失效。
   已恢复为完整 7 项导航，路径按各页层级重算，176 条链接全部可通。

3) 询盘表单改为 mailto 提交
   13 个页面（首页、Service、Online Complaint、10 个产品页）的表单
   原来提交到 /index.php，静态站点上必然 404。
   现在点提交会自动生成邮件：收件人 info@，主题与正文自动填好
   （姓名、公司、电话、邮箱、国家、所在页面、勾选产品、留言）。
   依赖客户电脑的默认邮件程序。

4) 兜底提示
   在上述 13 个页面表单底部加了一行：
       Or e-mail us directly at info@cangzhou-qinghong-foundry.com.cn
   用于接住没有默认邮件程序（如用网页版邮箱）的访客。

5) 顶部搜索框
   原来提交到 /index.php/Search，静态站点上搜不出结果。
   已改为 Google 站内搜索（site:cangzhou-qinghong-foundry.com.cn + 关键词）。

如何上传
================================
1. 解压本压缩包，得到一个文件夹
2. 打开 github.com/andyzhou1976-droid/andyzhou1976-droid.github.io
3. 点 Add file -> Upload files
4. 把文件夹里【全部内容】拖进去（含 about-us、products 等子文件夹）
5. Commit，等 1 分钟左右自动生效

注意：拖的时候要拖文件夹里面的内容，不要只拖外面那一层。
建议上传后打开 3 个页面抽查：首页、contact-us/contact-information、任一产品页。

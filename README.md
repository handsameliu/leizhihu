# leizhihu
类知乎论坛，网站规划作业

> 使用nodejs进行开发，前台使用flatUI进行搭建，使用jquery进行数据交互及页面dom的交互。
> 后台使用express进行开发，使用mvc三层架构。使用mongoose数据库管理包对数据库进行操作。（由于是nosql类型数据库并无sql语句）
> 数据库在实际开发过程中有过修改，只保留了基本的功能。目前有发帖及回复，登陆及注册，后台后屏蔽用户和帖子以及恢复用户和帖子的权限操作。

> 启动方式：

```
    1. 安装nodejs以及mongodb数据库
    2. 进入文件夹根目录后在命令行输入npm install 安装包依赖文件
    3. 启动这个应用（MacOS 或 Linux 平台）：
            DEBUG=myapp npm start
       Windows 平台使用如下命令：
            set DEBUG=myapp & npm start 
    4. 然后在浏览器中打开 http://localhost:3000/  进入网址。
    5. 进行注册  http://localhost:3000/signUp 
```

# 类知乎论坛需求文档

**数据库设计**
**前台界面设计**
**后台界面设计**

## 数据库设计
> 采用nosql的mongodb数据库，在win10系统下开发。（需提前安装nodejs，mongodb数据库）

##### users  用户
|字段|含义|
|:--|:--|
|_id|id|
|username|用户名|
|password|密码|
|email|邮箱|
|pbone|手机号|
|isType|用户状态 0正常，-1封禁，3超级管理员|

##### subjects  专题
|字段|含义|备注|
|:--|:--|:--|
|_id|id||
|_name|专题名称||
|about|专题简介||
|creator|创建者|关联users|
|questionNum|问题数|专题下问题的总数|
|essenceNum|精华数|专题下被表位精华的总数|
|followNum|关注数|专题下被关注数|

##### comments  评论or文章
|字段|含义|备注|
|:--|:--|:--|
|_id|d| |
|title|标题| |
|content|内容| |
|subject|所属专题|数组可以存多个，关联subjects|
|time|发表时间| |
|user|发表用户|关联users|
|isType|文章状态|0正常显示，-1不予显示|
|isGenre|当前留言的状态是文章还是评论|0评论，1留言|
|quoteArticle|引用的文章|不关联任何表，只存id，因为评论有可能还有评论|
|attention|关注度|被关注数|
|praiseNum|点赞数| |
|lowNum|踩数| |

##### mySpace	个人空间(每个我操作过的所有文章或跟帖都会有记录)
|字段|含义|备注|
|:--|:--|:--|
|_id|id||
|user|用户id|关联users|
|contentId|被关联的内容id||
|isType|文章状态|0回答，1,关注，2收藏，3提问，4分享|

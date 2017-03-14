# leizhihu
类知乎论坛，网站规划作业

# 类知乎论坛需求文档

**数据库设计**
**前台界面设计**
**后台界面设计**

## 数据库设计
> 采用Access2013数据库，win10系统。

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
|字段|含义|
|:--|:--|:--|
|_id|id||
|title|标题||
|content|内容||
|subject|所属专题|数组可以存多个，关联subjects|
|time|发表时间||
|user|发表用户|关联users|
|isType|文章状态|0正常显示，-1不予显示|
|isGenre|当前留言的状态是文章还是评论|0评论，1留言|
|quoteArticle|引用的文章|不关联任何表，只存id，因为评论有可能还有评论|
|attention|关注度|被关注数|
|praiseNum|点赞数||
|lowNum|踩数||

##### mySpace	个人空间(每个我操作过的所有文章或跟帖都会有记录)
|字段|含义||
|:--|:--|:--|
|_id|id||
|user|用户id|关联users|
|contentId|被关联的内容id||
|isType|文章状态|0回答，1,关注，2收藏，3提问，4分享|

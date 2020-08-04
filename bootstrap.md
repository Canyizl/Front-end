## 基本框架

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no">
    <title></title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
</head>
<body>
    <div class="container">

    </div>
</body>
    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
</html>
```

## 前端网站

https://www.bootcss.com/  							Bootstrap

https://www.swiper.com.cn/  	 					Swiper

https://dev.dcloud.net.cn/mui/ 	 				 MUI

https://sui.thinkadmin.top/             				 SUI

### 容器

##### 	1.流体容器

##### 	2.固定容器

​							阈值											 		width

​					大于等于1200	(大屏PC)					1170（1140+槽宽）

​					

​					大于等于992	(中屏PC)						970（940+槽宽）

​						小于1200				



​					大于等于768	（平板）						750（720+槽宽）

​						小于992



​					小于768	（移动手机）								auto

##### 	3.栅格系统



### 栅格源码分析

##### 	1.流体容器&固定容器 公共样式

​			margin-right: auto;

​			margin-left: auto;

​			padding-left:15px;

​			padding-right:15px;

##### 	2. 固定容器	特定样式

​			 顺序不可变(移动优先)

​				@media(min-width:@screen-sm-min){

​						width:@container-sm;

​					}

​				@media(min-width:@screen-md-min){

​						width:@container-md;

​					}

​				@media(min-width:@screen-lg-min){

​						width:@container-lg;

​					}

##### 	3.行

​				margin-left: -15px;

​				margin-right: -15px;

##### 	4.列	

###### 			.make-grid-columns() ---->

​				.col-xs-1, .col-sm-1, col-md-1, .col-lg-1

​				.col-xs-2, .col-sm-2, col-md-2, .col-lg-2

​				····················

​				.col-xs-12, .col-sm-12, col-md-12, .col-lg-12{

​						position: relative;

​						min-height: 1px;

​						padding-left: 15px;

​						padding-right: 15px;

​				}



###### 		     .make-grid(xs)----->

​				float-grid-columns(@class);

​						/* 	col-xs-1, col-xs-2, ········，col-xs-12{

​									float : left;

​						}  */

​				.loop-grid-columns(@grid-columns, @class, width);

​						/*  col-xs-12 { width : 12/12;}

​						                  .....

​						  col-xs-1 {width: 1/12;}   */



​				.loop-grid-columns(@grid-columns, @class, pull);				.loop-grid-columns(@grid-columns, @class, push);

​													(列排序)

​				      /* push 											pull

​		.col-xs-push-12{left:12/12;}       .col-xs-pull12{right:12/12;}

​												.....................

​		.col-xs-push-1{left:1/12;}			.col-xs-pull-1{right:1/12;}

​		.col-xs-push-0{left: auto;}		   .col-xs-pull-0{right: auto;}						

​				.loop-grid-columns(@grid-columns, @class, offset);

​												（列偏移）

​					/* .col-xs-offset-12{margin-left:12/12;}

​									..............

​						.col-xs-offset-1{margin-left:1/12;}

​						.col-xs-offset-0{margin-left:0;}  */

### 响应式工具

​			visible-xs

​			hidden-xs



### 栅格盒模型设计的精妙之处

​		容器上两边具有15px的padding

​		行		两边具有-15px的margin

​		列		两边具有15px的padding



​	为了维护槽宽的规则，

​					列两边必须得有15px的padding

​	为了能使列嵌套行

​					行两边必须得有-15px的margin

​	为了让容器可以包裹住行

​					容器两边必须得有15px的padding

​	
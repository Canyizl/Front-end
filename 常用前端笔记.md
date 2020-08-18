### 弹出窗口为新建网页

```html
<a href="#" target="_blank"/><a>
```

### 点击图片放大

​				bootstrap-viewer

```html
 <img src=".." class="viewer img-responsive">
```

### 栅格自定义

```html
col-md-pull-2 col-md-push-2
```

### 轮播图两侧阴影

```html
.carousel-control.left {
      background-image:none;
      background-repeat: repeat-x;
      background-color: #80000000;
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=0.8);
    }
    .carousel-control.right {
      left: auto;
      right: 0;
      background-image:none;
      background-repeat: repeat-x;
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=0.8);
    }
```

### 背景渐变色

```html
background:linear-gradient(235deg,#BBDCE6,#ffffff,#CECECE);
```

### 轮播图

```html
data-xxx
data-interval="5000"
data-pause="hover"
data-wrap="true"

<!--关闭轮播--> data-interval="false"
```


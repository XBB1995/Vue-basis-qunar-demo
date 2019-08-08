# qunar

## 开发过程中遇到的问题及解决方式

+ 轮播图中图片宽高自适应，同时保证位置的稳定
1.      .wrapper {
           width: 100%;
           height: 0;
           overflow: hidden;
           padding-bottom: 26.66%;
           .swiper-img {
               width: 100%;
           }
       }
       配置高度为0，padding-bottom与宽度与图片比例相同
2.      .wrapper {
           width: 100%;
           height: 26.66vw;
           .swiper-img {
               width: 100%;
           }
       }
       设置高度的单位为视口中的vw
       
+ 轮播组件上圆点颜色设置问题
1.     .wrapper /deep/ .swiper-pagination-bullet {
           opacity: 0.4;
           background-color: #fff;
       }
       .wrapper /deep/ .swiper-pagination-bullet-active {
           opacity: 1;
       }
       通过/deep/指令 实现样式穿透
       
+ 做可滑动式地icon菜单栏时，对icon做v-for无法实现生成滑动的第二页icon
1. 借助计算属性computed获取页数数组pages，通过pages动态生成滑动icon菜单栏的多页

+ 文字太长，需要将末尾的文字转化成...，引入scss中的@mixin
1. 定义

    @mixin text-ellipsis() {
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
    }
   
2. 使用

    @include text-ellipsis;
   
   如果不生效，可以尝试为元素tag增加属性 => tag{min-width: 0;}

+ 1像素边框问题
1. 在main.js主入口文件中加载border.css文件，并在需要增加边框的元素上增加类border-bottom

+ 使用ajax获取数据时，url地址的路径在使用Vue-cli 3 生成的项目中默认指向public
1. 如果想要使用类似于
axios.get('/api/index.json')的请求，则需要在vue.config.js文件中配置好代理
配置方法如下：

        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api': '/mock'
                }
            }
        },
        注意路径前面的/

+ 使用ajax动态导入图片数据时，图片数组的初始值为空，会导致默认先出现最后一张图片
1. 结合计算属性computed和v-if指令，仅当图片数组长度不为0时才显示图片
2. 这里需要结合上面第一问中的为图片占据位置 防止图片抖动的方法

+ 制作ul+li显示内容时，如果需要为li增加边框，简单的border: 1px solid #00会导致边框重叠
1. （垂直方向）通过导入伪元素before和after，为ul的伪元素增加边框，结合绝对定位实现位置的调整

         .city-ul {
                list-style: none;
                position: relative;
                &:before {
                    content: '';
                    position: absolute;
                    left: 25%;
                    width: 25%;
                    height: 100%;
                    border-left: .02rem solid #ddd;
                    border-right: .02rem solid #ddd;
                }
         }
2. （水平方向）为li元素增加下边框和负的下外边距

         border-bottom: .02rem solid #ddd;
         margin-bottom: -1px;

### 大坑预警

+ 使用第三方的插件better-scroll需要注意html中的dom格式，需要外包裹wrapper
1. ref='wrapper' 注意在定义时 没有引号 this.scroll = new BScroll(this.$refs.wrapper)
+ 需要做到指定位置跳转时，方法如下：
1. 为被跳转区域增加ref属性 :ref='key'
### 坑
1. 使用this.$refs[this.key]接收到的是数组，其中保存的是Vue组件，需要加上[0].$el才能调用到真正的dom对象

          const element = this.$refs[this.key][0].$el
                    this.scroll.scrollToElement(element)
          //触发点击或者移动事件

+. 搜索框的编写 => 同样巨坑 需要结合v-show和BScroll及computed 注意绝对定位的使用
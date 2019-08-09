# Vue basis && qunar demo

## 主要收获
1. 插槽的使用及应用 如具名插槽、作用域插槽
   1. demo中在实现城市列表页时，将标题作为内容传入插槽
   2. 使用插槽实现动画效果对组件的包裹
2. Vuex中的辅助函数
   1. mapGetters mapState 映射生成计算属性
   2. mapMutations mapActions 映射生成函数
   <br> 
   相关使用方法:
   
           import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
           
           computed: {
               ...mapState(['city']),
               ...mapGetters(['doubleCity'])
           },
           // 将this.$store.state.city映射到city上
           // 可通过this.city直接调用，相当于定义了一个组件内的数据
           
           methods: {
               handleClick(city) {
                   // 原来的方式 commit dispatch
                   // this.$store.commit('changeCity', city)
                   // this.$store.dispatch('changeCity', city)
                   this.changeCity(city)
               },
               ...mapMutations(['changeCity'])
               // ...mapActions(['changeCity'])
           },
           
3. computed属性的缓存特性，且在挂载Mounted前调用，组件尚未渲染成功时无法计算，无法执行异步。 
4. watch监听到属性变化才触发 可以执行异步操作
5. keep-alive标签包裹组件会为组件增加两个生命周期钩子函数
   1. activated 组件被激活时调用
   2. deactivated 组件被移除时调用
   3. created后还是虚拟DOM 被挂载前$el属性还不存在 mounted挂载后也不能保证组件已经在document中（在测试用mounted后$el也同样不存在）
6. 总线Bus 非Vuex的组件间传值 一种类似发布订阅模式的机制
   1.  Vue.prototype.bus = new Vue() 在显式原型上绑定一个单例
   2. 使用this.bus.$emit('event', arguments) 通过自定义的事件event传递参数
   3. 使用this.bus.$on('event', function) 在组件挂载时实现event事件监听
   
           methods: {
               handleClick() {
                   this.bus.$emit('event', this.selfContent)
               }
           },
           mounted() {
               let that = this
               this.bus.$on('event', function (msg) {
                   that.selfContent = msg
               })
           }
   4. 清除总线bus
   
           beforeDestory() {
               this.bus.$off('event)
           }
7. 动态组件 使用:is='componentName'来决定组件 结合keep-alive使用
8. 组件接收父组件传递的数据时，可进行组件参数校验
   
           props: {
               name: {
                   type: String,
                   required: true,
                   validator: function (value) {
                       return value >= 0 && value <= 130;
                   }
               }
           }

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


## 真机测试  还是无法成功 原因未知
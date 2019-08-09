<template>
    <div class="footer">
        <ul class="footer-ul">
            <li class="footer-li"><a href="">登录</a></li>
            <li class="footer-li"><a href="">我的订单</a></li>
            <li class="footer-li"><a href="">最近浏览</a></li>
            <li class="footer-li"><a href="">关于我们</a></li>
        </ul>
        <hr>
        <ul class="footer-ul-b">
            <li class="footer-li li-active"><a href="">触屏版</a></li>
            <li class="footer-li"><a href="">电脑版</a></li>
        </ul>
        <div class="footer-footer">
            <span>Qunar 京ICP备05021087</span><a href="">意见反馈</a>
        </div>

    </div>
</template>

<script>
    export default {
        name: "HomeFooter"
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/styles/vars';
    .footer {
        .footer-ul, .footer-ul-b {
            height: 0.6rem;
            list-style: none;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .footer-li {
                /*flex: 1;*/
                color: $bgColor;
            }
        }
        hr {
            margin: 0;
        }
        .footer-ul-b {
            margin: 0 auto;
            width: 50%;
            justify-content: center;
            .li-active > a {
                color: #000;
            }
            .footer-li {
                padding: 0 .3rem;
            }
        }
        .footer-footer {
            padding: .1rem;
            color: #666;
            text-align: center;
            a {
                color: #666;
            }
        }
    }
</style>
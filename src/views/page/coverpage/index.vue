<template>
    <div class="bgPage">
        <div class="bgPageContent">
            <h1 class="title">疯狂的老鼠</h1>
            <img class="userPic" src="../../../assets/img/shu.jpg">
            <p class="text">你要悄悄拔尖，然后惊艳所有人</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {
        this.threeGo()
    },
    mounted() {

    },
    methods: {
        //3秒后进入跳转页面
        threeGo(){
            const TIME_COUNT = 1;
            if(!this.timer){
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(()=>{
                    if(this.count > 0 && this.count <= TIME_COUNT){
                        this.count--;
                    }else{
                        this.show = true;
                        clearInterval(this.timer);
                        this.timer = null;
                        //跳转的页面写在此处
                        this.$router.push({
                            path: '/layout'
                        });
                    }
                },1000)
            }
        },
    }
}
</script>

<style scoped lang="less">
.bgPage{
    width: 100%;
    height: 100vh;
    background: linear-gradient(45deg,rgba(254,172,94,0.5),rgba(199,121,208,0.5),rgba(75,192,200,0.5));
    .bgPageContent{
        display: flex;
        justify-content: center;
        justify-items: center;
        flex-wrap: wrap;
        width: 400px;
        height: 400px;
        margin: 0 auto; /*水平居中*/
        position: relative;
        top: 50%; /*偏移*/
        transform: translateY(-50%);
        .title{
            width: 100%;
            height: 20px;
            text-align: center;
            font-size:30px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(51,51,51,1);
            line-height:20px;
        }
        .userPic{
            width: 180px;
            height: 180px;
            border-radius: 50%;
        }
        .text{
            width: 100%;
            height:20px;
            font-size:24px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:20px;
            text-align: center;
        }
    }
}
</style>

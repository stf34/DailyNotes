<template>
    <div class="bgPage" id="bgPage">
        <div class="bgPageContent">
            <h1>疯狂的老鼠{{Height}}</h1>
            <img width="180px" style="border-radius: 50%" bor src="../../../assets/img/shu.jpg">
            <p>创作不易，请多多支持</p>
            <p>你要悄悄拔尖，然后惊艳所有人</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count:"",//倒计时
            Height:0,
        };
    },
    created() {
        //  let Height = window.screen.availHeight
        //  this.Height = window.screen.availHeight
        
        // 动态设置元素高度：
        // this.$refs.bgPage.style.height = Height + 'px'; //动态设置HTML元素高度

        // this.threeGo()
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
        width: 400px;
        height: 400px;
        margin: 0 auto; /*水平居中*/
        position: relative;
        top: 50%; /*偏移*/
        transform: translateY(-50%);
    }
}
</style>

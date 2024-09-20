<template>
    <div class="login">
        <div class="login-con">
            <ul class="menu-tab">
            <li v-for="(v) in MenueDate" :class="{current :v.current}" :key="v.type" @click="clickMenu(v)">
                {{ v.txt }}
            </li>
        </ul>
        </div>
    </div>

</template>

<script lang="ts" setup>

    import { reactive } from 'vue';

    const MenueDate=reactive([
        {txt:"登录",current:true, type:"login"},
        {txt:"注册",current:false, type:"login"}
    ])

    let clickMenu=(item:any)=>{
        MenueDate.forEach((elemt)=>{
            elemt.current=false
        })
        item.current =true
    }

</script>

<style lang="scss">
.login{
    background-color:rgb(147, 147, 220);
    height:100%;
}
html,
body,
#app{
    height:100%;
}
.menu-tab{
    text-align: center;
    li{
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: aliceblue;
        border-radius: 2px;
        cursor: pointer;

    }

    .current{
        background-color: aqua;
    }
}

</style>
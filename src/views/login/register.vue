<template>
    <div class="register-tab">
        <el-form :model="form" label-width="auto" class="register-tab" style="max-width: 600px">
        <el-form-item class="registers">
            <label>手机号</label>
            <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item class="registers">
            <label>用户名</label>
            <el-input v-model="form.region" />
        </el-form-item>

        <el-form-item class="registers">
            <label>密码</label>
            <el-input v-model="form.password" />
        </el-form-item>

        <el-form-item class="registers">
            <label>重复密码</label>
            <el-input v-model="form.passwords" />
        </el-form-item>

        <el-form-item label="Activity time" class="registers">
            <el-col :span="11">
                <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
            </el-col>
            <el-col :span="2" class="text-center">
                <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
                <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
            </el-col>
        </el-form-item>

        <el-form-item class="registers">
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
    </div>

    <div class="login-page">
        <el-form label-width="65px">
            <el-form-item label="验证码">
                <el-input placeholder="请输入验证码" v-model="sidentifyMode" clearable></el-input>
            </el-form-item>
            <!-- 使用验证码组件 -->
            <div class="code" @click="refreshCode">
                <SIdentify :identifyCode="identifyCode"></SIdentify>
            </div>
            <el-button class="login_btn" type="primary" size="default" @click="login">登录</el-button>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import SIdentify from 'E:/kangyangyiliao/src/components/Sidentify'
import { ElMessage } from 'element-plus'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// do not use same name with ref
const form = reactive({
    name: '',
    password: '',
    passwords: '',
    region: '',
    date1: '',
    date2: '',
})

const onSubmit = () => {
    console.log('submit!')
}

//获取路由器
let $router = useRouter()
let sidentifyMode = ref('') //输入框验证码
let identifyCode = ref('') //图形验证码
let identifyCodes = ref('1234567890abcdefjhijklinopqrsduvwxyz') //验证码出现的数字和字母

//组件挂载
onMounted(() => {
    identifyCode.value = ''
    makeCode(identifyCodes.value, 4)
})

// 生成随机数
const randomNum = (min: number, max: number) => {
    max = max + 1
    return Math.floor(Math.random() * (max - min) + min)
}
// 随机生成验证码字符串
const makeCode = (o: string | any[], l: number) => {
    for (let i = 0; i < l; i++) {
        identifyCode.value += o[randomNum(0, o.length)]
    }
}
// 更新验证码
const refreshCode = () => {
    identifyCode.value = ''
    makeCode(identifyCodes.value, 4)
}
//登录
const login = () => {
    //验证验证码不为空
    if (!sidentifyMode.value) {
        ElMessage({ type: 'error', message: '验证码不能为空！' })
        return
    }
    //验证验证码是否正确
    if (sidentifyMode.value != identifyCode.value) {
        ElMessage({ type: 'error', message: '验证码错误' })
        refreshCode()
        return
    } else {
        ElMessage({ type: 'success', message: '登录成功' })
        $router.push('/home')
    }
}

</script>


<style lang="scss" scoped>
.register-tab{
    text-align: center;
    margin: auto;
}
.registers{
        padding: 10px;
        height: 10%;
        text-align: center;
        margin: auto;
    }

.login-page {
    border: 1.5px solid rgb(123, 109, 30);
    border-radius: 8px;
    width: 400px;
    margin: 0 auto;
    margin-top: 50px;
    padding: 20px;

    .code {
        text-align: center;
        margin-bottom: 10px;
    }

    .login_btn {
        width: 100%;
    }
}
</style>
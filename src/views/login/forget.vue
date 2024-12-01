<template>
    <div class="login" style="height: 100vh; display: flex ;overflow: hidden; align-items: center;justify-content: center;">
        <div style="display: flex; background-color: white; width: 50%; height: 60%;border-radius: 10px;overflow: hidden;">
            <div style="flex: 1;">
                <img src="../../微信图片_20240817153954.png" alt="" style="width: 70%; align-items: center;">
            </div>
            <div style="flex: 1; display: flex; align-items: center;justify-content: center;">
                <el-form :model="user" size="large" style="width: 80%;" :rules="rules" ref="loginRef">
                    <div style="font-size: 20px; font-weight: bold;text-align: center; padding: 10px; margin-bottom: 20px;">
                        康养医疗服务系统<br>忘记密码？
                    </div>
                    <el-form-item prop="username">
                        <el-input placeholder="请输入手机号" v-model="user.username" />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input show-password placeholder="请输入密码" v-model="user.password" />
                    </el-form-item>
                    <el-form-item>
                        <div style="display: flex;">
                            <el-input placeholder="请输入验证码" v-model="sidentifyMode" clearable style="flex: 1;">
                            </el-input>
                            <div class="code" @click="refreshCode" style="flex: 1; height: 36px;">
                                <SIdentify :identifyCode="identifyCode"></SIdentify>
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button color="#32B67A" type="primary" style="width: 100%;" @click="login"><span style="color: white;">登录</span></el-button>
                    </el-form-item>
                    <div style="display: flex;">
                        <div style="flex: 1;">还没有账号？请 <span style="color: rgb(50, 182, 122); cursor: pointer;" @click="regist"> 注册</span>
                        </div>
                        <div style="flex: 1; text-align: right; color: rgb(50, 182, 122);"><span
                                style="cursor: pointer;">忘记密码</span></div>
                    </div>
                </el-form>
            </div>


        </div>
    </div>
</template>

<script lang="ts" setup>

import { reactive, ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router';
import type { FormInstance, FormRules } from 'element-plus'
import SIdentify from '../../components/Sidentify.vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

let $router = useRouter()
let sidentifyMode = ref('') //输入框验证码
let identifyCode = ref('') //图形验证码
let identifyCodes = ref('1234567890abcdefjhijklinopqrsduvwxyz') //验证码出现的数字和字母

const user = reactive({
    username: '',
    password: '',

});

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
        $router.push('/main')
    }
}

const regist = ()=> {
    $router.push('/register')
}

const ruleFormRef = ref<FormInstance>()

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('账号不能为空！'))
  } else {
    if (user.username !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}

const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('密码不能为空！'))
  } else {
    if (user.username !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}

const rules = reactive<FormRules<typeof reactive>>({
    username: [{ validator: validatePass, trigger: 'blur' }],
    password: [{ validator: validatePass2, trigger: 'blur' }],
})


</script>


<style lang="scss">
.login {
    background-color: rgb(50, 182, 122);
}

.code {
        text-align: center;
        margin-left: 0px;
    }
</style>

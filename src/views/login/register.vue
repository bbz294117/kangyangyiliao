<template>
    <div class="register-tab"
        style="height: 100vh; display: flex ;overflow: hidden; align-items: center;justify-content: center;">
        <div style="background-color: white; width: 50%; height: 60%;border-radius: 10px;overflow: hidden;">
            <el-form :model="form" label-width="auto" class="register-tabs" style="max-width: 450px" :rules="rules">

                <div style="font-size: 20px; font-weight: bold;text-align: center; padding: 0px; margin-top: 15px;background-color: white;">
                        康养医疗服务系统<br>欢迎注册
                </div>

                <el-form-item class="registers" prop="name">
                    <label>手机号</label>
                    <el-input placeholder="请输入手机号" v-model="form.name" />
                </el-form-item>

                <el-form-item class="registers" prop="region">
                    <label>用户名</label>
                    <el-input placeholder="请输入用户名" v-model="form.region" />
                </el-form-item>

                <el-form-item class="registers" prop="password">
                    <label>密码</label>
                    <el-input placeholder="请输入密码" v-model="form.password" />
                </el-form-item>

                <el-form-item class="registers" prop="passwords">
                    <label>重复密码</label>
                    <el-input placeholder="请重复密码" v-model="form.passwords" />
                </el-form-item>

                <el-form-item class="registers">
                    <div style="text-align: left;" >
                    <label>验证码</label>
                    <el-input placeholder="请输入验证码" v-model="sidentifyMode" clearable >
                    </el-input>
                    </div>
                    <div class="code" @click="refreshCode" style=" height: 36px; padding-top: 20px; padding-left: 20px;">
                    <SIdentify :identifyCode="identifyCode"></SIdentify>
                    </div>

                </el-form-item>

                <el-form-item class="registers">
                    <el-button color="#32B67A" type="primary" @click="onSubmit"><span style="color: white;">创建账号</span></el-button>
                    <el-button @click="back">返回登录页面</el-button>
                </el-form-item>
            </el-form>


            <!-- <div class="login-page">
                <el-form label-width="65px">
                    <el-form-item label="验证码">
                        <el-input placeholder="请输入验证码" v-model="sidentifyMode" clearable></el-input>
                    </el-form-item>
                    使用验证码组件
                    <div class="code" @click="refreshCode">
                        <SIdentify :identifyCode="identifyCode"></SIdentify>
                    </div>
                    <el-button class="login_btn" type="primary" size="default" @click="login">登录</el-button>
                </el-form>
            </div> -->
        </div>

    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
// import SIdentify from 'E:/kangyangyiliao/src/components/Sidentify'
import SIdentify from '../../components/Sidentify.vue'
import { ElMessage } from 'element-plus'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'

// do not use same name with ref
const form = reactive({
    name: '',
    password: '',
    passwords: '',
    region: '',
})

const onSubmit = () => {
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
        ElMessage({ type: 'success', message: '创建成功' })
        $router.push('/login')
    }
}

const back = ()=> {
    $router.push('/login')
}

const ruleFormRef = ref<FormInstance>()



const validatePass1 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('手机号不能为空！'))
  } else {
    if (form.name !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}

const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('用户名不能为空！'))
  } else {
    if (form.region !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}

const validatePass3 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('密码不能为空！'))
  } else {
    if (form.password !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}

const validatePass4 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('重复不能为空且须和密码一致！'))
  } else {
    if (form.passwords !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}

const rules = reactive<FormRules<typeof reactive>>({
    name: [{ validator: validatePass1, trigger: 'blur' }],
    region: [{ validator: validatePass2, trigger: 'blur' }],
    password: [{ validator: validatePass3, trigger: 'blur' }],
    passwords: [{ validator: validatePass4, trigger: 'blur' }],
})

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
.register-tab {
    text-align: center;
    margin: auto;
    background-color: rgb(50, 182, 122);
}

.register-tabs{
    text-align: center;
    margin: auto;
}

.registers {
    padding: 10px;
    height: 10%;
    text-align: center;
    margin: auto;
    background-color: rgb(255, 255, 255);
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
<template>
  <el-container class="layout-container-demo" style="height: auto">

    <el-aside :width="asidewidth" collapse-transition="false"
      style="min-height: 100vh; background-color: rgb(246, 247, 249);">
      <el-scrollbar>
        <div
          style="height:60px;font-size: 20px;font-weight:bold; line-height: 60px; background-color: rgb(50, 182, 122); color: white; display: flex; align-items: center;justify-content: center;">
          <img src="@/微信图片_20240817153954.png" alt="" style="width: 40px;">
          <span style="padding-left: 10px; font-size: 20px" v-show="!isCollapse">康养健康与服务平台</span>
        </div>
        <el-menu :collapse="isCollapse" router :default-openeds="['1', '3']"
          style="--el-menu-active-color:rgb(50, 182, 122) ;--el-menu-bg-color:white; background-color: rgb(246, 247, 249);"
          default-active="$route.path">
          <el-menu-item index="/home"><el-icon>
              <HomeFilled />
            </el-icon><span v-show="!isCollapse">首页</span></el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><icon-menu /></el-icon><span v-show="!isCollapse">设备管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/login">Option 1</el-menu-item>
              <el-menu-item index="/machine">设备管理page</el-menu-item>
            </el-menu-item-group>
            <!-- <el-menu-item-group title="Group 2">
              <el-menu-item index="2-3">Option 3</el-menu-item>
            </el-menu-item-group> -->
            <el-sub-menu index="2-4">
              <template #title>Option 4</template>
              <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <setting />
              </el-icon><span v-show="!isCollapse">全局健康</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/user">用户信息</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="3-4">
              <template #title>Option 4</template>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style=" text-align:left; font-size: 12px; background-color: rgb(50, 182, 122)">
        <i :class="collapseIcon" style="width: 40px;" @click="handleCollapse">
          <el-icon size="20">
            <Menu />
          </el-icon>
        </i>
        <!-- <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <div class="block">
            <el-avatar :size="30" :src="circleUrl" />
          </div>
          <span>Tom</span>
        </div> -->

        <el-breadcrumb :separator-icon="ArrowRight" style="margin-left: 20px;">
          <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
          <!-- <el-breadcrumb-item :to="{ path: '/user' }">用户管理</el-breadcrumb-item> -->
        </el-breadcrumb>

        <div style="flex: 1; width: 0; display: flex; align-items: center; justify-content: flex-end;">
          <el-dropdown placement="bottom">
            <div style="display: flex; align-items: center; cursor: default;">
              <img src="../../微信图片_20240817153954.png" alt="" style="width: 40px; height: 40px;">
              <span>管理员</span>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
                <el-dropdown-item @click="">隐私声明</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>


      </el-header>

      <el-main> <!--   主体 -->
        <router-view />

      </el-main>


    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'
import { Menu as IconMenu, HomeFilled, Setting, Menu, TurnOff, Open } from '@element-plus/icons-vue'
import { ArrowRight } from '@element-plus/icons-vue'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

const state = reactive({
  // circleUrl:
  //   'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  sizeList: ['small', '', 'large'] as const,
})

const { circleUrl } = toRefs(state)

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))

</script>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'homeview',
  data() {
    return {
      isCollapse: false,
      asidewidth: '300px',
      collapseIcon: 'Open'
    }
  },
  methods: {
    handleCollapse() {
      this.isCollapse = !this.isCollapse
      if (this.asidewidth == '300px') {
        this.asidewidth = '64px'
      } else {
        this.asidewidth = '300px'
      }
      // this.asidewidth = this.asidewidth ? '64px' : '300px'
      if (this.collapseIcon == 'Open') {
        this.collapseIcon = 'TurnOff'
      } else {
        this.collapseIcon = 'Open'
      }
    }
  }
});


</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.el-aside {
  transition: width .3s;
  box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
}

.el-header {
  box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
  display: flex;
  align-items: center;
}
</style>



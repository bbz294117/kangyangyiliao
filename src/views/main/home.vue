<template>
    <div>


        <el-card style="max-width: 600px;margin: 10px;">
          <div class="mb-4">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
          </div>
        </el-card>

        <el-card style="max-width: 600px;margin: 10px;">
          <div class="mb-4">
            <el-button plain>Plain</el-button>
            <el-button type="primary" plain>Primary</el-button>
            <el-button type="success" plain>Success</el-button>
            <el-button type="info" plain>Info</el-button>
            <el-button type="warning" plain>Warning</el-button>
            <el-button type="danger" plain>Danger</el-button>
          </div>
        </el-card>

        <el-card style="max-width: 600px;margin: 10px;">
          <div class="mb-4">
            <el-button round>Round</el-button>
            <el-button type="primary" round>Primary</el-button>
            <el-button type="success" round>Success</el-button>
            <el-button type="info" round>Info</el-button>
            <el-button type="warning" round>Warning</el-button>
            <el-button type="danger" round>Danger</el-button>
          </div>
        </el-card>

        <el-card style="max-width: 600px;margin: 10px;">
          <div>
            <el-button :icon="Search" circle />
            <el-button type="primary" :icon="Edit" circle />
            <el-button type="success" :icon="Check" circle />
            <el-button type="info" :icon="Message" circle />
            <el-button type="warning" :icon="Star" circle />
            <el-button type="danger" :icon="Delete" circle />
          </div>
        </el-card>

        <el-card style="max-width: 480px;margin: 10px;">
          <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
          <span>饿了</span>
        </el-card>

    </div>
</template>

<script lang="ts" setup>

import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

</script>
<template>
  <el-header>
    <div :class="{'header-title':!toogleStatus,'header-title-isCollapse': toogleStatus}">Admin</div>
    <div class="header-right-box">
      <div class="toggle-btn" @click="toogleMenu()">
        <i :class="{'el-icon-d-arrow-left': toogleStatus, 'el-icon-d-arrow-right': !toogleStatus}"></i>
      </div>
      <el-dropdown>
        <el-button type="primary">
          个人中心<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/login" tag="div">退出</router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      toogleSta: {
        type: Boolean
      }
    },
    data() {
      return {
        toogleStatus: Boolean
      };
    },
    created() {
      this.toogleStatus = this.toogleSta;
    },
    mounted() {

    },
    methods: {
      toogleMenu() {
        this.toogleStatus = !this.toogleStatus;
        this.$emit('togMenu', this.toogleStatus);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .el-header {
    display: flex;
    flex-direction: row;
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    .header-title {
      flex: 0 0 200px;
      width: 200px;
      /*transition: border-color .3s,background-color .3s,color .3s*/
    }
    .header-title-isCollapse {
      flex: 0 0 64px;
      width: 64px;
    }
    .header-right-box {
      display: flex;
      width: 100%;
      justify-content: space-between;
      .toggle-btn {
        display: inline-block;
        line-height: 60px;
        cursor: pointer;
        i {
          display: inline-block;
          line-height: 60px;
        }
      }
    }
  }
</style>

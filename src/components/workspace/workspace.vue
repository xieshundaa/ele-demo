<template>
  <div class="hello">
    <el-container style="display: flex; flex-direction: column;">
      <v-header :toogleSta="isCollapse" @togMenu="toggleMenu"></v-header>
      <el-container>
        <!--<el-aside class="el-aside-menu-demo">-->
        <sideMenu :toogleSide="isCollapse"></sideMenu>
        <!--</el-aside>-->
        <el-container style="display: flex; flex-direction: column;">
          <el-main>Main</el-main>
          <v-footer></v-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Header from '@/components/header/header';
  import SideMenu from '@/components/sideMenu/sideMenu';
  import Footer from '@/components/footer/footer';
  export default {
    name: 'WorkSpace',
    components: {
      'v-header': Header,
      'v-footer': Footer,
      'sideMenu': SideMenu
    },
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      toggleMenu(val) {
        this.isCollapse = val;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .hello {
    width: 100%;
    height: 100%;
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
    .el-container {
      width: 100%;
      height: 100%;
    }

    /*.el-aside {*/
    /*background-color: #D3DCE6;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 200px;*/
    /*}*/

    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }

    body > .el-container {
      margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
      line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
      line-height: 320px;
    }

  }

</style>

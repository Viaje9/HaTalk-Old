<template>
  <div class="outer">
    <menu-component></menu-component>
    <div class="main">
      <h2>個人檔案</h2>
      <span></span>
      <div class="changeName">
        <input type="text">
        <button>更新</button>
      </div>
      <div class="stateMsg">
        <input type="text">
        <button>更新</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted: function () {
		// this.axios
		// 	.get("/test")
		// 	.then((res) => {
    //     if(!res.data.success) {
    //       this.$router.push({ path: "/Login" });
    //     }
		// 	})
	},
};
</script>

<style lang="scss" scoped>
.outer {
  display: flex;
}
</style>
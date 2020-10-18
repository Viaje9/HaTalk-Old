<template>
  <div class="outer">
    <menu-component></menu-component>
    User
  </div>
</template>

<script>
export default {
  mounted: function () {
		this.axios
			.get("/test")
			.then((res) => {
        if(!res.data.success) {
          this.$router.push({ path: "/Login" });
        }
			})
	},
};
</script>

<style lang="scss" scoped>
.outer {
  display: flex;
}
</style>
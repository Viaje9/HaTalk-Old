<template>
	<div class="outer">
		<menu-component></menu-component>
		<div class="main">
			<h2>個人檔案</h2>
			<span></span>
			<div class="changeName">
				<span>更新名稱</span>
				<input type="text" v-model="name" />
				<button @click="changeName">更新</button>
			</div>
			<div class="changeState">
				<span>更新狀態</span>
				<input type="text" v-model="state" />
				<button @click="changeState">更新</button>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			name: null,
			state: null,
		};
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
	methods: {
		changeName() {
			this.axios.put("/UpdateUserName", { name: this.name }).then((res) => {
				if (!res.data.success) {
					this.$router.push({ path: "/Login" });
				}
				this.$store.commit("updateUserName", this.name);
			});
		},
		changeState() {
			this.axios.put("/UpdateUserState", { state: this.state }).then((res) => {
				if (!res.data.success) {
					this.$router.push({ path: "/Login" });
				}
				this.$store.commit("updateUserState", this.state);
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.outer {
	display: flex;
}
</style>
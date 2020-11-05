<template>
	<div class="outer">
		<menu-component></menu-component>
		<main>
			<div class="search">
				<input type="text" v-model="account" />
				<button @click="search">搜索</button>
			</div>
			<div class="user">
				<span v-show="notFind">找不到用戶</span>
				<span v-show="!notFind && user.name !== null">
					<div class="name">
						{{ user.name }}
					</div>
					<div class="state">
						{{ user.state }}
					</div>
					<button @click="addFriend">加入好友</button>
				</span>
			</div>
		</main>
	</div>
</template>

<script>
export default {
	data() {
		return {
			account: null,
			user: {
        account: null,
        name: null,
        state: null
      },
			notFind: false,
		};
	},
	methods: {
		search() {
			console.log(123);
			this.axios
				.get("/SearchUser", { params: { account: this.account } })
				.then((res) => {
					if (!res.data.success) {
						this.notFind = true;
					} else {
						this.user = res.data.user;
					}
				});
		},
		addFriend() {
			this.axios
				.post("/AddFriend", { account: this.user.account })
				.then((res) => {
					console.log(res);
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

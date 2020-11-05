<template>
	<div class="outer">
		<h1>HaTalk</h1>
		<form @submit.prevent="login" class="login">
			<div class="row">
				<label for="">帳號</label>
				<input type="text" v-model="account" />
			</div>
			<div class="row">
				<label for="">密碼</label>
				<input type="password" v-model="password"/>
			</div>
			<div class="row">
				<router-link class="btn" to="/Register"> 註冊 </router-link>
				<button v-on:keyup.enter="submit" class="btn">登入</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			account: null,
			password: null
		};
	},
	methods: {
		login() {
			this.axios
				.post("/Login", {
					account: this.account,
					password: this.password
				})
				.then((res) => {
					if (res.data.success) {
						this.$router.push({ path: "/" });
					} else {
						console.log("err");
					}
				});
		},
	},
};
</script>

<style lang="scss" scoped>
.outer {
	width: 100%;
	height: 100vh;
	background-color: #627aa0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	h1 {
		margin: 0;
		font-size: 60px;
		color: #868527;
	}

	.login {
		font-size: 20px;
		color: #00ff14;
		padding-bottom: 8%;

		input {
			height: 20px;
			padding: 0;
		}
		.row {
			padding: 7px;
			display: flex;
			align-items: center;
			label {
				padding: 0 3px 0 0;
			}
		}
		.row:nth-child(3) {
			display: flex;
			justify-content: space-around;
			.btn {
				font-size: 20px;
				border-radius: 10px;
			}
			.btn:focus {
				outline: unset;
			}
		}
	}
}
</style>

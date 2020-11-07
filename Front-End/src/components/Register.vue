<template>
	<div class="outer">
		<div class="container">
			<div class="left">
				<form @submit.prevent="checkForm">
					<div class="row">
						<h2>Registered</h2>
					</div>
					<div class="row" :class="{ registerErr: errorRegister }">
						<input
							id="name"
							name="name"
							v-model="name"
							type="text"
							minlength="1"
							maxlength="10"
							required
							placeholder="輸入暱稱"
						/>
					</div>
					<div
						class="row"
						:class="{ registerErr: errorAccount || errorRegister }"
					>
						<input
							@change="checkAccount"
							id="account"
							name="account"
							v-model="account"
							type="text"
							minlength="4"
							maxlength="20"
							required
							placeholder="輸入帳號"
						/>
					</div>
					<div
						class="row"
						:class="{ registerErr: errorPassword || errorRegister }"
					>
						<input
							id="password"
							name="password"
							v-model="password"
							type="password"
							minlength="8"
							maxlength="20"
							required
							placeholder="輸入密碼"
						/>
					</div>
					<div
						class="row"
						:class="{ registerErr: errorPassword || errorRegister }"
					>
						<input
							id="checkPassword"
							name="checkPassword"
							v-model="checkPassword"
							type="password"
							required
							placeholder="確認密碼"
						/>
					</div>
					<div class="row">
						<router-link class="btn" to="/login">取消</router-link>
						<button type="submit" class="btn">註冊</button>
					</div>
				</form>
				<div
					class="err"
					v-show="errorAccount || errorPassword || errorRegister"
				>
					{{ errorAccount || errorPassword || errorRegister }}
				</div>
			</div>
			<div class="right">
				<h1>HaTalk</h1>
				<span>Copyright © 2020 Viaje9 Design.</span>
			</div>
		</div>
	</div>
</template>

<script>
/**
 * 多一隻接口在account change的時候即時檢查帳號有沒有重複
 */
export default {
	data() {
		return {
			name: null,
			account: null,
			password: null,
			checkPassword: null,
			errorAccount: null,
			errorPassword: null,
			errorRegister: null,
		};
	},
	methods: {
		checkAccount() {
			this.axios
				.get("/CheckAccount", { params: { account: this.account } })
				.then((data) => {
					data.data
						? (this.errorAccount = null)
						: (this.errorAccount = "帳號重複請重新輸入");
				});
		},
		checkForm(e) {
			if (this.password === this.checkPassword && this.errorAccount === null) {
				this.axios
					.post("/Register", {
						name: this.name,
						account: this.account,
						password: this.password,
					})
					.then((res) => {
						if (res.data.success) {
							this.$store.commit("setUser", "register");
						} else {
							this.errorRegister = "註冊失敗";
						}
					});
			} else {
				this.errorPassword = "密碼不一致請重新輸入";
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.outer {
	$color1: #0b2239;
	$color2: #ffffff;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(90deg, #0094ff, #3939db);
	.container {
		display: flex;
		width: 1140px;
		height: 587px;
		.left {
			letter-spacing: 3px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: $color1;
			width: 50%;
			height: 100%;
			background-color: $color2;
			position: relative;
			.row {
				display: flex;
				justify-content: center;
				align-items: center;

				h2 {
					font-size: 30px;
				}
			}
			.row:nth-child(1),
			.row:nth-child(6) {
				display: flex;
				justify-content: space-around;
			}
			.row:nth-child(2),
			.row:nth-child(3),
			.row:nth-child(4),
			.row:nth-child(5) {
				position: relative;
				margin: 0 0 15px;
				border: 1px solid $color1;
				border-radius: 5px;
				width: 260px;
				height: 36px;
				input {
					width: 70%;
					margin: 0 0 0 14px;
					font-size: 18px;
					background-color: rgba(0, 0, 0, 0%);
					font-weight: 400;
					border-radius: 5px;
					border: none;
					color: #0b2239;
				}
				input:focus {
					outline: none;
				}
				input::placeholder {
					padding: 0 0 0 45px;
					color: #8d9aa7;
					font-size: 16px;
					font-weight: 300;
					letter-spacing: 2px;
				}
				textarea:focus,
				input:focus {
					font-size: 18px;
					font-weight: 400;
					color: #0b2239;
				}
			}
			.row:nth-child(2)::after,
			.row:nth-child(3)::after,
			.row:nth-child(4)::after,
			.row:nth-child(5)::after {
				position: absolute;
				content: "";
			}
			.row:nth-child(1) {
				padding: 0 0 14px;
			}
			.row:nth-child(2)::after {
				background-image: url("../assets/images/name.svg");
				left: 8px;
				top: 5px;
				width: 23px;
				height: 27px;
				background-size: 46px 27px;
				background-position: -25px 0px;
			}
			.row:nth-child(3)::after {
				background-image: url("../assets/images/account.svg");
				left: 8px;
				top: 5px;
				width: 26px;
				height: 28px;
				background-size: 44px 27px;
				background-position: -21px 0px;
			}
			.row:nth-child(4)::after {
				background-image: url("../assets/images/lock.svg");
				left: 8px;
				top: 5px;
				width: 26px;
				height: 28px;
				background-size: 44px 27px;
				background-position: -21px 0px;
			}
			.row:nth-child(5)::after {
				background-image: url("../assets/images/lock.svg");
				left: 8px;
				top: 5px;
				width: 26px;
				height: 28px;
				background-size: 44px 27px;
				background-position: -21px 0px;
			}
			.row:nth-child(6) {
				.btn {
					$height: 36px;
					display: block;
					font-size: 16px;
					font-weight: 400;
					line-height: $height;
					text-align: center;
					width: 100px;
					height: $height;
					color: #0b2239;
					background-color: rgba(0, 0, 0, 0%);
					border: 1px solid #0b2239;
					border-radius: 5px;
				}
				.btn:focus {
					outline: unset;
					color: #c9cbff;
					border: 1px solid #c9cbff;
				}
			}
			.registerErr {
				border: 2px solid #f16464 !important;
			}
			.err {
				position: absolute;
				bottom: 76px;
				font-size: 18px;
				color: #f16464;
				font-weight: 500;
			}
		}
		.right {
			color: $color2;
			width: 50%;
			height: 100%;
			background-color: $color1;
			text-align: center;
			h1 {
				padding: 170px 0 270px;
				font-size: 60px;
				font-weight: 200;
			}
			span {
				font-size: 13px;
			}
		}
		.left,
		.right {
			box-shadow: 7px 7px 5px rgba(0, 0, 0, 50%);
		}
	}
}
</style>


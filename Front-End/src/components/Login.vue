<template>
	<div class="outer">
		<div class="container">
			<div class="left">
				<form @submit.prevent="login" class="login">
					<div class="row">
						<h2>Login</h2>
					</div>
					<div class="row" :class="{ loginErr: loginErr }">
						<input type="text" v-model="account" placeholder="輸入帳號" />
					</div>
					<div class="row" :class="{ loginErr: loginErr }">
						<input type="password" v-model="password" placeholder="輸入密碼" />
					</div>
					<div class="row">
						<router-link class="btn" to="/Register"> 註冊 </router-link>
						<button v-on:keyup.enter="submit" class="btn">登入</button>
					</div>
				</form>
				<div class="err" v-show="loginErr">登入失敗請輸入正確帳號密碼</div>
			</div>
			<div class="right">
				<h1>HaTalk</h1>
				<span>Copyright © 2020 Viaje9 Design.</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			account: null,
			password: null,
			loginErr: false,
		};
	},
	methods: {
		login() {
			this.axios
				.post("/Login", {
					account: this.account,
					password: this.password,
				})
				.then((res) => {
					if (res.data.success) {
						this.$store.commit("setUser", "login");
					} else {
						this.loginErr = true;
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
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(90deg, #3939db, #0094ff);
	.container {
		display: flex;
		width: 1140px;
		height: 587px;
		.left {
			letter-spacing: 3px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #ffffff;
			width: 50%;
			height: 100%;
			background-color: #0b2239;
			position: relative;
			form {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-flow: column;
				.row {
					display: flex;
					justify-content: center;
					align-items: center;
					h2 {
						font-size: 30px;
						font-weight: 200;
					}
					input {
						width: 50%;
						font-size: 18px;
						background-color: rgba(0, 0, 0, 0%);
						font-weight: 100;
						border-radius: 5px;
						border: none;
						color: #ffffff;
					}
					input:focus {
						outline: none;
					}
					input::placeholder {
						text-align: center;
						color: #c8c8c8;
						font-size: 16px;
						letter-spacing: 2px;
					}
					textarea:focus,
					input:focus {
						font-size: 18px;
						font-weight: 100;
						color: #ffffff;
					}
					.btn {
						$height: 36px;
						display: block;
						font-size: 16px;
						font-weight: 100;
						line-height: $height;
						text-align: center;
						width: 100px;
						height: $height;
						color: #ffffff;
						background-color: rgba(0, 0, 0, 0%);
						border: 1px solid #ffffff;
						border-radius: 5px;
					}
					.btn:focus {
						outline: unset;
						color: #716060;
						border: 1px solid #716060;
					}
				}
				.row:nth-child(1) {
					padding: 0 0 52px;
				}
				.row:nth-child(2),
				.row:nth-child(3) {
					margin: 0 0 43px;
					position: relative;
					border: 1px solid #ffffff;
					border-radius: 5px;
					width: 260px;
					height: 44px;
				}
				.row:nth-child(2)::after,
				.row:nth-child(3)::after {
					$size: 27px;
					position: absolute;
					left: 10px;
					top: 10px;
					content: "";
					width: $size;
					height: $size;
				}
				.row:nth-child(2)::after {
					background-image: url("../assets/images/account.svg");
					background-size: cover;
				}

				.row:nth-child(3)::after {
					background-image: url("../assets/images/lock.svg");
					background-size: cover;
				}
				.row:nth-child(4) {
					width: 100%;
					display: flex;
					justify-content: space-around;
				}
				.loginErr {
					border: 1px solid #f16464 !important;
				}
			}
			.err {
				position: absolute;
				bottom: 76px;
				font-size: 18px;
				color: #f16464;
				font-weight: 100;
			}
		}
		.right {
			color: #0b2239;
			width: 50%;
			height: 100%;
			background-color: #ffffff;
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
@media (max-width: 960px) {
	.outer {
		.container {
      box-sizing: border-box;
			padding: 25px 0 0 0;
			width: 100%;
			height: 100%;
			display: block;
			text-align: center;
			.left {
				margin: auto;
				width: 90%;
				height: 58%;
				form {
					.row {
						h2 {
							font-size: 24px;
						}
						input {
							font-size: 13px;
						}
						input::placeholder {
							font-size: 13px;
							letter-spacing: 2px;
						}
						textarea:focus,
						input:focus {
							font-size: 13px;
							font-weight: 100;
							color: #ffffff;
						}
						.btn {
							$height: 32px;
							font-size: 13px;
							line-height: $height;
							width: 100px;
							height: $height;
						}
					}
					.row:nth-child(1) {
						padding: 0 0 40px;
					}
					.row:nth-child(2),
					.row:nth-child(3) {
            margin: 0 0 50px;
						width: 230px;
						height: 32px;
					}
					.row:nth-child(2)::after,
					.row:nth-child(3)::after {
						$size: 19px;
						left: 6px;
						top: 7px;
						width: $size;
						height: $size;
					}
				}
			}
			.right {
				position: relative;
				margin: auto;
				width: 90%;
				height: 37%;
				h1 {
					font-size: 40px;
					padding: 54px 0 87px 0;
				}
			}
		}
	}
}
</style>

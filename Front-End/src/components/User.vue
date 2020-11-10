<template>
	<div class="outer">
		<menu-component></menu-component>
		<div class="container">
			<div class="content">
				<div class="top">
					<div class="user">
						<div class="avatar">
							<img :src="avatarImg" alt="" />
						</div>
						<div class="name">{{ userName ||123123123123}}</div>
					</div>
				</div>
				<div class="btm">
					<div class="change">
						<input type="text" v-model="name" placeholder="更新暱稱" />
						<button class="btn" @click="changeName">更新</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import avatarImg from "../assets/images/avatar.svg";
export default {
	data() {
		return {
			avatarImg: avatarImg,
			name: null
		};
	},
	computed: {
		userName() {
			return this.$store.state.name;
		}
	},
	methods: {
		changeName() {
			this.axios.put("/UpdateUserName", { name: this.name }).then((res) => {
				if (!res.data.success) {
					this.$router.push({ path: "/Login" });
				}
				this.$store.commit("updateUserName", this.name);
				this.name = null;
			});
		}
	},
};
</script>

<style lang="scss" scoped>
.outer {
	$color1: #0b2239;
	$color2: #ffffff;
	display: flex;
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		background: linear-gradient(90deg, #0094ff, #3939db);
		.content {
			width: 540px;
			height: 504px;
			.top {
				display: flex;
				position: relative;
				height: 50%;
				background-color: $color1;
				box-shadow: 7px 7px 5px rgba(0, 0, 0, 50%);
				.user {
					width: 40%;
					display: flex;
					flex-flow: column;
					align-items: center;
					.avatar {
						padding: 35px 0 0;
						width: 120px;
						height: 120px;
						img {
							width: 100%;
							display: flex;
						}
					}
					.name {
						padding: 35px 0 0;
						font-size: 20px;
						color: $color2;
						font-weight: 300;
					}
				}
			}
			.btm {
				color: $color1;
				height: 50%;
				background-color: $color2;
				box-shadow: 7px 7px 5px rgba(0, 0, 0, 50%);
				display: flex;
				flex-flow: column;
				justify-content: center;
				align-items: center;
				.change {
					width: 50%;
					height: 40px;
					position: relative;
					border: 1px solid $color1;
					border-radius: 5px;
					margin: 15px 0;
					display: flex;
					justify-content: center;
					align-items: center;
					input {
						text-align: center;
					}
					.btn {
						position: absolute;
						background-color: unset;
						border: 1px solid $color1;
						padding: 12px;
						border-radius: 5px;
						font-size: 16px;
						right: -65px;
					}
				}
			}
		}
	}
}
@media (max-width: 960px) {
	.outer {
		display: block;
		.container {
			height: calc(100vh - 57px);
			.content {
				width: 90%;
				height: 90%;
				.top {
					flex-flow: column;
					align-items: center;
					.user {
						width: 100%;
						.avatar {
							width: 90px;
							height: 90px;
						}
						.name {
							padding: 26px 0 26px;
							font-weight: 200;
						}
					}
				}
				.btm {
					.change {
						height: 26px;
						input {
							width: 90%;
						}
						.btn {
							padding: 5px;
							border-radius: 5px;
							right: -55px;
						}
					}
				}
			}
		}
	}
}
</style>
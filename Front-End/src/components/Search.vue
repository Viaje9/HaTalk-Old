<template>
	<div class="outer">
		<menu-component></menu-component>
		<div class="container">
			<div class="content">
				<div class="top">
					<div class="search">
						<input type="text" v-model="account" placeholder="搜索帳號" />
						<button class="btn" @click="search">搜索</button>
						<button
							v-show="!notFind && user.name !== null"
							class="btn"
							@click="addFriend"
						>
							加入好友
						</button>
						<span v-show="notFind" class="notFind">找不到用戶</span>
						<span v-show="newFriesn" class="newFriesn">快跟新朋友聊天吧!</span>
					</div>
				</div>
				<div class="btm" :class="{ find: user.account }">
					<div class="user">
						<div class="avatar">
							<img :src="avatarImg" alt="" />
						</div>
						<div class="name">{{ user.name }}</div>
					</div>
					<div class="state">
						{{ user.state }}
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
			account: null,
			user: {
				account: null,
				name: null,
				state: null,
			},
			notFind: null,
			newFriesn: null,
		};
	},
	methods: {
		search() {
			this.axios
				.get("/SearchUser", { params: { account: this.account } })
				.then((res) => {
					this.newFriesn = null;
					this.account = null;
					if (!res.data.success) {
						this.notFind = true;
						this.user = {
							account: null,
							name: null,
							state: null,
						};
					} else {
						this.user = res.data.user;
						this.notFind = false;
					}
				});
		},
		addFriend() {
			this.axios
				.post("/AddFriend", { account: this.user.account })
				.then((res) => {
					//需要判斷重複好友
					if (res.data.success) {
						this.newFriesn = true;
					}
				});
		},
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
			position: relative;
			.top {
				color: $color1;
				position: relative;
				z-index: 1;
				height: 50%;
				background-color: $color2;
				box-shadow: 7px 7px 5px rgba(0, 0, 0, 50%);
				display: flex;
				justify-content: center;
				align-items: center;
				.search {
					position: relative;
					border: 1px solid $color1;
					padding: 8px;
					border-radius: 5px;
					input {
						text-align: center;
					}
					.btn {
						position: absolute;
						top: 0;
						right: -68px;
						background-color: unset;
						border: 1px solid $color1;
						padding: 12px;
						font-weight: 300;
						border-radius: 5px;
					}
					.btn:nth-child(3) {
						top: 68px;
						right: 68px;
					}
					.notFind {
						position: absolute;
						top: -59px;
						right: 57px;
						font-size: 24px;
						color: #f16464;
					}
					.newFriesn {
						position: absolute;
						top: -59px;
						right: 5%;
						font-size: 24px;
						font-weight: 300;
						color: #64f17b;
					}
				}
			}
			.btm {
				transition: ease-in-out 1s;
				position: absolute;
				top: 0%;
				width: 100%;
				height: 50%;
				display: flex;
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
				.state {
					box-sizing: border-box;
					border: 1px solid $color2;
					border-radius: 10px;
					margin: 15px 15px 15px 0;
					width: 60%;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 18px;
					color: $color2;
					font-weight: 300;
				}
			}
			.find {
				top: 50%;
			}
		}
	}
}
</style>

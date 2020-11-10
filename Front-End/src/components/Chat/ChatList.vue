<template>
	<div class="outer">
		<menu-component></menu-component>
		<div class="container">
			<router-link
				class="content"
				:to="'/Chat/' + item.account"
				v-for="item in firends"
				:key="item.account"
			>
				<div class="user">
					<div class="avatar">
						<img :src="avatarImg" alt="" />
					</div>
					<div class="name">{{ item.name }}</div>
				</div>
			</router-link>
			<router-link
				class="content"
				to="/Chat/test"
			>
				<div class="user">
					<div class="avatar">
						<img :src="avatarImg" alt="" />
					</div>
					<div class="name">123123</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import avatarImg from "../../assets/images/avatar.svg";
export default {
	data() {
		return {
			avatarImg: avatarImg,
		};
	},
	computed: {
		firends() {
			return this.$store.state.friends;
		},
	},
};
</script>

<style lang="scss" scoped>
.outer {
	$color1: #0b2239;
	$color2: #ffffff;
	display: flex;
	.container::-webkit-scrollbar {
		display: none;
	}
	.container {
		max-height: 100vh;
		overflow-x: hidden;
		overflow-y: scroll;
		background: linear-gradient(90deg, #0094ff, #3939db);
		display: flex;
		flex-wrap: wrap;
		flex: 1;
		.content {
			margin: 14px;
			width: 475px;
			height: 215px;
			background-color: $color1;
			display: flex;
			box-shadow: 7px 7px 5px rgba(0, 0, 0, 50%);
			.user {
				width: 100%;
				display: flex;
				align-items: center;
				.avatar {
					padding: 0 15px 0;
					width: 80px;
					height: 80px;
					img {
						width: 100%;
						display: flex;
					}
				}
				.name {
					font-size: 20px;
					color: $color2;
					font-weight: 300;
				}
			}
		}
	}
}
@media (max-width: 960px) {
	.outer {
		display: block;
		.container {
			width: 100%;
			min-height: calc(100vh - 57px);
			max-height: calc(100vh - 57px);
			padding: 8px 0 0 0;
			flex-flow: column;
			align-items: center;
			.content {
				margin: 0 0 8px;
				width: 90%;
				height: 70px;
				box-shadow: 3px 4px 5px rgba(0, 0, 0, 50%);
				.user {
					.avatar {
						width: 40px;
						height: 40px;
					}
				}
			}
		}
	}
}
</style>
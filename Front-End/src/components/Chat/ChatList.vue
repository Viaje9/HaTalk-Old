<template>
	<div class="outer">
		<menu-component></menu-component>
		<div class="container">
			<router-link class="content" :to="'/Chat/'+item.account" v-for="item in firends" :key="item.account">
				<div class="user">
					<div class="avatar">
						<img :src="avatarImg" alt="" />
					</div>
					<div class="name">{{item.name}}</div>
				</div>
				<div class="state">{{item.state}}</div>
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
				width: 40%;
				display: flex;
				flex-flow: column;
				align-items: center;
				.avatar {
					padding: 35px 0 0;
					width: 80px;
					height: 80px;
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
	}
}
</style>
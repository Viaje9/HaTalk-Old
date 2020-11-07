<template>
	<div class="outer">
		<div class="head">
			<h2>HaTalk</h2>
			<div class="avatar">
				<img :src="avatarImg" alt="" />
			</div>
			<div class="name">{{ name }}</div>
		</div>
		<div class="body">
			<router-link class="btn" to="/User"></router-link>
			<router-link class="btn" to="/Search"></router-link>
			<router-link class="btn" to="/Chat"></router-link>
			<router-link class="btn" to="/"></router-link>
		</div>
		<div class="footer">
			<span>Copyright © 2020 Viaje9 Design.</span>
		</div>
	</div>
</template>  

<script>
import avatarImg from "../assets/images/avatar.svg";
export default {
	data() {
		return {
			avatarImg: avatarImg,
		};
	},
	computed: {
		name() {
			return this.$store.state.name;
		},
	},
};
</script>

<style lang="scss" scoped>
.outer {
	position: relative;
	z-index: 999;
	$color1: #0b2239;
	$color2: #ffffff;
	display: block;
	box-sizing: border-box;
	width: 390px;
	height: 100vh;
	background-color: $color1;
	box-shadow: 7px 7px 5px rgba(0, 0, 0, 50%);
	color: $color2;
	.head {
		width: 100%;
		height: 348px;
		display: flex;
		flex-flow: column;
		align-items: center;
		border-bottom: 3px solid $color2;
		h2 {
			padding: 50px 0 0;
			font-size: 40px;
			font-weight: 200;
		}
		.avatar {
			padding: 50px 0 0;
			width: 120px;
			height: 120px;
			img {
				width: 100%;
			}
		}
		.name {
			padding: 32px 0 0;
			font-size: 24px;
			font-weight: 300;
		}
	}
	.body {
		width: 100%;
		display: flex;
		flex-flow: column;
		align-items: center;
		.btn {
			margin: 30px 0 0;
			width: 60px;
			height: 60px;
			background-size: 120px 60px;
			background-position: 0px 0px;
		}
		.btn:nth-child(1) {
			background-image: url("../assets/images/account.svg");
		}
		.btn:nth-child(2) {
			background-image: url("../assets/images/search.svg");
		}
		.btn:nth-child(3) {
			background-image: url("../assets/images/friends.svg");
		}
		.btn:nth-child(4) {
			background-image: url("../assets/images/settings.svg");
		}
	}
	.footer {
		padding: 46% 0 0;
		text-align: center;
		font-weight: 100;
		font-size: 13px;
	}
}
</style>

<template>
	<div class="outer">
		<ul>
			<li>
				<router-link to="/User">{{ name }}</router-link>
			</li>
			<li>
				<router-link to="/Search">搜索</router-link>
			</li>
			<li>
				<router-link to="/Chat">好友</router-link>
			</li>
			<li>
				<router-link to="/">更多</router-link>
			</li>
		</ul>
	</div>
</template>  

<script>
export default {
	computed: {
		name() {
			return this.$store.state.name;
		},
	},
};
</script>

<style lang="scss" scoped>
.outer {
	box-sizing: border-box;
	border: 10px rgb(168, 89, 89) solid;
	width: 20%;
	height: 100vh;

	ul {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		li {
			width: 100%;
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			a {
				$radius: 10em;
				display: flex;
				justify-content: center;
				align-items: center;
				border: rgb(35, 88, 173) 5px solid;
				background-color: rgb(176, 176, 179);
				border-radius: $radius;
				width: $radius;
				height: $radius;
			}
		}
	}
}
</style>

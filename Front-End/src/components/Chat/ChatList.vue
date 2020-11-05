<template>
	<div class="outer">
		<menu-component></menu-component>
		<main>
			<ul>
				<li v-for="item in firends" :key="item.account">
          <router-link class="btn" :to="'/Chat/'+item.account">{{ item.name }}:{{ item.state }}</router-link>
				</li>
			</ul>
		</main>
	</div>
</template>

<script>
export default {
	computed: {
		firends() {
			return this.$store.state.friends;
		},
	},
};
</script>

<style lang="scss" scoped>
.outer {
	display: flex;
	main {
		ul {
			li {
				font-size: 20px;
			}
		}
	}
}
</style>
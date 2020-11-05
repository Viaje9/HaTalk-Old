<template>
	<div class="outer">
		<menu-component></menu-component>
		<main>
			<button @click="send">送出</button>
      <input type="text" v-model="msg">
      <ul>
        <li v-for="item in message" :key="item.time">{{item.text}}</li>
      </ul>
		</main>
	</div>
</template>

<script>
export default {
	data() {
		return {
      message: [],
			msg: null,
		};
	},
	mounted() {
		const account = this.$router.currentRoute.params.id;
    this.$socket.emit("bind room", account);
		this.sockets.subscribe("chat message", (msg) => {
			this.message.push(msg)
		});
		this.axios.get("/getMsg", { params: { account: account } }).then((res) => {
			this.message = res.data;
		});
	},
	methods: {
		send() {
      this.$socket.emit("chat message", this.msg);
      this.msg = null
		},
	},
};
</script>


<style lang="scss" scoped>
.outer {
	display: flex;
}
</style>
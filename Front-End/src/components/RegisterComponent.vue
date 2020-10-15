<template>
  <div class="outer">
    <form @submit="checkForm">
      <div class="row">{{ errorPassword }}</div>
      <div class="row">
        <label for="name">暱稱</label>
        <input
          id="name"
          name="name"
          v-model="name"
          type="text"
          minlength="1"
          maxlength="10"
          required
        />
      </div>
      <div class="row">
        <label for="account">帳號</label>
        <input
          @change="checkAccount"
          id="account"
          name="account"
          v-model="account"
          type="text"
          minlength="4"
          maxlength="20"
          required
        />
      </div>
      <div class="row">
        <label for="password">密碼</label>
        <input
          id="password"
          name="password"
          v-model="password"
          type="password"
          minlength="8"
          maxlength="20"
          required
        />
      </div>
      <div class="row">
        <label for="checkPassword">確認密碼</label>
        <input
          id="checkPassword"
          name="checkPassword"
          v-model="checkPassword"
          type="password"
          required
        />
      </div>
      <div class="row">
        <router-link class="btn" to="/login">取消</router-link>
        <button type="submit">註冊</button>
      </div>
    </form>
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
      errorPassword: null,
    };
  },
  methods: {
    checkAccount: function () {
      this.$http
        .get("/CheckAccount", { params: { account: this.account } })
        .then((data) => {
          console.log(data);
        });
    },
    checkForm: function (e) {
      this.$router.push({ path: "/User" });
      this.errorPassword = null;
      if (this.password === this.checkPassword) {
        // return true;
      }
      this.errorPassword = "密碼不一致";
      e.preventDefault();
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

  form {
    .row {
      padding: 7px;
      font-size: 20px;
      display: flex;
      justify-content: flex-end;
    }

    .row:nth-child(1) {
      justify-content: center;
      color: red;
    }

    .row:nth-last-child(1) {
      margin: auto;
      width: 50%;
      justify-content: space-between;
    }
  }
}
</style>


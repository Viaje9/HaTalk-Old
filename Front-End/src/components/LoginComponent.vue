<template>
  <div class="bg">
    <h1>HaTalk</h1>
    <form class="login">
      <div class="row">
        <label for="">帳號</label>
        <input type="text" />
      </div>
      <div class="row">
        <label for="">密碼</label>
        <input type="text" />
      </div>
      <div class="row">
        <button>註冊</button>
        <button>登入</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100vh;
  background-color: #627aa0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 0;
    font-size: 60px;
    color: #e4e290;
  }

  .login {
    font-size: 35px;
    color: #00ff14;
    padding-bottom: 8%;

    input {
        height: 20px;
        padding: 0;
    }
    .row {
        display: flex;
        align-items: center;
        label {
            padding: 0 3px 0 0;
        }
    }
    .row:nth-child(3) {
      padding: 16px 0;
      display: flex;
      justify-content: space-around;
      button {
        font-size: 28px;
        border-radius: 10px;
      }
      button:focus {
        outline: unset;
      }
    }
  }
}
</style>

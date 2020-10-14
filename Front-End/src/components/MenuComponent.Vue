<template>
  <div class="outer">
    <ul>
      <li v-for="(item, index) in list" :key="index">
          <router-link :to="item.url">
              {{ index + 1 }}. {{ item.name }}
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "user", url: "/User" },
        { name: "搜索", url: "/Search" },
        { name: "好友", url: "/Chat" },
        { name: "更多", url: "/" },
      ],
    };
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

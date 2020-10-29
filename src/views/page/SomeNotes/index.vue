<template>
  <div class="SomeNotes">
      点滴记
      <chat/>
    </div>
</template>

<script>
import chat from "../OnlineService/index";
export default {
  name: "SomeNotes",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  components: {
    chat,
  },
  methods: {},
};
</script>

<style scoped lang="less">
.SomeNotes {
}
</style>

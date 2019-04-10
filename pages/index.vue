<template>
  <section class="container">
    <div>
      <Header />
      <div class="content-area">
        <SideBar />
        <MainContent />
      </div>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import SideBar from '~/components/Sidebar.vue'
import MainContent from '~/components/MainContent.vue'
import axios from "axios";

export default {
  components: {
    Header, SideBar, MainContent
  },
  data () {
      return {
        info: []
      }
  },
  mounted: function () {
      axios
        .get('https://www.reddit.com/r/popular.json')
        .then((response) => {
          (this.info = response.data); 
          console.log(this.info);
        })
  }
}
</script>

<style lang="scss">
  .content-area{
    display: flex;
    height: calc(100vh - 50px);
  }
</style>


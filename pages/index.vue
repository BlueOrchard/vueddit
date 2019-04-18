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
import {mapActions} from 'vuex';

export default {
  components: {
    Header, SideBar, MainContent
  },
  data () {
      return {
        info: []
      }
  },
  methods: {
    ...mapActions({
      initialFetch: 'posts/initialFetch'
    })
  },
  mounted: function () {
      this.initialFetch();
  }
}
</script>

<style lang="scss">
  .content-area{
    display: flex;
    height: calc(100vh - 50px);
  }

  a{
     color: rgb(44, 118, 210);
     text-decoration: none;
  }
</style>


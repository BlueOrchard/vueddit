<template>
    <div class="main-content">
        <div class="main-post"
             v-if="mainPostPermalink">
                <MainContentBox
                    v-bind:content="mainPostContent.data"/>
                <!-- TODO: Comments -->
        </div>
        <div class="no-main"
             v-else>
            Click on a post to get started.
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import MainContentBox from '~/components/partials/MainContentBox'

export default {
    components: {
        MainContentBox
    },
    computed: {
        ...mapState('posts', [
            'mainPostPermalink', 'mainPostContent'
        ])
    }
}
</script>

<style lang="scss">
    .main-content{
        width: calc(100% - 300px);
        padding: 30px 30px;
        overflow: scroll; 
    }
</style>

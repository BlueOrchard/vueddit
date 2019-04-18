<template>
    <div class="sidebar">
        <div v-if="postList.length" class="posts">
            <div class="post"
                v-for="post in postList"
                v-bind:key="post.data.id">
                    <SidebarPost 
                        v-bind:title="post.data.title"
                        v-bind:thumbnails="post.data.preview"
                        v-bind:permalink="post.data.permalink"
                        v-bind:subreddit="post.data.subreddit"
                    />
            </div>
        </div>

       <div v-else class="posts no-posts">
           No Posts to Show.
       </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import SidebarPost from '~/components/partials/SidebarPost'

export default {
    components: {
        SidebarPost
    },
    computed: {
        ...mapState('posts', {
            postList: 'postList',
        })
    }
}
</script>

<style lang="scss">
    .sidebar{
        width: 300px;
        border-right: 1px solid #DDD;
        overflow: scroll;
    }
</style>


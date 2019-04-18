<template>
    <div class="inner-post"
         v-on:click="setMainPost(permalink)"
        >
        <div
            class="thumb"
            v-if="thumb">
                <img v-bind:src="thumb" />
        </div>
        <div class="content">
            <h2>{{ title }}</h2>
            <p>/r/{{ subreddit }}</p>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    data () {
        return {
            thumb: ""
        }
    },
    props: [
        'title', 'thumbnails', 'permalink', 'subreddit'
    ],
    methods: {
        ...mapActions({
            setMainPostStore: "posts/setMainPost"
        }),
        fixThumb(thumbnail){
            this.thumb = thumbnail.replace(/amp;/g, '');
        },
        setMainPost(link){
            this.setMainPostStore(link);
        }
    },
    mounted: function(){
        if(this.thumbnails){
            this.fixThumb(this.thumbnails.images[0].resolutions[0].url);
        }
    }
}
</script>

<style lang="scss">
    .inner-post{
        min-height: 80px;
        border-bottom: 1px dotted #DDD;
        padding: 10px;
        display: flex;
        cursor: pointer;

        &:hover{
            background: rgb(252, 252, 252);
        }

        .thumb{
            width: 60px;
            height: 60px;
            text-align: center;
            overflow: hidden;
            border-radius: 10px;

            img{
                display: block;
                object-fit: cover;
                object-position: 50% 50%;
                width: 100%;
                height: 100%;
            }
        }

        .content{
            width: calc(100% - 60px);
            padding-left: 10px;
            margin-left: auto;

            h2{
                font-size: 0.8em;
                font-weight: normal;
                background: rgb(242, 242, 242);
                padding: 5px 10px;
                border-radius: 5px;
                margin: 0 0 5px;
            }

            p{
                font-size: 0.7em;
                color: rgb(37, 121, 211);
                padding: 0 10px;
            }
        }
    }
</style>

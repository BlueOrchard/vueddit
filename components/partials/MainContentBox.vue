<template>
    <div class="main-content-box">
        <!-- LOADING BOILERPLATE -->
        <div v-bind:class="loading ? 'loading' : 'loaded'">

        </div>
        
        <!-- POST LOADED -->
        <div v-if="shouldShow">

            <!-- TITLE -->
            <h1>{{ postData.title }}</h1>

            <!-- SELF POST -->
            <div v-if="postData.is_self">
                <div class="text" v-html="fixHTML(postData.selftext_html)"></div>
            </div>

            <!-- LINK/MEDIA POST -->
            <div v-else>
                <!-- MEDIA/OEMBED DETECTED -->
                <div v-if="postData.media" class="media">
                    <div class="html" v-html="fixHTML(postData.media.oembed.html)"></div>
                </div>

                <!-- IMAGE DETECTED -->
                <div v-else-if="postData.url" class="image">
                    <img v-bind:src="postData.url">
                </div>

                <div v-else>
                    Post Type Currently Not Supported.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    data: function () {
        return {
            postData: {}
        }
    },
    props: [
        'content'
    ],
    computed: {
        shouldShow(){
            return this.postData && !this.loading;
        },
        ...mapState({
            loading : "loading"
        })
    },
    methods: {
        fixHTML(html){
            if(html){
                var fixedHTML = html;
                fixedHTML = fixedHTML.replace(/amp;/g, '');
                fixedHTML = fixedHTML.replace(/&lt;/g, '<');
                fixedHTML = fixedHTML.replace(/&gt;/g, '>');
                return fixedHTML;
            }
        },
        updatePostData(dataProp){
            this.postData = dataProp;
        }
    },
    watch: {
        content: function(){
            // Map that long object of BS to postData
            // console.log("UPDATE DETECTED");
            if(this.content){
                this.updatePostData(this.content[0].data.children[0].data);
            }
        }
    }
}
</script>

<style lang="scss">
    .main-content-box{
        border-bottom: 1px dotted #DDD;

        h1{
            margin: 0 0 20px;
            background: rgb(237, 237, 237);
            padding: 10px 20px;
            border-radius: 5px;
        }

        .media{
            padding-top: 56.25%;
            position: relative;

            iframe{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }

        .image{
            img{
                width: 100%;
            }
        }

        .text{
            padding: 0 10px;
            line-height: 1.5;
            font-weight: 300;
            font-size: 0.8em;

            p{
                margin: 0 0 20px;
            }
        }
    }
</style>


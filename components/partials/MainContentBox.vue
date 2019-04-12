<template>
    <div class="main-content-box">
        <div
            v-if="content">
                <h1>{{ content[0].data.children[0].data.title }}</h1>

                <!-- MEDIA/OEMBED DETECTED -->
                <div v-if="content[0].data.children[0].data.media" class="media">
                    <div class="html" v-html="fixEmbed(content[0].data.children[0].data.media.oembed.html)"></div>
                </div>

                <div v-else>
                    Post Type Currently Not Supported.
                </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'content'
    ],
    methods: {
        fixEmbed(html){
            var fixedHTML = html;
            fixedHTML = fixedHTML.replace(/amp;/g, '');
            fixedHTML = fixedHTML.replace(/&lt;/g, '<');
            fixedHTML = fixedHTML.replace(/&gt;/g, '>');
            console.log(fixedHTML);
            return fixedHTML;
        }
    }
}
</script>

<style lang="scss">
    .main-content-box{
        h1{
            margin: 0 0 20px;
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
    }
</style>


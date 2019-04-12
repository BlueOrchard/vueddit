<template>
    <div class="inner-post">
        <h2>{{ title }}</h2>

        <div
            class="thumb"
            v-if="thumbnails">
                <img v-bind:src="thumbnails.images[0].resolutions[0].url" />
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'title', 'thumbnails'
    ]
}
</script>

<style lang="scss">
    .inner-post{
        height: 100px;
        border-bottom: 1px solid #DDD;
        padding: 10px;

        h2{
            font-size: 0.8em;
        }
    }
</style>

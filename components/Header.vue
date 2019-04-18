<template>
    <div class="header" v-bind:class="loading ? 'loading' : 'loaded'">
        <div class="logo">
            Vueddit
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            loading: "loading"
        })
    },
    mounted: function () {
        console.log(this.loading)
    }
}
</script>

<style lang="scss" scoped>
    @keyframes loading{
        0%{
            background-position-x: 0%; 
        }

        100%{
            background-position-x: 200%;
        }
    }

    .header {
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.274);
        z-index: 1;
        position: relative;

        &.loaded{
            &:after{
                height: 0;
            }
        }
        
        &:after{
            content: "";
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 4px;
            // transition: 0.25s all;
            background: linear-gradient(45deg, rgb(17, 68, 220), rgb(25, 200, 227), rgb(17, 68, 220));
            background-size: 200% auto;
            animation: 1s loading linear infinite;
        }
    }
</style>

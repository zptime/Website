
<template>
    <div class="loading" v-if="show">
        <div class="loading-wrap">
            <p class="loading-rotate"></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Loading',
    props: ['show']
}
</script>
<style scoped>
    .loading{position:fixed;top:0;right:0;bottom:0;left:0;z-index:399;}
    .loading-wrap{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:rgba(0, 0, 0, .7);border-radius:.12rem;padding:.5rem 1rem;}
    .loading-rotate{width:.75rem;height:.75rem;border:2px solid rgba(255, 255, 255, .7);border-top-color:transparent;border-radius:100%;animation:rotate .75s ease-in-out infinite;}

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
<template>
    <transition name="fade">
        <div v-if="!fullHide" class="preLoadBg">
            <transition name="fade" @after-leave="fullHide = !fullHide">
                <div v-if="showPreloader" class="preLoadContent">
                    <!-- <h2>Bitte warten..</h2> -->
                    <q-spinner color="secondary" :size="50" />
                </div>
            </transition name="fade">
        </div>
    </transition>
</template>


<script>
export default {
    name: 'datPreloadar',
    data() {
        return {
            fullHide: false, // this kicks in to first hide the spinner then the background!
        }
    },
    computed: { // basic watch - could chain events here
        showPreloader() {
            return this.$store.state.showPreloader
        }
    }
}
</script>


<style>
.preLoadBg {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 9000;
    background-color: black;
    overflow-x: hidden;
}
.preLoadContent {
    position: absolute;
    left: 50%;
    top: 50vh;
    transform: translate(-50%, -50%);
}
</style>

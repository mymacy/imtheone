<template>
    <q-layout-drawer class="leDrawer" side="left" v-model="showDrawer">
        <q-list no-border>
            <div class="drawerHeader bg-primary">
                <h2>KFZ-Albrink</h2>
            </div>
            <q-item v-scroll-to="{
                                                        el: '#sect2',
                                                        onDone: closeDrawer,
                                                        }">
                <q-item-main class="text-primary" label="Home" />
                <transition>
                    <div class="sepo" :class="{active: selectedTab=='sect2'}"></div>
                </transition>
            </q-item>
            <q-item v-scroll-to="{
                                                        el: '#sect3',
                                                        onDone: closeDrawer,
                                                        }">
                <q-item-main class="text-primary" label="Leistungen" />
                <div class="sepo" :class="{active: selectedTab=='sect3'}"></div>
            </q-item>
            <q-item v-scroll-to="{
                                                        el: '#sect4',
                                                        onDone: closeDrawer,
                                                        }">
                <q-item-main class="text-primary" label="Unser Team" />
                <div class="sepo" :class="{active: selectedTab=='sect4'}"></div>
            </q-item>
            <q-item v-scroll-to="{
                                                        el: '#sect5',
                                                        onDone: closeDrawer,
                                                        }">
                <q-item-main class="text-primary" label="Kontakt" />
                <div class="sepo" :class="{active: selectedTab=='sect5'}"></div>
            </q-item>
            <div class="q-item-separator-component"></div>
            <div class="q-list-header">Öffnungszeiten:
                <br> Mo-Do 8-17 Uhr | Fr 8-16 Uhr
                <br>
                <q-btn color="secondary" icon="phone" label="05222 123456" />
                <!-- <q-btn color="secondary" icon="mail" label="info@kfz-albrink.de" />
                                <q-btn color="secondary" icon="location_on" label="05222 123456" /> -->
            </div>
        </q-list>
    </q-layout-drawer>
</template>


<script>
import { openURL } from 'quasar' // for tel links etc.

export default {
    methods: {
        openURL,
        closeDrawer() {
            this.$store.state.showDrawer = false
        }
    },
    computed: { // basic states
        selectedTab() {
            return this.$store.state.daWaypoint
        },
        showDrawer: { // FOR V-MODELS
            get() { return this.$store.state.showDrawer; },
            set(value) { this.$store.commit('setDrawerState', value); },
        }
    }
}
</script>


<style>
.leDrawer .q-layout-drawer {
    width: 250px;
}
.drawerHeader {
    position: relative;
    top: -10px;
    height: 120px;
}
.drawerHeader h2 {
    font-size: 20px;
    position: absolute;
    bottom: 0px;
    left: 15px;
    color: white;
}
.q-list .q-list-header {
    margin-top: 50px !important;
}
.q-list .q-btn {
    top: 20px;
    /* left: 25px; */
}
.sepo {
    background: #99cc33;
    position: absolute;
    width: 100px;
    bottom: 4px;
    left: -100px;
    height: 2px;
    transition: transform 0.2s linear;
}
.sepo.active {
    transform: translateX(100px);
}
</style>

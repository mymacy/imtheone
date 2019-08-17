<template>
    <q-layout view="hHh Lpr fff">
        <div id="homy" v-waypoint="{ active: true, callback: onWaypoint }"></div>

<!-- PRELOADER -->
        <!-- <preLoader></preLoader> -->

<!-- HEADER -->
        <q-layout-header class="headerBar bg-primary" :class="{outSide: outSider, 'shadow-0': !outSider}">

            <!-- LOGO  -->
            <img class="myLogo" @click="goHome" src="../statics/logo/logo_icon_only_setted.svg" alt="myFortress">

            <!-- QUICKLAUNCH -->
            <div class="quicklaunch">
                <q-btn class="quickBtn" :class="{outSide: !outSider}" flat icon="email" @click="openURL('mailto:info@kfz-albrink.de')" />
                <q-btn class="quickBtn" :class="{outSide: !outSider}" flat icon="location_on" @click="openURL('https://www.google.com/maps/dir/?api=1&destination=Albrink+Kfz-Meisterbetrieb,+Lagesche+Str.+105A,+32108+Bad+Salzuflen&travelmode=driving')" />
                <q-btn class="quickBtn" :class="{outSide: !outSider}" flat icon="phone" @click="openURL('tel:+495222-21069')" />
            </div>

            <!-- NAVIGATION -->
            <div class="navigation gt-md">
                <q-tabs :value="selectedTab">
                    <q-tab class="navBtn" :class="{outSide: !outSider}" slot="title" label="Home"      name="sect2" v-scroll-to="'#sect2'" />
                    <q-tab class="navBtn" :class="{outSide: !outSider}" slot="title" label="Leistung"  name="sect3" v-scroll-to="'#sect3'" />
                    <q-tab class="navBtn" :class="{outSide: !outSider}" slot="title" label="Team"      name="sect4" v-scroll-to="'#sect4'" />
                    <q-tab class="navBtn" :class="{outSide: !outSider}" slot="title" label="Kontakt"   name="sect5" v-scroll-to="'#sect5'" />
                </q-tabs>
            </div>

            <!-- HAMBURGER -->
            <q-btn :class="{outSide: !outSider}" class="mobBtn" flat dense @click="toggleDaDrawer">
                <hamburger></hamburger>
            </q-btn>

<!-- DRAWER -->
            <drawor></drawor>
        </q-layout-header>

<!-- PAGES -->
        <!--
        page_1 = dashboard
        page_2 = cameras
        page_3 = bewegungsmelder
        page_4 = rauchmelder
        -->
        <q-page-container>
            <transition appear enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight" mode="out-in" duration="900">
                <router-view />
            </transition>
        </q-page-container>

<!-- FOOTER -->
        <q-layout-footer class="bg6">
            <div class="footCont" v-scroll-reveal="{ delay: 0, origin: 'left'}">
                <a class="modaLink" href="www..de" @click.prevent="datenschutzModal = true">Datenschutz</a>
                <a class="modaLink" href="www..de" @click.prevent="impressumModal = true">Impressum</a>
            </div>
            <div class="copyRight" v-scroll-reveal="{ delay: 0, origin: 'right'}">
                <span>Designed and built by</span> <a href="https://www.mymacy.de"><img class="myMLogo" @click="goHome" src="../statics/logo/mym_logo.svg" alt="myFortress"></a><span>2018 &copy;</span>
            </div>
            <div class="socialLinks">
                <a href="https://www.facebook.com/ma.cy.90">
                    <q-icon class="fbLink" name="ion-logo-facebook" v-scroll-reveal="{ delay: 100, origin: 'bottom'}" />
                </a>
                <a href="https://github.com/mymacy">
                    <q-icon class="xiLink" name="ion-logo-github" v-scroll-reveal="{ delay: 200, origin: 'bottom'}" />
                </a>
                <a href="https://www.instagram.com/marcelalbrink/">
                    <q-icon class="inLink" name="ion-logo-instagram" v-scroll-reveal="{ delay: 300, origin: 'bottom'}" />
                </a>
            </div>
        </q-layout-footer>

<!-- BACK TO TOP -->
        <q-btn v-back-to-top.animate="{offset: 500, duration: 200}" round color="primary" class="fixed-bottom-right animate-pop goHomeBtn" style="margin: 0 15px 15px 0">
            <q-icon name="keyboard_arrow_up" />
        </q-btn>

<!-- MODAL -->
        <q-modal class="aModal" v-model="datenschutzModal">
            <h4>Datenschutzerklärung:</h4>
            <q-btn color="primary" @click="datenschutzModal = false" label="Close" />
        </q-modal>
        <q-modal class="aModal" v-model="impressumModal">
            <h4>Basic Modal</h4>
            <q-btn color="primary" @click="impressumModal = false" label="Close" />
        </q-modal>


    </q-layout>
</template>


<script>
import { openURL } from 'quasar'

// import preLoader from '../myM/preLoader.vue'
import hamburger from './3_hamburger'
import drawor from './2_drawer'

export default {
    components: {
        // preLoader,
        hamburger,
        drawor,
    },
    data() {
        return {
            datenschutzModal: false,
            impressumModal: false
        }
    },
    methods: {
        openURL,
        toggleDaDrawer() {
            this.$store.state.showDrawer = !this.$store.state.showDrawer;
        },
        goHome() {
            location.reload();
        },
        onWaypoint({ going, direction, el }) {
            if (going === "in") {
                console.log(el.id);
                this.$store.state.daWaypoint = el.id;
            }
            if (el.id === "homy") {
                if (going === "out") {
                    this.$store.state.homyOut = true;
                } else {
                    this.$store.state.homyOut = false;
                }
            }
        },
    },
    computed: { // basic states
        selectedTab() { // selected tab from store
            return this.$store.state.daWaypoint
        },
        outSider() { // header is outside of start
            return this.$store.state.homyOut
        }
    },
    // COOKIE
    mounted: function() {
        this.$q.notify({
            message: 'www.kfz-albrink.de benutzt Cookies um Ihnen als Nutzer die bestmögliche Erfahrung bieten zu können. Wenn sie damit einverstanden sind dann klicken Sie bitte auf Ja',
            timeout: 0, // in milliseconds; 0 means no timeout
            color: 'secondary',
            textColor: 'black', // if default 'white' doesn't fits
            icon: 'info',
            position: 'bottom', // 'top', 'left', 'bottom-left' etc
            actions: [{
                    label: 'Ja',
                    noDismiss: true, // optional, v0.15.11+
                    handler: () => {
                        console.log('acting')
                    }
                },
                {
                    label: 'Nein',
                    handler: () => {
                        console.log('dismissed')
                    }
                }
            ],
        })
    },
}
</script>


<style>
/* LAYOUT */
        .q-layout {
            overflow: hidden;
        }

/* HEADER */
        .headerBar {
            width: 100vw;
            height: 80px;
            transition: height 0.4s linear;
            display: grid;
            grid-template-columns: 0%     80%             20%;
            /*                 LOGO ^ QUICK ^  NAV ^ HAMBUR ^   */
            grid-template-rows: 100%;
        }
        .myLogo {
            margin: 3px auto;
            height: 0%;
        }
        @media only screen and (min-width: 769px) {
            .headerBar {
                grid-template-columns: 30% 55%    15%;
            }
            .myLogo {
                height: 90%;
            }
        }
        @media only screen and (min-width: 1024px) {
            .headerBar {
                grid-template-columns: 25% 20% 55% 0%;
            }
            .myLogo {
                height: 90%;
            }
        }
        .headerBar.outSide {
            height: 48px;
        }
        .quickBtn {
            font-size: 17px !important;
            height: 100%;
            width: 33%;
        }
        .quickBtn.outSide {
            font-size: 22px !important;
        }
        .navigation {
            margin: 0px auto;
        }
        .navBtn {
            height: 48px;
            transition: height 0.4s linear;
        }
        .navBtn.outSide {
            height: 80px;
        }


/* FOOTER */
        footer {
            z-index: 2 !important;
            -webkit-box-shadow: inset 0px 19px 44px -8px rgba(0, 0, 0, 0.64) !important;
            -moz-box-shadow: inset 0px 19px 44px -8px rgba(0, 0, 0, 0.64) !important;
            box-shadow: inset 0px 19px 44px -8px rgba(0, 0, 0, 0.64) !important;

            /* height: 25vh; */
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            z-index: 3
        }
        footer a,
        footer span {
            text-decoration: none;
            color: #a6a6a6;
            margin: 0px 3px;
        }
        .modaLink { padding: 30px 5px }
        .myMLogo {
            position: relative;
            width: 55px;
            top: 6px;
        }
        .copyRight { margin-top: 10px }
        .socialLinks {
            margin-top: 15px;
            font-size: 25px;
        }
        .fbLink { transition: color 0.3s linear; margin-right: 10px }
        .fbLink:hover { color: #3D68AE }
        .xiLink { transition: color 0.3s linear }
        .xiLink:hover { color: #282D31 }
        .inLink { transition: color 0.3s linear; margin-left: 10px }
        .inLink:hover { color: #DC3076 }


/* BACK TO TOP */
        .goHomeBtn {
            z-index: 10;
        }


/* MODALS */


</style>

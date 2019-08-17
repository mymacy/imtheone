<template>
    <q-page>

        <intro id="sect1"></intro>

        <div class="daContainer bg1" id="sect2" v-waypoint="{ active: true, callback: onWaypoint }">
            <div class="contentReducer">
                <!-- <welcome></welcome> -->
            </div>
        </div>

        <div class="daContainer bg2 withSepa" id="sect3" v-waypoint="{ active: true, callback: onWaypoint }">
            <div class="contentReducer">
                <!-- <service></service> -->
            </div>
        </div>

        <!-- <skew></skew> -->

        <div class="daContainer bg3 dropShadow down" id="sect4" v-waypoint="{ active: true, callback: onWaypoint }">
            <div class="contentReducer">
                <!-- <api></api>
                <api2></api2> -->
            </div>
        </div>

        <!-- <s_parallax></s_parallax> -->

        <div class="daContainer bg4 dropShadow" id="sect5" v-waypoint="{ active: true, callback: onWaypoint }">
            <div class="contentReducer">
            </div>
        </div>

        <!-- <s_parallax></s_parallax> -->

        <div class="daContainer bg3" id="sect6" v-waypoint="{ active: true, callback: onWaypoint }">
            <div class="contentReducer">
            </div>
        </div>

    </q-page>
</template>


<script>
// import intro from './1_intro'
// import welcome from './2_welcome'
// import service from './3_service'
// import parallax from './4_parallax'

export default {
    components: {
        // intro,
        // welcome,
        // service,
        // parallax,
    },
    methods: {
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
        }
    }
}
</script>


<style>
/* CONTAINER */

.daContainer {
    overflow: hidden;

    padding: 14vh 15px;
    min-height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.contentReducer {
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
}

/* SHADOWS */

.withSepa {
    position: relative;
    z-index: 4;
}
.dropShadow {
    position: relative;
    z-index: 2;
    -webkit-box-shadow: 0px 3px 31px 8px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: 0px 3px 31px 8px rgba(0, 0, 0, 0.64);
    box-shadow: 0px 3px 31px 8px rgba(0, 0, 0, 0.64);
}
.dropShadow.up {
    -webkit-box-shadow: 0px -8px 50px -9px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: 0px -8px 50px -9px rgba(0, 0, 0, 0.64);
    box-shadow: 0px -10px 50px -9px rgba(0, 0, 0, 0.64);
}
.dropShadow.down {
    -webkit-box-shadow: 0px 17px 50px -9px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: 0px 17px 50px -9px rgba(0, 0, 0, 0.64);
    box-shadow: 0px 17px 50px -9px rgba(0, 0, 0, 0.64);
}
</style>

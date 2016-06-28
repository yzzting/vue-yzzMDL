<template>
<yzz-sidenav id="sidenav" fixed>
    <li class="logo">
        <a v-link="{path:'/about'}">
        </a>
    </li>
    <li class="item">
        <a v-link="{path:'/about'}">About</a>
    </li>
    <li class="item">
        <a v-link="{path:'/install'}">Install</a>
    </li>
    <li class="item">
        <a v-link="{path:'/start'}">Getting Started</a>
    </li>
    <li class="no-padding">
        <ul class="collapsible">
            <li class="item">
                <a class="collapsible-header" @click="collapse('components')">Components</a>
                <div class="yzz-collapsible-body" v-show="collapseStatus.components">
                    <ul>
                        <li>
                            <a v-link="{path:'/buttons'}">Buttons</a>
                        </li>
                        <li>
                            <a v-link="{path:'/cards'}">Cards(incomplete)</a>
                        </li>
                        <li>
                            <a v-link="{path:'/chips'}">Chips</a>
                        </li>
                        <li>
                            <a v-link="{path:'/footer'}">Footer</a>
                        </li>
                        <li>
                            <a v-link="{path:'/forms'}">Forms</a>
                        </li>
                        <li>
                            <a v-link="{path:'/preloader'}">Preloader</a>
                        </li>
                        <li>
                            <a v-link="{path:'/navbar'}">Navbar(incomplete)</a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </li>
</yzz-sidenav>
    <main :style="{paddingLeft:'240px'}">
        <router-view></router-view>
    </main>
</template>

<script type="babel">
export default {
    el:"#app",
    data(){
        return {
            collapseStatus:{
                components:false
            }
        }
    },
    methods:{
        collapse(name){
            this.collapseStatus[name]=!this.collapseStatus[name];
        }
    }
}
</script>

<style>
    .sidenav ul a{
        font-size: 13px;
        padding:1.3em 2em;
        display: block;
        font-weight: bold;
    }
    .item{
        padding:1.3em 2em;
    }
    .yzz-collapsible-body{
        padding: inherit;
    }
    .yzz-collapsible-body li {
        padding: 1.5em 2em
    }
</style>

<template>
    <header>
        <nav class="nav-header">
            <a v-link="{path:'/install'}" class="header-button">Install</a>
        </nav>
    </header>
    <div class="container" id="container">
        <com-title>安装</com-title>
        <div class="doc-list">
            <com-content>通过npm进行安装</com-content>
            <com-code lang="javascript">{{install.install}}</com-code>
        </div>
    </div>
</template>

<script>
    import {docView,hasCode} from './mixin.js';
    import install from '../doc/install.js';
    export default {
        mixins:[docView,hasCode],
        data(){
            return {
                install
            }
        }
    }
</script>

<style>
.doc-list{
    padding: 1em;
}
</style>

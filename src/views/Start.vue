<template>
    <header>
        <nav class="nav-header">
            <a v-link="{path:'/start'}" class="header-button">Start</a>
        </nav>
    </header>
    <div class="container" id="container">
        <com-title>使用</com-title>
        <div class="doc-list">
            <com-code lang="javascript">{{use.use}}</com-code>
        </div>
    </div>
</template>

<script>
    import {docView,hasCode} from './mixin.js';
    import use from '../doc/start.js';
    export default {
        mixins:[docView,hasCode],
        data(){
            return {
                use
            }
        }
    }
</script>

<style>
</style>

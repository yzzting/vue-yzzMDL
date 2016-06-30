<template>
    <div class="toolbar">
        <div class="com-toolbar-tools">
            <h2 class="com-title"><slot></slot></h2>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        color:String
    }
}
</script>

<style>
    .com-title {
        /*font-weight: 300;
        font-size: 3em;
        color:#D50000;*/
    }
</style>

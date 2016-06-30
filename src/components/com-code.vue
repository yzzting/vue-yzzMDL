<template>
    <hljs class="code-style"  :lang="lang">
        <pre>
            <code>
                <slot></slot>
            </code>
        </pre>
    </hljs>
</template>

<script>
export default {
    props:{
        lang:String,
        code:String
    },
    created(){
        this.lang=`${this.lang}`;
    }
}
</script>

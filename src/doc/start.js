var use = `
import Vue from 'vue'
import Material from 'vue-yzzmdl'
//全局注册所有插件
Material.regAll(Vue)
//或者..
//选择你喜欢的 ex:
Material.reg(Vue,['forms','navbar'])`

export default {
    use
}

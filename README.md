# Imps Platform Detect

You can easily detect a device by using this plugin. This plugin is really lightweight and easy to use.

[![N|Solid](https://www.iampapaisarkar.in/powered-by.svg)](https://www.iampapaisarkar.in)

[![N|Solid](https://www.iampapaisarkar.in/hire-me.svg)](https://www.upwork.com/freelancers/~01b68508e481c72291)

## installation
### Vue2
```sh
npm i imps-platform-detect --tag=v2
```
### Vue3
```sh
npm i imps-platform-detect --tag=v3
```
## Usage

```vue
#Vue 2 
// import and use in your main.js file

import Vue from 'vue'
import App from './App.vue'
import ImpsPlatform from 'imps-platform-detect';

Vue.use(ImpsPlatform);

new Vue({
  render: h => h(App),
}).$mount('#app')

```

```vue
// use on vue components 

<template>
    <div>
        <div v-if="$platform.isMobile">Platform is Mobile</div>
        <div v-if="$platform.isWeb">Platform is Web</div>
        <div v-if="$platform.isTablet">Platform is Tablet</div>
    </div>
</template>

```

```vue
// use on vue script 
<script>
    export default {
        mounted(){
            console.log(`Platform is ${this.$platform.isMobile}`);
            console.log(`Platform is ${this.$platform.isWeb}`);
            console.log(`Platform is ${this.$platform.isTablet}`);
        }
    }
</script>

```

```vue
#Vue 3
// import and use in your main.js file

import { createApp } from 'vue';
import App from './App.vue';
import ImpsPlatform from 'imps-platform-detect';

const app = createApp(App);

// Install the plugin globally
app.use(ImpsPlatform);

app.mount('#app');

```

```vue
// use on vue components 

<template>
    <div>
        <div v-if="$platform.isMobile">Platform is Mobile</div>
        <div v-if="$platform.isWeb">Platform is Web</div>
        <div v-if="$platform.isTablet">Platform is Tablet</div>
    </div>
</template>

```

## License

[MIT](https://choosealicense.com/licenses/mit/)
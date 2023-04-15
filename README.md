# Imps Platform Detect

You can easily detect a device by using this plugin. This plugin is really lightweight and easy to use.

[![N|Solid](https://www.iampapaisarkar.in/powered-by.svg)](https://www.iampapaisarkar.in)

[![N|Solid](https://www.iampapaisarkar.in/hire-me.svg)](https://www.upwork.com/freelancers/~01b68508e481c72291)

## installation
```sh
npm i imps-platform-detect
```
## Usage

```vue

// import and use in your main.js file

import ImpsPlatform from 'imps-platform-detect';
Vue.use(ImpsPlatform);

```

```vue
// use on vue components 

<template>
    <div>
        {{$platform}}
    </div>
</template>

```

```vue
// use on vue script 
<script>
    export default {
        data(){},
        methods:{
        checkDevices: function(){
            if(this.$platform == 'web'){
            console.log('Platform is web');
            }else if(this.$platform == 'mobile'){
            console.log('Platform is mobile');
            }else if(this.$platform == 'tablet'){
            console.log('Platform is tablet');
            }
        }
        }
    }
</script>

```

## License

[MIT](https://choosealicense.com/licenses/mit/)
export default {
    apps: [
        {
            name: 'NuxtAppName',
            exec_mode: 'cluster',
            instances: 'max', // またはインスタンスの数
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start'
        }
    ]
}
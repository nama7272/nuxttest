export default {
    apps: [{
        name: 'namaipm2test',
        exec_mode: 'cluster',
        instances: 'max',
        script: '/home/namai5/namai5.xsrv.jp/public_html/nuxttest/.output/server',
        args: '',
        env: {
            NODE_ENV: 'production'
        }
    }]
};
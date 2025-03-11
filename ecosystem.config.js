export default {
    apps: [{
        name: 'namaipm2test',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs',
        args: '',
        env: {
            NODE_ENV: 'production'
        }
    }]
};
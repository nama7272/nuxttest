module.exports = {
    apps: [{
        name: 'test',
        exec_mode: 'cluster',
        instances: 1,
        script: './.output/server/index.mjs',
        args: '',
    }]
};
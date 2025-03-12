module.exports = {
    apps: [{
        name: 'test',
        exec_mode: 'cluster',
        instances: 1,
        script: './.output/server/index.mjs',
        args: '',
        env: {
            NODE_ENV: 'production',
            DATABASE_URL: "mysql://namai5_111:nama7272@localhost:3306/namai5_test"
        }
    }]
};
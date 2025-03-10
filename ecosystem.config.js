export default {
    apps: [
        {
            name: 'NuxtAppName',
            exec_mode: 'cluster',
            instances: 'max', // またはインスタンスの数
            script: './.output/server/index.mjs', // ビルドされたアプリケーションのパス
            args: '', // 引数は不要
            env: {
                NODE_ENV: 'production' // 本番環境であることを明示的に設定
            }
        }
    ]
};
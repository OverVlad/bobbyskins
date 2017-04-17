module.exports = function (shipit) {
    require('shipit-deploy')(shipit);
    require('shipit-shared')(shipit);

    shipit.on('deployed', () => {
        shipit.remote(`cd ${shipit.currentPath} && npm i`)
        .then(() => shipit.remote(`cd ${shipit.currentPath} && ./node_modules/.bin/sequelize db:migrate --env=production`))
        .then(() => shipit.remote(`cd ${shipit.config.deployTo}/shared && cp ./database_config.json ${shipit.currentPath}/config/config.json && cp ./app_config.json ${shipit.currentPath}/src/config.json`))
        .then(() => shipit.remote('pm2 stop bolr-bot'))
        .then(() => shipit.remote(`pm2 start ${shipit.currentPath}/src/app.js --name bolr-bot -- production`));
    });

    shipit.initConfig({
        default: {
            workspace: '/tmp/github-monitor',
            deployTo: '/home/deployer/bolr-bot',
            repositoryUrl: 'git@github.com:BotCube/BOLR-bot.git',
            ignores: ['.git', 'node_modules'],
            rsync: ['--del'],
            keepReleases: 2,
            shallowClone: true,
        },
        production: {
            servers: 'deployer@174.138.80.14',
            branch: 'master',
        },
    });
};

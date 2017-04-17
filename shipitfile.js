module.exports = function (shipit) {
    require('shipit-deploy')(shipit);
    require('shipit-shared')(shipit);

    shipit.on('deployed', () => {
        shipit.remote(`cd ${shipit.currentPath} && npm install -dd, --verbose: --loglevel verbose`)
        .then(() => shipit.remote(`cd ${shipit.config.deployTo}/shared && cp ./server_config.js ${shipit.currentPath}/server/config.js`))
    });

    shipit.initConfig({
        default: {
            workspace: '/tmp/github-monitor',
            deployTo: '/home/deployer/bobby-skins',
            repositoryUrl: 'git@bitbucket.org:webimagination/bobby-skins.git',
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

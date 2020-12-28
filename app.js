const Hapi = require('hapi');
const filepaths = require('filepaths');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

let routes = filepaths.getSync(__dirname + '/src');
for(let route of routes)
    server.route( require(route) );

const init = async () => {
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
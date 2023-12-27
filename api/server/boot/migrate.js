'use strict';

module.exports = function(server) {
    server.dataSources.main.automigrate();
};

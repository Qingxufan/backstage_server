
module.exports = {
    mode: 'test',//test dev prod
    dev: {
        proxy_url:'http://192.168.0.103:54001',
        mongodb: {
            backstage_url: 'mongodb://127.0.0.1:27017/backstage',
            statistic_url: 'mongodb://127.0.0.1:27017/statistic',
            arcade_center_url: 'mongodb://192.168.0.11:27017/arcade-center-test',
        }
    },
    test: {
        proxy_url:'http://192.168.0.11:17002',
        mongodb: {        
            backstage_url: 'mongodb://192.168.0.11:27017/backstage',
            statistic_url: 'mongodb://192.168.0.11:27017/statistic',
            arcade_center_url: 'mongodb://192.168.0.11:27017/arcade-center-test',
        }
    },
    prod: {
        proxy_url:'http://172.31.20.220:17002',
        mongodb: {
            backstage_url: 'mongodb://ubstage:RUTSwmDuFVhGNySLFtDtpIZuXA1cz3;;@172.31.20.110:27017/backstage',
            statistic_url: 'mongodb://ustatis:VOAQNmBDvLfJVP3kJXzadoVfyUIm44;;@172.31.20.110:27017/statistic',
            arcade_center_url: 'mongodb://uarcade:UuPtGI0qRxqlYgioD0P33HEIqWfL1j;;@172.31.20.110:27017/arcade-center',
        }
    }
}


const development = "http://localhost:5000";

const production = "http://montapc.herokuapp.com";

var domain = {
    development: () => {
        return development;
    },
    production: () => {
        return production;
    },
    active: () => {
        if (process.env.NODE_ENV.trim() === 'development') {
            return development;
        } else {
            return production;
        }
    }
}

module.exports = domain
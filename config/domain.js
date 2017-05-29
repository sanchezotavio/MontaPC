const development = "http://localhost:8080";

const production = "http://montapc.herokuapp.com";

var domain = {
    development: () => {
        return development;
    },
    production: () => {
        return production;
    },
    active: () => {
        if (process.env.NODE_ENV === 'development') {
            return development;
        } else {
            return production;
        }
    }
}

module.exports = domain

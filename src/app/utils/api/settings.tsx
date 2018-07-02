//Problems with @types/node
declare var process: {
  env: {
    NODE_ENV: string
  }
};

const urls: {
    local: {
        api: string
    },
    production: {
        api: string
    }
} = {
    local: {
        api: 'http://localhost:4000'
    },
    production: {
        api: 'yourproductionapiurl'
    }
};

if (process.env.NODE_ENV !== 'production') {
    console.info('Environment:' + process.env.NODE_ENV);
}

//Set endpoint depending on providede NODE_ENV variable in webpack
let endpoint: {
    api: string
} = urls[process.env.NODE_ENV];

//Export API_SETTINGS for consumption in actions
export const API_SETTINGS: {
    API_URL: string
} = {
    API_URL: endpoint.api
};

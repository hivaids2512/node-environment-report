const os = require('os-utils');

exports.getCpuUsage = () => {
    return new Promise((resolve, reject) => {
        os.cpuUsage((v) => {
            if (v) {
                resolve(v);
            } else {
                reject("Error");
            }
        });
    });
};

exports.getCpuFree = () => {
    return new Promise((resolve, reject) => {
        os.cpuFree((v) => {
            if (v) {
                resolve(v);
            } else {
                reject("Error");
            }
        });
    });
};

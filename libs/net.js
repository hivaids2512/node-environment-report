const si = require('systeminformation');

exports.getIFaceList = () => {
    return new Promise((resolve, reject) => {
        si.networkInterfaces(function (data) {
            if (data) {
                resolve(data);
            } else {
                reject('Err');
            }
        });
    });
};

exports.getIFaceStatus = (iterface) => {
    return new Promise((resolve, reject) => {
        si.networkStats(iterface, function (data) {
            if (data) {
                resolve(data);
            } else {
                reject('Err');
            }
        });
    });
};
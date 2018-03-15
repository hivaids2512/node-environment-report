const disk = require('diskusage');
const os = require('os');
const si = require('systeminformation');

var path = os.platform() === 'win32' ? 'c:' : '/';

exports.getDiskStatus = () => {
    return new Promise((resolve, reject) => {
        disk.check(path, function (err, info) {
            if (err) {
                reject(err);
            } else {
                resolve(info);
            }
        });
    });
};

exports.getIOStatus = () => {
    return new Promise((resolve, reject) => {
        si.disksIO(function (data) {
            if (data) {
                resolve(data);
            } else {
                reject("Err");
            }
        });
    });
};

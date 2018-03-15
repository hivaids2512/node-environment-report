const os = require('os');

exports.getTotalMermory = () => {
    return os.totalmem();
};

exports.getFreeMermory = () => {
    return os.freemem();
};
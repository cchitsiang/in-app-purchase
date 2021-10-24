module.exports = {
    getArg: function (argName, defaultValue) {
        let envName = `TEST_${argName.toUpperCase()}`;
        if (process.env.hasOwnProperty(envName)) {
            return process.env[envName];
        }
        process.argv.forEach((arg) => {
            let start = `--${argName}=`;
            if (arg.startsWith(start)) {
                return arg.replace(start, '');
            }
        });
        return defaultValue;
    }
};


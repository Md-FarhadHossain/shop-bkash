export class Logger {
    _isLoggingEnabled;
    _msg;
    _loggableObj;

    constructor(isLoggingEnabled) {
        this._isLoggingEnabled = isLoggingEnabled;
    }

    loggable(obj, path) {
        if (path) {
            this._loggableObj = this.$lodash.get(obj, path)
        } else {
            this._loggableObj = obj
        }

        return this
    }

    message(msg) {
        this._msg = msg;
        return this
    }

    log() {
        if (!this._isLoggingEnabled) return;

        if (this._msg) {
            console.log(this._msg, JSON.stringify(this._loggableObj, null, 2));
        } else {
            console.log(JSON.stringify(this._loggableObj, null, 2));
        }
    }
}
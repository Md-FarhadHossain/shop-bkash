const moment = require('moment');
const axios = require('axios');

module.exports = {
    genRanHex: (size) => {
        return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    },
    TRACE_ID_HEADER: 'X-B3-TraceId',
    SPAN_ID_HEADER: 'X-B3-SpanId',
    CLIENT_IP_HEADER: 'X-User-Ip-Address',
    getReportFileName() {
        return 'TransactionReport-' + moment().format('DD-MM-yyyy') + '.pdf'
    },
    getWebhookReportFileName(batchId) {
        return 'wh-' + batchId + '.xlsx'
    },
    getReasonReportFileName(fileName) {
        return fileName + '-' + moment().format('DD-MM-yyyy') + '.pdf'
    },
    async getIdAddress() {
        let ipAddress;

        await axios.get('https://api.ipify.org/?format=json')
            .then(({
                data
            }) => {
                ipAddress = data.ip
            })
            .catch(err => console.debug(err))

        return ipAddress;
    },
    isRemoteLogo(arg) {
        if (!arg) return false;
        return !!(arg.startsWith('https://') || arg.startsWith('http://'));
    },
    PASSWORD_POLICY: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])(?=.{8,})/,
    EMAIL_RULE: /.+@.+\..+/,
    PHONE_NUMBER_RULE: /^(?=\d{11}$)(01)\d+/,
    URL_RULE: /^(https:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    URL_FACEBOOK_RULES: /^(https:\/\/)(www\.)?[(facebook.com|fb.com)|(fb.com)].+$/,
    URL_BASE_PATH_RULE: /^[A-Za-z0-9]+$/,
    TRANSACTION_ID_RULE: /^[A-Z-0-9]{10}$/,
    DECIMAL_ABOVE_ZERO_RULE: /^(?=.*[1-9])\d+(?:\.\d{1,2})?$/,
    DECIMAL_ABOVE_ZERO_BELOW_ONE_MILLION_RULE: /^(?=.*[1-9])\d{1,6}(?:\.\d{1,2})?$/,
    PIN_RULE: /^\d{4,5}$/,
    DIGITS_RULE: /^\d+$/,
    DIGITS_ONLY_INPUT_RULE: /[^\d]/g,
    INTEGER_ONLY: /^[1-9]\d*$/,
    EMAIL_ADDRESS_RULE: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}
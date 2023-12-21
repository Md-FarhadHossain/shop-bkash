import Axios from "axios";
import {
    getIdAddress,
    CLIENT_IP_HEADER
} from "cpp-js-util/CppUtil"

export default class CppClient {
    basePath;
    constructor(basePath, localStorage) {
        this.basePath = basePath;
        this.localStorage = localStorage;

        this.axios = Axios.create({
            baseURL: basePath,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    async post(url, payload, captchaResponse = null) {
        let ipAddress = await getIdAddress();

        this.axios.defaults.headers.common[CLIENT_IP_HEADER] = ipAddress;

        if (localStorage.getItem("visitorId")) this.axios.defaults.headers.common['visitor-id'] = localStorage.getItem("visitorId");

        if (captchaResponse) this.axios.defaults.headers.common['captcha-response'] = captchaResponse;
        this.axios.defaults.baseURL = this.basePath;

        return this.axios.post(url, payload);
    }

    async download(url, payload) {
        let ipAddress = await getIdAddress();

        return this.axios.post(url, payload, {
            responseType: 'arraybuffer',
            headers: {
                X_FORWARDED_FOR: ipAddress
            }
        })
    }
}
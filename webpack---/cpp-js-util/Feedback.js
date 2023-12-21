import Swal from "sweetalert2";
import _ from "lodash";
import Loader from "./Loader";

const swalToast = Swal.mixin({
    toast: true,
    icon: 'success',
    title: 'Success',
    animation: false,
    position: 'top-right',
    showConfirmButton: false,
    allowOutsideClick: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

export default {
    showLoading() {
        Loader.showLoader();
    },
    hideLoading() {
        Loader.hideLoader();
    },
    showFailed(response) {
        Loader.hideLoader();

        let message = _.get(response, 'data.errorMessageEn', 'Something went wrong. Please try again!');

        let validationErrors = _.get(response, 'data.validationErrors', []);

        if (!validationErrors) validationErrors = []

        let errs = '';

        validationErrors.forEach(err => {
            errs += `<li>${err.field}: ${err.errorMessageEn}</li>`;
        });

        let html = `<div>${message}</div><div class="validation-errors"><ul>${errs}</ul></div>`
        let closeOnClickOutside = false;


        return Swal.fire({
            titleText: "Failed!",
            html: `<div>${message}</div><div class="validation-errors"><ul>${errs}</ul></div>`,
            allowOutsideClick: false,
            icon: 'error',
        });
    },
    getConfirmation() {
        return Swal.fire({
            icon: 'warning',
            iconColor: '#b3dc10',
            titleText: "Are you sure!",
            text: "Are you sure you want to do this?",
            allowOutsideClick: false,
            reverseButtons: true,
            showDenyButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Yes'
        }).then(({
            value
        }) => !!value);
    },
    getRouteLeaveConfimation() {
        return Swal.fire({
            icon: 'warning',
            iconColor: '#b3dc10',
            titleText: "Are you sure!",
            text: "Are you sure you want to leave",
            allowOutsideClick: false,
            reverseButtons: true,
            showDenyButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Yes'
        });
    },
    showSuccessMessage(message) {
        Loader.hideLoader();
        return Swal.fire({
            titleText: "Successful!",
            text: message,
            allowOutsideClick: false,
            icon: 'success',
        })
    },

    showErrorMessage(title, message, footer) {
        Loader.hideLoader();
        return Swal.fire({
            icon: 'error',
            title: title,
            text: message,
            footer: footer,
            allowOutsideClick: false,
        });
    },
    showAutoFailed(response, callback) {
        Loader.hideLoader();

        let message = "কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন!";
        message = _.get(response, 'data.errorMessageBn', null);
        if (message == null || message === '') {
            message = _.get(response, 'data.errorMessageEn', 'কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন!');
        }

        if (response ? .data ? .internalCode === 'MERCHANT_ONBOARDING_COMPLETED' ||
            response ? .data ? .internalCode === 'ONBOARDING_IN_PROCESS' ||
            response ? .data ? .internalCode === 'MERCHANT_ONBOARDING_ABORTED' ||
            response ? .data ? .internalCode === 'EMAIL_VERIFICATION_COMPLETED' ||
            response ? .data ? .internalCode === 'RETRY_LIMIT_EXCEEDED') {

            this.showAutoWarningMessage(
                'সতর্কীকরণ',
                message
            );
            if (callback !== undefined) {
                callback();
            };
        } else {

            let validationErrors = _.get(response, 'data.validationErrors', []);

            if (!validationErrors) validationErrors = []

            let errs = '';

            validationErrors.forEach(err => {
                let msg = err.errorMessageBn ? err.errorMessageBn : err.errorMessageEn;
                errs += `<li>${err.field}: ${msg}</li>`;
            });

            let html = `<div>${message}</div><div class="validation-errors"><ul>${errs}</ul></div>`

            return Swal.fire({
                title: 'ব্যর্থ হয়েছে!',
                html: html,
                icon: 'error',
                confirmButtonText: "ঠিক আছে",
                cancelButtonText: "না",
                allowOutsideClick: false,
            });
        }
    },
    getAutoConfirmation() {
        return Swal.fire({
            icon: 'warning',
            iconColor: '#b3dc10',
            titleText: "আপনি কি নিশ্চিত?",
            text: "আপনি কি নিশ্চিত যে আপনি এটি করতে চান?",
            reverseButtons: true,
            showDenyButton: true,
            showConfirmButton: true,
            allowOutsideClick: false,
            confirmButtonText: "ঠিক আছে",
            cancelButtonText: "না"
        }).then(({
            value
        }) => !!value)
    },
    showAutoSuccessMessage(message) {
        Loader.hideLoader();
        return Swal.fire({
            icon: 'success',
            title: 'সফল!',
            text: message,
            confirmButtonText: "ঠিক আছে",
            cancelButtonText: "না",
            allowOutsideClick: false,
        });
    },
    showSubtleErrorToast(message, timer = 3000) {
        return swalToast.fire({
            animation: true,
            position: 'bottom-end',
            title: message,
            icon: 'error',
            timer
        });
    },
    showAutoErrorMessage(title, message, footer) {
        Loader.hideLoader();
        return Swal.fire({
            icon: 'error',
            title: title,
            text: message,
            footer: footer,
            confirmButtonText: "ঠিক আছে",
            cancelButtonText: "না",
            allowOutsideClick: false,
        });
    },
    showAutoWarningMessage(title, message, footer) {
        Loader.hideLoader();
        return Swal.fire({
            icon: 'warning',
            title: title,
            text: message,
            footer: footer,
            confirmButtonText: "ঠিক আছে",
            cancelButtonText: "না",
            allowOutsideClick: false,
        });
    },
    showShortToast(message, timer = 3000) {
        return swalToast.fire({
            animation: true,
            title: message,
            timer
        });
    }
}
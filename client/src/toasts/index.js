import {createToast} from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

export const Toasts = {
    createErrorToast(content, description) {
        createToast({
                title: content ? content : 'Помилка',
                description: description ? description : '',
            },
            {
                showCloseButton: 'true',
                swipeClose: 'true',
                toastBackgroundColor: '#e04141',
                showIcon: 'true',
                position: 'top-right',
                type: 'warning',
                transition: 'slide',
            })
    },

    createSuccessToast(content, description) {
        createToast({
                title: content ? content : 'Успішно!',
                description: description ? description : '',
            },
            {
                showCloseButton: 'true',
                swipeClose: 'true',
                toastBackgroundColor: '#41e051',
                showIcon: 'true',
                position: 'top-right',
                type: 'success',
                transition: 'slide',
                timeout: 2000
            })
    }
}

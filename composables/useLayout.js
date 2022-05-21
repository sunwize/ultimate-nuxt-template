import {reactive, toRefs, Ref, UnwrapRef} from "@nuxtjs/composition-api";

const state = reactive({
    innerWidth: process.browser ? window.innerWidth : 0,
    innerHeight: process.browser ? window.innerHeight : 0,
    isMobileLayout: process.browser ? window.innerWidth <= 640 : false
});

if (process.browser) {
    window.addEventListener('resize', () => {
        state.isMobileLayout = window.innerWidth <= 640;
        state.innerWidth = window.innerWidth;
        state.innerHeight = window.innerHeight;
    });
}

/**
 * @returns {{innerWidth: Ref<UnwrapRef<{innerWidth: (number|number), innerHeight: (number|number), isMobileLayout: (boolean|boolean)}>["innerWidth"]>, innerHeight: Ref<UnwrapRef<{innerWidth: (number|number), innerHeight: (number|number), isMobileLayout: (boolean|boolean)}>["innerHeight"]>, isMobileLayout: Ref<UnwrapRef<{innerWidth: (number|number), innerHeight: (number|number), isMobileLayout: (boolean|boolean)}>["isMobileLayout"]>}}
 */
export default function useLayout() {
    return {
        ...toRefs(state)
    };
};

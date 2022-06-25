<template>
    <component :is="tag" :type="buttonType" :to="to" type="button" class="btn border-gray-300 text-gray-700 bg-white hover:bg-gray-100 focus:ring-slate-500 disabled:bg-white disabled:text-gray-400">
        <slot></slot>
    </component>
</template>

<script>
import useButton from '@/composables/useButton';
export default {
    props: {
        is: String,
        type: String,
        to: String
    },
    setup(props) {
        return { ...useButton(props) }
    }
}
</script>

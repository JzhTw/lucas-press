<template>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild 
                        as="template" 
                        enter="duration-300 ease-out" 
                        enter-from="opacity-0"
                        enter-to="opacity-100" 
                        leave="duration-200 ease-in" 
                        leave-from="opacity-100"
                        leave-to="opacity-0">
                        <div
                            class="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">

                            <div class="px-6 py-4">

                                <DialogTitle as="h3" class="text-lg text-center font-medium leading-6 text-gray-900">
                                    <slot name="title"></slot>
                                </DialogTitle>

                                <slot name="content"></slot>
                            </div>

                            <div class="p-6">
                                <slot name="footer">
                                    <PrimaryButton @click="closeModal" class="w-full py-1.5">
                                    確定
                                </PrimaryButton>
                                </slot>
                                
                            </div>

                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import { useVModel } from '@vueuse/core'
import PrimaryButton from './PrimaryButton.vue'

export default {
    emit: ["update:model-value"],
    props: {
        modelValue: Boolean
    },
    setup(props) {
        // 設定Model 開關
        const isOpen = useVModel(props);

        // 關閉Model
        const closeModal = () => {
            isOpen.value = false;
        };
        // 開啟Modal
        const openModal = () => {
            isOpen.value = true
        }

        return {
            isOpen,
            closeModal,
            openModal
        };
    },
    components: { PrimaryButton }
}
</script>

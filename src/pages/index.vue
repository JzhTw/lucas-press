<template>
    <Layout>
        <div class="p-4 space-y-4">
            <PrimaryButton @click="showModal = true">開啟視窗</PrimaryButton>

            <Modal v-model="showModal">

                <template #title>
                    哈囉 我是標題
                </template>

                <template #content>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vel neque nihil minima. Possimus explicabo odit molestias eveniet accusamus sapiente quibusdam molestiae facilis perspiciatis nemo dicta, nostrum laborum. Aspernatur!
                </template>
                
            </Modal>
        </div>
    </Layout>

</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const showModal = ref(false)

        return { showModal }
    }
}
</script>
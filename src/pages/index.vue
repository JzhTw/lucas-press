<template>
    <Layout>
        <div class="p-4 space-y-4">
            <div class="space-x-4">
                <PrimaryButton disabled>
                    主要按鈕
                </PrimaryButton>

                <PrimaryButton to="/">
                    主要按鈕
                </PrimaryButton>
            </div>

            <div class="space-x-4">
                <SencondaryButton disabled>
                    次要按鈕
                </SencondaryButton>

                <SencondaryButton to="/login">
                    次要按鈕
                </SencondaryButton>
            </div>

            <div class="space-x-4">
                <DangerButton disabled>
                    刪除按鈕
                </DangerButton>

                <DangerButton to="/about">
                    次要按鈕
                </DangerButton>
            </div>
        </div>
    </Layout>

</template>

<script>

</script>
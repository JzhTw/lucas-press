<template>
    <div class="flex flex-col sm:flex-row min-h-screen">
        <!-- 左側選單 -->
        <div class="flex flex-col justify-between flex-shrink-0 bg-slate-600 text-white w-full sm:w-64">
            <!-- logo -->
            <div class="flex justify-between items-center px-4 h-16 sm:justify-center">
                <div class="flex justify-cneter items-center">
                    <heroicons-outline-book-open class="w-10 h-10 mr-2" />
                    <span class="text-xl font-medium">LucasPress</span>
                </div>

                <button class="flex justify-center items-center w-8 h-8 sm:hidden" @click="toggleMenu">
                    <heroicons-outline-menu class="w-5 h-5" />
                </button>
            </div>
            <div class="flex-grow sm:flex sm:flex-col justify-between duration-1000" :class="showMenu ? '' : 'hidden'">
                <!-- 主要選單 -->
                <ul>
                    <li v-for="item in menuItems" :key="item.to">
                        <RouterLink :to="item.to" class="flex items-center px-4 py-3 sm:px-5"
                            :class="isActive(item.to) ? 'text-white' : 'text-slate-400 hover:text-white dark:text-gray-400'">
                            <component :is="item.icon" class="w-5 h-5 mr-2" />
                            {{ item.text }}
                        </RouterLink>
                    </li>
                </ul>
                <!-- 用戶名稱(手機板) -->
                <div class="mt-2 py-1 border-t border-slate-400 sm:hidden">
                    <div class="flex items-center px-4 py-3">
                        <img class="w-8 h-8 rouded-full mr-2"
                            src="https://cdn.jsdelivr.net/npm/slidev-theme-ycs77/public/images/lucas_v_avatar.jpg"
                            alt="">
                        <div class="font-medium tracking-wide">Lucas 洛可</div>
                    </div>
                </div>
                <!-- 用戶名稱(電腦版)-->
                <div
                    class="hidden sm:flex justify-between sm:items-center border-b px-5 py-4 border-t border-slate-400">
                    <div class="flex items-center">
                        <img class="w-8 h-8 rouded-full mr-2"
                            src="https://cdn.jsdelivr.net/npm/slidev-theme-ycs77/public/images/lucas_v_avatar.jpg"
                            alt="">
                        <div class="font-medium tracking-wide">Lucas 洛可</div>
                    </div>

                    <button type="button"
                        class="flex justify-center items-center w-7 h-7 hover:bg-slate-400 rounded transition-colors duration-100">
                        <heroicons-outline-dots-vertical class="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>


        <!-- 右側內容區 -->
        <div class="flex-grow min-w-0">
            <slot></slot>
            <Menu as="div" class="relative">
                <MenuButton>More</MenuButton>
                <MenuItems>
                    <MenuItem v-slot="{ active }">
                    <a :class='{ "bg-blue-500": active }' href="/account-settings">
                        Account settings
                    </a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <a :class='{ "bg-blue-500": active }' href="/account-settings">
                        Documentation
                    </a>
                    </MenuItem>
                    <MenuItem disabled>
                    <span class="opacity-75">Invite a friend (coming soon!)</span>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import HeroiconsOutlineHome from '~icons/heroicons-outline/home'
import HeroiconsOutlineDocumentText from '~icons/heroicons-outline/document-text'
import HeroiconsOutlineUser from '~icons/heroicons-outline/user'
import { useRoute } from 'vue-router'

export default {
    components: {
        HeroiconsOutlineHome,
        HeroiconsOutlineDocumentText,
        HeroiconsOutlineUser
    },
    setup() {
        const route = useRoute()

        const showMenu = ref(false)
        const toggleMenu = () => showMenu.value = !showMenu.value

        const menuItems = [
            { to: '/', text: '首頁', icon: 'heroicons-outline-home' },
            { to: '/posts', text: '文章', icon: 'heroicons-outline-document-text' },
            { to: '/setting', text: '個人資料', icon: 'heroicons-outline-user' }
        ]

        const activeItem = computed(() =>
            [...menuItems]
                .reverse()
                .find(item => route.path.startsWith(item.to))
        )

        const isActive = to => to === activeItem.value.to
        console.log(isActive)
        return { showMenu, toggleMenu, menuItems, isActive }
    }
}
</script>

<style>
</style>
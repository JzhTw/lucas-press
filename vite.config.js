import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import {HeadlessUiResolver} from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    Pages({
      extendRoute(route, parent) {
        if (route.path === '/') {
          // Index is unauthenticated.
          return { ...route, 
            meta:{requiresAuth: false} 
          }
        }

        if (route.path === '/index') {
          // Index is unauthenticated.
          return { ...route, 
            meta:{requiresAuth: false} 
          }
        }

        // Augment the route with meta that indicates that the route requires authentication.
        return {
          ...route,
          meta: { requiresAuth: true },
        }
      },
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: false,
          enabledCollections: ['heroicons-outline']
        }),
        HeadlessUiResolver()
      ],
    }),
    Icons(),
  ]
})

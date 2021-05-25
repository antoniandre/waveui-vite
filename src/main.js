import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import '@mdi/font/css/materialdesignicons.min.css'

import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import TitleLink from '@/documentation/components/title-link.vue'
import IssueLink from '@/documentation/components/issue-link.vue'
import UiComponentTitle from '@/documentation/components/ui-component-title.vue'
import Example from '@/documentation/components/example.vue'
import Alert from '@/documentation/components/alert.vue'
import Api from '@/documentation/components/api.vue'

const app = createApp(App)
app.use(router)

new WaveUI(app, {
  // Some Wave UI options.
})

app.component('ssh-pre', SshPre)
app.component('title-link', TitleLink)
app.component('ui-component-title', UiComponentTitle)
app.component('example', Example)
app.component('alert', Alert)
app.component('component-api', Api) // The `api` keyword in template crashes Vue 3.
app.component('issue-link', IssueLink)

app.mount('#app')

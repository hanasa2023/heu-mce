<template>
  <div class="flex w-full h-screen items-center justify-center">
    <Toast />
    <Card class="w-1/2 w-min-[200px] overflow-hidden">
      <template #content>
        <Form
          v-slot="$form"
          :initialValues
          @submit="onLogin"
          class="flex flex-col gap-4 sm:56"
        >
          <div class="flex flex-col w-full gap-4">
            <InputText
              name="username"
              type="text"
              placeholder="用户名"
              class="p-2"
              fluid
            />
            <InputText
              name="password"
              type="password"
              placeholder="密码"
              class="p-2"
              fluid
            />
            <div class="flex flex-row w-full items-center justify-between">
              <InputText
                name="captcha"
                type="text"
                placeholder="验证码"
                class="p-2"
              />
              <Image
                :src="captchaString"
                alt="captcha"
                @click="updateCaptcha"
              />
            </div>
          </div>
          <Button type="submit" label="Login" class="bg-blue-500 p-2" raised />
        </Form>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store'
import type { CaptchaResponse } from '~/types'

const router = useRouter()
const initialValues = ref({
  username: '',
  password: '',
  captcha: '',
})
const captchaString = useState(() => '')
const uuid = useState(() => '')
const toast = useToast()

const updateCaptcha = async () => {
  const data = await ifetch<CaptchaResponse>(`${baseUrl}/auth/captcha`, {
    referer: 'https://jwxk.hrbeu.edu.cn/xsxk/profile/index.html',
  })
  captchaString.value = data.data.captcha
  uuid.value = data.data.uuid
}

const onLogin = async (e: any) => {
  const formData = new FormData()
  formData.append('loginname', e.states.username.value)
  formData.append('password', aesUtil.encrypt(e.states.password.value, aesKey))
  formData.append('captcha', e.states.captcha.value)
  formData.append('uuid', uuid.value)

  const data = await ifetch<any>(
    `${baseUrl}/auth/login`,
    {
      referer: 'https://jwxk.hrbeu.edu.cn/xsxk/profile/index.html',
    },
    formData,
  )

  if (data.code === 200) {
    useUserStore().token = data.data.token
    useUserStore().batchId = Object.keys(data.data.student.hrbeuLcMap)[0]
    console.info(useUserStore().token)
    router.replace('/home')
  } else {
    toast.add({
      severity: 'error',
      summary: '登录错误',
      detail: data.msg,
      life: 3000,
    })
  }
}

await callOnce(async () => {
  await updateCaptcha()
})
</script>

<style scoped></style>

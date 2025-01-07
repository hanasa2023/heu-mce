<template>
  <div class="flex w-full h-screen items-center justify-center">
    <Card class="w-1/2 w-min-[200px] overflow-hidden">
      <Form
        v-slot="$form"
        :initialValues
        @submit="onLogin"
        class="flex flex-col gap-4 sm:56"
      >
        <div class="flex flex-col w-full gap-4">
          <InputText name="uername" type="text" placeholder="Username" fluid />
        </div>
        <div class="flex flex-col w-full gap-4">
          <InputText name="password" type="text" placeholder="Password" fluid />
        </div>
        <Button type="submit" severity="secondary" label="Login" />
      </Form>
    </Card>
  </div>
</template>

<script setup lang="ts">
const initialValues = ref({
  username: '',
  password: '',
})

const onLogin = () => {}
</script>

<style scoped></style>

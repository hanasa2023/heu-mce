<template>
  <div>
    <Toast />
    <ITopBar />
    <DataTable
      :value="data"
      class="flex w-full p-20 items-center justify-center"
    >
      <Column v-for="col in column" :field="col.field" :header="col.header" />
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { DataTable } from 'primevue'
import { useUserStore } from '~/store'

const data = useState(() => [])

const column = useState(() => [
  { field: 'KCH', header: '课程号' },
  { field: 'KCM', header: '课程名' },
  { field: 'BJS', header: '' },
  { field: 'KCLB', header: '课程类别' },
  { field: 'KCXZ', header: '课程性质' },
  { field: 'KKDW', header: '开课单位' },
  { field: 'XF', header: '学分' },
])

const updateData = async () => {
  // TODO:写入分页数据
  const res = await ifetch<any>(
    `${baseUrl}/elective/clazz/list`,
    {
      referer:
        'https://jwxk.hrbeu.edu.cn/xsxk/elective/grablessons?batchId=36aa5c1fbd9744e38731b2e3bf0905f0',
      cookie: `Authorization=${useUserStore().token}`,
      authorization: useUserStore().token,
    },
    {
      SFCT: '0',
      campus: '01',
      oriderBy: '',
      pageNumber: 1,
      pageSize: 10,
      teachingClassType: 'TJKC',
    },
  )
  console.info(res)

  data.value = res.data.rows
}

await callOnce(async () => {
  await updateData()
})
</script>

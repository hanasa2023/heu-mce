<template>
  <Menubar :model="menuItems" breakpoint="600px">
    <template #start>
      <i class="pi pi-box"></i>
    </template>
    <template #end>
      <div class="flex flex-row items-center">
        <ToggleSwitch disabled>
          <template #handle="{ checked }">
            <i
              :class="[
                'text-xs pi',
                { 'pi-moon': checked, 'pi-sun': !checked },
              ]"
            />
          </template>
        </ToggleSwitch>
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
const menuItems = useState(() => [
  {
    label: '培养内课程方案',
    icon: 'pi pi-file',
  },
  {
    label: '公选课',
    icon: 'pi pi-shopping-cart',
  },
  {
    label: '已选课程',
    icon: 'pi pi-verified',
  },
  {
    label: '课表',
    icon: 'pi pi-calendar-times',
  },
])
</script>

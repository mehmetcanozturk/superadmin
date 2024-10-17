
<script setup>
import { ref } from 'vue';

const seletedProcess = ref();
const selectReseller = ref();
const checked = ref(false);
const resellerList = ref([
      { name: 'Royal Yapı', email: 'info@royalyapi.com' },
      { name: 'atakdomain.com', email: 'info@atakdomain.com' },
      { name: 'Construction Co.', email: 'contact@constructionco.com' },
      { name: 'Building Market', email: 'info@buildingmarket.com' },
      { name: 'Tech Investment', email: 'support@techinvestment.com' },
      { name: 'CloudLabs', email: 'cloudlabs@denizkaradeniz.com' },
      { name: 'SmartServe', email: 'gizem@smartserve.com' },
      { name: 'WebMasters', email: 'burak@webmasters.com' },
      { name: 'NetCrew', email: 'selma@netcrew.com' },
      { name: 'WebSphere', email: 'canan@websphere.com' },
      { name: 'SkyHosting', email: 'oguzhan@skyhosting.com' },
      { name: 'CloudLabs', email: 'cloudlabs@denizkaradeniz.com' },
      { name: 'SmartServe', email: 'gizem@smartserve.com' },
      { name: 'WebMasters', email: 'burak@webmasters.com' },
      { name: 'NetCrew', email: 'selma@netcrew.com' },
      { name: 'WebSphere', email: 'canan@websphere.com' },
      { name: 'SkyHosting', email: 'oguzhan@skyhosting.com' },
]);
const value2 = ref();
const process = ref([{ name: 'Tüm ödemeler' }, { name: 'Kayıt' }, { name: 'Yenileme' }, { name: 'Transfer' }, { name: 'Restore' }, { name: 'Kurulum' }, { name: 'Alışveriş' }, { name: 'Ek Lisans' }]);
</script>

<template>
    <div class="grid">
        <div class="col-12 md:col-5">
            <div class="card">
                <h5 class="mb-4">Domain Ekle</h5>
                <div class="field">
                    <label class="block">Domain</label>
                    <InputText type="text" placeholder="example.com" class="w-full" />
                </div>
                <div class="field">
                    <label class="block">Güvenlik Kodu</label>
                    <InputNumber :useGrouping="false" placeholder="12346546" class="w-full" />
                </div>
                <div class="field">
                    <label class="block">Bayi:</label>
                    <Dropdown v-model="selectReseller" :options="resellerList" filter optionLabel="name" placeholder="Bayi Seç" filterPlaceholder="Bayi Ara" class="w-full">
                    <template #value="slotProps">
                        <div v-if="slotProps.value" class="flex align-items-center">
                            <div>{{ slotProps.value.name }}</div>
                            <Tag :value='slotProps.value.email' severity="success" class="ml-2"></Tag>
                        </div>
                        <span v-else>
                            {{ slotProps.placeholder }}
                        </span>
                    </template>
                    <template #option="slotProps">
                        <div class="flex align-items-center">
                            <div>{{ slotProps.option.name }}</div>
                            <Tag :value='slotProps.option.email' class="ml-2"></Tag>
                        </div>
                    </template>
                </Dropdown>
                </div>
                <div class="field">
                    <label class="block">İşlem</label>
                    <Dropdown v-model="seletedProcess" :options="process" filter optionLabel="name" placeholder="İşlem Seç" class="w-full" />
                </div>
                <div class="field">
                    <label class="block">Periyod (yıl)</label>
                    <InputNumber v-model="value2" :useGrouping="false" :min="0" :max="12" class="w-full" placeholder="1" />
                </div>
                <div class="field ">
                    <label class="flex align-items-center">Bakiye Yöntemi <i class="pi pi-info-circle ml-2" v-tooltip.top="'bayinin bakiyesinden düşürüp düşürmeyeceğini belirler'"></i></label>
                    <ToggleButton v-model="checked" onLabel="bakiyeden düşür" offLabel="bakiyeden düşürme" onIcon="pi pi-check" offIcon="pi pi-times" />
                    
                </div>
                <div class="flex mt-2 justify-content-end">
                    <Button label="Kaydet" icon="pi pi-check" />
                </div>
            </div>
        </div>
    </div>
</template>
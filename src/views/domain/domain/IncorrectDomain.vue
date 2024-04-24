
<script setup>
import { ref } from 'vue';

const seletedProcess = ref();

const process = ref([{ name: 'Tüm ödemeler' }, { name: 'Kayıt' }, { name: 'Yenileme' }, { name: 'Transfer' }, { name: 'Restore' }, { name: 'Kurulum' }, { name: 'Alışveriş' }, { name: 'Ek Lisans' }]);
</script>

<template>
    <div class="grid">
        <div class="col-12 md:col-5">
            <div class="card">
                <h5 class="mb-4">Hatalı Domain Ekle</h5>
                <div class="field">
                    <label class="block">Domain</label>
                    <InputText type="text" v-model="value1" class="w-full" />
                </div>
                <div class="field">
                    <label class="block">Güvenlik Kodu</label>
                    <InputNumber v-model="value2" :useGrouping="false" class="w-full" />
                </div>
                <div class="field">
                    <label class="block">Bayi Numarası</label>
                    <InputNumber v-model="value2" :useGrouping="false" class="w-full" />
                </div>
                <div class="field">
                    <label class="block">İşlem</label>
                    <Dropdown v-model="seletedProcess" :options="process" filter optionLabel="name" class="w-full" />
                </div>
                <div class="field">
                    <label class="block">Periyod</label>
                    <InputNumber v-model="value2" :useGrouping="false" :min="0" :max="12" class="w-full" />
                </div>
                <div class="flex mt-2 ">
                    <Button label="Submit" icon="pi pi-check" />
                </div>
            </div>
        </div>
    </div>
</template>
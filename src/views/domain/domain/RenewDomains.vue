<script setup>
import { ref, onBeforeMount, reactive } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';

const confirm = useConfirm();
const toast = useToast();

const resellerModal = ref(false);
const resellerpw = ref('*CokGüvenliBirSifre_00!');

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    domain: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    reseller: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    api: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
});

const domainList = ref([
    { id: 102, reseller: 'Falan Filan Firması', domain: 'site.com.tr', api: 'Trabis', remainingDay: 363, endDate: '08.04.2025', status: 'Aktif' },
    { id: 103, reseller: 'Başka Bir Firma', domain: 'example.net', api: 'Trabis', remainingDay: 250, endDate: '08.04.2025', status: 'Aktif' },
    { id: 104, reseller: 'Örnek Firma Ltd.', domain: 'test.org', api: 'Trabis', remainingDay: 120, endDate: '08.04.2025', status: 'Aktif' },
    { id: 105, reseller: 'Deneme Şirketi AŞ', domain: 'sample.com', api: 'Trabis', remainingDay: 30, endDate: '08.04.2025', status: 'Aktif' },
    { id: 106, reseller: 'Yeni Bir Firma', domain: 'demo.net', api: 'Trabis', remainingDay: 180, endDate: '08.04.2025', status: 'Aktif' },
    { id: 107, reseller: 'Test Firması', domain: 'trial.com', api: 'Trabis', remainingDay: 280, endDate: '08.04.2025', status: 'Aktif' },
    { id: 108, reseller: 'Örnek Şirket', domain: 'try.org', api: 'Trabis', remainingDay: 90, endDate: '08.04.2025', status: 'Aktif' },
    { id: 109, reseller: 'Demo Firması AŞ', domain: 'experiment.com', api: 'Trabis', remainingDay: 150, endDate: '08.04.2025', status: 'Aktif' },
    { id: 110, reseller: 'Başka Bir Şirket Ltd.', domain: 'trial.net', api: 'Trabis', remainingDay: 200, endDate: '08.04.2025', status: 'Aktif' },
    { id: 111, reseller: 'Örnek A.Ş.', domain: 'example.org', api: 'Trabis', remainingDay: 270, endDate: '08.04.2025', status: 'Aktif' },
    { id: 112, reseller: 'Deneme Firması', domain: 'sample.net', api: 'Trabis', remainingDay: 100, endDate: '08.04.2025', status: 'Aktif' },
    { id: 113, reseller: 'Yeni Şirket AŞ', domain: 'demo.org', api: 'Trabis', remainingDay: 60, endDate: '08.04.2025', status: 'Aktif' },
    { id: 114, reseller: 'Test A.Ş.', domain: 'test.net', api: 'Trabis', remainingDay: 140, endDate: '08.04.2025', status: 'Aktif' },
    { id: 115, reseller: 'Başka Bir Deneme Şirketi', domain: 'experiment.org', api: 'Trabis', remainingDay: 190, endDate: '08.04.2025', status: 'Aktif' },
    { id: 116, reseller: 'Örnek Şirketi Ltd.', domain: 'try.com', api: 'Trabis', remainingDay: 80, endDate: '08.04.2025', status: 'Aktif' },
    { id: 117, reseller: 'Deneme Deneme A.Ş.', domain: 'trial.org', api: 'Trabis', remainingDay: 220, endDate: '08.04.2025', status: 'Aktif' },
    { id: 118, reseller: 'Yeni Bir Test Firması', domain: 'experiment.net', api: 'Trabis', remainingDay: 130, endDate: '08.04.2025', status: 'Aktif' },
    { id: 119, reseller: 'Test Test Test', domain: 'demo.com', api: 'Trabis', remainingDay: 240, endDate: '08.04.2025', status: 'Aktif' },
    { id: 120, reseller: 'Örnek Örnek Şirketi', domain: 'test.org', api: 'Trabis', remainingDay: 110, endDate: '08.04.2025', status: 'Aktif' },
    { id: 121, reseller: 'Falan Filan A.Ş.', domain: 'try.net', api: 'Trabis', remainingDay: 160, endDate: '08.04.2025', status: 'Aktif' },
    { id: 122, reseller: 'Deneme Test Ltd.', domain: 'example.com', api: 'Trabis', remainingDay: 70, endDate: '08.04.2025', status: 'Aktif' },
    { id: 123, reseller: 'Yeni Deneme Şirketi', domain: 'sample.org', api: 'Trabis', remainingDay: 180, endDate: '08.04.2025', status: 'Aktif' },
    { id: 124, reseller: 'Test Deneme A.Ş.', domain: 'trial.net', api: 'Trabis', remainingDay: 150, endDate: '08.04.2025', status: 'Aktif' },
    { id: 125, reseller: 'Örnek Test Firması', domain: 'experiment.com', api: 'Trabis', remainingDay: 120, endDate: '08.04.2025', status: 'Aktif' }
]);




const getSeverity = (status) => {
    switch (status) {
        case 'Aktif':
            return 'success';

        case 'Ödeme Bekliyor':
            return 'warning';

        case 'Belge Bekliyor':
            return 'info';

        case 'Belge onayı bekliyor':
            return 'info';
    }
};



</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Yenilenecek Domainler Listesi</h5>
                <DataTable :value="domainList" size="small" class="small p-datatable-gridlines" stripedRows removableSort :paginator="true" :rowHover="true" :rows="25" v-model:filters="filters" dataKey="id" filterDisplay="row">
                    <template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            <div class="flex flex-column sm:flex-row">
                                <span class="p-input-icon-left mb-2">
                                    <i class="pi pi-search" />
                                    <InputText placeholder="Domain Ara" style="width: 100%" />
                                </span>
                            </div>
                            <Button type="button" icon="pi pi-filter-slash" label="Filtreleri Temizle" class="p-button-outlined p-button-danger mb-2" />
                        </div>
                    </template>
                    <template #empty>
                        <div class="col-12 text-center text-bluegray-300">
                            <div class="icon m-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="CurrentColor" width="5rem" height="5rem" viewBox="0 0 512 512">
                                    <path
                                        d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM182.4 382.5c-12.4 5.2-26.5-4.1-21.1-16.4c16-36.6 52.4-62.1 94.8-62.1s78.8 25.6 94.8 62.1c5.4 12.3-8.7 21.6-21.1 16.4c-22.4-9.5-47.4-14.8-73.7-14.8s-51.3 5.3-73.7 14.8zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                                    />
                                </svg>
                            </div>
                            <p class="">Üzgünüz, sonuç Bulunumadı</p>
                        </div>
                    </template>
                    <template #loading> Tablo Yükleniyor Lütfen Bekleyin. </template>
                    <Column field="id" header="NO" sortable>
                        <template #body="{ data }">
                            <span class="font-bold">{{ data.id }}</span>
                        </template>
                    </Column>
                    <Column field="domain" header="Domain" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            {{ data.domain }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" />
                        </template>
                    </Column>
                    <Column field="reseller" header="Bayi" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            {{ data.reseller }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" />
                        </template>
                    </Column>
                    <Column field="api" header="API" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            {{ data.api }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" />
                        </template>
                    </Column>
                    <Column field="remainingDay" header="Kalan Gün" sortable></Column>
                    <Column field="endDate" header="Bitiş Tarihi"></Column>
                    <Column field="status" header="Durumu" sortable>
                        <template #body="{ data }">
                            <Badge class="w-full" :value="data.status" :severity="getSeverity(data.status)" />
                        </template>
                    </Column>

                    <Column header="İşlem" :exportable="false">
                        <template #body="">
                            <div class="flex justify-content-center">
                                <Button @click="resellerModal = true" icon="pi pi-user" v-tooltip.top="'Bayi Bilgisi'" rounded size="small" link />
                                <router-link to="/domain/info" target="_blank" rel="noopener">
                                    <Button @click="domainModal = true" icon="pi pi-globe" v-tooltip.top="'Domain Bilgisi'" rounded size="small" link />
                                </router-link>
                                <Button icon="pi pi-sync" v-tooltip.top="'senkronize et'" rounded size="small" link />
                                <Button icon="pi pi-trash" v-tooltip.top="'Sil'" rounded size="small" link />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>

    <Dialog v-model:visible="resellerModal" maximizable modal :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <template #header>
            <div class="inline-flex align-items-center justify-content-center gap-2">
                <span class="font-bold white-space-nowrap select-all text-xl">Atak Domain Bilgi Teknolojileri A.Ş.</span>
                <Tag class="mr-2 select-all" icon="pi pi-code" value="46545"></Tag>
            </div>
        </template>
        <ul class="list-none p-4 m-0">
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Bayi Adı:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">Atak Domain Bilgi Teknolojileri A.Ş.</div>
            </li>
            <Divider />
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Bayi Referans No:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold select-all">46545</div>
            </li>
            <Divider />
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Bayi Grubu:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">
                    <Chip label="Platium" icon="pi pi-star-fill" class="bg-indigo-700 text-white"></Chip>
                </div>
            </li>
            <Divider />
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Bayi Yetkili:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">Recep Şerit</div>
            </li>
            <Divider />
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Bayi Telefon:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">+90 262 325 92 22</div>
            </li>
            <Divider />
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Bayi GSM:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">+90 262 325 92 22</div>
            </li>
            <Divider />
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Bayi Email:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">
                    <Chip label="domain@atakdomain.com" class="mr-2 select-all font-semibold"></Chip>
                    <Chip label="destek@atakdomain.com" class="mr-2 select-all font-semibold"></Chip>
                </div>
            </li>
            <Divider />
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Kullanıcı Adı:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">
                    <span class="p-input-icon-right">
                        <i class="pi pi-user" />
                        <InputText type="text" value="recepserit" disabled class="opacity-100 font-semibold select-all" />
                    </span>
                </div>
            </li>
            <Divider />
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Şifre:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                    <Password disabled v-model="resellerpw" toggleMask class="opacity-100 font-semibold" />
                </div>
            </li>
            <Divider />
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Müşteri Paneli:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                    <Button severity="success" icon="pi pi-angle-right" iconPos="right" label="Müşteri Paneline Git"></Button>
                </div>
            </li>
        </ul>
    </Dialog>
</template>





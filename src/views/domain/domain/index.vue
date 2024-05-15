<script setup>
import { ref, onBeforeMount, reactive } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';


const resellerModal = ref(false);
const resellerpw = ref('*CokGüvenliBirSifre_00!');

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    domain: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    reseller: { value: null, matchMode: FilterMatchMode.IN },
    api: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    remainingDay: { value: null, matchMode: FilterMatchMode.LESS_THAN_OR_EQUAL_TO }
});

const domainList = ref([
    { id: 102, reseller: 'TEKNO FİRST BİLİŞİM', domain: 'dayzip.com.tr', api: 'Trabis', remainingDay: 363, endDate: '08.04.2025', status: 'Aktif' },
    { id: 2309, reseller: 'İnternet Hizmetleri A.Ş.', domain: 'example1.com', api: 'Quatrix', remainingDay: 285, endDate: '31.12.2024', status: 'Ödeme Bekliyor' },
    { id: 645, reseller: 'Digital Solutions', domain: 'sample.net', api: 'Nexio', remainingDay: 172, endDate: '15.08.2024', status: 'Aktif' },
    { id: 8113, reseller: 'TEKNO FİRST BİLİŞİM', domain: 'testsite.org', api: 'Datum', remainingDay: 7, endDate: '26.04.2024', status: 'Belge Bekliyor' },
    { id: 5002, reseller: 'Web Services Ltd.', domain: 'example2.com', api: 'OctaWeb', remainingDay: 75, endDate: '20.06.2024', status: 'Aktif' },
    { id: 719, reseller: 'Hosting Co.', domain: 'demo.org', api: 'Quantum', remainingDay: 150, endDate: '12.09.2024', status: 'İptal Edildi' },
    { id: 4224, reseller: 'TEKNO FİRST BİLİŞİM', domain: 'trythis.net', api: 'Zephyr', remainingDay: 210, endDate: '05.10.2024', status: 'Belge Bekliyor' },
    { id: 834, reseller: 'Cloud Technologies', domain: 'anotherexample.com', api: 'Helix', remainingDay: 240, endDate: '22.11.2024', status: 'Aktif' },
    { id: 121, reseller: 'Hosting Co.', domain: 'samplepage.org', api: 'Infini', remainingDay: 30, endDate: '10.05.2024', status: 'Aktif' },
    { id: 8126, reseller: 'TEKNO FİRST BİLİŞİM', domain: 'mydomain.com.tr', api: 'MegaAPI', remainingDay: 92, endDate: '02.07.2024', status: 'Aktif' },
    { id: 6543, reseller: 'Digital Solutions', domain: 'newsite.net', api: 'Dyna', remainingDay: 135, endDate: '25.08.2024', status: 'Aktif' },
    { id: 778, reseller: 'Hosting Co.', domain: 'example3.com', api: 'CyberNet', remainingDay: 183, endDate: '14.09.2024', status: 'Aktif' },
    { id: 928, reseller: 'Web Services Ltd.', domain: 'trythis.org', api: 'NexGen', remainingDay: 55, endDate: '07.06.2024', status: 'Aktif' },
    { id: 556, reseller: 'Cloud Technologies', domain: 'mysite.com', api: 'SkyLink', remainingDay: 1, endDate: '19.07.2024', status: 'Aktif' },
    { id: 3921, reseller: 'TEKNO FİRST BİLİŞİM', domain: 'testpage.net', api: 'CloudX', remainingDay: 25, endDate: '15.05.2024', status: 'İptal Edildi' },
    { id: 2276, reseller: 'Digital Solutions', domain: 'anotherpage.com', api: 'DataPulse', remainingDay: 145, endDate: '28.08.2024', status: 'Aktif' },
    { id: 689, reseller: 'Web Services Ltd.', domain: 'example4.com', api: 'HostEdge', remainingDay: 205, endDate: '30.09.2024', status: 'Aktif' },
    { id: 578, reseller: 'Hosting Co.', domain: 'testing.org', api: 'XpertWeb', remainingDay: 75, endDate: '20.06.2024', status: 'İptal Edildi' },
    { id: 4304, reseller: 'TEKNO FİRST BİLİŞİM', domain: 'newdomain.com.tr', api: 'WebNinja', remainingDay: 110, endDate: '14.07.2024', status: 'Aktif' },
    { id: 1509, reseller: 'Cloud Technologies', domain: 'trial.net', api: 'AlphaWeb', remainingDay: 150, endDate: '12.09.2024', status: 'Aktif' },
    { id: 871, reseller: 'Digital Solutions', domain: 'example5.com', api: 'CloudWorks', remainingDay: 45, endDate: '03.05.2024', status: 'Aktif' }
]);

const getSeverity = (status) => {
    switch (status) {
        case 'Aktif':
            return 'success';

        case 'Belge Bekliyor':
            return 'info';

        case 'Ödeme Bekliyor':
            return 'warning';

        case 'İptal Edildi':
            return 'danger';
    }
};

const statuses = ref(['Aktif', 'Belge Bekliyor', 'Ödeme Bekliyor', 'İptal Edildi']);

const dayFilter = ref([
    { day: 1, name: '1 günü kaldı' },
    { day: 7, name: '7 günün altındaki' },
    { day: 30, name: '1 ayın altındaki' },
    { day: 364, name: '1 yılın altındaki' },
])

const APIs = ref([]);
const resellers = ref([]);


domainList.value.forEach(item => {
    if (!APIs.value.includes(item.api)) {
        APIs.value.push(item.api);
    }
});

domainList.value.forEach(item => {
    if (!resellers.value.includes(item.reseller)) {
        resellers.value.push(item.reseller);
    }
});

console.log(APIs)

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Domain Listesi</h5>
                <DataTable :value="domainList" size="small" scrollable scrollHeight="63dvh" class="small p-datatable-gridlines" stripedRows removableSort :paginator="true" :rowHover="true" :rows="25" v-model:filters="filters" dataKey="id" filterDisplay="row" :globalFilterFields="['domain']">
                    <template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            <div class="flex flex-column sm:flex-row">
                                <span class="p-input-icon-left mb-2">
                                    <i class="pi pi-search" />
                                    <InputText placeholder="Domain Ara" style="width: 100%" v-model="filters['global'].value" />
                                </span>
                            </div>
                            <div class="flex gap-3">
                                <Button type="button" icon="pi pi-file-excel" label="Excel Çıktısı" class="p-button-outlined p-button-info mb-2" />
                            </div>
                        </div>
                    </template>
                    <template #empty>
                        <div class="col-12 text-center text-bluegray-300">
                            <div class="icon m-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="CurrentColor" width="5rem" height="5rem" viewBox="0 0 512 512">
                                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM182.4 382.5c-12.4 5.2-26.5-4.1-21.1-16.4c16-36.6 52.4-62.1 94.8-62.1s78.8 25.6 94.8 62.1c5.4 12.3-8.7 21.6-21.1 16.4c-22.4-9.5-47.4-14.8-73.7-14.8s-51.3 5.3-73.7 14.8zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
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
                    <Column field="domain" header="Domain" :showFilterMenu="false" sortable class="text-center">
                        <template #body="{ data }">
                            {{ data.domain }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtre" />
                        </template>
                    </Column>
                    <Column field="reseller" header="Bayi" :showFilterMenu="false" sortable class="text-center">
                        <template #body="{ data }">
                            {{ data.reseller }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter :options="resellers" placeholder="Filtre" class="p-column-filter max-w-12rem" />
                        </template>
                    </Column>
                    <Column field="api" header="API" :showFilterMenu="false" sortable class="text-center">
                        <template #body="{ data }">
                            {{ data.api }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter="" :options="APIs" placeholder="Filtre" class="p-column-filter max-w-12rem" />
                        </template>
                    </Column>
                    <Column field="remainingDay" header="Kalan Gün" sortable class="text-center" :showFilterMenu="false">
                        <template #body="{ data }">
                            {{ data.remainingDay }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="dayFilter" optionLabel="name" optionValue="day" placeholder="Filtre" class="p-column-filter" />
                        </template>
                    </Column>
                    <Column field="endDate" header="Bitiş Tarihi"></Column>
                    <Column field="status" header="Durumu" :showFilterMenu="false" sortable class="text-center">
                        <template #body="{ data }">
                            <Badge class="w-full" :value="data.status" :severity="getSeverity(data.status)" />
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Filtre" class="p-column-filter">
                                <template #option="slotProps">
                                    <Badge :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                                </template>
                            </Dropdown>
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

<script setup>
import { ref, onBeforeMount, reactive } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const syncDomain = () => {
    toast.add({ severity: 'Success', summary: 'Info', detail: 'Message Content', life: 3000 });
};

const resellerModal = ref(false);
const sslModal = ref(false);
const resellerpw = ref('*CokGüvenliBirSifre_00!');

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    domain: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    reseller: { value: null, matchMode: FilterMatchMode.IN },
    ssl: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    remainingDay: { value: null, matchMode: FilterMatchMode.LESS_THAN_OR_EQUAL_TO }
});

const domainList = ref([
    { id: 102, domain: 'dayzip.com.tr', ssl: 'Comodo PositiveSSL Certificate', reseller: 'Atak Domain', remainingDay: 363, endDate: '08.04.2025', status: 'Aktif' },
    { id: 2309, domain: 'example1.com', ssl: 'Sectigo PositiveSSL Certificate', reseller: 'example', remainingDay: 285, endDate: '31.12.2024', status: 'Aktif' },
    { id: 645, domain: 'sample.net', ssl: 'Comodo PositiveSSL Certificate', reseller: 'test', remainingDay: 172, endDate: '15.08.2024', status: 'Aktif' },
    { id: 8113, domain: 'testsite.org', ssl: 'Comodo PositiveSSL Certificate', reseller: 'Atak Domain', remainingDay: 0, endDate: '26.04.2024', status: 'Pasif' },
    { id: 5002, domain: 'example2.com', ssl: 'Sectigo PositiveSSL Certificate', reseller: 'Atak Domain', remainingDay: 75, endDate: '20.06.2024', status: 'Aktif' },
    { id: 719, domain: 'demo.org', ssl: 'Comodo PositiveSSL Certificate', reseller: 'Şerit Teknoloji', remainingDay: 150, endDate: '12.09.2024', status: 'Aktif' },
    { id: 4304, domain: 'newdomain.com.tr', ssl: 'Comodo PositiveSSL Certificate', reseller: 'Techno Domain', remainingDay: 110, endDate: '14.07.2024', status: 'Aktif' },
    { id: 4224, domain: 'trythis.net', ssl: 'Comodo PositiveSSL Certificate', reseller: 'Atak Domain', remainingDay: 210, endDate: '05.10.2024', status: 'Pasif' },
    { id: 8113, domain: 'testing.org', ssl: 'Comodo PositiveSSL Certificate', reseller: 'Atak Domain', remainingDay: 1, endDate: '26.04.2024', status: 'Aktif' },
    { id: 834, domain: 'anotherexample.com', ssl: 'Comodo PositiveSSL Certificate', reseller: 'Atak Domain', remainingDay: 240, endDate: '22.11.2024', status: 'Aktif' },
    { id: 121, domain: 'samplepage.org', ssl: 'Comodo PositiveSSL Certificate', reseller: 'Atak Domain', remainingDay: 30, endDate: '10.05.2024', status: 'Aktif' }
]);

const getSeverity = (status) => {
    switch (status) {
        case 'Aktif':
            return 'success';

        case 'Pasif':
            return 'danger';
    }
};

const statuses = ref(['Aktif', 'Pasif']);

const dayFilter = ref([
    { day: 1, name: '1 günü kaldı' },
    { day: 7, name: '7 günün altındaki' },
    { day: 30, name: '1 ayın altındaki' },
    { day: 364, name: '1 yılın altındaki' }
]);

const APIs = ref([]);
const resellers = ref([]);

domainList.value.forEach((item) => {
    if (!APIs.value.includes(item.ssl)) {
        APIs.value.push(item.ssl);
    }
});

domainList.value.forEach((item) => {
    if (!resellers.value.includes(item.reseller)) {
        resellers.value.push(item.reseller);
    }
});

const blocked = ref(false);
const blockDocument = (a) => {
    blocked.value = true;
    setTimeout(() => {
        blocked.value = false;
    }, a);
};
</script>

<template>
    <!-- import -->
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <!-- import -->
    <ProgressSpinner v-if="blocked" class="bg-white" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 99999999; border-radius: 100%" />
    <BlockUI :blocked="blocked" fullScreen />
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>SSL Listesi</h5>
                <DataTable
                    :value="domainList"
                    size="small"
                    scrollable
                    scrollHeight="63dvh"
                    class="small p-datatable-gridlines"
                    stripedRows
                    removableSort
                    :paginator="true"
                    :rowHover="true"
                    :rows="25"
                    v-model:filters="filters"
                    dataKey="id"
                    filterDisplay="row"
                    :globalFilterFields="['domain']"
                >
                    <template #header>
                        <div class="flex justify-content-end flex-column sm:flex-row">
                            <div class="flex gap-3">
                                <Button type="button" icon="pi pi-file-excel" label="Excel Çıktısı" class="p-button-outlined p-button-info mb-2" />
                            </div>
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
                    <Column field="domain" header="Domain" :showFilterMenu="false" sortable class="text-center">
                        <template #body="{ data }">
                            {{ data.domain }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtre" />
                        </template>
                    </Column>
                    <Column field="ssl" header="SSL" :showFilterMenu="false" sortable class="text-center">
                        <template #body="{ data }">
                            {{ data.ssl }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter="" :options="APIs" placeholder="Filtre" class="p-column-filter max-w-12rem" />
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
                    <Column field="remainingDay" header="Kalan Gün" sortable class="text-center" :showFilterMenu="false">
                        <template #body="{ data }">
                            {{ data.remainingDay }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="dayFilter" optionLabel="name" optionValue="day" placeholder="Filtre" class="p-column-filter" />
                        </template>
                    </Column>
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
                                <Button @click="sslModal = true" icon="pi pi-search" v-tooltip.top="'Detaylı Bilgi'" rounded size="small" link />
                                <Button @click="resellerModal = true" icon="pi pi-building" v-tooltip.top="'Bayi Bilgisi'" rounded size="small" link />
                                <Button icon="pi pi-sync" @click="blockDocument(5000)" v-tooltip.top="'yenile'" rounded size="small" link />
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
                    <Button severity="success" icon="pi pi-angle-right" iconPos="right" label="Bayi Paneline Git"></Button>
                </div>
            </li>
        </ul>
    </Dialog>

    <Dialog v-model:visible="sslModal" header="example.com SSL Bilgileri" maximizable modal :style="{ width: '70dvw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <TabView>
            <TabPanel header="Genel Bilgiler">
                <ul class="list-none px-2 py-4 m-0 divader-list">
                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">Domain:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">example.com</div>
                    </li>
                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">SSL Brand:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">Comodo PositiveSSL Certificate</div>
                    </li>
                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">Organization:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">ATAKDOMAIN</div>
                    </li>
                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">Approval Email:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">admin@atakdomain.com</div>
                    </li>
                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">Order Status:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">
                            <Chip label="Aktif" icon="pi pi-check" class="bg-green-400 text-white"></Chip>
                        </div>
                    </li>
                </ul>
                <div class="row mt-3">
                    <Button label="Sertifikayı İndir" severity="success" icon="pi pi-download" class="mr-2" />
                    <Button label="Sertifikayı Mail Gönder" icon="pi pi-envelope" class="mr-2" />
                </div>
            </TabPanel>

            <TabPanel header="Sertifika Bilgileri">
                <ul class="list-none px-2 py-4 m-0 divader-list">
                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">Comodo Order Number:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">369762968</div>
                    </li>

                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">Start Date:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">7/15/2020</div>
                    </li>

                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">End Date:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">7/15/2022</div>
                    </li>

                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">Web Server:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">Microsoft IIS 7.x and later</div>
                    </li>

                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">CSR-MD5:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">2F8512ABAF50855F9CACF4F90A4B7157</div>
                    </li>

                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">CSR-SHA256:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">B1C0B8A8B3D2DDFB06D37A5CCA7DCED433B84D5A13B4791CD8D247AF22927910</div>
                    </li>

                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">Unique Value:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">AtbxLInoIX</div>
                    </li>

                </ul>
            </TabPanel>

            <TabPanel header="İletişim Bilgileri">
                <ul class="list-none px-2 py-4 m-0 divader-list">
                    
                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">Organization Name:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">Atak Domain Teknoloji</div>
                    </li>
                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">Phone Number:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">05327135505</div>
                    </li>

                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">Email:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">mbyazici@gmail.com</div>
                    </li>

                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">Approval Email:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">admin@atakdomain.com</div>
                    </li>
                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">Country:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">Turkey</div>
                    </li>
                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">City:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">Izmit</div>
                    </li>
                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">Postal Code:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">34000</div>
                    </li>
                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">State:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">Kocaeli</div>
                    </li>
                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">Address:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">Yenişehir Mah. Arda Sk. No:36, Kat 3, Izmit - Kocaeli</div>
                    </li>
                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">Fax:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">05327135505</div>
                    </li>
                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">DUNS:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">1234567890</div>
                    </li>
                    <li class="flex align-items-center px-2 flex-wrap">
                        <div class="text-600 w-6 md:w-2 font-medium">Company Registered Number:</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold">123456789</div>
                    </li>

   
                </ul>
            </TabPanel>

        </TabView>
    </Dialog>
</template>

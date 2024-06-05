<script setup>
import { ref } from 'vue';
import { FilterMatchMode } from 'primevue/api';

const Invoices = ref([
    { id: 697105, reseller: 'Atak Domain Bilgi Teknolojileri Aş.', quantity: '56465', date: '23.03.2023 - 17:15:20' },
    { id: 697106, reseller: 'Dijital Medya Hizmetleri Ltd. Şti.', quantity: '32450', date: '24.03.2023 - 14:10:45' },
    { id: 697107, reseller: 'Net İletişim Teknolojileri A.Ş.', quantity: '75600', date: '25.03.2023 - 09:30:00' },
    { id: 697108, reseller: 'Tekno Sistem Entegrasyon A.Ş.', quantity: '9875', date: '26.03.2023 - 11:45:10' },
    { id: 697109, reseller: 'Bilgi Dağıtım Teknolojileri Ltd.', quantity: '46230', date: '27.03.2023 - 16:20:35' },
    { id: 697110, reseller: 'Veri Akış Hizmetleri A.Ş.', quantity: '30500', date: '28.03.2023 - 08:55:25' },
    { id: 697111, reseller: 'Web Tasarım ve Hosting A.Ş.', quantity: '15875', date: '29.03.2023 - 12:40:50' },
    { id: 697112, reseller: 'Dijital Dünya Teknolojileri Ltd. Şti.', quantity: '48200', date: '30.03.2023 - 10:15:30' },
    { id: 697113, reseller: 'Çözüm Bilişim Hizmetleri A.Ş.', quantity: '51200', date: '31.03.2023 - 13:35:15' },
    { id: 697114, reseller: 'Mobil Yazılım Çözümleri A.Ş.', quantity: '26500', date: '01.04.2023 - 15:05:40' },
    { id: 697115, reseller: 'E-Ticaret Danışmanlık Hizmetleri A.Ş.', quantity: '73500', date: '02.04.2023 - 10:25:55' },
    { id: 697116, reseller: 'Bulut Bilişim Teknolojileri A.Ş.', quantity: '29850', date: '03.04.2023 - 11:50:30' },
    { id: 697117, reseller: 'Siber Güvenlik Çözümleri Ltd. Şti.', quantity: '12800', date: '04.04.2023 - 09:40:10' },
    { id: 697118, reseller: 'Akıllı Sistemler Yazılım A.Ş.', quantity: '54000', date: '05.04.2023 - 14:10:25' },
    { id: 697119, reseller: 'Yazılım ve Donanım Hizmetleri Ltd.', quantity: '37500', date: '06.04.2023 - 17:20:45' },
    { id: 697120, reseller: 'Veri Merkezi İşletmeciliği A.Ş.', quantity: '92000', date: '07.04.2023 - 10:15:55' },
    { id: 697121, reseller: 'İnternet Hizmetleri ve Teknolojileri A.Ş.', quantity: '23500', date: '08.04.2023 - 12:50:20' },
    { id: 697122, reseller: 'Telekomünikasyon Çözümleri A.Ş.', quantity: '67800', date: '09.04.2023 - 15:30:40' },
    { id: 697123, reseller: 'Online Pazarlama ve Reklamcılık Ltd.', quantity: '45000', date: '10.04.2023 - 11:05:10' },
    { id: 697124, reseller: 'Veri Depolama Çözümleri A.Ş.', quantity: '29500', date: '11.04.2023 - 09:15:50' },
    { id: 697125, reseller: 'Sistem Entegratörleri A.Ş.', quantity: '38000', date: '12.04.2023 - 13:25:35' },
]);


const Transactions = ref([
    { id: 697105, date: '2024-01-01', created_date: '2024-01-01', amount: '$2,562.59' },
    { id: 697106, date: '2024-02-02', created_date: '2024-02-02', amount: '$1,245.00' },
    { id: 697107, date: '2024-03-03', created_date: '2024-03-03', amount: '$3,678.45' },
    { id: 697108, date: '2024-04-04', created_date: '2024-04-04', amount: '$987.65' },
    { id: 697109, date: '2024-05-05', created_date: '2024-05-05', amount: '$4,321.10' },
    { id: 697110, date: '2024-06-06', created_date: '2024-06-06', amount: '$5,432.20' },
    { id: 697111, date: '2024-07-07', created_date: '2024-07-07', amount: '$654.32' },
    { id: 697112, date: '2024-08-08', created_date: '2024-08-08', amount: '$3,210.98' },
    { id: 697113, date: '2024-09-09', created_date: '2024-09-09', amount: '$1,987.65' },
    { id: 697114, date: '2024-10-10', created_date: '2024-10-10', amount: '$2,345.67' },
    { id: 697115, date: '2024-11-11', created_date: '2024-11-11', amount: '$6,789.01' },
    { id: 697116, date: '2024-12-12', created_date: '2024-12-12', amount: '$7,654.32' },
    { id: 697117, date: '2024-01-13', created_date: '2024-01-13', amount: '$432.10' },
    { id: 697118, date: '2024-02-14', created_date: '2024-02-14', amount: '$5,678.90' },
    { id: 697119, date: '2024-03-15', created_date: '2024-03-15', amount: '$4,321.12' },
    { id: 697120, date: '2024-04-16', created_date: '2024-04-16', amount: '$3,456.78' },
    { id: 697121, date: '2024-05-17', created_date: '2024-05-17', amount: '$2,098.76' },
    { id: 697122, date: '2024-06-18', created_date: '2024-06-18', amount: '$1,234.56' },
    { id: 697123, date: '2024-07-19', created_date: '2024-07-19', amount: '$5,432.10' },
    { id: 697124, date: '2024-08-20', created_date: '2024-08-20', amount: '$3,210.09' },
    { id: 697125, date: '2024-09-21', created_date: '2024-09-21', amount: '$6,543.21' },
]);







const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    type: { value: null, matchMode: FilterMatchMode.IN },
    id: { value: null, matchMode: FilterMatchMode.CONTAINS },
    date: { value: null, matchMode: FilterMatchMode.CONTAINS },
    category: { value: null, matchMode: FilterMatchMode.IN },
    desc: { value: null, matchMode: FilterMatchMode.CONTAINS },
    reseller: { value: null, matchMode: FilterMatchMode.IN },
    quantity: { value: null, matchMode: FilterMatchMode.CONTAINS },
    amount: { value: null, matchMode: FilterMatchMode.CONTAINS },
    currency_type: { value: null, matchMode: FilterMatchMode.IN },
});

const types = ref([...new Set(Invoices.value.map(item => item.type))]);
const resellers = ref([...new Set(Invoices.value.map(item => item.reseller))]);
const currency = ref([...new Set(Invoices.value.map(item => item.currency_type))]);
const dates = ref([]);







const resellerModal = ref(false);

const resellerpw = ref('*CokGüvenliBirSifre_00!');

const op = ref(null);
const toggle = (event) => {
    op.value.toggle(event);
};

const lastInvoiceModal = ref(false);

</script>


<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Faturalar</h5>
                <DataTable :value="Invoices" size="small" scrollable scrollHeight="63dvh" class="small p-datatable-gridlines" stripedRows removableSort :paginator="true" :rowHover="true" :rows="25" v-model:filters="filters" dataKey="id" filterDisplay="row" :globalFilterFields="['type', 'reseller', 'desc', 'id']">
                    <template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            <div class="flex flex-column sm:flex-row">
                                <span class="p-input-icon-left mb-2">
                                    <i class="pi pi-search" />
                                    <InputText placeholder="Ara" style="width: 100%" v-model="filters['global'].value" />
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
                    <Column field="id" header="Bayi no" class="max-w-6rem" sortable :showFilterMenu="false">
                        <template #body="{ data }">
                            <span class="font-bold">{{ data.id }}</span>
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtre" />
                        </template>
                    </Column>
                    <Column field="reseller" header="Bayi" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            {{ data.reseller }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter :options="resellers" placeholder="Filtre" class="p-column-filter  w-full" />
                        </template>
                    </Column>
                    <Column field="quantity" header="İşlem Adedi" class="max-w-6rem" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            {{ data.quantity }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtre" />
                        </template>
                    </Column>
                    <Column field="date" header="Son işlem Tarihi" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            {{ data.date }}
                        </template>
                        <template #filter="{ }">
                            <Button type="button" label="Tarih Filtresi" @click="toggle" outlined />
                            <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true">
                                <div class="flex gap-2">
                                    <Calendar v-model="dates" placeholder="Tarih Aralığı Gir" selectionMode="range" :manualInput="false" />
                                    <Button icon="pi pi-search" label="ara" />
                                </div>
                            </OverlayPanel>
                        </template>
                    </Column>
                    <Column header="İşlem" :exportable="false" alignFrozen="right" :frozen="true">
                        <template #body="">
                            <div class="flex justify-content-center">
                                <Button icon="pi pi-history" v-tooltip.top="'Son Faturalar Git'" rounded link size="small" @click="lastInvoiceModal = true" />
                                <Button icon="pi pi-building" v-tooltip.top="'Bayi Bilgileri'" rounded size="small" link @click="resellerModal = true" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
    <Dialog v-model:visible="lastInvoiceModal" header=" Atak Domain Bilgi Teknolojileri Aş.	" maximizable modal :style="{ width: '60dvw' }" :breakpoints="{ '1199px': '100dvw', '575px': '100dvw' }">
        <template #header>
            <div class="inline-flex align-items-center justify-content-center gap-2">
                <span class="font-bold white-space-nowrap select-all text-xl">Atak Domain Bilgi Teknolojileri Aş. - Faturalar</span>

            </div>

        </template>
        <DataTable :value="Transactions" size="small" scrollable class="small p-datatable-gridlines" stripedRows removableSort :paginator="true" :rowHover="true" :rows="25" v-model:filters="filters" dataKey="id" filterDisplay="row" :globalFilterFields="['id']">
            <template #header>
                <div class="flex justify-content-between align-items-center flex-column sm:flex-row">
                    <div class="flex flex-column sm:flex-row">
                        <span class="p-input-icon-left mb-2">
                            <i class="pi pi-search" />
                            <InputText placeholder="Ara" style="width: 100%" v-model="filters['global'].value" />
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

            <Column field="id" header="Fatura no" sortable :showFilterMenu="false">
                <template #body="{ data }">
                    <span class="font-bold">{{ data.id }}</span>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtre" />
                </template>
            </Column>
            <Column field="date" header="Tarih" :showFilterMenu="false" sortable>
                <template #body="{ data }">
                    {{ data.date }}
                </template>
                <template #filter="{ }">
                    <Button type="button" label="filtre" @click="toggle" outlined />
                    <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true">
                        <div class="flex gap-2">
                            <Calendar v-model="dates" placeholder="Tarih Aralığı Gir" selectionMode="range" :manualInput="false" />
                            <Button icon="pi pi-search" label="ara" />
                        </div>
                    </OverlayPanel>
                </template>
            </Column>
            <Column field="created_date" header="Oluşturulma Tarihi" :showFilterMenu="false" sortable>
                <template #body="{ data }">
                    {{ data.created_date }}
                </template>
                <template #filter="{ }">
                    <Button type="button" label="filtre" @click="toggle" outlined />
                    <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true">
                        <div class="flex gap-2">
                            <Calendar v-model="dates" placeholder="Tarih Aralığı Gir" selectionMode="range" :manualInput="false" />
                            <Button icon="pi pi-search" label="ara" />
                        </div>
                    </OverlayPanel>
                </template>
            </Column>

            <Column field="amount" header="Tutar" sortable :showFilterMenu="false">
                <template #body="{ data }">
                    <span class="font-bold">{{ data.amount }}</span>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtre" />
                </template>
            </Column>

            <Column header="İndir" :exportable="false" alignFrozen="right" :frozen="true">
                <template #body="">
                    <div class="flex justify-content-center">
                        <Button icon="pi pi-download" v-tooltip.top="'Excel Fatura indir'" rounded  link />
                        <Button icon="pi pi-file-export" v-tooltip.top="'PDF Fatura indir'" rounded link  />
                    </div>
                </template>
            </Column>






        </DataTable>

    </Dialog>
    <Dialog v-model:visible="resellerModal" maximizable modal :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <template #header>
            <div class="inline-flex align-items-center justify-content-center gap-2">
                <span class="font-bold white-space-nowrap select-all text-xl">Atak Domain Bilgi Teknolojileri A.Ş.</span>
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
                <div class="text-500 w-6 md:w-2 font-medium">Depozito:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 font-semibold flex gap-5">
                    <div>TL Hesabı<span class="bg-black-alpha-90 text-white ml-1 px-2">₺55.545</span></div>
                    <div>Dolar Hesabı<span class="bg-black-alpha-90 text-white ml-1 px-2">$13.951 </span></div>
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
<script setup>
import { ref, onBeforeMount, reactive } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';



const resellerModal = ref(false);
const domainModal = ref(false);
const resellerpw = ref('*CokGüvenliBirSifre_00!');
const selectApi = ref({ id: 57, name: 'Domain Name API' });
const selectStatus = ref({ id: 55, name: 'Aktif' });
const tranferToggle = ref(true);
const whoisToggle = ref(true);

const confirmPopup = useConfirm();
const toast = useToast();


const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    domain: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    reseller: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    api: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
});

const domainList = ref([
    { id: 102, reseller: 'TEKNO FİRST BİLİŞİM', domain: 'dayzip.com.tr', api: 'Trabis', remainingDay: 363, endDate: '08.04.2025', status: 'Aktif' },
    { id: 2309, reseller: 'İnternet Hizmetleri A.Ş.', domain: 'example1.com', api: 'Quatrix', remainingDay: 285, endDate: '31.12.2024', status: 'Aktif' },
    { id: 645, reseller: 'Digital Solutions', domain: 'sample.net', api: 'Nexio', remainingDay: 172, endDate: '15.08.2024', status: 'Aktif' },
    { id: 8113, reseller: 'TEKNO FİRST BİLİŞİM', domain: 'testsite.org', api: 'Datum', remainingDay: 10, endDate: '26.04.2024', statusId: 2 },
    { id: 5002, reseller: 'Web Services Ltd.', domain: 'example2.com', api: 'OctaWeb', remainingDay: 75, endDate: '20.06.2024', status: 'Aktif' },
    { id: 719, reseller: 'Hosting Co.', domain: 'demo.org', api: 'Quantum', remainingDay: 150, endDate: '12.09.2024', status: 'Aktif' },
    { id: 4224, reseller: 'TEKNO FİRST BİLİŞİM', domain: 'trythis.net', api: 'Zephyr', remainingDay: 210, endDate: '05.10.2024', status: 'Aktif' },
    { id: 834, reseller: 'Cloud Technologies', domain: 'anotherexample.com', api: 'Helix', remainingDay: 240, endDate: '22.11.2024', status: 'Aktif' },
    { id: 121, reseller: 'Hosting Co.', domain: 'samplepage.org', api: 'Infini', remainingDay: 30, endDate: '10.05.2024', status: 'Aktif' },
    { id: 8126, reseller: 'TEKNO FİRST BİLİŞİM', domain: 'mydomain.com.tr', api: 'MegaAPI', remainingDay: 92, endDate: '02.07.2024', status: 'Aktif' },
    { id: 6543, reseller: 'Digital Solutions', domain: 'newsite.net', api: 'Dyna', remainingDay: 135, endDate: '25.08.2024', status: 'Aktif' },
    { id: 778, reseller: 'Hosting Co.', domain: 'example3.com', api: 'CyberNet', remainingDay: 183, endDate: '14.09.2024', status: 'Aktif' },
    { id: 928, reseller: 'Web Services Ltd.', domain: 'trythis.org', api: 'NexGen', remainingDay: 55, endDate: '07.06.2024', status: 'Aktif' },
    { id: 556, reseller: 'Cloud Technologies', domain: 'mysite.com', api: 'SkyLink', remainingDay: 95, endDate: '19.07.2024', status: 'Aktif' },
    { id: 3921, reseller: 'TEKNO FİRST BİLİŞİM', domain: 'testpage.net', api: 'CloudX', remainingDay: 25, endDate: '15.05.2024', status: 'Aktif' },
    { id: 2276, reseller: 'Digital Solutions', domain: 'anotherpage.com', api: 'DataPulse', remainingDay: 145, endDate: '28.08.2024', status: 'Aktif' },
    { id: 689, reseller: 'Web Services Ltd.', domain: 'example4.com', api: 'HostEdge', remainingDay: 205, endDate: '30.09.2024', status: 'Aktif' },
    { id: 578, reseller: 'Hosting Co.', domain: 'testing.org', api: 'XpertWeb', remainingDay: 75, endDate: '20.06.2024', status: 'Aktif' },
    { id: 4304, reseller: 'TEKNO FİRST BİLİŞİM', domain: 'newdomain.com.tr', api: 'WebNinja', remainingDay: 110, endDate: '14.07.2024', status: 'Aktif' },
    { id: 1509, reseller: 'Cloud Technologies', domain: 'trial.net', api: 'AlphaWeb', remainingDay: 150, endDate: '12.09.2024', status: 'Aktif' },
    { id: 871, reseller: 'Digital Solutions', domain: 'example5.com', api: 'CloudWorks', remainingDay: 45, endDate: '03.05.2024', status: 'Aktif' }
]);

const nameServer = ref([
    { host: 'NS1.RECEPSERIT.COM', ipadress: '185.141.164.88' },
    { host: 'NS2.RECEPSERIT.COM', ipadress: '185.141.164.59' },
    { host: 'NS3.RECEPSERIT.COM', ipadress: '185.141.164.64' },
    { host: 'NS4.RECEPSERIT.COM', ipadress: '185.141.164.32' }
]);

const dropdownApi = ref([
    { id: 55, name: 'Hexonet' },
    { id: 57, name: 'Domain Name API' },
    { id: 57, name: 'Trabis' }
]);
const dropdownStatus = ref([
    { id: 55, name: 'Aktif' },
    { id: 541, name: 'Kayıt İçin Bekleniyor' },
    { id: 57, name: 'Belge Bekleniyor' }
]);

const confirm = (event) => {
    confirmPopup.require({
        target: event.target,
        message: 'Bütün Alan Adı Sunucu ayarlarını sıfırlayacaksın. Emin misin?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            toast.add({ severity: 'success', summary: 'Sıfırlandı', detail: 'Alan Adı Sunucu Ayarları başarıyla sıfırlandı', life: 3000 });
        }
    });
};
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Domain Listesi</h5>
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

                    <Column :exportable="false">
                        <template #body="">
                            <div class="flex justify-content-center gap-2">
                                <Button @click="resellerModal = true"  icon="pi pi-user" v-tooltip.top="'Bayi Bilgisi'" rounded size="small" link />
                                <Button @click="domainModal = true" icon="pi pi-globe" v-tooltip.top="'Domain Bilgisi'" rounded size="small" link />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>

    <Dialog v-model:visible="resellerModal" maximizable modal :style="{ width: '50vw' }"  :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <template #header>
            <div class="inline-flex align-items-center justify-content-center gap-2">
                <span class="font-bold white-space-nowrap select-all text-xl">Atak Domain Bilgi Teknolojileri A.Ş.</span>
                <Tag class="mr-2 select-all" icon="pi pi-code" value="46545"></Tag>
            </div>
        </template>
        <ul class="list-none p-4 m-0">
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Bayi Adı:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Atak Domain Bilgi Teknolojileri A.Ş.</div>
            </li>
            <Divider />
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Bayi Referans No:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 select-all">46545</div>
            </li>
            <Divider />
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Bayi Grubu:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                    <Chip label="Platium" icon="pi pi-star-fill" class="bg-indigo-700 text-white"></Chip>
                </div>
            </li>
            <Divider />
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Bayi Yetkili:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Recep Şerit</div>
            </li>
            <Divider />
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Bayi Telefon:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">+90 262 325 92 22</div>
            </li>
            <Divider />
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Bayi GSM:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">+90 262 325 92 22</div>
            </li>
            <Divider />
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Bayi Email:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                    <Chip label="domain@atakdomain.com" class="mr-2 select-all"></Chip>
                    <Chip label="destek@atakdomain.com" class="mr-2 select-all"></Chip>
                </div>
            </li>
            <Divider />
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Kullanıcı Adı:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                    <span class="p-input-icon-right">
                        <i class="pi pi-user" />
                        <InputText type="text" value="recepserit" disabled class="opacity-100 select-all" />
                    </span>
                </div>
            </li>
            <Divider />
            <li class="flex align-items-center px-2 flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">Şifre:</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                    <Password disabled v-model="resellerpw" toggleMask class="opacity-100" />
                </div>
            </li>
        </ul>
    </Dialog>

    <Dialog v-model:visible="domainModal" maximizable modal :style="{ width: '80vw' }" :position="'top'" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <template #header>
            <div class="inline-flex align-items-center justify-content-center gap-2">
                <span class="font-bold white-space-nowrap select-all text-xl">recepserit.com</span>
            </div>
        </template>
        <TabView>
            <TabPanel>
                <template #header>
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-home text-xl"></i>
                        <span class="font-bold white-space-nowrap">Genel Bilgiler</span>
                    </div>
                </template>
                <div class="grid p-fluid mt-2">
                    <div class="field col-12 md:col-4 py-1">
                        <label>Domain Ref No:</label>
                        <span class="p-input-icon-left">
                            <i class="pi pi-code" />
                            <InputText type="text" value="480400" readonly class="font-semibold surface-100" />
                        </span>
                    </div>
                    <div class="field col-12 md:col-4 py-1">
                        <label>Alan Adı:</label>
                        <span class="p-input-icon-left">
                            <i class="pi pi-globe" />
                            <InputText type="text" value="recepserit.com" readonly class="font-semibold surface-100" />
                        </span>
                    </div>
                    <div class="field col-12 md:col-4 py-1">
                        <label>IDN:</label>
                        <span class="p-input-icon-left">
                            <i class="pi pi-globe" />
                            <InputText type="text" value="recepserit.com" readonly class="font-semibold surface-100" />
                        </span>
                    </div>
                    <div class="field col-12 md:col-4 py-1">
                        <label>Uzantı:</label>
                        <span class="p-input-icon-left">
                            <i class="pi pi-link" />
                            <InputText type="text" value=".com" readonly class="font-semibold surface-100" />
                        </span>
                    </div>
                    <div class="field col-12 md:col-4 py-1">
                        <label>Bayi:</label>
                        <span class="p-input-icon-left">
                            <i class="pi pi-building" />
                            <InputText type="text" value="RECEP MEDYA YAZILIM HIZMETLERI LTD STI" readonly class="font-semibold surface-100" />
                        </span>
                    </div>
                    <div class="field col-12 md:col-4 py-1">
                        <label>API:</label>
                        <Dropdown v-model="selectApi" :options="dropdownApi" filter optionLabel="name" placeholder="Seç" class="font-semibold" />
                    </div>
                    <div class="field col-12 md:col-4 py-1">
                        <label>Durum:</label>
                        <Dropdown v-model="selectStatus" :options="dropdownStatus" filter optionLabel="name" placeholder="Seç" class="font-semibold" />
                    </div>
                    <div class="field col-12 md:col-4 py-1">
                        <label>Alan Adı Durum Kodu (Registry):</label>
                        <span class="p-input-icon-left">
                            <i class="pi pi-code" />
                            <InputText type="text" value="56465465456" readonly class="font-semibold surface-100" />
                        </span>
                    </div>
                    <div class="field col-12 md:col-4 py-1">
                        <label>Yenileme Modu:</label>
                        <span class="p-input-icon-left">
                            <i class="pi pi-refresh" />
                            <InputText type="text" value="OTOMATİKSONLANDIR" readonly class="font-semibold surface-100" />
                        </span>
                    </div>
                    <div class="field col-12 md:col-4 py-1">
                        <label>Transfer Kilidi:</label>
                        <ToggleButton disabled class="opacity-100" v-model="tranferToggle" onLabel="Transfer Kilidi Açık" offLabel="Transfer Kilidi Kapalı" />
                    </div>
                    <div class="field col-12 md:col-4 py-1">
                        <label>Whois Gizlilik Durumu:</label>
                        <ToggleButton disabled class="opacity-100" v-model="whoisToggle" onLabel="Whois Gizliği Açık" offLabel="Whois Gizliği Kapalı" />
                    </div>
                </div>
            </TabPanel>
            <tabPanel>
                <template #header>
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-calendar text-xl"></i>
                        <span class="font-bold white-space-nowrap">Tarih Bilgileri</span>
                    </div>
                </template>
                <div class="grid p-fluid mt-2">
                    <div class="field col-12 md:col-4 py-1">
                        <label>Kayıt Tarihi:</label>
                        <span class="p-input-icon-left">
                            <i class="pi pi-calendar-plus" />
                            <InputText type="text" value="17.04.2020" readonly class="font-semibold surface-100" />
                        </span>
                    </div>
                    <div class="field col-12 md:col-4 py-1">
                        <label>Bitiş Tarihi:</label>
                        <span class="p-input-icon-left">
                            <i class="pi pi-calendar-times" />
                            <InputText type="text" value="17.04.2023" readonly class="font-semibold surface-100" />
                        </span>
                    </div>
                    <div class="field col-12 md:col-4 py-1">
                        <label>Kalan Gün:</label>
                        <span class="p-input-icon-left">
                            <i class="pi pi-clock" />
                            <InputText type="text" value="254" readonly class="font-semibold surface-100" />
                        </span>
                    </div>
                    <div class="field col-12 md:col-4 py-1">
                        <label>Transfer Tarihi (Registry):</label>
                        <span class="p-input-icon-left">
                            <i class="pi pi-calendar" />
                            <InputText type="text" value="-" readonly class="font-semibold surface-100" />
                        </span>
                    </div>
                    <div class="field col-12 md:col-4 py-1">
                        <label>Güncellenme Tarihi (Registry):</label>
                        <span class="p-input-icon-left">
                            <i class="pi pi-calendar" />
                            <InputText type="text" value="-" readonly class="font-semibold surface-100" />
                        </span>
                    </div>
                    <div class="field col-12 md:col-4 py-1">
                        <label>RGP Bitiş Tarihi (Registry):</label>
                        <span class="p-input-icon-left">
                            <i class="pi pi-calendar" />
                            <InputText type="text" value="-" readonly class="font-semibold surface-100" />
                        </span>
                    </div>
                    <div class="field col-12 md:col-4 py-1">
                        <label>Kayıt Tarihi (Veri Tabanı):</label>
                        <span class="p-input-icon-left">
                            <i class="pi pi-database" />
                            <InputText type="text" value="17.04.2020 10:30:56" readonly class="font-semibold surface-100" />
                        </span>
                    </div>
                    <div class="field col-12 md:col-4 py-1">
                        <label>Güncelleme Tarihi (Veri Tabanı):</label>
                        <span class="p-input-icon-left">
                            <i class="pi pi-database" />
                            <InputText type="text" value="17.04.2020 10:30:56" readonly class="font-semibold surface-100" />
                        </span>
                    </div>
                </div>
            </tabPanel>
            <TabPanel>
                <template #header>
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-server text-xl"></i>
                        <span class="font-bold white-space-nowrap">Alan Adı Sunucusu</span>
                    </div>
                </template>
                <div class="grid p-fluid mt-2">
                    <DataTable :value="nameServer" size="small" class="small p-datatable-gridlines w-full" stripedRows removableSort :rowHover="true">
                        <template #header>
                            <div class="flex justify-content-between align-items-center sm:flex-row gap-3">
                                <span class="font-bold text-xl">Alan Adı Sunucuları</span>
                                <div class="flex gap-3">
                                    <Button type="button" icon="pi pi-list" label="Çoklu NS Ekle" severity="success" class="w-auto" />
                                    <Button type="button" icon="pi pi-plus" label="Yeni NS Ekle" severity="success" class="w-auto" />
                                    <ConfirmPopup></ConfirmPopup>
                                    <Button type="button" ref="popup" @click="confirm($event)" icon="pi pi-cog" label="Varsayılan Ayarlara dön" class="w-auto" />
                                </div>
                            </div>
                        </template>
                        <Column field="host" header="Host" sortable></Column>
                        <Column field="ipadress" header="IP" sortable></Column>
                        <Column :exportable="false" header="İşlem">
                            <template #body="">
                                <div class="flex justify-content-center gap-2">
                                    <Button icon="pi pi-pencil" v-tooltip.top="'Düzenle'" rounded size="small" link />
                                    <Button icon="pi pi-trash" v-tooltip.top="'sil'" rounded size="small" link />
                                </div>
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </TabPanel>
        </TabView>
    </Dialog>
</template>



<style scoped lang="scss">
.p-button-sm {
    width: 2rem !important;
    height: 2rem !important;
    padding: 0 !important;
}
</style>

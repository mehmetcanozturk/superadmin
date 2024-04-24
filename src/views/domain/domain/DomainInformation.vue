<script setup>
import { ref, onBeforeMount, reactive } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';

const confirm = useConfirm();
const toast = useToast();

const resellerModal = ref(false);
const domainModal = ref(false);
const addHostModal = ref(false);
const addDnsModal = ref(false);

const resellerpw = ref('*CokGüvenliBirSifre_00!');
const selectApi = ref({ id: 57, name: 'Domain Name API' });
const selectStatus = ref({ id: 55, name: 'Aktif' });
const selectRedirect = ref(false);

const tranferToggle = ref(true);
const whoisToggle = ref(true);

const nameServer = ref([
    { host: 'NS1.RECEPSERIT.COM', ipadress: '185.141.164.88' },
    { host: 'NS2.RECEPSERIT.COM', ipadress: '185.141.164.59' },
    { host: 'NS3.RECEPSERIT.COM', ipadress: '185.141.164.64' },
    { host: 'NS4.RECEPSERIT.COM', ipadress: '185.141.164.32' }
]);
const dnsZone = ref([
    {type:'CNAME', name: 'email', value: 'email.secureserver.net', ttl: '1 Hour'},
    {type:'MX', name: '@', value: 'smtp.secureserver.net (Priority: 0)', ttl: '3 Hour'},
    {type:'CNAME', name: 'FTP', value: '@', ttl: '1 Hour'},
    {type:'A', name: '@', value: '184.168.221.37', ttl: '2 Hour'},
    {type:'AA', name: '@', value: '184.168.221.41', ttl: '1 Hour'},
    {type:'AAAA', name: '@', value: '184.168.221.42', ttl: '2 Hour'},
])

const nsTextarea = ref('NS1.RECEPSERIT.COM\nNS2.RECEPSERIT.COM');

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

const eventLogs = ref([
    {type: 'Kayıt', date: '15/10/2020 10:30', description: 'lorem ipsum'},
    {type: 'Transfer', date: '15/10/2021 11:30', description: 'lorem ipsum'},
    {type: 'Yenileme', date: '15/10/2024 16:47', description: 'lorem ipsum'},
    {type: 'Transfer', date: '15/10/2024 16:47', description: 'lorem ipsum'},
    {type: 'Yenileme', date: '15/10/2024 16:47', description: 'lorem ipsum'},

]);

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    date: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    type: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
});

const dropdownRedirect = ref([{ name: 'Standart' }, { name: 'Frame' }]);

const requireConfirmation = () => {
    confirm.require({
        header: 'Emin misin?',
        message: 'Bütün DNS ayarları varsayılana dönecektir. ',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Ayarları Sıfırla',
        rejectLabel: 'İptal et',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Güncellendi', detail: 'Ayarlar Sıfırlandı', life: 3000 });
        }
    });
};

const resetConfirmation = () => {
    confirm.require({
        header: 'Emin misin?',
        message: 'DNS ayarlarınız varsayılana dönecektir. Önceden kaydettiğiniz dnsler silinecek. ',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Ayarları Sıfırla',
        rejectLabel: 'İptal et',
        accept: () => {
            resetAllDNS();
            toast.add({ severity: 'info', summary: 'Güncellendi', detail: 'Ayarlar Sıfırlandı', life: 3000 });
        }
    });
};

const dnsInputs = ref([]);
const addInput = () => {
    if (dnsInputs.value.length < 11) {
        dnsInputs.value.push('');
    }
};
const removeInput = (index) => {
    dnsInputs.value.splice(index, 1);
};
const resetAllDNS = () => {
    dnsInputs.value = [];
};
</script>


<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5 class="mb-4">recepserit.com - Domain Bilgisi</h5>
                <TabView class="sticky-tab">
                    <TabPanel>
                        <template #header>
                            <div class="flex align-items-center gap-2">
                                <i class="pi pi-home text-xl"></i>
                                <span class="font-bold white-space-nowrap">Genel Bilgiler</span>
                            </div>
                        </template>
                        <div class="grid p-fluid mt-2">
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
                                <label>Kalan Gün:</label>
                                <span class="p-input-icon-left">
                                    <i class="pi pi-code" />
                                    <InputText type="text" value="256 gün" readonly class="font-semibold surface-100" />
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
                                <label>Alan Adı Sunucuları:</label>
                                <Textarea v-model="nsTextarea" autoResize readonly rows="2" class="font-semibold surface-100" />
                            </div>
                            <div class="field col-12 md:col-4 py-1">
                                <label>Transfer Kilidi:</label>
                                <ToggleButton v-model="tranferToggle" onLabel="Transfer Kilidi Açık" offLabel="Transfer Kilidi Kapalı" />
                            </div>
                            <div class="field col-12 md:col-4 py-1">
                                <label>Whois Gizlilik Durumu:</label>
                                <ToggleButton v-model="whoisToggle" onLabel="Whois Gizliği Açık" offLabel="Whois Gizliği Kapalı" />
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
                        <div class="grid row-gap-3 p-fluid mt-2">
                            <div class="col-12 p-0 pr-3 md:col-6">
                                <DataTable :value="nameServer" size="small" class="small p-datatable-gridlines w-full" stripedRows removableSort :rowHover="true">
                                    <template #header>
                                        <div class="flex justify-content-between align-items-center sm:flex-row gap-3">
                                            <span class="font-bold text-xl">Host</span>
                                            <div class="flex gap-3">
                                                <Button type="button" icon="pi pi-plus" label="Host Ekle" @click="addHostModal = true" severity="success" class="w-auto" size="small" />
                                                <Button type="button" @click="requireConfirmation()" icon="pi pi-cog" label="Varsayılan Ayarlara dön" class="w-auto" size="small" />
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
                            <div class="col-12 border-round-lg dns-col md:col-6">
                                <h4>DNS</h4>
                                <div class="col-12 p-0">
                                    <div class="dns-area">
                                        <div class="field mt-2 p-0 col-12 md:col-8">
                                            <label>NS 1</label>
                                            <InputText type="text" value="NS1.DOMAINNAMEAPI.COM" placeholder="Default: NS1.DOMAINNAMEAPI.COM" class="w-full" />
                                        </div>
                                        <div class="field p-0 col-12 md:col-8">
                                            <label>NS 2</label>
                                            <InputText type="text" value="NS2.DOMAINNAMEAPI.COM" placeholder="Default: NS2.DOMAINNAMEAPI.COM" class="w-full" />
                                        </div>
                                        <div v-for="(input, index) in dnsInputs" :key="index" class="field p-0 col-12 md:col-8 relative">
                                            <label>NS {{ index + 3 }}</label>
                                            <InputText type="text" v-model="dnsInputs[index]" class="w-full" :placeholder="'DNS ' + (index + 3) + ' gir'" />
                                            <Button icon="pi pi-trash" text size="small" @click="removeInput(index)" class="btn-removedns"></Button>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap gap-3 mt-3">
                                        <Button label="DNS Ekle" @click="addInput" icon="pi pi-plus" severity="success" class="w-auto" size="small" />
                                        <Button label="DNS Ayarlarını Sıfırla" @click="resetConfirmation()" icon="pi pi-refresh" class="w-auto" size="small" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <template #header>
                            <div class="flex align-items-center gap-2">
                                <i class="pi pi-reply text-xl"></i>
                                <span class="font-bold white-space-nowrap">Yönlendirme</span>
                            </div>
                        </template>
                        <div class="p-fluid mt-2">
                            <div class="field p-0 col-12 md:col-6">
                                <label>Yönlendirme Türü:</label>
                                <Dropdown v-model="selectRedirect" :options="dropdownRedirect" filter optionLabel="name" placeholder="Seç" class="font-semibold" />
                            </div>
                            <div class="field p-0 col-12 md:col-6">
                                <label>Yönlendirilecek Adres:</label>
                                <div class="p-inputgroup">
                                    <span class="p-inputgroup-addon">http://</span>
                                    <InputText type="text" placeholder="www.domainnameapi.com" class="w-full" />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <template #header>
                            <div class="flex align-items-center gap-2">
                                <i class="pi pi-cloud text-xl"></i>
                                <span class="font-bold white-space-nowrap">DNS Zone</span>
                            </div>
                        </template>
                        <DataTable :value="dnsZone" size="small" class="small p-datatable-gridlines w-full" stripedRows removableSort :rowHover="true">
                            <template #header>
                                <div class="flex justify-content-between align-items-center sm:flex-row gap-3">
                                    <span class="font-bold text-xl">DNS Zone</span>
                                    <div class="flex gap-3">
                                        <Button type="button" icon="pi pi-cog" label="DNS Yönetimi"  />
                                    </div>
                                </div>
                            </template>
                            <Column field="type" header="Tipi" sortable></Column>
                            <Column field="name" header="İsmi" sortable></Column>
                            <Column field="value" header="Değer" sortable></Column>
                            <Column field="ttl" header="TTL" sortable></Column>
                        </DataTable>
                    </TabPanel>
                    <TabPanel>
                        <template #header>
                            <div class="flex align-items-center gap-2">
                                <i class="pi pi-list text-xl"></i>
                                <span class="font-bold white-space-nowrap">Log Kayıtları</span>
                            </div>
                        </template>
                        <DataTable :value="eventLogs" v-model:filters="filters" :globalFilterFields="['type', 'date']" paginator :rows="10" size="small" class="small p-datatable-gridlines w-full" stripedRows removableSort :rowHover="true">
                            <template #header>
                                <div class="flex justify-content-between align-items-center sm:flex-row gap-3">
                                    <span class="font-bold text-xl">Log Kayıtları</span>
                                </div>
                            </template>
                            <Column field="date" header="Tarih" sortable></Column>
                            <Column field="type" header="İşlem" sortable></Column>
                            <Column field="description" header="Açıklama" sortable></Column>
                        </DataTable>
                    </TabPanel>
                </TabView>
            </div>
        </div>
    </div>
    <Dialog v-model:visible="addHostModal" maximizable modal header="Yeni Host Ekle" :position="'center'" :style="{ width: '500px' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <div class="field">
            <label class="block">Host:</label>
            <div class="p-inputgroup">
                <InputText placeholder="NS1" />
                <span class="p-inputgroup-addon">recepserit.com</span>
            </div>
        </div>
        <div class="field">
            <label for="" class="block">IP Adresi:</label>
            <InputText type="text" placeholder="Default" class="w-full"></InputText>
        </div>
        <template #footer>
            <Button label="Vazgeç" text @click="addHostModal = false" />
            <Button label="Kaydet" severity="success" @click="addHostModal = false" />
        </template>
    </Dialog>

    <ConfirmDialog></ConfirmDialog>
</template>

<style scoped lang="scss">
.btn-removedns {
    position: absolute;
    right: 3px;
    top: 50%;
    transform: translateY(-15%);
}
.dns-col {
    background: #f8fafc;
    .dns-area {
        max-height: 55dvh;
        overflow: auto;
    }
}
</style>
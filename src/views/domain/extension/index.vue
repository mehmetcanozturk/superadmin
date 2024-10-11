<script setup>
import { ref, onBeforeMount, reactive } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { DomainExtension } from '@/service/DomainExtension';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';

const confirm = useConfirm();
const toast = useToast();


const Extension = new DomainExtension();
const list = ref(null);
const priceListModal = ref(false);
let addPriceModal = ref(false);
const bulkPriceUpdateModal = ref(false);
const addspecialDefinedModal = ref(false);
const switchValue = ref(false);

const users = ref([
    { id: 1, name: 'Mehmet Can Öztürk' },
    { id: 2, name: 'Recep Şerit' },
    { id: 3, name: 'Çağrı Topçu' },
    { id: 4, name: 'Bahadır Topçu' },
    { id: 5, name: 'Tayfun Yılmaz' }
])

const selectedUser = ref();
const filteredUsers = ref();
const search = (event) => {
    setTimeout(() => {
        filteredUsers.value = users.value.filter((data) => {
            return data.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
    }, 250);
}

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    group: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    no: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    api: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
});



onBeforeMount(() => {
    Extension.getDomainExtension().then((data) => {
        list.value = data;
    });
});

const priceTable = ref([
    { type: 'Yenileme', period: 1, cost: '$19.99', resellerSale: '$24.99', premiumSale: '$23.99', platiumSale: '$22.99', vipSale: '$20.99', },
    { type: 'Kayıt', period: 1, cost: '$6.99', resellerSale: '$9.49', premiumSale: '$8.99', platiumSale: '$7.99', vipSale: '$7.49', },
    { type: 'Transfer', period: 1, cost: '$17.99', resellerSale: '$20.49', premiumSale: '$19.99', platiumSale: '$18.99', vipSale: '$18.49', },
    { type: 'Yenileme', period: 4, cost: '$64.99', resellerSale: '$67.49', premiumSale: '$66.99', platiumSale: '$65.99', vipSale: '$64.49' },
    { type: 'Yenileme', period: 5, cost: '$79.99', resellerSale: '$82.49', premiumSale: '$81.99', platiumSale: '$80.99', vipSale: '$79.49' },
    { type: 'Transfer', period: 4, cost: '$62.99', resellerSale: '$65.49', premiumSale: '$64.99', platiumSale: '$63.99', vipSale: '$62.49' },
    { type: 'Transfer', period: 5, cost: '$77.99', resellerSale: '$80.49', premiumSale: '$79.99', platiumSale: '$78.99', vipSale: '$77.49' },
    { type: 'Kayıt', period: 4, cost: '$22.99', resellerSale: '$25.49', premiumSale: '$24.99', platiumSale: '$23.99', vipSale: '$22.49' },
    { type: 'Kayıt', period: 5, cost: '$27.99', resellerSale: '$30.49', premiumSale: '$29.99', platiumSale: '$28.99', vipSale: '$27.49' },
    { type: 'Yenileme', period: 6, cost: '$94.99', resellerSale: '$97.49', premiumSale: '$96.99', platiumSale: '$95.99', vipSale: '$94.49' },
    { type: 'Yenileme', period: 7, cost: '$109.99', resellerSale: '$112.49', premiumSale: '$111.99', platiumSale: '$110.99', vipSale: '$109.49' },
    { type: 'Transfer', period: 6, cost: '$92.99', resellerSale: '$95.49', premiumSale: '$94.99', platiumSale: '$93.99', vipSale: '$92.49' },
    { type: 'Transfer', period: 7, cost: '$107.99', resellerSale: '$110.49', premiumSale: '$109.99', platiumSale: '$108.99', vipSale: '$107.49' },
    { type: 'Kayıt', period: 6, cost: '$32.99', resellerSale: '$35.49', premiumSale: '$34.99', platiumSale: '$33.99', vipSale: '$32.49' },
    { type: 'Kayıt', period: 7, cost: '$37.99', resellerSale: '$40.49', premiumSale: '$39.99', platiumSale: '$38.99', vipSale: '$37.49' },
    { type: 'Yenileme', period: 8, cost: '$124.99', resellerSale: '$127.49', premiumSale: '$126.99', platiumSale: '$125.99', vipSale: '$124.49' },
    { type: 'Yenileme', period: 9, cost: '$139.99', resellerSale: '$142.49', premiumSale: '$141.99', platiumSale: '$140.99', vipSale: '$139.49' },
    { type: 'Transfer', period: 8, cost: '$122.99', resellerSale: '$125.49', premiumSale: '$124.99', platiumSale: '$123.99', vipSale: '$122.49' },
    { type: 'Transfer', period: 9, cost: '$137.99', resellerSale: '$140.49', premiumSale: '$139.99', platiumSale: '$138.99', vipSale: '$137.49' },
    { type: 'Kayıt', period: 8, cost: '$42.99', resellerSale: '$45.49', premiumSale: '$44.99', platiumSale: '$43.99', vipSale: '$42.49' },
    { type: 'Kayıt', period: 9, cost: '$47.99', resellerSale: '$50.49', premiumSale: '$49.99', platiumSale: '$48.99', vipSale: '$47.49' },
    { type: 'Yenileme', period: 10, cost: '$154.99', resellerSale: '$157.49', premiumSale: '$156.99', platiumSale: '$155.99', vipSale: '$154.49' },
    { type: 'Transfer', period: 10, cost: '$152.99', resellerSale: '$155.49', premiumSale: '$154.99', platiumSale: '$153.99', vipSale: '$152.49' }
]);

const expandedRows = ref();
const specialDefined = ref([
    {
        id: 124565,
        name: 'Recep Şerit',
        group: 'VIP',
        specialPrice: [
            { type: 'Yenileme', period: 1, cost: '$19.99', resellerSale: '$24.99', premiumSale: '$23.99', platiumSale: '$22.99', vipSale: '$20.99', startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Kayıt', period: 1, cost: '$6.99', resellerSale: '$9.49', premiumSale: '$8.99', platiumSale: '$7.99', vipSale: '$7.49', startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Transfer', period: 1, cost: '$17.99', resellerSale: '$20.49', premiumSale: '$19.99', platiumSale: '$18.99', vipSale: '$18.49', startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Yenileme', period: 4, cost: '$64.99', resellerSale: '$67.49', premiumSale: '$66.99', platiumSale: '$65.99', vipSale: '$64.49' , startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Yenileme', period: 5, cost: '$79.99', resellerSale: '$82.49', premiumSale: '$81.99', platiumSale: '$80.99', vipSale: '$79.49' , startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Transfer', period: 4, cost: '$62.99', resellerSale: '$65.49', premiumSale: '$64.99', platiumSale: '$63.99', vipSale: '$62.49' , startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Transfer', period: 5, cost: '$77.99', resellerSale: '$80.49', premiumSale: '$79.99', platiumSale: '$78.99', vipSale: '$77.49' , startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Kayıt', period: 4, cost: '$22.99', resellerSale: '$25.49', premiumSale: '$24.99', platiumSale: '$23.99', vipSale: '$22.49', startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Transfer', period: 8, cost: '$122.99', resellerSale: '$125.49', premiumSale: '$124.99', platiumSale: '$123.99', vipSale: '$122.49', startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Transfer', period: 9, cost: '$137.99', resellerSale: '$140.49', premiumSale: '$139.99', platiumSale: '$138.99', vipSale: '$137.49', startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Kayıt', period: 8, cost: '$42.99', resellerSale: '$45.49', premiumSale: '$44.99', platiumSale: '$43.99', vipSale: '$42.49', startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Kayıt', period: 9, cost: '$47.99', resellerSale: '$50.49', premiumSale: '$49.99', platiumSale: '$48.99', vipSale: '$47.49' , startingDate:'15/04/2024' , endDate:'01/01/2025'},
        ]
    },
    {
        id: 19665,
        name: 'Mehmet Can Öztürk',
        group: 'Reseller',
        specialPrice: [
            { type: 'Yenileme', period: 1, cost: '$19.99', resellerSale: '$24.99', premiumSale: '$23.99', platiumSale: '$22.99', vipSale: '$20.99', startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Kayıt', period: 1, cost: '$6.99', resellerSale: '$9.49', premiumSale: '$8.99', platiumSale: '$7.99', vipSale: '$7.49', startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Kayıt', period: 4, cost: '$22.99', resellerSale: '$25.49', premiumSale: '$24.99', platiumSale: '$23.99', vipSale: '$22.49', startingDate:'15/04/2024' , endDate:'01/01/2025' },
        ]
    },
    {
        id: 451395,
        name: 'Çağrı Topçu',
        group: 'Platium',
        specialPrice: [
            { type: 'Yenileme', period: 1, cost: '$19.99', resellerSale: '$24.99', premiumSale: '$23.99', platiumSale: '$22.99', vipSale: '$20.99', startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Kayıt', period: 1, cost: '$6.99', resellerSale: '$9.49', premiumSale: '$8.99', platiumSale: '$7.99', vipSale: '$7.49', startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Transfer', period: 1, cost: '$17.99', resellerSale: '$20.49', premiumSale: '$19.99', platiumSale: '$18.99', vipSale: '$18.49', startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Yenileme', period: 4, cost: '$64.99', resellerSale: '$67.49', premiumSale: '$66.99', platiumSale: '$65.99', vipSale: '$64.49',startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Kayıt', period: 4, cost: '$22.99', resellerSale: '$25.49', premiumSale: '$24.99', platiumSale: '$23.99', vipSale: '$22.49',startingDate:'15/04/2024' , endDate:'01/01/2025' },
        ]
    },
    {
        id: 656365,
        name: 'Bahadır Topçu',
        group: 'Platium',
        specialPrice: [
            { type: 'Yenileme', period: 1, cost: '$19.99', resellerSale: '$24.99', premiumSale: '$23.99', platiumSale: '$22.99', vipSale: '$20.99', startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Kayıt', period: 1, cost: '$6.99', resellerSale: '$9.49', premiumSale: '$8.99', platiumSale: '$7.99', vipSale: '$7.49', startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Transfer', period: 1, cost: '$17.99', resellerSale: '$20.49', premiumSale: '$19.99', platiumSale: '$18.99', vipSale: '$18.49', startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Yenileme', period: 4, cost: '$64.99', resellerSale: '$67.49', premiumSale: '$66.99', platiumSale: '$65.99', vipSale: '$64.49',startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Kayıt', period: 4, cost: '$22.99', resellerSale: '$25.49', premiumSale: '$24.99', platiumSale: '$23.99', vipSale: '$22.49',startingDate:'15/04/2024' , endDate:'01/01/2025' },
        ]
    },
    {
        id: 24242,
        name: 'Bahadır Topçu',
        group: 'Platium',
        specialPrice: [
            { type: 'Yenileme', period: 1, cost: '$19.99', resellerSale: '$24.99', premiumSale: '$23.99', platiumSale: '$22.99', vipSale: '$20.99', startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Kayıt', period: 1, cost: '$6.99', resellerSale: '$9.49', premiumSale: '$8.99', platiumSale: '$7.99', vipSale: '$7.49', startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Transfer', period: 1, cost: '$17.99', resellerSale: '$20.49', premiumSale: '$19.99', platiumSale: '$18.99', vipSale: '$18.49', startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Yenileme', period: 4, cost: '$64.99', resellerSale: '$67.49', premiumSale: '$66.99', platiumSale: '$65.99', vipSale: '$64.49',startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Kayıt', period: 4, cost: '$22.99', resellerSale: '$25.49', premiumSale: '$24.99', platiumSale: '$23.99', vipSale: '$22.49',startingDate:'15/04/2024' , endDate:'01/01/2025' },
        ]
    },
    {
        id: 342342,
        name: 'Bahadır Topçu',
        group: 'Platium',
        specialPrice: [
            { type: 'Yenileme', period: 1, cost: '$19.99', resellerSale: '$24.99', premiumSale: '$23.99', platiumSale: '$22.99', vipSale: '$20.99', startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Kayıt', period: 1, cost: '$6.99', resellerSale: '$9.49', premiumSale: '$8.99', platiumSale: '$7.99', vipSale: '$7.49', startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Transfer', period: 1, cost: '$17.99', resellerSale: '$20.49', premiumSale: '$19.99', platiumSale: '$18.99', vipSale: '$18.49', startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Yenileme', period: 4, cost: '$64.99', resellerSale: '$67.49', premiumSale: '$66.99', platiumSale: '$65.99', vipSale: '$64.49',startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Kayıt', period: 4, cost: '$22.99', resellerSale: '$25.49', premiumSale: '$24.99', platiumSale: '$23.99', vipSale: '$22.49',startingDate:'15/04/2024' , endDate:'01/01/2025' },
        ]
    },
    {
        id: 4321,
        name: 'Bahadır Topçu',
        group: 'Platium',
        specialPrice: [
            { type: 'Yenileme', period: 1, cost: '$19.99', resellerSale: '$24.99', premiumSale: '$23.99', platiumSale: '$22.99', vipSale: '$20.99', startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Kayıt', period: 1, cost: '$6.99', resellerSale: '$9.49', premiumSale: '$8.99', platiumSale: '$7.99', vipSale: '$7.49', startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Transfer', period: 1, cost: '$17.99', resellerSale: '$20.49', premiumSale: '$19.99', platiumSale: '$18.99', vipSale: '$18.49', startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Yenileme', period: 4, cost: '$64.99', resellerSale: '$67.49', premiumSale: '$66.99', platiumSale: '$65.99', vipSale: '$64.49',startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Kayıt', period: 4, cost: '$22.99', resellerSale: '$25.49', premiumSale: '$24.99', platiumSale: '$23.99', vipSale: '$22.49',startingDate:'15/04/2024' , endDate:'01/01/2025' },
        ]
    },
    {
        id: 4321,
        name: 'Bahadır Topçu',
        group: 'Platium',
        specialPrice: [
            { type: 'Yenileme', period: 1, cost: '$19.99', resellerSale: '$24.99', premiumSale: '$23.99', platiumSale: '$22.99', vipSale: '$20.99', startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Kayıt', period: 1, cost: '$6.99', resellerSale: '$9.49', premiumSale: '$8.99', platiumSale: '$7.99', vipSale: '$7.49', startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Transfer', period: 1, cost: '$17.99', resellerSale: '$20.49', premiumSale: '$19.99', platiumSale: '$18.99', vipSale: '$18.49', startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Yenileme', period: 4, cost: '$64.99', resellerSale: '$67.49', premiumSale: '$66.99', platiumSale: '$65.99', vipSale: '$64.49',startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Kayıt', period: 4, cost: '$22.99', resellerSale: '$25.49', premiumSale: '$24.99', platiumSale: '$23.99', vipSale: '$22.49',startingDate:'15/04/2024' , endDate:'01/01/2025' },
        ]
    },
    {
        id: 344324,
        name: 'Bahadır Topçu',
        group: 'Platium',
        specialPrice: [
            { type: 'Yenileme', period: 1, cost: '$19.99', resellerSale: '$24.99', premiumSale: '$23.99', platiumSale: '$22.99', vipSale: '$20.99', startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Kayıt', period: 1, cost: '$6.99', resellerSale: '$9.49', premiumSale: '$8.99', platiumSale: '$7.99', vipSale: '$7.49', startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Transfer', period: 1, cost: '$17.99', resellerSale: '$20.49', premiumSale: '$19.99', platiumSale: '$18.99', vipSale: '$18.49', startingDate:'15/04/2024' , endDate:'01/01/2025'},
            { type: 'Yenileme', period: 4, cost: '$64.99', resellerSale: '$67.49', premiumSale: '$66.99', platiumSale: '$65.99', vipSale: '$64.49',startingDate:'15/04/2024' , endDate:'01/01/2025' },
            { type: 'Kayıt', period: 4, cost: '$22.99', resellerSale: '$25.49', premiumSale: '$24.99', platiumSale: '$23.99', vipSale: '$22.49',startingDate:'15/04/2024' , endDate:'01/01/2025' },
        ]
    }

])
const specialDefinedFilter = ref({ global: { value: null, matchMode: FilterMatchMode.CONTAINS } });
const collapseAll = () => { expandedRows.value = null; };

const newUserAlert = () => {
    toast.add({ severity: 'success', summary: 'Başarılı', detail: selectedUser._rawValue.name + ' adlı kullanıcı .com domainin özel tanımlanmış kişilerine eklendi eklendi', life: 3000 });
};

const requireConfirmation = () => {
    confirm.require({
        group: 'headless',
        header: 'Emin misin?',
        message: 'Otomatik fiyatlandırma modu açık oluduğu için bütün Fiyatları güncelleyeceksin.',
        acceptLabel: 'Evet',
        rejectLabel: 'Vazgeç',
        accept: () => {
            toast.add({ severity: 'success', summary: 'Toplu Fiyat Güncellemesi', detail: 'Reseller bayilerinin bütün kayıt fiyatları güncellendi', life: 3000 });
        }
    });
    addPriceModal = false;
};

const isUploadSuccessful = ref(false);
const onUpload = () => {
    isUploadSuccessful.value = true;
    toast.add({ severity: 'success', summary: 'Yüklendi', detail: 'Dosya Başarıyla Yüklendi.', life: 3000 });

};
const bulkPriceUpdateTypes = ref()
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Uzantı Listesi</h5>
                <DataTable :value="list" size="small" class="small p-datatable-gridlines" :paginator="true" :rowHover="true" :rows="25" v-model:filters="filters" dataKey="id" filterDisplay="row" :globalFilterFields="['name', 'group', 'api', 'no']">
                    <template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row gap-3">
                            <div class="flex flex-column sm:flex-row gap-3">
                                <span class="p-input-icon-left mb-2">
                                    <i class="pi pi-search" />
                                    <InputText placeholder="Ara" v-model="filters['global'].value" style="width: 100%" />
                                </span>
                                <Button type="button" v-tooltip.top="'Filtreyi Temizle'" icon="pi pi-filter-slash" class="p-button-outlined mb-2" />
                            </div>
                            <div class="flex gap-2">
                                <Button type="button" icon="pi pi-sliders-h" label="Toplu Fiyat Güncelle" class="mb-2" @click="bulkPriceUpdateModal = true" />
                                <router-link to="/uzanti/uzanti-ekle">
                                    <Button type="button" icon="pi pi-plus" label="Yeni Uzantı Ekle" severity="success" class="mb-2" />
                                </router-link>
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
                    <Column field="no" header="NO" sortable>
                        <template #body="{ data }">
                            <span class="font-bold">{{ data.no }}</span>
                        </template>
                    </Column>
                    <Column field="name" header="Uzantı" :showFilterMenu="false">
                        <template #body="{ data }">
                            {{ data.name }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Uzantı Ara" />
                        </template>
                    </Column>
                    <Column field="group" header="Uzantı Grubu" :showFilterMenu="false">
                        <template #body="{ data }">
                            {{ data.group }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Uzantı Grubu Ara" />
                        </template>
                    </Column>
                    <Column field="api" header="API" :showFilterMenu="false">
                        <template #body="{ data }">
                            {{ data.api }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="API Ara" />
                        </template>
                    </Column>
                    <Column :exportable="false">
                        <template #body="">
                            <div class="flex justify-content-center gap-2">
                                <Button icon="pi pi-dollar" rounded size="small" link v-tooltip.top="'Fiyatı Düzenle'" @click="priceListModal = true" />
                                <router-link to="/uzanti/uzanti-ekle">
                                    <Button icon="pi pi-pencil" rounded size="small" link v-tooltip.top="'Düzenle'" />
                                </router-link>
                                <Button icon="pi pi-trash" rounded size="small" link v-tooltip.top="'Sil'" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>


    <Dialog v-model:visible="bulkPriceUpdateModal" maximizable modal header="Toplu Fiyat Güncellemesi" :style="{ width: '600px' }" :position="'center'" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">

        <div class="flex gap-3 mt-3 justify-content-between">
            <FileUpload mode="basic" name="demo[]" :chooseLabel="'Excel Yükle'" accept=".xlsx" :maxFileSize="1000000" @uploader="onUpload" customUpload />

            <router-link to="demo/dna-example.xlsx" rel="noopener">
                <Button label="Örnek Dosyayı İndir" icon="pi pi-download" />
            </router-link>
        </div>
        <div v-if="isUploadSuccessful" class="card mt-3 surface">
            <h5>Güncellemek istediğin fiyat türlerini seç</h5>
            <Divider />
            <div class="flex flex-column gap-3 ">
                <label class="block">
                    <Checkbox v-model="bulkPriceUpdateTypes" name="bulkPriceUpdateTypes" value="1"  />
                    <span class="ml-2 select-none cursor-pointer">satış fiyatlarını güncelle</span>
                </label>
                <label class="block">
                    <Checkbox v-model="bulkPriceUpdateTypes" name="bulkPriceUpdateTypes" value="2" />
                    <span class="ml-2 select-none cursor-pointer">yenileme fiyatlarını güncelle</span>
                </label>
                <label class="block">
                    <Checkbox v-model="bulkPriceUpdateTypes" name="bulkPriceUpdateTypes" value="3" />
                    <span class="ml-2 select-none cursor-pointer">transfer fiyatlarını güncelle</span>
                </label>
                <label class="block">
                    <Checkbox v-model="bulkPriceUpdateTypes" name="bulkPriceUpdateTypes" value="4" />
                    <span class="ml-2 select-none cursor-pointer">satış maliyetlerini güncelle</span>
                </label>
                <label class="block">
                    <Checkbox v-model="bulkPriceUpdateTypes" name="bulkPriceUpdateTypes" value="5" />
                    <span class="ml-2 select-none cursor-pointer">yenileme maliyetlerini güncelle</span>
                </label>
                <label class="block">
                    <Checkbox v-model="bulkPriceUpdateTypes" name="bulkPriceUpdateTypes" value="6" />
                    <span class="ml-2 select-none cursor-pointer">transfer maliyetlerini güncelle</span>
                </label>
            </div>
        </div>

        <Message severity="info"  icon="pi">
            <ul>
                <li>Yükleyeceğiniz dosyada istediğiniz alan adının istediğiniz fiyat türünü listeleyebilirsiniz.</li>
                <li>Dosyadaki sütun adları örnek dosyadaki sütun adları ile aynı olmalıdır.</li>
                <li>Her fiyat türünün sadece 1 yıllık fiyat bilgisini girmelisiniz. Diğer süreler otomatik hesaplanır.</li>
                <li>Uzantıları yazarken uzantının başında "." işareti olmadan yazınız. Örn:(com.tr)</li>
            </ul>
        </Message>
        <Message severity="error"  icon="pi-exclamation-triangle">İşlemden emin değilseniz yazılım birimine başvurunuz.</Message>
        <template #footer>
            <Button label="Kaydet" icon="pi pi-check" severity="success" @click="bulkPriceUpdateModal = false, isUploadSuccessful=false" />
        </template>
    </Dialog>

    <Dialog v-model:visible="priceListModal" maximizable modal header=".COM Fiyat Listesi" :style="{ width: '80vw' }" :position="'top'" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <Button type="button" icon="pi pi-plus" label="Yeni Fiyat Ekle" severity="success" class="mb-2 modal-plus-btn" @click="addPriceModal = true" />
        <TabView class="sticky-tab">
            <TabPanel>
                <template #header>
                    <div class="flex align-items-center gap-2">
                        <span class="font-bold white-space-nowrap">Fiyat Listesi</span>
                    </div>
                </template>
                <DataTable :value="priceTable" scrollable scrollHeight="55dvh" size="small" class="small" stripedRows showGridlines removableSort :paginator="true" :rowHover="false" :rows="10" dataKey="id">
                    <template #header>
                        <div class="flex justify-content-between align-items-center">
                            <h5 class="mb-0"><span class="text-green-600 font-bold">.com</span> Fiyat Listesi</h5>
                            <InputText v-model="filters['global'].value" placeholder="Ara" />
                        </div>
                    </template>
                    <Column field="type" header="Türü" sortable class="font-bold"></Column>
                    <Column field="period" header="Periyot (Yıl)" sortable></Column>
                    <Column field="cost" header="Maliyet" sortable></Column>
                    <Column field="resellerSale" class="surface-100 border-bluegray-200 text-bluegray-900 font-semibold" header="Reseller" sortable></Column>
                    <Column field="premiumSale" class="bg-green-100 border-green-300 text-green-900 font-semibold" header="Premium" sortable></Column>
                    <Column field="platiumSale" class="bg-orange-100 border-orange-200 text-orange-900 font-semibold" header="Platium" sortable></Column>
                    <Column field="vipSale" class="bg-purple-100 border-purple-200 text-purple-900 font-semibold" header="VIP" sortable></Column>
                    <Column :exportable="false">
                        <template #body="">
                            <div class="flex justify-content-center">
                                <Button icon="pi pi-pencil" rounded link size="small" v-tooltip.top="'Düzenle'" />
                                <Button icon="pi pi-trash" rounded link size="small" v-tooltip.top="'Sil'" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </TabPanel>
            <TabPanel>
                <template #header>
                    <div class="flex align-items-center gap-2">
                        <span class="font-bold white-space-nowrap">Özel Tanımlanmış</span>
                        <Badge :value="specialDefined.length"></Badge>
                    </div>
                </template>
                <DataTable  :value="specialDefined" :paginator="true" :rowHover="false" scrollable scrollHeight="55dvh" :rows="10" dataKey="id" stripedRows v-model:filters="specialDefinedFilter" showGridlines v-model:expandedRows="expandedRows">
                    <template #header>
                        <div class="flex justify-content-between align-items-center">
                            <div class="flex gap-3 align-items-center">
                                <h5 class="mb-0">Özel Tanımlanmış Fiyat Listesi</h5>
                                <Button size="small" outlined severity="secondary" icon="pi pi-angle-up" v-tooltip.top="'Tümünü Daralt'" @click="collapseAll" />
                            </div>
                            <div class="flex gap-3 align-items-center">
                                <Button severity="success" icon="pi pi-plus" label="Özel Kullanıcı Ekle" @click="addspecialDefinedModal = true;" />
                                <InputText v-model="specialDefinedFilter['global'].value" placeholder="Ara" />
                            </div>
                        </div>
                    </template>
                    <Column expander style="width: 3rem" />
                    <Column field="name" header="İsmi" sortable>
                        <template #body="slotProps">
                            <i class="pi pi-user mr-2"> </i>{{ slotProps.data.name }} 
                        </template>
                    </Column>
                    <Column field="id" header="id" sortable></Column>
                    <Column field="group" header="Bayi Tipi" sortable></Column>
                    <template #expansion="slotProps">
                        <div class="p-3">
                            <h5>{{ slotProps.data.name }} için tanımlanmış Fiyatları</h5>
                            <DataTable class="table-sm" :value="slotProps.data.specialPrice" showGridlines>
                                <Column field="type" header="Türü" sortable class="font-bold"></Column>
                                <Column field="period" header="Periyot (Yıl)" sortable></Column>
                                <Column field="cost" header="Maliyet" sortable></Column>
                                <Column field="resellerSale" header="Satış Fiyatı" sortable></Column>
                                <Column field="startingDate" header="Başlangıç Tarihi" sortable></Column>
                                <Column field="endDate" header="Bitiş Tarihi" sortable></Column>
                                <Column :exportable="false">
                                    <template #body="">
                                        <div class="flex justify-content-center">
                                            <Button icon="pi pi-pencil" rounded link size="small" v-tooltip.top="'Düzenle'" @click="addPriceModal = true" />
                                            <Button icon="pi pi-trash" rounded link size="small" v-tooltip.top="'Sil'" />
                                        </div>
                                    </template>
                                </Column>
                            </DataTable>
                        </div>
                    </template>
                </DataTable>
            </TabPanel>
        </TabView>
    </Dialog>

    <Dialog v-model:visible="addPriceModal" maximizable modal header="Yeni Fiyat Ekle" :position="'top'" :style="{ width: '500px' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <div class="field">
            <label for="name">Bayi Türü:</label>
            <Dropdown v-model="selectedCity" :options="cities" filter optionLabel="name" placeholder="Bayi türü seç" class="w-full" />
        </div>
        <div class="field">
            <label for="name">İşlem Türü:</label>
            <Dropdown v-model="selectedCity" :options="cities" filter optionLabel="name" placeholder="İşlem türü seç" class="w-full" />
        </div>
        <div class="field">
            <label for="name">Periyot (Yıl):</label>
            <InputNumber v-model="value232" :useGrouping="false" max="10" class="w-full" />
        </div>
        <div class="field">
            <label for="name">Maliyet:</label>
            <InputNumber v-model="value123" inputId="currency-us" mode="currency" currency="USD" locale="en-US" class="w-full" />
        </div>
        <div class="field">
            <label for="name">Satış:</label>
            <InputNumber v-model="value321" inputId="currency-us" mode="currency" currency="USD" locale="en-US" class="w-full" />
        </div>
        <div class="field">
            <label class="block" for="name">Otomatik Fiyatlandırma:</label>
            <InputSwitch v-model="switchValue" />
        </div>
        <Message severity="info" v-if="switchValue"><b>Otomatik Fiyatlandırma:</b> Bir işlem türünün bütün periyot fiyatlarını otomatik güncellemek için kullanılır.</Message>
        <template #footer>
            <ConfirmDialog group="headless"></ConfirmDialog>
            <Button label="Vazgeç" text @click="addPriceModal = false" />
            <Button label="Kaydet" icon="pi pi-check" severity="success" @click="switchValue ? requireConfirmation() : addPriceModal = false" />
        </template>
    </Dialog>

    <Dialog v-model:visible="addspecialDefinedModal" maximizable modal header="Özel Kullanıcı Ekle" :position="'top'" :style="{ width: '500px' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <div class="field">
            <label for="name">Domain:</label>
            <InputText value=".com" class="w-full" readonly />
        </div>
        <div class="field">
            <label for="name">Kullanıcı:</label>
            <AutoComplete v-model="selectedUser" class="w-full" optionLabel="name" :suggestions="filteredUsers" @complete="search">
                <template #optiongroup="slotProps">
                    <div class="flex align-items-center gap-2">
                        <div>{{ slotProps.id }}</div>
                        <div>{{ slotProps.name }}</div>
                    </div>
                </template>
            </AutoComplete>
        </div>
        <template #footer>
            <Button label="Vazgeç" text @click="addspecialDefinedModal = false" />
            <Button v-if="selectedUser" label="Kaydet" icon="pi pi-check" severity="success" @click="addspecialDefinedModal = false, newUserAlert()" />
        </template>
    </Dialog>

</template>

<style scoped>
ul {
    padding-inline-start: 0px;
}

ul li {
    margin-top: 10px;
}
</style>

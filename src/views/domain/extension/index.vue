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
const addPriceModal = ref(false);
const switchValue = ref(false);

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
    { id: 2, group: 'Reseller', type: 'Yenileme', period: 2, cost: '$19.99', sale: '$24.99' },
    { id: 3, group: 'Reseller', type: 'Kayıt', period: 1, cost: '$8.99', sale: '$10.99' },
    { id: 4, group: 'Reseller', type: 'Yenileme', period: 1, cost: '$17.99', sale: '$22.99' },
    { id: 5, group: 'Reseller', type: 'Transfer', period: 3, cost: '$28.99', sale: '$33.99' },
    { id: 6, group: 'Reseller', type: 'Kayıt', period: 2, cost: '$10.99', sale: '$12.99' },
    { id: 7, group: 'Reseller', type: 'Yenileme', period: 3, cost: '$25.99', sale: '$30.99' },
    { id: 8, group: 'Reseller', type: 'Transfer', period: 1, cost: '$13.99', sale: '$18.99' },
    { id: 9, group: 'Reseller', type: 'Transfer', period: 2, cost: '$22.99', sale: '$27.99' },
    { id: 10, group: 'Reseller', type: 'Kayıt', period: 3, cost: '$28.99', sale: '$33.99' },
    { id: 11, group: 'Reseller', type: 'Yenileme', period: 3, cost: '$26.99', sale: '$31.99' },
    { id: 12, group: 'Reseller', type: 'Transfer', period: 1, cost: '$15.99', sale: '$20.99' },
    { id: 13, group: 'Reseller', type: 'Kayıt', period: 3, cost: '$12.99', sale: '$14.99' },
    { id: 14, group: 'Reseller', type: 'Yenileme', period: 1, cost: '$18.99', sale: '$23.99' },
    { id: 15, group: 'Reseller', type: 'Transfer', period: 3, cost: '$28.99', sale: '$33.99' },
    { id: 16, group: 'Reseller', type: 'Kayıt', period: 1, cost: '$7.99', sale: '$9.99' },
    { id: 17, group: 'Reseller', type: 'Yenileme', period: 2, cost: '$20.99', sale: '$25.99' },
    { id: 18, group: 'Reseller', type: 'Transfer', period: 2, cost: '$23.99', sale: '$28.99' },
    { id: 19, group: 'Reseller', type: 'Kayıt', period: 2, cost: '$9.99', sale: '$11.99' },
    { id: 20, group: 'Reseller', type: 'Yenileme', period: 2, cost: '$21.99', sale: '$26.99' },
    { id: 21, group: 'Reseller', type: 'Transfer', period: 1, cost: '$14.99', sale: '$19.99' },
    { id: 22, group: 'Reseller', type: 'Transfer', period: 3, cost: '$30.99', sale: '$35.99' }
]);

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
                                    <path
                                        d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM182.4 382.5c-12.4 5.2-26.5-4.1-21.1-16.4c16-36.6 52.4-62.1 94.8-62.1s78.8 25.6 94.8 62.1c5.4 12.3-8.7 21.6-21.1 16.4c-22.4-9.5-47.4-14.8-73.7-14.8s-51.3 5.3-73.7 14.8zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                                    />
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
    <Dialog v-model:visible="priceListModal" maximizable modal header=".COM Fiyat Listesi" :style="{ width: '80vw' }" :position="'top'" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <Button type="button" icon="pi pi-plus" label="Yeni Fiyat Ekle" severity="success" class="mb-2 modal-plus-btn" @click="addPriceModal = true" />
        <TabView class="sticky-tab">
            <TabPanel>
                <template #header>
                    <div class="flex align-items-center gap-2">
                        <span class="font-bold white-space-nowrap">Reseller</span>
                    </div>
                </template>
                <DataTable :value="priceTable" size="small" class="small" scrollable stripedRows showGridlines removableSort :paginator="true" :rowHover="true" :rows="10" dataKey="id">
                    <template #header>
                        <div class="flex justify-content-between align-items-center">
                            <h5 class="mb-0">Reseller Fiyat Listesi</h5>
                            <InputText v-model="filters['global'].value" placeholder="Ara" />
                        </div>
                    </template>
                    <Column field="type" header="Türü" sortable class="font-bold"></Column>
                    <Column field="period" header="Periyot (Yıl)" sortable></Column>
                    <Column field="cost" header="Maliyet" sortable></Column>
                    <Column field="sale" header="Satış Fiyatı" sortable></Column>
                    <Column :exportable="false">
                        <template #body="">
                            <div class="flex justify-content-center gap-2">
                                <Button icon="pi pi-pencil" rounded size="small" />
                                <Button icon="pi pi-trash" rounded size="small" severity="danger" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </TabPanel>
            <TabPanel>
                <template #header>
                    <div class="flex align-items-center gap-2">
                        <span class="font-bold white-space-nowrap">Premium</span>
                    </div>
                </template>
                <DataTable :value="priceTable" size="small" class="small" scrollable stripedRows showGridlines removableSort :paginator="true" :rowHover="true" :rows="10" dataKey="id">
                    <template #header>
                        <div class="flex justify-content-between align-items-center">
                            <h5 class="mb-0">Premium Fiyat Listesi</h5>
                            <InputText v-model="filters['global'].value" placeholder="Ara" />
                        </div>
                    </template>
                    <Column field="type" header="İşlem" sortable class="font-bold"></Column>
                    <Column field="period" header="Periyot (Yıl)" sortable></Column>
                    <Column field="cost" header="Maliyet" sortable></Column>
                    <Column field="sale" header="Satış Fiyatı" sortable></Column>
                    <Column :exportable="false">
                        <template #body="">
                            <div class="flex justify-content-center gap-2">
                                <Button icon="pi pi-pencil" rounded size="small" />
                                <Button icon="pi pi-trash" rounded size="small" severity="danger" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </TabPanel>
            <TabPanel>
                <template #header>
                    <div class="flex align-items-center gap-2">
                        <span class="font-bold white-space-nowrap">Platium</span>
                    </div>
                </template>
                <DataTable :value="priceTable" size="small" class="small" scrollable stripedRows showGridlines removableSort :paginator="true" :rowHover="true" :rows="10" dataKey="id">
                    <template #header>
                        <div class="flex justify-content-between align-items-center">
                            <h5 class="mb-0">Platium Fiyat Listesi</h5>
                            <InputText v-model="filters['global'].value" placeholder="Ara" />
                        </div>
                    </template>
                    <Column field="type" header="İşlem" sortable class="font-bold"></Column>
                    <Column field="period" header="Periyot (Yıl)" sortable></Column>
                    <Column field="cost" header="Maliyet" sortable></Column>
                    <Column field="sale" header="Satış Fiyatı" sortable></Column>
                    <Column :exportable="false">
                        <template #body="">
                            <div class="flex justify-content-center gap-2">
                                <Button icon="pi pi-pencil" rounded size="small" />
                                <Button icon="pi pi-trash" rounded size="small" severity="danger" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </TabPanel>

            <TabPanel>
                <template #header>
                    <div class="flex align-items-center gap-2">
                        <span class="font-bold white-space-nowrap">Özel Tanımlanmış</span>
                        <Badge value="2"></Badge>
                    </div>
                </template>
                <Accordion :activeIndex="0" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
                    <AccordionTab>
                        <template #header>
                            <span class="flex align-items-center gap-2 w-full">
                                <Avatar image="/images/user.jpg" shape="circle" />
                                <span class="font-bold white-space-nowrap">Recep Şerit</span>
                            </span>
                        </template>
                        <DataTable :value="priceTable" size="small" class="small" scrollable stripedRows showGridlines removableSort :paginator="true" :rowHover="true" :rows="10" dataKey="id">
                            <template #header>
                                <div class="flex justify-content-between align-items-center">
                                    <h5 class="mb-0">Recep Şerit Fiyat Listesi</h5>
                                    <InputText v-model="filters['global'].value" placeholder="Ara" />
                                </div>
                            </template>
                            <Column field="type" header="İşlem" sortable class="font-bold"></Column>
                            <Column field="period" header="Periyot (Yıl)" sortable></Column>
                            <Column field="cost" header="Maliyet" sortable></Column>
                            <Column field="sale" header="Satış Fiyatı" sortable></Column>
                            <Column :exportable="false">
                                <template #body="">
                                    <div class="flex justify-content-center gap-2">
                                        <Button icon="pi pi-pencil" rounded size="small" />
                                        <Button icon="pi pi-trash" rounded size="small" severity="danger" />
                                    </div>
                                </template>
                            </Column>
                        </DataTable>
                    </AccordionTab>
                    <AccordionTab>
                        <template #header>
                            <span class="flex align-items-center gap-2 w-full">
                                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
                                <span class="font-bold white-space-nowrap">Random User 1</span>
                            </span>
                        </template>
                        <DataTable :value="priceTable" size="small" class="small" scrollable stripedRows showGridlines removableSort :paginator="true" :rowHover="true" :rows="10" dataKey="id">
                            <template #header>
                                <div class="flex justify-content-between align-items-center">
                                    <h5 class="mb-0">Random User 1 Fiyat Listesi</h5>
                                    <InputText v-model="filters['global'].value" placeholder="Ara" />
                                </div>
                            </template>
                            <Column field="type" header="İşlem" sortable class="font-bold"></Column>
                            <Column field="period" header="Periyot (Yıl)" sortable></Column>
                            <Column field="cost" header="Maliyet" sortable></Column>
                            <Column field="sale" header="Satış Fiyatı" sortable></Column>
                            <Column :exportable="false">
                                <template #body="">
                                    <div class="flex justify-content-center gap-2">
                                        <Button icon="pi pi-pencil" rounded size="small" />
                                        <Button icon="pi pi-trash" rounded size="small" severity="danger" />
                                    </div>
                                </template>
                            </Column>
                        </DataTable>
                    </AccordionTab>
                </Accordion>
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
            <InputNumber v-model="value232" :useGrouping="false" max="3" class="w-full" />
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
            <Button label="Kaydet" icon="pi pi-check" severity="success" @click="switchValue ?  requireConfirmation() : addPriceModal = false" />
        </template>
    </Dialog>
</template>

<style scoped lang="scss">

</style>

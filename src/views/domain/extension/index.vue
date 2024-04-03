<script setup>
import { ref, onBeforeMount, reactive } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { CustomerService } from '@/service/CustomerService';
import { DomainExtension } from '@/service/DomainExtension';

const Extension = new DomainExtension();
const list = ref(null);
const priceListModal = ref(false);

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    group: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    no: { value: null, matchMode: FilterMatchMode.STARTS_WITH },

    'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS }
});

onBeforeMount(() => {
    Extension.getDomainExtension().then((data) => {
        list.value = data;
    });
});
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Filter Menu</h5>
                <DataTable :value="list" size="small" class="small p-datatable-gridlines" :paginator="true" :rowHover="true" :rows="25" v-model:filters="filters" dataKey="id" filterDisplay="row" :globalFilterFields="['name', 'group']">
                    <template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            <div class="flex flex-column sm:flex-row">
                                <span class="p-input-icon-left mb-2">
                                    <i class="pi pi-search" />
                                    <InputText placeholder="Uzantı Ara" style="width: 100%" />
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
                    <Column field="no" header="NO">
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
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Uzantı Ara" />
                        </template>
                    </Column>
                    <Column field="api" header="API">
                        <template #body="{ data }">
                            {{ data.api }}
                        </template>
                    </Column>
                    <Column :exportable="false">
                        <template #body="">
                            <div class="flex justify-content-center gap-2">
                                <Button icon="pi pi-dollar" rounded size="small" severity="success" @click="priceListModal = true" />
                                <Button icon="pi pi-pencil" rounded size="small" />
                                <Button icon="pi pi-trash" rounded size="small" severity="danger" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
    <Dialog v-model:visible="priceListModal" maximizable modal header=".COM Fiyat Listesi" position="top" :style="{ width: '80vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <TabView>
            <TabPanel>
                <template #header>
                    <div class="flex align-items-center gap-2">
                        <span class="font-bold white-space-nowrap">Reseller</span>
                    </div>
                </template>
            </TabPanel>
            <TabPanel>
                <template #header>
                    <div class="flex align-items-center gap-2">
                        <span class="font-bold white-space-nowrap">Reseller</span>
                    </div>
                </template>
            </TabPanel>
            <TabPanel>
                <template #header>
                    <div class="flex align-items-center gap-2">
                        <span class="font-bold white-space-nowrap">Reseller</span>
                    </div>
                </template>
            </TabPanel>
            <TabPanel>
                <template #header>
                    <div class="flex align-items-center gap-2">
                        <span class="font-bold white-space-nowrap">Özel Tanımlanmış</span>
                        <Badge value="2"></Badge>
                    </div>
                </template>
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

<script setup>
import { ref, onBeforeMount, reactive } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { CustomerService } from '@/service/CustomerService';
import { DomainExtension } from '@/service/DomainExtension';

const customer1 = ref(null);
const list = ref(null);
const customer2 = ref(null);
const customer3 = ref(null);
const filters1 = ref(null);
const loading1 = ref(null);
const loading2 = ref(null);
const products = ref(null);
const expandedRows = ref([]);


const customerService = new CustomerService();
const Extension = new DomainExtension();

onBeforeMount(() => {
    Extension.getDomainExtension().then((data) => {
        list.value = data;
        loading1.value = false;
    });

    customerService.getCustomersLarge().then((data) => {
        customer1.value = data;
        loading1.value = false;
        customer1.value.forEach((customer) => (customer.date = new Date(customer.date)));
    });

    loading2.value = false;

    initFilters1();
});

const initFilters1 = () => {
    filters1.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        activity: { value: [0, 50], matchMode: FilterMatchMode.BETWEEN },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    };
};

const clearFilter1 = () => {
    initFilters1();
};
const expandAll = () => {
    expandedRows.value = products.value.filter((p) => p.id);
};
const collapseAll = () => {
    expandedRows.value = null;
};
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const formatDate = (value) => {
    return value.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};
const calculateCustomerTotal = (name) => {
    let total = 0;
    if (customer3.value) {
        for (let customer of customer3.value) {
            if (customer.representative.name === name) {
                total++;
            }
        }
    }

    return total;
};
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Filter Menu</h5>
                <DataTable
                    :value="list"
                    :paginator="true"
                    class="p-datatable-gridlines"
                    :rowHover="true"
                    :rows="25"
                    
        
                >
                    <template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            <Button type="button" icon="pi pi-filter-slash" label="Filtreleri Temizle" class="p-button-outlined p-button-danger mb-2" @click="clearFilter1()" />
                            <span class="p-input-icon-left mb-2">
                                <i class="pi pi-search" />
                                <InputText v-model="filters1['global'].value" placeholder="Uzantı Ara" style="width: 100%" />
                            </span>
                        </div>
                    </template>
                    <template #empty> uzantı bulunamadı. </template>
                    <template #loading> Tablo Yükleniyor Lütfen Bekleyin. </template>
                    <Column field="no" header="NO">
                        <template  #body="{ data }">
                            <span class="font-bold">{{ data.no }}</span>
                        </template>
                    </Column>
                    <Column field="name" header="Uzantı">
                        <template #body="{ data }">
                            {{ data.extension.name }}
                        </template>
                    </Column>
                    <Column field="group" header="Uzantı Grubu">
                        <template #body="{ data }">
                            {{ data.extension.group }}
                        </template>
                    </Column>
                    <Column field="api" header="API">
                        <template #body="{ data }">
                            {{ data.api }}
                        </template>
                    </Column>
                    <Column :exportable="false" style="max-width: 40px;" >
                        <template #body="" >
                            <div class="flex justify-content-center gap-2">
                                <Button icon="pi pi-pencil"  rounded size="small" />
                                <Button icon="pi pi-pencil" rounded severity="warning" size="small" />
                                <Button icon="pi pi-trash" rounded severity="danger" size="small" />
                            </div>
                        </template>
                    </Column>

               
                
                   
                </DataTable>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
    .p-button-sm{
        width: 2rem !important;
        height: 2rem !important;
        padding: 0 !important;
    }
</style>

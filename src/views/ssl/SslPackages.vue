<script setup>
import { ref } from 'vue';
import { FilterMatchMode } from 'primevue/api';


const switchValue = ref(false)
const addPriceModal = ref(false)

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    packages: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    brand: { value: null, matchMode: FilterMatchMode.IN },
    type: { value: null, matchMode: FilterMatchMode.IN },
    algorithm: { value: null, matchMode: FilterMatchMode.IN },
    encryption: { value: null, matchMode: FilterMatchMode.IN }
});

const sslPackages = ref([
    { id: 1, packages: 'Comodo Positive SSL', brand: 'Comodo', type: 'DV (Domain Validation) SSL', algorithm: 'SHA-2', encryption: '1024-bit' },
    { id: 2, packages: 'Lets Encrypt SSL/TLS', brand: 'Let\'s Encrypt', type: 'DV (Domain Validation) SSL', algorithm: 'RSA / ECC', encryption: '2048-bit / 256-bit' },
    { id: 3, packages: 'DigiCert Secure Site SSL', brand: 'DigiCert', type: 'OV (Organization Validation) SSL', algorithm: 'SHA-2', encryption: '2048-bit' },
    { id: 4, packages: 'GeoTrust QuickSSL Premium', brand: 'GeoTrust', type: 'DV (Domain Validation) SSL', algorithm: 'SHA-2', encryption: '2048-bit' },
    { id: 5, packages: 'Symantec Secure Site SSL', brand: 'Symantec', type: 'OV (Organization Validation) SSL', algorithm: 'SHA-2', encryption: '2048-bit' },
    { id: 6, packages: 'RapidSSL Wildcard', brand: 'RapidSSL', type: 'DV (Domain Validation) SSL', algorithm: 'SHA-2', encryption: '2048-bit' },
    { id: 7, packages: 'Thawte SSL Web Server', brand: 'Thawte', type: 'OV (Organization Validation) SSL', algorithm: 'SHA-2', encryption: '2048-bit' },
    { id: 8, packages: 'GoDaddy SSL Certificate', brand: 'GoDaddy', type: 'DV (Domain Validation) SSL', algorithm: 'SHA-2', encryption: '2048-bit' },
    { id: 9, packages: 'GlobalSign DomainSSL', brand: 'GlobalSign', type: 'DV (Domain Validation) SSL', algorithm: 'SHA-2', encryption: '2048-bit' },
    { id: 10, packages: 'Entrust Datacard SSL Plus', brand: 'Entrust Datacard', type: 'OV (Organization Validation) SSL', algorithm: 'SHA-2', encryption: '2048-bit' },
    { id: 11, packages: 'Network Solutions Basic SSL', brand: 'Network Solutions', type: 'DV (Domain Validation) SSL', algorithm: 'SHA-2', encryption: '2048-bit' },
    { id: 12, packages: 'Namecheap SSL', brand: 'Namecheap', type: 'DV (Domain Validation) SSL', algorithm: 'SHA-2', encryption: '2048-bit' },
    { id: 13, packages: 'SSL.com Essential SSL', brand: 'SSL.com', type: 'DV (Domain Validation) SSL', algorithm: 'SHA-2', encryption: '2048-bit' },
    { id: 14, packages: 'Trustwave Domain Validated SSL', brand: 'Trustwave', type: 'DV (Domain Validation) SSL', algorithm: 'SHA-2', encryption: '2048-bit' },
    { id: 15, packages: 'AlphaSSL', brand: 'AlphaSSL', type: 'DV (Domain Validation) SSL', algorithm: 'SHA-2', encryption: '2048-bit' },
    { id: 16, packages: 'Sectigo PositiveSSL Multi-Domain', brand: 'Sectigo', type: 'DV (Domain Validation) SSL', algorithm: 'SHA-2', encryption: '2048-bit' },
    { id: 17, packages: 'Amazon AWS Certificate Manager', brand: 'Amazon', type: 'DV (Domain Validation) SSL', algorithm: 'RSA / ECC', encryption: '2048-bit' },
    { id: 18, packages: 'Trustico SSL', brand: 'Trustico', type: 'DV (Domain Validation) SSL', algorithm: 'SHA-2', encryption: '2048-bit' },
    { id: 19, packages: 'FreeSSL.com', brand: 'FreeSSL.com', type: 'DV (Domain Validation) SSL', algorithm: 'SHA-2', encryption: '2048-bit' },
    { id: 20, packages: 'ZeroSSL', brand: 'ZeroSSL', type: 'DV (Domain Validation) SSL', algorithm: 'RSA / ECC', encryption: '2048-bit' }

]);

const value111 =ref();
const value112 =ref();
const value113 =ref();
const value114 =ref();
const value115 =ref();
const value116 =ref();

const brands = ref([]);
const types = ref([]);
const algorithms = ref([])
const encryptions = ref([])
sslPackages.value.forEach(item => {
    if (!encryptions.value.includes(item.encryption)) {
        encryptions.value.push(item.encryption);
    }
});
sslPackages.value.forEach(item => {
    if (!algorithms.value.includes(item.algorithm)) {
        algorithms.value.push(item.algorithm);
    }
});

sslPackages.value.forEach(item => {
    if (!types.value.includes(item.type)) {
        types.value.push(item.type);
    }
});
sslPackages.value.forEach(item => {
    if (!brands.value.includes(item.brand)) {
        brands.value.push(item.brand);
    }
});

const priceListModal = ref(false);
const priceTable = ref([
    {period: 1, cost: '$19.99', resellerSale: '$24.99', premiumSale: '$23.99', platiumSale: '$22.99', vipSale: '$20.99' },
]);

for (let i = 2; i <= 10; i++) {
    const row = {
        period: i,
        cost: '$' +19*i+'.99' ,
        resellerSale: '$' +24*i+'.99', 
        premiumSale: '$' +23*i+'.99', 
        platiumSale: '$' +22*i+'.99',   
        vipSale: '$' +20*i+'.49'
    };
    priceTable.value.push(row);
}


</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>SSL Listesi</h5>
                <DataTable :value="sslPackages" size="small" scrollable scrollHeight="63dvh" class="small p-datatable-gridlines" stripedRows removableSort :paginator="true" :rowHover="true" :rows="25" v-model:filters="filters" dataKey="id" filterDisplay="row" :globalFilterFields="['packages']">
                    <template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            <div class="flex flex-column sm:flex-row">
                                <span class="p-input-icon-left mb-2">
                                    <i class="pi pi-search" />
                                    <InputText placeholder="SSL Ara" style="width: 100%" v-model="filters['global'].value" />
                                </span>
                            </div>
                            <div class="flex gap-3">
                                <router-link to="/ssl/add-packages" target="_blank">
                                    <Button type="button" icon="pi pi-plus" label="Paket Ekle" severity="success" class="mb-2" />
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
                    <Column field="id" header="NO" sortable>
                        <template #body="{ data }">
                            <span class="font-bold">{{ data.id }}</span>
                        </template>
                    </Column>
                    <Column field="packages" header="Paket" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            {{ data.packages }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtre" />
                        </template>
                    </Column>
                    <Column field="brand" header="Marka" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            {{ data.brand }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter :options="brands" placeholder="Filtre" class="p-column-filter max-w-12rem" />
                        </template>
                    </Column>
                    <Column field="type" header="Türü" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            {{ data.type }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter="" :options="types" placeholder="Filtre" class="p-column-filter max-w-12rem" />
                        </template>
                    </Column>
                    <Column field="algorithm" header="Algoritma" sortable :showFilterMenu="false">
                        <template #body="{ data }">
                            {{ data.algorithm }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter :options="algorithms" placeholder="Filtre" class="p-column-filter max-w-12rem" />
                        </template>
                    </Column>
                    <Column field="encryption" header="Şifreleme" sortable :showFilterMenu="false">
                        <template #body="{ data }">
                            {{ data.encryption }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter :options="encryptions" placeholder="Filtre" class="p-column-filter max-w-12rem" />
                        </template>
                    </Column>


                    <Column header="İşlem" :exportable="false">
                        <template #body="">
                            <div class="flex justify-content-center">
                                <Button @click="priceListModal = true" icon="pi pi-dollar" v-tooltip.top="'Fiyatları'" rounded size="small" link />
                                <router-link to="/ssl/add-packages" target="_blank" >
                                    <Button @click="domainModal = true" icon="pi pi-pencil" v-tooltip.top="'Düzenle'" rounded size="small" link />
                                </router-link>
                                <Button icon="pi pi-trash" v-tooltip.top="'Sil'" rounded size="small" link />
                            </div>
                        </template>

                    </Column>
                </DataTable>
            </div>
        </div>
    </div>

    <Dialog v-model:visible="priceListModal" maximizable modal header="Comodo Positive SSL" :style="{ width: '80vw' }" :position="'top'" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        
        <DataTable :value="priceTable" scrollable scrollHeight="55dvh" size="small" class="small" stripedRows showGridlines removableSort :paginator="true" :rowHover="false" :rows="10" dataKey="id">
            <template #header>
                <div class="flex justify-content-between align-items-center">
                    <h5 class="mb-0"><span class="text-green-600 font-bold">Comodo Positive SSL</span> Fiyat Listesi</h5>
                    <Button type="button" icon="pi pi-plus" label="Yeni Fiyat Ekle" severity="success" class="mb-2" @click="addPriceModal = true" />
                </div>
            </template>
            <Column field="period" header="Periyot (Yıl)" sortable>
                <template #body="{ data }">
                    <span class="font-bold">{{ data.period }} yıl</span>
                </template>
            </Column>
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

    </Dialog>

    <Dialog v-model:visible="addPriceModal" maximizable modal header="Yeni Fiyat Ekle" :position="'top'" :style="{ width: '500px' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">

        <div class="field">
            <label for="name">Periyot (Yıl):</label>
            <InputNumber v-model="value111" :useGrouping="false" max="10" class="w-full" />
        </div>
        <div class="field">
            <label for="name">Maliyet:</label>
            <InputNumber v-model="value112" inputId="currency-us" mode="currency" currency="USD" locale="en-US" class="w-full" />
        </div>
        <div class="field">
            <label for="name">Reseller Satış:</label>
            <InputNumber v-model="value113" inputId="currency-us" mode="currency" currency="USD" locale="en-US" class="w-full" />
        </div>
        <div class="field">
            <label for="name">Premium Satış:</label>
            <InputNumber v-model="value114" inputId="currency-us" mode="currency" currency="USD" locale="en-US" class="w-full" />
        </div>
        <div class="field">
            <label for="name">Platium Satış:</label>
            <InputNumber v-model="value115" inputId="currency-us" mode="currency" currency="USD" locale="en-US" class="w-full" />
        </div>
        <div class="field">
            <label for="name">VIP Satış:</label>
            <InputNumber v-model="value116" inputId="currency-us" mode="currency" currency="USD" locale="en-US" class="w-full" />
        </div>
        <div class="field">
            <label class="block" for="name">Otomatik Fiyatlandırma:</label>
            <InputSwitch v-model="switchValue" />
        </div>
        <Message severity="info" v-if="switchValue"><b>Otomatik Fiyatlandırma:</b> Bir işlem türünün bütün periyot fiyatlarını otomatik güncellemek için kullanılır.</Message>
        <template #footer>
            <ConfirmDialog group="headless"></ConfirmDialog>
            <Button label="Vazgeç" text @click="addPriceModal = false" />
            <Button label="Kaydet" icon="pi pi-check" severity="success" @click=" addPriceModal = false" />
        </template>
    </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import { FilterMatchMode } from 'primevue/api';

const Transactions = ref([
    { type: 'Yeni Kayıt', id: 697105, category: 'Domain', desc: 'coldwellbankerpelican.com domaini satın alındı', reseller: 'Woy Teknoloji Ltd. Şti.', quantity: '1', amount: '-$8,69', currency_type: 'Dolar Hesabı ($)', date: '23.03.2023 - 17:15' },
    { type: 'Depozito', id: 7456, category: 'Depozito', desc: '500$ depozito yüklendi', reseller: 'GoViralHost', quantity: '1', amount: '+$500,00', currency_type: 'Dolar Hesabı ($)', date: '23.03.2022 - 15:04' },
    { type: 'Yenileme', id: 231045, category: 'SSL', desc: 'example.com SSL sertifikası yenilendi', reseller: 'SSL Sertifika A.Ş.', quantity: '1', amount: '-$12,00', currency_type: 'Dolar Hesabı ($)', date: '24.03.2023 - 12:00' },
    { type: 'Yeni Kayıt', id: 347820, category: 'Domain', desc: 'mynewwebsite.com domaini satın alındı', reseller: 'Netlify', quantity: '1', amount: '-$10,99', currency_type: 'Dolar Hesabı ($)', date: '25.03.2023 - 14:45' },
    { type: 'Depozito', id: 459001, category: 'Depozito', desc: '200$ depozito yüklendi', reseller: 'GoViralHost', quantity: '1', amount: '+$200,00', currency_type: 'Dolar Hesabı ($)', date: '26.03.2023 - 10:30' },
    { type: 'Yeni Kayıt', id: 564982, category: 'SSL', desc: 'securewebsite.com için SSL sertifikası alındı', reseller: 'SSL Güvenlik A.Ş.', quantity: '1', amount: '-$15,00', currency_type: 'Dolar Hesabı ($)', date: '27.03.2023 - 09:20' },
    { type: 'Yenileme', id: 671235, category: 'Domain', desc: 'oldwebsite.com domaini yenilendi', reseller: 'Domain Registrars Ltd.', quantity: '1', amount: '-$9,99', currency_type: 'Dolar Hesabı ($)', date: '28.03.2023 - 16:50' },
    { type: 'Depozito', id: 784516, category: 'Depozito', desc: '300$ depozito yüklendi', reseller: 'Hosting Solutions', quantity: '1', amount: '+$300,00', currency_type: 'Dolar Hesabı ($)', date: '29.03.2023 - 11:00' },
    { type: 'Yeni Kayıt', id: 895427, category: 'SSL', desc: 'securepayment.com için SSL sertifikası alındı', reseller: 'SSL Güvenlik A.Ş.', quantity: '1', amount: '-$14,00', currency_type: 'Dolar Hesabı ($)', date: '30.03.2023 - 13:30' },
    { type: 'Yenileme', id: 902316, category: 'Domain', desc: 'mybusiness.com domaini yenilendi', reseller: 'Domain Experts Inc.', quantity: '1', amount: '-$11,00', currency_type: 'Dolar Hesabı ($)', date: '31.03.2023 - 15:20' },
    { type: 'Depozito', id: 103457, category: 'Depozito', desc: '100$ depozito yüklendi', reseller: 'WebHost LLC', quantity: '1', amount: '+$100,00', currency_type: 'Dolar Hesabı ($)', date: '01.04.2023 - 10:45' },
    { type: 'Yeni Kayıt', id: 114678, category: 'Domain', desc: 'newstartup.com domaini satın alındı', reseller: 'Startup Domains Co.', quantity: '1', amount: '-$8,50', currency_type: 'Dolar Hesabı ($)', date: '02.04.2023 - 11:15' },
    { type: 'Yenileme', id: 125789, category: 'SSL', desc: 'safecommerce.com SSL sertifikası yenilendi', reseller: 'SSL Sertifika A.Ş.', quantity: '1', amount: '-$13,50', currency_type: 'Dolar Hesabı ($)', date: '03.04.2023 - 14:00' },
    { type: 'Depozito', id: 136890, category: 'Depozito', desc: '150$ depozito yüklendi', reseller: 'Hosting Solutions', quantity: '1', amount: '+$150,00', currency_type: 'Dolar Hesabı ($)', date: '04.04.2023 - 09:10' },
    { type: 'Yeni Kayıt', id: 147901, category: 'SSL', desc: 'mysafesite.com için SSL sertifikası alındı', reseller: 'SSL Güvenlik A.Ş.', quantity: '1', amount: '-$16,00', currency_type: 'Dolar Hesabı ($)', date: '05.04.2023 - 12:35' },
    { type: 'Yenileme', id: 158902, category: 'Domain', desc: 'coolproject.com domaini yenilendi', reseller: 'Cool Domains Ltd.', quantity: '1', amount: '-$7,50', currency_type: 'Dolar Hesabı ($)', date: '06.04.2023 - 16:40' },
    { type: 'Depozito', id: 169903, category: 'Depozito', desc: '250$ depozito yüklendi', reseller: 'GoViralHost', quantity: '1', amount: '+$250,00', currency_type: 'Dolar Hesabı ($)', date: '07.04.2023 - 11:55' },
    { type: 'Yeni Kayıt', id: 180904, category: 'Domain', desc: 'techworld.com domaini satın alındı', reseller: 'Tech Domains Co.', quantity: '1', amount: '-$12,00', currency_type: 'Dolar Hesabı ($)', date: '08.04.2023 - 13:20' },
    { type: 'Yenileme', id: 191905, category: 'SSL', desc: 'secureconnect.com SSL sertifikası yenilendi', reseller: 'SSL Sertifika A.Ş.', quantity: '1', amount: '-$10,00', currency_type: 'Dolar Hesabı ($)', date: '09.04.2023 - 15:10' },
    { type: 'Depozito', id: 202906, category: 'Depozito', desc: '400$ depozito yüklendi', reseller: 'WebHost LLC', quantity: '1', amount: '+$400,00', currency_type: 'Dolar Hesabı ($)', date: '10.04.2023 - 10:20' }
]);


const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    packages: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    brand: { value: null, matchMode: FilterMatchMode.IN },
    type: { value: null, matchMode: FilterMatchMode.IN },
    algorithm: { value: null, matchMode: FilterMatchMode.IN },
    encryption: { value: null, matchMode: FilterMatchMode.IN }
});


const types = ref([]);

Transactions.value.forEach(item => {
    if (!types.value.includes(item.type)) {
        types.value.push(item.type);
    }
});

const getSeverity = (amount) => {
    return {
        'text-green-500': amount.startsWith('+'),
        'text-red-500': amount.startsWith('-')
    };
};


const getCategory = (category) => {
    switch (category) {
        case 'Depozito':
            return 'success';

        case 'Domain':
            return 'info';

        case 'SSL':
            return 'warning';
    }
};


</script>


<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Hesap Hareketleri</h5>
                <DataTable :value="Transactions"  size="small" scrollable scrollHeight="63dvh" class="small p-datatable-gridlines" stripedRows removableSort :paginator="true" :rowHover="true" :rows="25" v-model:filters="filters" dataKey="id" filterDisplay="row" :globalFilterFields="['type','reseller','desc','id']">
                    <template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            <div class="flex flex-column sm:flex-row">
                                <span class="p-input-icon-left mb-2">
                                    <i class="pi pi-search" />
                                    <InputText placeholder="SSL Ara" style="width: 100%" v-model="filters['global'].value" />
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
                    <Column field="type" header="İşlem Türü" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            {{ data.type }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter="" :options="types" placeholder="Filtre" class="p-column-filter max-w-12rem" />
                        </template>
                    </Column>
                    <Column field="id" header="NO" sortable>
                        <template #body="{ data }">
                            <span class="font-bold">{{ data.id }}</span>
                        </template>
                    </Column>
                    <Column field="category" header="Kategori" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            <Badge class="w-full" :value="data.category" :severity="getCategory(data.category)" />
                        </template>
                    </Column>
                    <Column field="desc" header="Açıklama" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            {{ data.desc }}
                        </template>
                    </Column>
                    <Column field="reseller" header="Bayi" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            {{ data.reseller }}
                        </template>
                    </Column>
                    <Column field="quantity" header="Miktar" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            <div class="text-center">{{ data.quantity }}</div>
                        </template>
                    </Column>
                    <Column field="amount" header="Tutar" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            <span class="font-semibold" :class="getSeverity(data.amount)">{{ data.amount }}</span>
                        </template>
                    </Column>
                    <Column field="currency_type" header="Hesap Türü" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            {{ data.currency_type }}
                        </template>
                    </Column>
                    <Column field="date" header="Tarih" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            {{ data.date }}
                        </template>
                    </Column>



                    <Column header="İşlem" :exportable="false" alignFrozen="right" :frozen="true">
                        <template #body="">
                            <div class="flex justify-content-center">
                                <Button icon="pi pi-times" v-tooltip.top="'İade Et'" rounded link />
                            </div>
                        </template>

                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>
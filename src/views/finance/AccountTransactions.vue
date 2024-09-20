<script setup>
import { ref } from 'vue';
import { FilterMatchMode } from 'primevue/api';

const Transactions = ref([
    { type: 'Yeni Kayıt', id: 697105, category: 'Domain', desc: 'coldwellbankerpelican.com domaini satın alındı', reseller: 'Woy Teknoloji Ltd. Şti.', quantity: '1', amount: '-$8,69', currency_type: 'Dolar Hesabı ($)', date: '23.03.2023 - 17:15' },
    { type: 'Depozito', id: 7456, category: 'Depozito', desc: 'Payment by : CreditCard With3dSecure (Param Pos) PAYDNPPOS1452167N7', reseller: 'GoViralHost', quantity: '1', amount: '+$500,00', currency_type: 'Dolar Hesabı ($)', date: '23.03.2022 - 15:04' },
    { type: 'Yenileme', id: 231045, category: 'SSL', desc: 'example.com SSL sertifikası yenilendi', reseller: 'SSL Sertifika A.Ş.', quantity: '1', amount: '-$12,00', currency_type: 'Dolar Hesabı ($)', date: '24.03.2023 - 12:00' },
    { type: 'Yeni Kayıt', id: 347820, category: 'Domain', desc: 'mynewwebsite.com domaini satın alındı', reseller: 'Netlify', quantity: '1', amount: '-$10,99', currency_type: 'Dolar Hesabı ($)', date: '25.03.2023 - 14:45' },
    { type: 'Depozito', id: 459001, category: 'Depozito', desc: '200$ depozito yüklendi', reseller: 'GoViralHost', quantity: '1', amount: '+$200,00', currency_type: 'Dolar Hesabı ($)', date: '26.03.2023 - 10:30' },
    { type: 'Yeni Kayıt', id: 564982, category: 'SSL', desc: 'securewebsite.com için SSL sertifikası alındı', reseller: 'SSL Güvenlik A.Ş.', quantity: '1', amount: '-$15,00', currency_type: 'Dolar Hesabı ($)', date: '27.03.2023 - 09:20' },
    { type: 'Yenileme', id: 671235, category: 'Domain', desc: 'oldwebsite.com domaini yenilendi', reseller: 'Domain Registrars Ltd.', quantity: '1', amount: '-$9,99', currency_type: 'Dolar Hesabı ($)', date: '28.03.2023 - 16:50' },
    { type: 'Depozito', id: 784516, category: 'Depozito', desc: '300$ depozito yüklendi', reseller: 'Hosting Solutions', quantity: '1', amount: '+$300,00', currency_type: 'Dolar Hesabı ($)', date: '29.03.2023 - 11:00' },
    { type: 'Yeni Kayıt', id: 895427, category: 'SSL', desc: 'securepayment.com için SSL sertifikası alındı', reseller: 'SSL Güvenlik A.Ş.', quantity: '1', amount: '-$14,00', currency_type: 'Dolar Hesabı ($)', date: '30.03.2023 - 13:30' },
    { type: 'Yenileme', id: 902316, category: 'Domain', desc: 'mybusiness.com domaini yenilendi', reseller: 'Domain Experts Inc.', quantity: '1', amount: '-$11,00', currency_type: 'Dolar Hesabı ($)', date: '31.03.2023 - 15:20' },
    { type: 'Depozito', id: 103457, category: 'Depozito', desc: 'Payment by : CreditCard With3dSecure (Param Pos) PAYDNPPOS1452167N7', reseller: 'WebHost LLC', quantity: '1', amount: '+$100,00', currency_type: 'Dolar Hesabı ($)', date: '01.04.2023 - 10:45' },
    { type: 'Yeni Kayıt', id: 114678, category: 'Domain', desc: 'newstartup.com domaini satın alındı', reseller: 'Startup Domains Co.', quantity: '1', amount: '-$8,50', currency_type: 'Dolar Hesabı ($)', date: '02.04.2023 - 11:15' },
    { type: 'Yenileme', id: 125789, category: 'SSL', desc: 'safecommerce.com SSL sertifikası yenilendi', reseller: 'SSL Sertifika A.Ş.', quantity: '1', amount: '-$13,50', currency_type: 'Dolar Hesabı ($)', date: '03.04.2023 - 14:00' },
    { type: 'Depozito', id: 136890, category: 'Depozito', desc: 'Payment by : CreditCard With3dSecure (Param Pos) PAYDNPPOS1452167N7', reseller: 'Hosting Solutions', quantity: '1', amount: '+$150,00', currency_type: 'Dolar Hesabı ($)', date: '04.04.2023 - 09:10' },
    { type: 'Yeni Kayıt', id: 147901, category: 'SSL', desc: 'mysafesite.com için SSL sertifikası alındı', reseller: 'SSL Güvenlik A.Ş.', quantity: '1', amount: '-$16,00', currency_type: 'Dolar Hesabı ($)', date: '05.04.2023 - 12:35' },
    { type: 'Yenileme', id: 158902, category: 'Domain', desc: 'coolproject.com domaini yenilendi', reseller: 'Cool Domains Ltd.', quantity: '1', amount: '-$7,50', currency_type: 'Dolar Hesabı ($)', date: '06.04.2023 - 16:40' },
    { type: 'Depozito', id: 169903, category: 'Depozito', desc: 'Payment by : CreditCard With3dSecure (Param Pos) PAYDNPPOS1452167N7', reseller: 'GoViralHost', quantity: '1', amount: '+$250,00', currency_type: 'Dolar Hesabı ($)', date: '07.04.2023 - 11:55' },
    { type: 'Yeni Kayıt', id: 180904, category: 'Domain', desc: 'techworld.com domaini satın alındı', reseller: 'Tech Domains Co.', quantity: '1', amount: '-$12,00', currency_type: 'Dolar Hesabı ($)', date: '08.04.2023 - 13:20' },
    { type: 'Yenileme', id: 191905, category: 'SSL', desc: 'secureconnect.com SSL sertifikası yenilendi', reseller: 'SSL Sertifika A.Ş.', quantity: '1', amount: '-$10,00', currency_type: 'Dolar Hesabı ($)', date: '09.04.2023 - 15:10' },
    { type: 'Depozito', id: 202906, category: 'Depozito', desc: '400$ depozito yüklendi', reseller: 'WebHost LLC', quantity: '1', amount: '+$400,00', currency_type: 'Dolar Hesabı ($)', date: '10.04.2023 - 10:20' }
]);



const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    type: { value: null, matchMode: FilterMatchMode.IN },
    id: { value: null, matchMode: FilterMatchMode.CONTAINS },
    category: { value: null, matchMode: FilterMatchMode.IN },
    desc: { value: null, matchMode: FilterMatchMode.CONTAINS },
    reseller: { value: null, matchMode: FilterMatchMode.IN },
    quantity: { value: null, matchMode: FilterMatchMode.CONTAINS },
    amount: { value: null, matchMode: FilterMatchMode.CONTAINS },
    currency_type: { value: null, matchMode: FilterMatchMode.IN },
});

const types = ref([...new Set(Transactions.value.map(item => item.type))]);
const categories = ref([...new Set(Transactions.value.map(item => item.category))]);
const resellers = ref([...new Set(Transactions.value.map(item => item.reseller))]);
const currency = ref([...new Set(Transactions.value.map(item => item.currency_type))]);
const dates = ref([]);

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



const resellerModal = ref(false);
const resellerpw = ref('*CokGüvenliBirSifre_00!');

const op = ref(null);
const toggle = (event) => {
    op.value.toggle(event);
};

</script>


<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Parasal Hareketleri</h5>
                <DataTable :value="Transactions" size="small" scrollable scrollHeight="63dvh" class="small p-datatable-gridlines" stripedRows removableSort :paginator="true" :rowHover="true" :rows="25" v-model:filters="filters" dataKey="id" filterDisplay="row" :globalFilterFields="['type', 'reseller', 'desc', 'id']">
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
                    <Column field="type" header="İşlem Türü" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            {{ data.type }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter="" :options="types" placeholder="Filtre" class="p-column-filter max-w-12rem" />
                        </template>
                    </Column>
                    <Column field="id" header="NO" sortable :showFilterMenu="false">
                        <template #body="{ data }">
                            <span class="font-bold">{{ data.id }}</span>
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtre" />
                        </template>
                    </Column>
                    <Column field="category" header="Kategori" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            <Badge class="w-full" :value="data.category" :severity="getCategory(data.category)" />
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter :options="categories" placeholder="Filtre" class="p-column-filter max-w-12rem" />
                        </template>
                    </Column>
                    <Column field="desc" header="Açıklama" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            {{ data.desc }}
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
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter :options="resellers" placeholder="Filtre" class="p-column-filter max-w-12rem" />
                        </template>
                    </Column>
                    <Column field="quantity" header="Miktar" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            <div class="text-center">{{ data.quantity }}</div>
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtre" />
                        </template>
                    </Column>
                    <Column field="amount" header="Tutar" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            <span class="font-semibold" :class="getSeverity(data.amount)">{{ data.amount }}</span>
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtre" />
                        </template>
                    </Column>
                    <Column field="currency_type" header="Hesap Türü" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            {{ data.currency_type }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter :options="currency" placeholder="Filtre" class="p-column-filter max-w-12rem" />
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



                    <Column header="İşlem" :exportable="false" alignFrozen="right" :frozen="true">
                        <template #body="">
                            <div class="flex justify-content-center">
                                <Button icon="pi pi-building" v-tooltip.top="'Bayi Bilgileri'" rounded size="small" link @click="resellerModal = true" />
                                <Button icon="pi pi-times" v-tooltip.top="'İade Et'" rounded link size="small" />
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
                    <Button severity="success" icon="pi pi-angle-right" iconPos="right" label="Bayi Paneline Git"></Button>
                </div>
            </li>
        </ul>
    </Dialog>
</template>
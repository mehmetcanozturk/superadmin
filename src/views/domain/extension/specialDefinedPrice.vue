<script setup>
import { ref, onBeforeMount, reactive } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';

const confirm = useConfirm();
const toast = useToast();
const switchValue = ref(false);
const selectReseller = ref(false);
const selectDomain = ref(false);
const resellerModal = ref(false);
const resellerpw = ref('*CokGüvenliBirSifre_00!');

const specialDefined = ref([
  { reseller:'Atak Domain', reseller_id:'545', domain_extension:'.com', type:'kayıt', year:'1', cost:'$5.99', sale_price:'$8.99',  starting_date: '23.03.2024' , end_date:'01.01.2025' },
  { reseller:'Domain Name Inc.', reseller_id:'678', domain_extension:'.net', type:'yenileme', year:'2', cost:'$9.99', sale_price:'$12.99', starting_date: '01.04.2024', end_date:'01.04.2026' },
  { reseller:'Web Solutions', reseller_id:'789', domain_extension:'.org', type:'kayıt', year:'1', cost:'$7.50', sale_price:'$10.50', starting_date: '15.05.2024', end_date:'15.05.2025' },
  { reseller:'GoGlobal Domains', reseller_id:'123', domain_extension:'.io', type:'yenileme', year:'3', cost:'$35.00', sale_price:'$40.00', starting_date: '01.06.2024', end_date:'01.06.2027' },
  { reseller:'Digital World', reseller_id:'321', domain_extension:'.dev', type:'kayıt', year:'1', cost:'$12.99', sale_price:'$14.99', starting_date: '20.07.2024', end_date:'20.07.2025' },
  { reseller:'QuickDomains', reseller_id:'654', domain_extension:'.info', type:'yenileme', year:'2', cost:'$8.50', sale_price:'$11.50', starting_date: '10.08.2024', end_date:'10.08.2026' },
  { reseller:'TopHost', reseller_id:'432', domain_extension:'.biz', type:'kayıt', year:'1', cost:'$9.99', sale_price:'$13.99', starting_date: '05.09.2024', end_date:'05.09.2025' },
  { reseller:'MegaDomain', reseller_id:'987', domain_extension:'.xyz', type:'yenileme', year:'3', cost:'$14.99', sale_price:'$17.99', starting_date: '12.10.2024', end_date:'12.10.2027' },
  { reseller:'EasyDomains', reseller_id:'654', domain_extension:'.tech', type:'kayıt', year:'1', cost:'$29.99', sale_price:'$34.99', starting_date: '21.11.2024', end_date:'21.11.2025' },
  { reseller:'Hosting King', reseller_id:'876', domain_extension:'.shop', type:'yenileme', year:'2', cost:'$19.99', sale_price:'$24.99', starting_date: '14.12.2024', end_date:'14.12.2026' },
  { reseller:'NameFast', reseller_id:'555', domain_extension:'.us', type:'kayıt', year:'1', cost:'$3.99', sale_price:'$6.99', starting_date: '02.01.2025', end_date:'02.01.2026' },
  { reseller:'Prime Domains', reseller_id:'333', domain_extension:'.tv', type:'yenileme', year:'1', cost:'$25.99', sale_price:'$30.99', starting_date: '07.02.2025', end_date:'07.02.2026' },
  { reseller:'AllWeb', reseller_id:'222', domain_extension:'.me', type:'kayıt', year:'1', cost:'$15.00', sale_price:'$18.00', starting_date: '15.03.2025', end_date:'15.03.2026' },
  { reseller:'HostWorld', reseller_id:'999', domain_extension:'.online', type:'yenileme', year:'2', cost:'$12.99', sale_price:'$15.99', starting_date: '22.04.2025', end_date:'22.04.2027' },
  { reseller:'DomainStars', reseller_id:'444', domain_extension:'.co', type:'kayıt', year:'1', cost:'$20.00', sale_price:'$25.00', starting_date: '30.05.2025', end_date:'30.05.2026' }
]);

const extensionList = ref([
{ name: '.com', cost: '8.00' }, { name: '.net', cost: '7.50' }, { name: '.org', cost: '9.00' }, { name: '.edu', cost: '12.00' }, { name: '.gov', cost: '15.00' }, { name: '.mil', cost: '14.50' }, { name: '.int', cost: '13.00' }, { name: '.biz', cost: '6.50' }, { name: '.info', cost: '5.00' }, { name: '.name', cost: '4.50' }, { name: '.pro', cost: '10.00' }, { name: '.museum', cost: '20.00' }, { name: '.coop', cost: '11.00' }, { name: '.aero', cost: '18.00' }, { name: '.jobs', cost: '16.00' }, { name: '.mobi', cost: '9.50' }, { name: '.travel', cost: '17.00' }, { name: '.asia', cost: '8.50' }, { name: '.cat', cost: '6.00' }, { name: '.tel', cost: '7.00' }, { name: '.post', cost: '22.00' }, { name: '.xxx', cost: '25.00' }, { name: '.xyz', cost: '3.00' }, { name: '.top', cost: '4.00' }, { name: '.site', cost: '5.50' }, { name: '.online', cost: '6.75' }, { name: '.tech', cost: '10.50' }, { name: '.store', cost: '12.50' }, { name: '.art', cost: '7.25' }, { name: '.club', cost: '5.25' }, { name: '.vip', cost: '9.25' }, { name: '.design', cost: '11.50' }
]);

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    domain_extension: { value: null, matchMode: FilterMatchMode.IN },
    reseller: { value: null, matchMode: FilterMatchMode.IN },
    year: { value: null, matchMode: FilterMatchMode.CONTAINS },
    cost: { value: null, matchMode: FilterMatchMode.CONTAINS },
    starting_date: { value: null, matchMode: FilterMatchMode.CONTAINS },
    end_date: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const addPriceModal = ref(false)

const reseller = ref([...new Set(specialDefined.value.map(item => item.reseller))]);
const domain_extension = ref([...new Set(specialDefined.value.map(item => item.domain_extension))]);
const year = ref([...new Set(specialDefined.value.map(item => item.year))]);
const cost = ref([...new Set(specialDefined.value.map(item => item.cost))]);

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Özel Tanımlanmış Fiyatlar</h5>
                <DataTable :value="specialDefined" size="small" scrollable scrollHeight="63dvh" class="small p-datatable-gridlines" stripedRows removableSort :paginator="true" :rowHover="true" :rows="25" v-model:filters="filters" dataKey="id" filterDisplay="row" :globalFilterFields="['type', 'reseller', 'desc', 'id']">
                    <template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            <div class="flex flex-column sm:flex-row">
                                <span class="p-input-icon-left mb-2">
                                    <i class="pi pi-search" />
                                    <InputText placeholder="Ara" style="width: 100%" v-model="filters['global'].value" />
                                </span>
                            </div>
                            <div class="flex gap-3">
                                <Button type="button" icon="pi pi-file-excel" label="Excel Çıktısı" class="p-button p-button-primary mb-2" />
                                <Button type="button" icon="pi pi-plus" label="Yeni İşlem Ekle" class="p-button p-button-success mb-2" @click="addPriceModal = true" />
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
                    <Column field="reseller" header="Bayi" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            <Tag :value="data.reseller_id" severity="success" v-tooltip.top="'Bayi ID'" /> {{ data.reseller }} 
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="reseller" placeholder="Filtre" class="p-column-filter w-full" />
                        </template>
                    </Column>

                    <Column field="domain_extension" header="Uzantı" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                           {{ data.domain_extension }} 
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter :options="domain_extension" placeholder="Filtre" class="p-column-filter w-full" />
                        </template>
                    </Column>

                    <Column field="year" header="Yıl" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                           {{ data.year }} Yıl
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter :options="year" placeholder="Filtre" class="p-column-filter w-full" />
                        </template>
                    </Column>

                    <Column field="cost" header="Maliyet" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                           {{ data.cost }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Fiyat" />
                        </template>
                    </Column>

                    <Column field="starting_date" header="Başlangıç Tarihi" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                           {{ data.starting_date }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <Calendar v-model="filterModel.value" @input="filterCallback()" dateFormat="dd.mm.yy" class="w-full" />
                        </template>
                    </Column>

                    <Column field="end_date" header="Bitiş Tarihi" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                           {{ data.end_date }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <Calendar v-model="filterModel.value" @input="filterCallback()"  dateFormat="dd.mm.yy" class="w-full" />
                        </template>
                    </Column>
       

                    <Column header="İşlem" :exportable="false" alignFrozen="right" :frozen="true">
                        <template #body="">
                            <div cl ass="flex justify-content-center">
                                <Button icon="pi pi-building" v-tooltip.top="'Bayi Bilgileri'" rounded size="small" link @click="resellerModal = true" />
                                <Button icon="pi pi-pencil" v-tooltip.top="'Düzenle'" rounded size="small" link @click="addPriceModal = true" />
                                <Button icon="pi pi-trash" v-tooltip.top="'Sil'" rounded link size="small" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>

    <Dialog v-model:visible="addPriceModal" maximizable modal header="Yeni Fiyat Ekle" :position="'top'" :style="{ width: '500px' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <div class="field">
            <label for="name">Bayi:</label>
            <Dropdown v-model="selectReseller" :options="reseller" filter  placeholder="Bayi seç" class="w-full" />
        </div>
        <div class="field">
            <label for="name">Uzantı:</label>
            <Dropdown v-model="selectDomain" :options="domain_extension" filter placeholder="İşlem türü seç" class="w-full" />
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
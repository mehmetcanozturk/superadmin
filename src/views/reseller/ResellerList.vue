<script setup>
import { ref } from 'vue';
import { FilterMatchMode } from 'primevue/api';


const switchValue = ref(false)
const addPriceModal = ref(false)

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    reseller: { value: null, matchMode: FilterMatchMode.CONTAINS },
    authorized: { value: null, matchMode: FilterMatchMode.CONTAINS },
    country: { value: null, matchMode: FilterMatchMode.CONTAINS },
    phone: { value: null, matchMode: FilterMatchMode.CONTAINS },
    mail: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    reseller_type: { value: null, matchMode: FilterMatchMode.IN },
    domain_count: { value: null, matchMode: FilterMatchMode.GREATER_THAN_OR_EQUAL_TO}
});

const resellerList = ref([
  { id: 18255, reseller: "Atak Domain Bilgi Teknolojileri A.Ş.", authorized: "Recep Şerit", phone: "+905526819681", mail: "recep@atakdomain.com", reseller_type: "VIP", domain_count: "500", country: "Türkiye", created_date: "2023-01-01" },
  { id: 18256, reseller: "Tekno Alan", authorized: "Ayşe Yılmaz", phone: "+905532765434", mail: "ayse@teknoalan.com", reseller_type: "Reseller", domain_count: "250", country: "Türkiye", created_date: "2023-01-05" },
  { id: 18257, reseller: "NetPro", authorized: "Emre Gündüz", phone: "+905327864510", mail: "emre@netpro.com", reseller_type: "Premium", domain_count: "120", country: "Türkiye", created_date: "2023-01-10" },
  { id: 18258, reseller: "WebSquare", authorized: "Mehmet Doğan", phone: "+905447892345", mail: "mehmet@websquare.com", reseller_type: "Platinum", domain_count: "80", country: "Türkiye", created_date: "2023-01-15" },
  { id: 18259, reseller: "HostSpace", authorized: "Zeynep Kaya", phone: "+90539876543", mail: "zeynep@hostspace.com", reseller_type: "Reseller", domain_count: "200", country: "Türkiye", created_date: "2023-01-20" },
  { id: 18260, reseller: "DataPlus", authorized: "Fatih Arslan", phone: "+905427819654", mail: "fatih@dataplus.com", reseller_type: "VIP", domain_count: "150", country: "Türkiye", created_date: "2023-01-25" },
  { id: 18261, reseller: "CloudLabs", authorized: "Deniz Karadeniz", phone: "+905543256794", mail: "deniz@cloudlabs.com", reseller_type: "VIP", domain_count: "450", country: "Türkiye", created_date: "2023-01-30" },
  { id: 18256, reseller: "SmartServe", authorized: "Gizem Şahin", phone: "+905348612178", mail: "gizem@smartserve.com", reseller_type: "Reseller", domain_count: "90", country: "Türkiye", created_date: "2023-02-04" },
  { id: 18257, reseller: "WebMasters", authorized: "Burak Güneş", phone: "+905342187654", mail: "burak@webmasters.com", reseller_type: "Reseller", domain_count: "110", country: "Türkiye", created_date: "2023-02-09" },
  { id: 18256, reseller: "NetCrew", authorized: "Selma Aydın", phone: "+905552345678", mail: "selma@netcrew.com", reseller_type: "Reseller", domain_count: "180", country: "Türkiye", created_date: "2023-02-14" },
  { id: 18256, reseller: "WebSphere", authorized: "Canan Korkmaz", phone: "+90539876543", mail: "canan@websphere.com", reseller_type: "Premium", domain_count: "160", country: "Türkiye", created_date: "2023-02-19" },
  { id: 18956, reseller: "SkyHosting", authorized: "Oğuzhan Şimşek", phone: "+90539876543", mail: "oguzhan@skyhosting.com", reseller_type: "VIP", domain_count: "400", country: "Türkiye", created_date: "2023-02-24" },
  { id: 16254, reseller: "Globaltech", authorized: "Ebru Kaya", phone: "+905398765432", mail: "ebru@globaltech.com", reseller_type: "Reseller", domain_count: "220", country: "Türkiye", created_date: "2023-03-01" },
  { id: 15263, reseller: "NetProPlus", authorized: "Murat Çelik", phone: "+905347897654", mail: "murat@netproplus.com", reseller_type: "Reseller", domain_count: "130", country: "Türkiye", created_date: "2023-03-06" },
  { id: 18263, reseller: "SuperHost", authorized: "Pelin Demir", phone: "+905554321076", mail: "pelin@superhost.com", reseller_type: "Reseller", domain_count: "70", country: "Türkiye", created_date: "2023-03-11" },
  { id: 18260, reseller: "DataNet", authorized: "Mert Yıldız", phone: "+905547897654", mail: "mert@datanet.com", reseller_type: "Reseller", domain_count: "240", country: "Türkiye", created_date: "2023-03-16" },
  { id: 18256, reseller: "ServerSphere", authorized: "Yasin Şahin", phone: "+905542167894", mail: "yasin@serversphere.com", reseller_type: "Reseller", domain_count: "190", country: "Türkiye", created_date: "2023-03-21" },
  { id: 18257, reseller: "TechHub", authorized: "Selin Erbaş", phone: "+90539876543", mail: "selin@techhub.com", reseller_type: "Reseller", domain_count: "140", country: "Türkiye", created_date: "2023-03-26" },
  { id: 18263, reseller: "CloudMasters", authorized: "İrem Aslan", phone: "+905454567890", mail: "irem@cloudmasters.com", reseller_type: "VIP", domain_count: "300", country: "Türkiye", created_date: "2023-03-31" },
  { id: 9263, reseller: "DigitalLink", authorized: "Efe Aktaş", phone: "+90539219876", mail: "efe@digitallink.com", reseller_type: "Reseller", domain_count: "200", country: "Türkiye", created_date: "2023-04-05" },
  { id: 18563, reseller: "TechSolutions", authorized: "John Smith", phone: "+14155551234", mail: "john@techsolutions.com", reseller_type: "VIP", domain_count: "450", country: "USA", created_date: "2023-04-10" },
  { id: 16253, reseller: "WebWizards", authorized: "Emily Johnson", phone: "+441655321098", mail: "emily@webwizards.com", reseller_type: "Reseller", domain_count: "180", country: "Canada", created_date: "2023-04-15" },
  { id: 18652, reseller: "NetGurus", authorized: "David Williams", phone: "+447855321456", mail: "david@netgurus.co.uk", reseller_type: "VIP", domain_count: "700", country: "UK", created_date: "2023-04-20" },
  { id: 13563, reseller: "DigitalEdge", authorized: "Sophie Martin", phone: "+442089765432", mail: "sophie@digitaledge.eu", reseller_type: "Reseller", domain_count: "250", country: "France", created_date: "2023-04-25" }
]);


const value111 = ref();
const value112 = ref();
const value113 = ref();
const value114 = ref();
const value115 = ref();
const value116 = ref();

const brands = ref([]);
const resellertypes = ref([]);
const countrys= ref([])
const encryptions = ref([])

const resellerModal = ref(false);
const resellerpw = ref('*CokGüvenliBirSifre_00!');



resellerList.value.forEach(item => {
    if (!brands.value.includes(item.brand)) {
        brands.value.push(item.brand);
    }
});
resellerList.value.forEach(item => {
    if (!encryptions.value.includes(item.encryption)) {
        encryptions.value.push(item.encryption);
    }
});
resellerList.value.forEach(item => {
    if (!countrys.value.includes(item.country)) {
        countrys.value.push(item.country);
    }
});



resellerList.value.forEach(item => {
    if (!resellertypes.value.includes(item.reseller_type)) {
        resellertypes.value.push(item.reseller_type);
    }
});

const getSeverity = (status) => {
    switch (status) {
        case 'Reseller':
            return 'bg-bluegray-100 text-black-alpha-90';

        case 'Premium':
            return 'bg-teal-200 text-teal-800';

        case 'Platinum':
            return 'bg-orange-200 text-orange-800';

        case 'VIP':
            return 'bg-purple-200 text-purple-800';
    }
};

const statuses = ref(['Reseller', 'Premium', 'Platium', 'VIP']);



const priceListModal = ref(false);
const priceTable = ref([
    { period: 1, cost: '$19.99', resellerSale: '$24.99', premiumSale: '$23.99', platiumSale: '$22.99', vipSale: '$20.99' },
]);

for (let i = 2; i <= 10; i++) {
    const row = {
        period: i,
        cost: '$' + 19 * i + '.99',
        resellerSale: '$' + 24 * i + '.99',
        premiumSale: '$' + 23 * i + '.99',
        platiumSale: '$' + 22 * i + '.99',
        vipSale: '$' + 20 * i + '.49'
    };
    priceTable.value.push(row);
}


</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Bayi Listesi</h5>
                <DataTable :value="resellerList" size="small" scrollable scrollHeight="63dvh" class="small p-datatable-gridlines" stripedRows removableSort :paginator="true" :rowHover="true" :rows="25" v-model:filters="filters" dataKey="id" filterDisplay="row" :globalFilterFields="['reseller']">
                    <template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            <div class="flex flex-column sm:flex-row">
                                <span class="p-input-icon-left mb-2">
                                    <i class="pi pi-search" />
                                    <InputText placeholder="Ara" style="width: 100%" v-model="filters['global'].value" />
                                </span>
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
                    <Column field="reseller" header="Bayi" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            <i class="pi pi-building"></i> <b v-tooltip.top="data.reseller" class="max-w-12rem white-space-nowrap overflow-hidden inline-block vertical-align-middle text-overflow-ellipsis">{{ data.reseller }}</b>
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtre" />
                        </template>
                    </Column>
                    <Column field="authorized" header="Yetkili" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                           <i class="pi pi-user mr-1"></i> {{ data.authorized }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtre" />
                        </template>
                    </Column>
                    <Column field="phone" header="telefon/mail" :showFilterMenu="false" sortable>
                        <template #body="{ data }">
                            <div class="font-semibold">{{ data.phone }}</div>
                            <div>{{ data.mail }}</div>
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="numara Filtre" />
                        </template>
                    </Column>
                    <Column field="reseller_type" header="Bayi Grubu" sortable :showFilterMenu="false">
                        <template #body="{ data }">
                            <div class="p-2 border-round-3xl text-center inline-block text-sm w-full font-semibold " :class="getSeverity(data.reseller_type)">{{ data.reseller_type }}</div>
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Filtre" class="p-column-filter">
                                <template #option="slotProps">
                                    <div class="p-2 border-round-3xl text-center inline-block text-sm w-full font-semibold px-4" :class="getSeverity(slotProps.option)">{{ slotProps.option }}</div>
                                </template>
                            </MultiSelect>
                        </template>
                    </Column>
                    <Column field="domain_count" header="Domain Sayısı" sortable :showFilterMenu="false">
                        <template #body="{ data }">
                            <div class="text-center">{{ data.domain_count }}</div>
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter max-w-12rem" placeholder="x sayıdan fazla" />
                        </template>
                    </Column>
                    <Column field="country" header="Ülke" sortable :showFilterMenu="false">
                        <template #body="{ data }">
                            {{ data.country }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter :options="countrys" placeholder="Filtre" class="p-column-filter max-w-12rem" />
                        </template>
                    </Column>
                    <Column field="created_date" header="Kayıt" sortable :showFilterMenu="false">
                        <template #body="{ data }">
                            <span class="white-space-nowrap">{{ data.created_date }}</span>
                        </template>
                    </Column>


                    <Column header="İşlem" :exportable="false">
                        <template #body="">
                            <div class="flex justify-content-center">
                                <Button @click="resellerModal = true" icon="pi pi-search" v-tooltip.top="'Bayi Bilgileri'" rounded size="small" link />
                                <router-link to="/reseller/edit">
                                    <Button  icon="pi pi-pencil" v-tooltip.top="'Düzenle'" rounded size="small" link />
                                </router-link>
                                <Button icon="pi pi-trash" v-tooltip.top="'Sil'" rounded size="small" link />
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
                    <Button severity="success" icon="pi pi-angle-right" iconPos="right" label="Müşteri Paneline Git"></Button>
                </div>
            </li>
        </ul>
    </Dialog>
</template>

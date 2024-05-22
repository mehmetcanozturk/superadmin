<script setup>
import { ref, onMounted } from 'vue';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';
import { CountryService } from '@/service/CountryService';


const value1 = ref()
const group = ref([
    'Reseller', 'Premium', 'Platium', 'VIP'
])

const countryService = new CountryService();
const countries = ref()
const selectedCountry = ref()
onMounted(() => {
    countryService.getCountries().then((data) => (countries.value = data));
});

const value2 = ref()
const value4 = ref()
const value5 = ref()
const value6 = ref()
const value7 = ref()
const value8 = ref()
const value9 = ref()
const value10 = ref()
const value11 = ref()
const value12 = ref()
const value13 = ref()
const value14 = ref()
const value15 = ref()
const value16 = ref()
const value17 = ref()
const value18 = ref()
const value19 = ref()
</script>

<template>
    <div class="card">
        <h5>Bayi Düzenle
            <Chip class="ml-2 vertical-align-middle" label="Atak Domain" />
        </h5>
        <TabView>
            <TabPanel>
                <template #header>
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-home text-xl"></i>
                        <span class="font-bold white-space-nowrap">Temel Bilgiler</span>
                    </div>
                </template>
                <div class="grid col-12 lg:col-9 ">

                    <div class="field col-12 md:col-6  px-3 p-1">
                        <label class="block" for="">Şirket Adı:</label>
                        <span class="p-input-icon-left w-full">
                            <i class="pi pi-building" />
                            <InputText type="text" placeholder="Şirket" class="w-full" />
                        </span>
                    </div>

                    <div class="field col-12 md:col-6  px-3 p-1">
                        <label class="block" for="">Yetkili:</label>
                        <span class="p-input-icon-left w-full">
                            <i class="pi pi-user" />
                            <InputText type="text" placeholder="Yetkili" class="w-full" />
                        </span>
                    </div>

                    <div class="field col-12 md:col-6  px-3 p-1">
                        <label class="block" for="">Bayi Personeli:</label>
                        <span class="p-input-icon-left w-full">
                            <i class="pi pi-user" />
                            <InputText type="text" placeholder="Bayi Personeli" class="w-full" />
                        </span>
                    </div>

                    <div class="field col-12 md:col-6  px-3 p-1">
                        <label class="block" for="">kullanıcı adı:</label>
                        <span class="p-input-icon-left w-full">
                            <i class="pi pi-user" />
                            <InputText type="text" value="recepserit" disabled placeholder="kullanıcı adı" class="opacity-100 font-semibold surface-ground select-all w-full" />
                        </span>
                    </div>

                    <div class="field col-12 md:col-6  px-3 p-1">
                        <label class="block" for="">Web Sitesi:</label>
                        <span class="p-input-icon-left w-full">
                            <i class="pi pi-globe " />
                            <InputText type="text" placeholder="Web Sitesi" class="w-full" />
                        </span>
                    </div>

                    <div class="field col-12 md:col-6  px-3 p-1">
                        <label class="block" for="">Grup:</label>
                        <span class="p-input-icon-left w-full">
                            <i class="pi pi-star" />
                            <Dropdown id="dropdown" placeholder="Grubunu seç" :options="group" class="w-full" v-model="value1"></Dropdown>
                        </span>
                    </div>

                    <div class="field col-12 md:col-6">
                        <label class="block" for="">Bayi durumu:</label>
                        <ToggleButton v-model="value2" onLabel="Bayi Durumu: Aktif" onIcon="pi pi-check" offIcon="pi pi-times" offLabel="Bayi Durumu: Pasif" />
                    </div>

                </div>
            </TabPanel>
            <TabPanel>
                <template #header>
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-phone text-xl"></i>
                        <span class="font-bold white-space-nowrap">İletişim Bilgileri</span>
                    </div>
                </template>
                <div class="grid col-12 lg:col-9 ">

                    <div class="field col-12 md:col-6  px-3 p-1">
                        <label class="block" for="">Bayi Telefon:</label>
                        <span class="p-input-icon-left w-full">
                            <i class="pi pi-phone" />
                            <InputText type="text" placeholder="+905418045527" class="w-full" />
                        </span>
                    </div>

                    <div class="field col-12 md:col-6  px-3 p-1">
                        <label class="block" for="">Bayi GSM:</label>
                        <span class="p-input-icon-left w-full">
                            <i class="pi pi-phone" />
                            <InputText type="text" placeholder="+905418045527" class="w-full" />
                        </span>
                    </div>


                    <div class="field col-12 md:col-6  px-3 p-1">
                        <label class="block" for="">Bayi Maili:</label>
                        <span class="p-input-icon-left w-full">
                            <i class="pi pi-envelope" />
                            <InputText type="text" placeholder="contact@atakdomain.com" class="w-full" />
                        </span>
                    </div>

                    <div class="field col-12 md:col-6  px-3 p-1">
                        <label class="block" for="">Bayi Maili 2:</label>
                        <span class="p-input-icon-left w-full">
                            <i class="pi pi-envelope" />
                            <InputText type="text" placeholder="contact@domainameapi.com" class="w-full" />
                        </span>
                    </div>

                    <div class="field col-12 md:col-6  px-3 p-1">
                        <label class="block" for="">Ülke:</label>
                        <Dropdown v-model="selectedCountry" :options="countries" id="country" filter optionLabel="name" placeholder="Ülke Seç" class="w-full">
                            <template #value="slotProps">
                                <div v-if="slotProps.value" class="flex align-items-center">
                                    <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                                    <div>{{ slotProps.value.name }}</div>
                                </div>
                                <span v-else>
                                    {{ slotProps.placeholder }}
                                </span>
                            </template>
                            <template #option="slotProps">
                                <div class="flex align-items-center">
                                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                                    <div>{{ slotProps.option.name }}</div>
                                </div>
                            </template>
                            <template #empty>
                                <div class="div">içerik boş.</div>
                            </template>
                            <template #emptyfilter>
                                <div>Sonuç bulunamadı.</div>
                            </template>
                        </Dropdown>
                    </div>

                    <div class="field col-12 md:col-6  px-3 p-1">
                        <label class="block" for="">Şehir:</label>
                        <span class="p-input-icon-left w-full">
                            <i class="pi pi-map-marker" />
                            <InputText type="text" placeholder="İstanbul" class="w-full" />
                        </span>
                    </div>

                    <div class="field col-12 md:col-6  px-3 p-1">
                        <label class="block" for="">Adres:</label>
                        <Textarea autoResize rows="2" class="w-full" placeholder="Kocaeli Üniversitesi Teknopark A.S. Vatan Cd. No:83 41275 - Başiskele, Kocaeli - TURKEY" />
                    </div>

                </div>
            </TabPanel>
            <TabPanel>
                <template #header>
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-money-bill text-xl"></i>
                        <span class="font-bold white-space-nowrap">Mali Bilgileri</span>
                    </div>
                </template>
                <div class="p-3">
                    <h5>Fatura Bilgileri</h5>
                    <div class="grid col-12 xl:col-6 ">
                        <div class="flex col-12 border-bottom-1 border-bluegray-100 py-3 ">
                            <div class="w-12rem max-w-full">Fatura Ünvanı:</div>
                            <div class="font-semibold">Atak Domain Ltd Sti</div>
                        </div>
                        <div class="flex col-12 border-bottom-1 border-bluegray-100 py-3 ">
                            <div class="w-12rem max-w-full">Vergi Dairesi:</div>
                            <div class="font-semibold">ALEMDAR</div>
                        </div>
                        <div class="flex col-12 border-bottom-1 border-bluegray-100 py-3 ">
                            <div class="w-12rem max-w-full">Vergi Numarası:</div>
                            <div class="font-semibold">0940145900</div>
                        </div>
                        <div class="flex col-12 border-bottom-1 border-bluegray-100 py-3 ">
                            <div class="w-12rem max-w-full">Fatura Adresi:</div>
                            <div class="font-semibold">Yenişehir Mah. Arda Sk. No:36/1 Izmit - Kocaeli</div>
                        </div>
                        <div class="flex col-12 border-bottom-1 border-bluegray-100 py-3 ">
                            <div class="w-12rem max-w-full">Transfer Tarihi:</div>
                            <div class="font-semibold">22.11.2016 10:51:29</div>
                        </div>
                        <div class="flex col-12 border-bottom-1 border-bluegray-100 py-3 ">
                            <div class="w-12rem max-w-full">Kimlik Numarası:</div>
                            <div class="font-semibold">22.11.2016 10:51:29</div>
                        </div>
                        <div class="flex col-12 border-bottom-1 border-bluegray-100 py-3 text-green-600">
                            <div class="w-12rem max-w-full">Depozito (TL):</div>
                            <div class="font-semibold">1.254 TL</div>
                        </div>
                        <div class="flex col-12 border-bottom-1 text-green-600 border-bluegray-100 py-3 ">
                            <div class="w-12rem max-w-full">Depozito ($):</div>
                            <div class="font-semibold ">$750</div>
                        </div>
                    </div>
                </div>
            </TabPanel>
        </TabView>
    </div>
</template>
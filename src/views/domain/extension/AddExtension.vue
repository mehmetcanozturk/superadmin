<script setup>
import { ref, onMounted } from 'vue';
import { CountryService } from '@/service/CountryService';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';

const apikey = ref([
    { name: 'Null' },
    { name: 'Afilias Srs Complex' },
    { name: 'CentralNic No Bill' },
    { name: 'Donut Srs' },
    { name: 'IN registry' },
    { name: 'Hexonet Epp Service' },
    { name: 'Trabis' },
    { name: 'Uniregistry' },
    { name: 'Verisign Name Store' },
    { name: 'Verisign Srs' }
]);

const extensionGroup = ref([{ name: 'Jenerik Domainler' }, { name: 'Asya Domainleri' }, { name: 'Avrupa Domainleri' }, { name: 'Amerika Domainleri' }]);

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
const value4 = ref(null);
const value5 = ref(null);
const value6 = ref(null);
const value7 = ref(null);
const value8 = ref(null);
const value9 = ref(null);
const value10 = ref(null);
const value11 = ref(null);
const value12 = ref(null);
const value13 = ref(null);
const toggleValue = ref(false);
const domainRegister = ref();
const domainRenew = ref();
const selectedCountry = ref();
const countries = ref([]);
const filteredCountries = ref(null);
const countryService = new CountryService();
onMounted(() => {
    countryService.getCountries().then((data) => (countries.value = data));
});
const searchCountry = (event) => {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    const filtered = [];
    const query = event.query;
    for (let i = 0; i < countries.value.length; i++) {
        const country = countries.value[i];
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }
    filteredCountries.value = filtered;
};

const confirmPopup = useConfirm();
const toast = useToast();
const confirm = (event) => {
    confirmPopup.require({
        target: event.target,
        message: 'Yapılan değişiklikler kaydedilecek, emin misin?',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Evet',
        rejectLabel: 'Hayır',
        accept: () => {
            toast.add({ severity: 'success', summary: 'Başarılı', detail: 'Uzantı Bilgileri başarıyla güncellendi', life: 3000 });
        },
        reject: () => {}
    });
};

const selectedCategories = ref([]);
const categories = ref([
    { name: 'Satışına izin veriliyor mu?', key: 'satis' },
    { name: 'Ön satış desteği var mı?', key: 'onsatis' },
    { name: 'API desteği var mı?', key: 'api' },
    { name: 'Jenerik mi?', key: 'jeneric' },
    { name: 'Kişisel kayıtlara izin veriliyor mu?', key: 'Personal-register' },
    { name: 'Döküman gerekli mi?', key: 'document' },
    { name: 'IDN destekliyor mu?', key: 'idn' },
    { name: 'Transfer edilebilir mi?', key: 'transfer' },
    { name: 'Transfer kodu gerektiriyor mu?', key: 'transfer-code' },
    { name: 'Cezalı ödeme (geç yenileme bedeli) destekliyor mu?', key: 'late-renewal' },
    { name: 'Backorder destekliyor mu?', key: 'backorder' },
    { name: 'Trustee hizmeti destekliyor mu?', key: 'trustee' }
]);

const additionalInfoTable = ref([
    { id: 1, name: 'Ek Bilgiler (1)', type: 'Metin Giriş' },
    { id: 1, name: 'Ek Bilgiler (2)', type: 'Açılabilir Liste Girişi' }
]);
const additionalInfoCagegories = ref([{ name: 'Metin Giriş', value: 0 }, { name: 'Açılabilir Liste', value: 0 }, { name: 'Opsiyonel Seçim' }, { name: 'Check Seçim' }, { name: 'Check Seçim (Sözleşmeli)' }]);
</script>

<template>
    <div class="card">
        <h5>Uzantı Ekle</h5>
        <TabView>
            <TabPanel header="Uzantı Bilgisi">
                <div class="grid gap-5">
                    <div class="grid p-fluid mt-3 col-12 p-0 md:col-8">
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputText type="text" id="inputtext" v-model="value1" />
                                <label for="inputtext">Uzantı</label>
                            </span>
                            <small>Uzantı adı başında nokta olacak şekilde belirtin. Örn: .NET</small>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
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
                                </Dropdown>
                                <label for="country">Ülke</label>
                            </span>
                            <small>Uzantının ülkesi yoksa lütfen <b>Universal</b>'i seçiniz</small>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <Dropdown id="dropdown" :options="apikey" filter v-model="value2" optionLabel="name"></Dropdown>
                                <label for="dropdown">API Key</label>
                            </span>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <Dropdown id="dropdown" :options="extensionGroup" filter v-model="value3" optionLabel="name"></Dropdown>
                                <label for="dropdown">Uzantı Grubu</label>
                            </span>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputNumber :useGrouping="false" type="text" id="inputtext" v-model="value4" />
                                <label for="inputtext">Min. Karakter Sayısı</label>
                            </span>
                            <small>minimum kaç karakter gerekli?</small>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputNumber :useGrouping="false" type="text" id="inputtext" v-model="value5" />
                                <label for="inputtext">Max. Karakter Sayısı</label>
                            </span>
                            <small>maksimum kaç karakter gerekli?</small>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputNumber :useGrouping="false" type="text" id="inputtext" v-model="value6" />
                                <label for="inputtext">Min. kayıt periyodu</label>
                            </span>
                            <small>minimum kaç yıl kaydedilebilir?</small>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputNumber :useGrouping="false" type="text" id="inputtext" v-model="value7" />
                                <label for="inputtext">Max. kayıt periyodu</label>
                            </span>
                            <small>maksimum kaç yıl kaydedilebilir?</small>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputNumber :useGrouping="false" type="text" id="inputtext" v-model="value8" />
                                <label for="inputtext">Min. NS sayısı</label>
                            </span>
                            <small>minimum kaç DNS gerekli?</small>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputNumber :useGrouping="false" type="text" id="inputtext" v-model="value9" />
                                <label for="inputtext">Max. NS sayısı</label>
                            </span>
                            <small>maksimum kaç DNS gerekli?</small>
                        </div>
                    </div>
                    <div class="mt-5 col-12 p-0 md:col-4">
                        <div class="flex flex-column gap-3">
                            <div v-for="category of categories" :key="category.key" class="flex align-items-center">
                                <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
                                <label class="ml-2" :for="category.key">{{ category.name }}</label>
                            </div>
                        </div>
                        <div v-if="selectedCategories.includes('trustee')">
                            <input type="text" v-model="trusteeInput" placeholder="Trustee hizmeti destekliyor mu?" />
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel header="RGP Periot Bilgileri">
                <div class="grid gap-5">
                    <div class="grid p-fluid mt-3 col-12 p-0 md:col-7">
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputText type="text" id="inputtext" v-model="value10" />
                                <label for="inputtext">Domain Önkayıt Süresi</label>
                            </span>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputText type="text" id="inputtext" v-model="value11" />
                                <label for="inputtext">Domain Ödeme Süresi</label>
                            </span>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputText type="text" id="inputtext" v-model="value12" />
                                <label for="inputtext">Domain Muhasebe Dönemi</label>
                            </span>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputText type="text" id="inputtext" v-model="value13" />
                                <label for="inputtext">Silinirken Kurtarılabilme Süresi</label>
                            </span>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputText type="text" id="inputtext" v-model="value14" />
                                <label for="inputtext">Domain Sonlandırma Süresi</label>
                            </span>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputText type="text" id="inputtext" v-model="value15" />
                                <label for="inputtext">Silme Bekletme Süresi</label>
                            </span>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputText type="text" id="inputtext" v-model="value16" />
                                <label for="inputtext">Domain Hataya Düşme Süresi</label>
                            </span>
                        </div>
                        <div class="field col-12 md:col-6">
                            <ToggleButton v-model="toggleValue" onLabel="Kesin Yenileme var" severity="success" offLabel="Kesin Yenileme yok" />
                            <small>Bu buttona tıklayarak kesin yenilemeyi aktif edip kapatabilirsiniz</small>
                        </div>
                    </div>
                    <div class=" col-12 p-0 md:col-5">
                        <div class="field col-12">
                            <label class="block mb-2"> Domain Kayıt Süreleri</label>
                            <div class="flex flex-wrap gap-3">
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRegister" inputId="reg1" name="domainRegister" value="1" />
                                    <label for="" class="ml-2"> 1 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRegister" inputId="reg1" name="domainRegister" value="2" />
                                    <label for="" class="ml-2"> 2 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRegister" inputId="reg1" name="domainRegister" value="3" />
                                    <label for="" class="ml-2"> 3 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRegister" inputId="reg1" name="domainRegister" value="4" />
                                    <label for="" class="ml-2"> 4 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRegister" inputId="reg1" name="domainRegister" value="5" />
                                    <label for="" class="ml-2"> 5 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRegister" inputId="reg1" name="domainRegister" value="6" />
                                    <label for="" class="ml-2"> 6 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRegister" inputId="reg1" name="domainRegister" value="7" />
                                    <label for="" class="ml-2"> 7 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRegister" inputId="reg1" name="domainRegister" value="8" />
                                    <label for="" class="ml-2"> 8 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRegister" inputId="reg1" name="domainRegister" value="9" />
                                    <label for="" class="ml-2"> 9 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRegister" inputId="reg1" name="domainRegister" value="10" />
                                    <label for="" class="ml-2"> 10 </label>
                                </div>
                            </div>
                        </div>
                        <div class="field col-12">
                            <label class="block mb-2"> Domain Yenileme Süreleri</label>
                            <div class="flex flex-wrap gap-3">
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRenew" inputId="reg1" name="domainRenew" value="1" />
                                    <label for="" class="ml-2"> 1 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRenew" inputId="reg1" name="domainRenew" value="2" />
                                    <label for="" class="ml-2"> 2 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRenew" inputId="reg1" name="domainRenew" value="3" />
                                    <label for="" class="ml-2"> 3 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRenew" inputId="reg1" name="domainRenew" value="4" />
                                    <label for="" class="ml-2"> 4 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRenew" inputId="reg1" name="domainRenew" value="5" />
                                    <label for="" class="ml-2"> 5 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRenew" inputId="reg1" name="domainRenew" value="6" />
                                    <label for="" class="ml-2"> 6 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRenew" inputId="reg1" name="domainRenew" value="7" />
                                    <label for="" class="ml-2"> 7 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRenew" inputId="reg1" name="domainRenew" value="8" />
                                    <label for="" class="ml-2"> 8 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRenew" inputId="reg1" name="domainRenew" value="9" />
                                    <label for="" class="ml-2"> 9 </label>
                                </div>
                                <div class="flex align-items-center">
                                    <Checkbox v-model="domainRenew" inputId="reg1" name="domainRenew" value="10" />
                                    <label for="" class="ml-2"> 10 </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>

            <TabPanel header="Ek Bilgiler">
                <div class="grid gap-3">
                    <div class="col-12 mt-5">
                        <DataTable :value="additionalInfoTable" tableStyle="min-width: 50rem">
                            <Column field="name" header="Name"></Column>
                            <Column field="type" header="Giriş Tipi"></Column>
                            <Column :exportable="false" header="işlem">
                                <template #body="">
                                    <div class="flex justify-content-start gap-2">
                                        <Button icon="pi pi-pencil" rounded size="small" />
                                        <Button icon="pi pi-trash" rounded size="small" severity="danger" />
                                    </div>
                                </template>
                            </Column>
                        </DataTable>
                    </div>
                    <div class="col-12 grid">
                        <div class="col-4">
                            <span class="p-float-label w-full">
                                <Dropdown id="dropdown" :options="additionalInfoCagegories" class="w-full" v-model="value11" optionLabel="name"></Dropdown>
                                <label for="dropdown">Kontrol Giriş Tipi:</label>
                            </span>
                        </div>
                    </div>
                    <div class="col-12">
                        <div></div>
                    </div>
                </div>
            </TabPanel>
        </TabView>
        <div class="grid border-top-1 border-gray-200 p-2 justify-content-end mt-3">
            <ConfirmPopup></ConfirmPopup>
            <Button ref="popup" @click="confirm($event)" icon="pi pi-check" severity="success" label="Kaydet" class="mr-2"></Button>
        </div>
    </div>
</template>

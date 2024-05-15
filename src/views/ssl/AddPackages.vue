<script setup>
import { ref, onMounted } from 'vue';
import { CountryService } from '@/service/CountryService';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';

const brand = ref([
    { name: 'Comodo' },
    { name: 'Symantec' },
    { name: 'GeoTrust' },
    { name: 'Thawte' },
    { name: 'DigiCert' },
    { name: 'RapidSSL' },
]);

const provider = ref([
    { name: 'DNA Rest' },
    { name: 'DNA Soap' },
]);

const encryption = ref([
    { name: '256-Bit' },
    { name: '512-Bit' },
    { name: '1024-Bit' },
    { name: '2048-Bit' },
]);

const algorithm = ref([
    { name: 'SHA-1' },
    { name: 'SHA-2' },
    { name: 'RSA / ECC' },
]);

const sslType = ref([
    { name: 'DV (Domain Validation) SSL' },
    { name: 'OV (Organizational Validation) SSL ' },
    { name: 'EV (Extended Validation) SSL' },
]);
const licenseType = ref([
    { name: 'Unlimited' },
    { name: 'Multiple' },
]);
const periodType = ref([
    { name: 'Yıllık' },
    { name: 'Aylık' },
]);


const useType = ref([
    { name: 'Normal SSL (Tek Domain)' },
    { name: 'Code Signing SSL' },
    { name: 'Exchange Server (UCC) SSL' },
    { name: 'Wildcard SSL' },
    { name: 'Multi-Domain Wildcard SSL' },
])


const value1 = ref('Yeni SSL Paketi');
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
const value14 = ref(null);
const value15 = ref(null);
const value90 = ref(null);
const value91 = ref(null);
const value92 = ref(null);
const toggleValue = ref(false);

const selectedCategories = ref([]);
const categories = ref([
    { name: 'API desteği var mı?', key: '1' },
    { name: 'Reissue desteği var mı?', key: '2' },
    { name: 'Döküman gerektiriyor mu?', key: '3' },
    { name: 'Güvenlik mühürü veriyor mu?', key: '4' },
    { name: 'Subdomain desteği var mı?', key: '5' },
    { name: 'Yeşil bar var mı?', key: '6' },
    { name: 'Mobil destekliyor mu?', key: '7' },
    { name: 'Arama motorlarında gözükebilir mi?', key: '8' },

]);

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
            toast.add({ severity: 'success', summary: 'Başarılı', detail: value1._rawValue + ' başarıyla oluşturuldu', life: 3000 });
        },
        reject: () => { }
    });
};


</script>

<template>
    <div class="card">
        <h5>SSL Paketi Ekle</h5>
        <TabView>
            <TabPanel header="Genel Bilgiler">
                <div class="grid gap-5">
                    <div class="grid p-fluid mt-3 col-12 p-0 lg:col-8">
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputText type="text" id="inputtext" v-model="value1" />
                                <label for="inputtext">Paket İsmi</label>
                            </span>
                            <small>Paket adı tam olarak nedir?</small>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputText type="text" id="inputtext" v-model="value11" />
                                <label for="inputtext">Stok Kodu</label>
                            </span>
                            <small>Muhasebe entegrasyonu için stok kodu</small>
                        </div>

                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <Dropdown id="dropdown" :options="brand" filter v-model="value2" optionLabel="name"></Dropdown>
                                <label for="dropdown">Marka</label>
                            </span>
                            <small>Bir marka seçiniz</small>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <Dropdown id="dropdown" :options="provider" v-model="value3" optionLabel="name"></Dropdown>
                                <label for="dropdown">Sağlayıcı</label>
                            </span>
                            <small>Bir sağlayıcı seçiniz</small>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputNumber v-model="value4" mode="currency" currency="USD" locale="en-US" />
                                <label for="inputtext">Garanti</label>
                            </span>
                            <small>Ne kadar garanti veriliyor? Kaç bin dolar?</small>
                        </div>

                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputNumber :useGrouping="false" type="text" id="inputtext" v-model="value5" />
                                <label for="inputtext">Min. kayıt periyodu</label>
                            </span>
                            <small>minimum kaç yıl kaydedilebilir?</small>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputNumber :useGrouping="false" type="text" id="inputtext" v-model="value6" />
                                <label for="inputtext">Max. kayıt periyodu</label>
                            </span>
                            <small>maksimum kaç yıl kaydedilebilir?</small>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <Dropdown id="dropdown" :options="sslType" v-model="value7" optionLabel="name"></Dropdown>
                                <label for="dropdown">Sertifika türü</label>
                            </span>
                            <small>Bir tür seçiniz</small>
                        </div>
                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <Dropdown id="dropdown" :options="useType" filter v-model="value8" optionLabel="name"></Dropdown>
                                <label for="dropdown">Sertifikanın kullanım türü</label>
                            </span>
                            <small>Sertifikanın kullanım türü seçiniz</small>
                        </div>

                        <div class="field col-12 md:col-6">
                            <span class="p-float-label">
                                <InputText type="text" id="inputtext" v-model="value9" />
                                <label for="inputtext">Kapsam</label>
                            </span>
                            <small>*.domain.com + domain.com gibi yazılır</small>
                        </div>

                        <div class="field col-12 md:col-6">
                            <ToggleButton v-model="toggleValue" onLabel="Paketin Satış Durumu: Aktif" severity="success" offLabel="Paketin Satış Durumu: Pasif" />
                            <small>Bu buttona tıklayarak paket satış durumunu aktif edip Pasif edebilirsiniz</small>
                        </div>
                    </div>
                    <div class="mt-5 col-12 p-0 md:col-4">
                        <div class="flex flex-column gap-3">
                            <div v-for="category of categories" :key="category.key" class="flex align-items-center">
                                <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
                                <label class="ml-2" :for="category.key">{{ category.name }}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel header="Teknik Bilgiler">
                <div class="grid p-fluid mt-3 col-12 p-0 lg:col-8">
                    <div class="field col-12 md:col-6">
                        <span class="p-float-label">
                            <Dropdown id="dropdown" :options="encryption" v-model="value10" optionLabel="name"></Dropdown>
                            <label for="dropdown">Şifreleme türü</label>
                        </span>
                        <small>Sertifikanın şifreleme türünü seçiniz</small>
                    </div>
                    <div class="field col-12 md:col-6">
                        <span class="p-float-label">
                            <Dropdown id="dropdown" :options="algorithm" v-model="value11" optionLabel="name"></Dropdown>
                            <label for="dropdown">Algortima türü</label>
                        </span>
                        <small>Sertifikanın Algortima türünü seçiniz</small>
                    </div>
                    <div class="field col-12 md:col-6">
                        <span class="p-float-label">
                            <Dropdown id="dropdown" :options="encryption" v-model="value12" optionLabel="name"></Dropdown>
                            <label for="dropdown">CSR şifreleme türü</label>
                        </span>
                        <small>Sertifikanın CSR şifreleme türünü seçiniz</small>
                    </div>
                    <div class="field col-12 md:col-6">
                        <span class="p-float-label">
                            <Dropdown id="dropdown" :options="licenseType" v-model="value13" optionLabel="name"></Dropdown>
                            <label for="dropdown">Sunucu lisans türü </label>
                        </span>
                        <small>Sertifikanın Sunucu lisans türünü seçiniz</small>
                    </div>
                    <div class="field col-12 md:col-6">
                        <span class="p-float-label">
                            <InputText type="text" id="inputtext" v-model="value14" />
                            <label for="inputtext">Ürün kodu (Opsiyonel)</label>
                        </span>
                        <small>API Desteği varsa ürün kodu kodunu giriniz </small>
                    </div>
                    <div class="field col-12 md:col-6">
                        <span class="p-float-label">
                            <Dropdown id="dropdown" :options="periodType" v-model="value15" optionLabel="name"></Dropdown>
                            <label for="inputtext">Alım süresi periyodu</label>
                        </span>
                        <small>Alım Periodu aylık mı yıllık mı? </small>
                    </div>
                </div>
            </TabPanel>
            <TabPanel header="Uyumluluk">
                <div class="grid p-fluid mt-3 col-12 p-0 lg:col-8">
                    <div class="field col-12 md:col-6">
                        <span class="p-float-label">
                            <InputNumber :useGrouping="false" type="text" id="inputtext" prefix="%" :min="0" :max="99" v-model="value90" />
                            <label for="inputtext">Genel Uyumluluk</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-6">
                        <span class="p-float-label">
                            <InputNumber :useGrouping="false" type="text" id="inputtext" prefix="%" :min="0" :max="99" v-model="value91" />
                            <label for="inputtext">Masaüstü uyumluluğu</label>
                        </span>
                    </div>
                    <div class="field col-12 md:col-6">
                        <span class="p-float-label">
                            <InputNumber :useGrouping="false" type="text" id="inputtext" prefix="%" :min="0" :max="99" v-model="value92" />
                            <label for="inputtext">mobil uyumluluğu</label>
                        </span>
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

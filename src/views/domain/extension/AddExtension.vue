<script setup>
import { ref, onMounted } from 'vue';
import { CountryService } from '@/service/CountryService';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';


const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

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
    { name: 'Verisign Srs' },
]);

const extensionGroup = ref([
    { name: 'Jenerik Domainler' },
    { name: 'Asya Domainleri' },
    { name: 'Avrupa Domainleri' },
    { name: 'Amerika Domainleri' },
]);


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
        accept: () => {
            toast.add({ severity: 'success', summary: 'Başarılı', detail: 'Uzantı Bilgileri başarıyla güncellendi', life: 3000 });
        },
        reject: () => {
           
        }
    });
};
</script>

<template>
    <div class="card">
        <h5>Uzantı Ekle</h5>
        <TabView>
            <TabPanel header="Uzantı Bilgisi">
                <div class="grid">
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
                                <InputNumber :useGrouping="false" type="text" id="inputtext" v-model="value8" />
                                <label for="inputtext">Max. NS sayısı</label>
                            </span>
                            <small>maksimum kaç DNS gerekli?</small>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel header="Eklenecek">
                <p class="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolorem qui ullam necessitatibus molestias provident sapiente nam velit aspernatur! A, sequi tenetur exercitationem qui vel similique fugit ipsa perferendis suscipit!</p>
            </TabPanel>
           
        </TabView>
        <div class="grid  border-top-1 border-gray-200 p-2 justify-content-end">
            <ConfirmPopup></ConfirmPopup>
            <Button ref="popup" @click="confirm($event)" icon="pi pi-check"  severity="success" label="Kaydet" class="mr-2"></Button>
            
        </div>

    </div>
</template>

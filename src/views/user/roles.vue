<script setup>
import { ref, watch } from 'vue';
import { FilterMatchMode } from 'primevue/api';

const users = ref([
    { id: 412, role: 'Yönetici', count: 2, },
    { id: 412, role: 'Domain Yöneticisi', count: 2, },
    { id: 412, role: 'Yazılım Birimi', count: 6, },
    { id: 412, role: 'Destek Birimi', count: 7, },
    { id: 412, role: 'Muhasebe Birimi', count: 5, },

]);
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    count: { value: null, matchMode: FilterMatchMode.CONTAINS },
    role: { value: null, matchMode: FilterMatchMode.CONTAINS },
});


const removeRolesModal = ref();
const editUserModal = ref();
const addRoleModal = ref();

const financeAll = ref(false);
const finance = ref([{ name: "Fatura hareketleri", key: 'a' }, { name: "Parasal hareketler", key: 'b' }, { name: "Depozito", key: 'c' }, { name: "Ayarlar", key: 'd' }, { name: "Sipariş oluşturma", key: 'e' }]);
const financeSelected = ref();
watch(financeAll, newVal => { financeSelected.value = newVal ? finance.value.map(item => item.name) : []; });


const resellerAll = ref(false);
const reseller = ref([{ name: "Bayi bilgilerini görme", key: 'ewq' }, { name: "Bayi bilgilerini güncelleme", key: 'wq' }, { name: "Bayi siparişleri", key: 'qwe' }, { name: "Bayi logları", key: 'wqeq' }, { name: "Bayi ekle", key: 'qqw' }]);
const resellerSelected = ref();
watch(resellerAll, newVal => { resellerSelected.value = newVal ? reseller.value.map(item => item.name) : []; });

const domainAll = ref(false);
const domain = ref([{ name: "Uzantı ekle", key: 'domain1' }, { name: "Uzantı güncelleme / silme", key: 'domain2' }, { name: "Premium alanların oluşturulması / aktarılması", key: 'domain3' }, { name: "Domain transferi iptal et", key: 'domain4' }, { name: "Domain yenileme", key: 'domain5' }, { name: "Domain restore", key: 'domain6' }, { name: "Domain silme", key: 'domain7' }, { name: "Domain detay görüntüleme", key: 'domain8' }, { name: "Domain transfer", key: 'domain9' }, { name: "Transferdeki domainler", key: 'domain10' }, { name: "Domain oluşturma", key: 'domain11' }, { name: "Domain backorder", key: 'domain12' }, { name: "Domain güncelleme", key: 'domain13' }]);
const domainSelected = ref();
watch(domainAll, newVal => { domainSelected.value = newVal ? domain.value.map(item => item.name) : []; });

const userAll = ref(false);
const user = ref([{ name: "Kullanıcı ekle", key: 'user1' }, { name: "Kullanıcı pasif etme", key: 'user2' }, { name: "Kullanıcı detayını güncelle", key: 'user3' }, { name: "Tüm kullanıcıları gör", key: 'user4' }, { name: "Kullanıcı şifresini düzenle", key: 'user5' }, { name: "Yetki düzenle / ekle", key: 'user6' }]);
const userSelected = ref();
watch(userAll, newVal => { userSelected.value = newVal ? user.value.map(item => item.name) : []; });

const sslAll = ref(false);
const ssl = ref([{ name: "SSL paketleri", key: 'ssl1' }, { name: "SSL paket ekleme", key: 'ssl2' }, { name: "SSL paket bilgi güncelleme", key: 'ssl3' }, { name: "SSL paket fiyat güncelleme", key: 'ssl4' }]);
const sslSelected = ref();
watch(sslAll, newVal => { sslSelected.value = newVal ? ssl.value.map(item => item.name) : []; });

const contactAll = ref(false);
const contact = ref([{ name: "Contact bilgilerini görüntüle", key: 'contact1' }, { name: "Contact oluştur", key: 'contact2' }, { name: "Contact sil", key: 'contact3' }, { name: "Contact güncelle", key: 'contact4' }]);
const contactSelected = ref();
watch(contactAll, newVal => { contactSelected.value = newVal ? contact.value.map(item => item.name) : []; });

const reportsAll = ref(false);
const reports = ref([{ name: "Bayi istatistikleri", key: 'reports1' }, { name: "Domain istatistikleri", key: 'reports2' }, { name: "Finansal istatistikler", key: 'reports3' }, { name: "Kar istatistikleri", key: 'reports4' }]);
const reportsSelected = ref();
watch(reportsAll, newVal => { reportsSelected.value = newVal ? reports.value.map(item => item.name) : []; });

const supportAll = ref(false);
const support = ref([{ name: "Destek talebi gör & yanıtla", key: 'support1' }, { name: "Yeni destek talebi", key: 'support2' }]);
const supportSelected = ref();
watch(supportAll, newVal => { supportSelected.value = newVal ? support.value.map(item => item.name) : []; });
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Yetki Grubu Listesi</h5>
                <DataTable :value="users" size="small" scrollable scrollHeight="63dvh" class="small p-datatable-gridlines" stripedRows removableSort :paginator="true" :rowHover="true" :rows="25" v-model:filters="filters" dataKey="id" :globalFilterFields="['name', 'role']">
                    <template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            <div class="flex flex-column sm:flex-row">
                                <span class="p-input-icon-left mb-2">
                                    <i class="pi pi-search" />
                                    <InputText placeholder="Ara" style="width: 100%" v-model="filters['global'].value" />
                                </span>
                            </div>
                            <div class="flex gap-3">
                                <Button type="button" icon="pi pi-plus" label="Yeni Yetki Grubu" severity="success" @click="addRoleModal = true" class="mb-2" />
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



                    <Column field="role" header="Yetki Grubu" class="font-semibold" sortable :showFilterMenu="false"></Column>
                    <Column field="count" header="Yetkili Sayısı" class="text-center" sortable :showFilterMenu="false"></Column>


                    <Column header="İşlem" :exportable="false" alignFrozen="right" :frozen="true">
                        <template #body="">
                            <div class="flex justify-content-center">
                                <Button icon="pi pi-pencil" v-tooltip.top="'Rolu Düzenle'" rounded link size="small" @click="addRoleModal = true" />
                                <Button icon="pi pi-trash" v-tooltip.top="'Rolu Sil'" rounded size="small" link @click="removeRolesModal = true" />
                            </div>
                        </template>
                    </Column>

                </DataTable>
            </div>
        </div>
    </div>

    <Dialog v-model:visible="removeRolesModal" maximizable modal :style="{ width: '500px' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <template #header>
            <div class="inline-flex align-items-center justify-content-center gap-2">
                <span class="font-bold white-space-nowrap select-all text-xl">Kullanıcı Sil</span>
            </div>
        </template>
        <div class="mt-5 text-lg">
            <p> <b>Yönetici</b> rolu siliniyor</p>
            <Message :closable="false" severity="error" icon="pi pi-">Rol tamamen silinecek. Lütfen dikkatli işlem yapınız</Message>
        </div>
        <template #footer>
            <Button label="Bu kullanıcıyı sil" icon="pi pi-trash" severity="danger" @click="removeRolesModal = false" />
        </template>
    </Dialog>


    <Dialog v-model:visible="addRoleModal" maximizable modal :style="{ width: '90dvw' }" :breakpoints="{ '1199px': '90dvh', '575px': '90vw' }">
        <template #header>
            <div class="inline-flex align-items-center justify-content-center gap-2">
                <span class="font-bold white-space-nowrap select-all text-xl">Role Ekle</span>
            </div>
        </template>
        <div class="mt-3 grid">
            <div class="field col-12 md:col-6 px-3 p-1">
                <label class="block" for="">Yetkili Grubu:</label>
                <span class="p-input-icon-left w-full">
                    <i class="pi pi-users" />
                    <InputText type="text" placeholder="Yazılım Birimi" class="w-full" />
                </span>
            </div>
        </div>
        <div class="grid">

            <div class="col-12 md:col-6">
                <div class="card p-0 overflow-hidden">
                    <div class="flex justify-content-between align-items-center bg-bluegray-50 px-3 py-2">
                        <div class="text-md font-bold">Hesap & Finans</div>
                        <div class="div">
                            <Checkbox v-model="financeAll" :binary="true" inputId="financeAll" />
                            <label class="ml-2 cursor-pointer select-none" for="financeAll">Tümünü seç</label>
                        </div>
                    </div>
                    <div v-for="finance of finance" :key="finance.key" class="flex flex-column gap-2">
                        <div class="flex border-1 border-bluegray-50 p-2 hover:bg-teal-50 hover:text-green-900 ">
                            <Checkbox v-model="financeSelected" name="finance" class="mr-2" :inputId="finance.key" :value="finance.name" />
                            <label class="ml-2 select-none cursor-pointer block flex-grow-1" :for="finance.key">{{ finance.name }}</label>
                        </div>
                    </div>
                </div>

                <div class="card p-0 overflow-hidden mt-3">
                    <div class="flex justify-content-between align-items-center bg-bluegray-50 px-3 py-2">
                        <div class="text-md font-bold">domain</div>
                        <div class="div">
                            <Checkbox v-model="domainAll" :binary="true" inputId="domainAll" />
                            <label class="ml-2 cursor-pointer select-none" for="domainAll">Tümünü seç</label>
                        </div>
                    </div>
                    <div v-for="domain of domain" :key="domain.key" class="flex flex-column gap-2">
                        <div class="flex border-1 border-bluegray-50 p-2 hover:bg-teal-50 hover:text-green-900">
                            <Checkbox v-model="domainSelected" name="domain" class="mr-2" :inputId="domain.key" :value="domain.name" />
                            <label class="ml-2 cursor-pointer block select-none flex-grow-1" :for="domain.key">{{ domain.name }}</label>
                        </div>
                    </div>
                </div>

                <div class="card p-0 overflow-hidden">
                    <div class="flex justify-content-between align-items-center bg-bluegray-50 px-3 py-2">
                        <div class="text-md font-bold">reports</div>
                        <div class="div">
                            <Checkbox v-model="reportsAll" :binary="true" inputId="reportsAll" />
                            <label class="ml-2 cursor-pointer select-none" for="reportsAll">Tümünü seç</label>
                        </div>
                    </div>
                    <div v-for="reports of reports" :key="reports.key" class="flex flex-column gap-2">
                        <div class="flex border-1 border-bluegray-50 p-2 hover:bg-teal-50 hover:text-green-900">
                            <Checkbox v-model="reportsSelected" name="reports" class="mr-2" :inputId="reports.key" :value="reports.name" />
                            <label class="ml-2 cursor-pointer block select-none flex-grow-1" :for="reports.key">{{ reports.name }}</label>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col-12 md:col-6">
                <div class="card p-0 overflow-hidden">
                    <div class="flex justify-content-between align-items-center bg-bluegray-50 px-3 py-2">
                        <div class="text-md font-bold">Bayi</div>
                        <div class="div">
                            <Checkbox v-model="resellerAll" :binary="true" inputId="resellerAll" />
                            <label class="ml-2 cursor-pointer select-none" for="resellerAll">Tümünü seç</label>
                        </div>
                    </div>
                    <div v-for="reseller of reseller" :key="reseller.key" class="flex flex-column gap-2">
                        <div class="flex border-1 border-bluegray-50 p-2 hover:bg-teal-50 hover:text-green-900">
                            <Checkbox v-model="resellerSelected" name="reseller" class="mr-2" :inputId="reseller.key" :value="reseller.name" />
                            <label class="ml-2 cursor-pointer block select-none flex-grow-1" :for="reseller.key">{{ reseller.name }}</label>
                        </div>
                    </div>
                </div>

                <div class="card p-0 overflow-hidden">
                    <div class="flex justify-content-between align-items-center bg-bluegray-50 px-3 py-2">
                        <div class="text-md font-bold">user</div>
                        <div class="div">
                            <Checkbox v-model="userAll" :binary="true" inputId="userAll" />
                            <label class="ml-2 cursor-pointer select-none" for="userAll">Tümünü seç</label>
                        </div>
                    </div>
                    <div v-for="user of user" :key="user.key" class="flex flex-column gap-2">
                        <div class="flex border-1 border-bluegray-50 p-2 hover:bg-teal-50 hover:text-green-900">
                            <Checkbox v-model="userSelected" name="user" class="mr-2" :inputId="user.key" :value="user.name" />
                            <label class="ml-2 cursor-pointer block select-none flex-grow-1" :for="user.key">{{ user.name }}</label>
                        </div>
                    </div>
                </div>

                <div class="card p-0 overflow-hidden mt-3">
                    <div class="flex justify-content-between align-items-center bg-bluegray-50 px-3 py-2">
                        <div class="text-md font-bold">ssl</div>
                        <div class="div">
                            <Checkbox v-model="sslAll" :binary="true" inputId="sslAll" />
                            <label class="ml-2 cursor-pointer select-none" for="sslAll">Tümünü seç</label>
                        </div>
                    </div>
                    <div v-for="ssl of ssl" :key="ssl.key" class="flex flex-column gap-2">
                        <div class="flex border-1 border-bluegray-50 p-2 hover:bg-teal-50 hover:text-green-900">
                            <Checkbox v-model="sslSelected" name="ssl" class="mr-2" :inputId="ssl.key" :value="ssl.name" />
                            <label class="ml-2 cursor-pointer block select-none flex-grow-1" :for="ssl.key">{{ ssl.name }}</label>
                        </div>
                    </div>
                </div>

                <div class="card p-0 overflow-hidden">
                    <div class="flex justify-content-between align-items-center bg-bluegray-50 px-3 py-2">
                        <div class="text-md font-bold">contact</div>
                        <div class="div">
                            <Checkbox v-model="contactAll" :binary="true" inputId="contactAll" />
                            <label class="ml-2 cursor-pointer select-none" for="contactAll">Tümünü seç</label>
                        </div>
                    </div>
                    <div v-for="contact of contact" :key="contact.key" class="flex flex-column gap-2">
                        <div class="flex border-1 border-bluegray-50 p-2 hover:bg-teal-50 hover:text-green-900">
                            <Checkbox v-model="contactSelected" name="contact" class="mr-2" :inputId="contact.key" :value="contact.name" />
                            <label class="ml-2 cursor-pointer block select-none flex-grow-1" :for="contact.key">{{ contact.name }}</label>
                        </div>
                    </div>
                </div>

                <div class="card p-0 overflow-hidden">
                    <div class="flex justify-content-between align-items-center bg-bluegray-50 px-3 py-2">
                        <div class="text-md font-bold">support</div>
                        <div class="div">
                            <Checkbox v-model="supportAll" :binary="true" inputId="supportAll" />
                            <label class="ml-2 cursor-pointer select-none" for="supportAll">Tümünü seç</label>
                        </div>
                    </div>
                    <div v-for="support of support" :key="support.key" class="flex flex-column gap-2">
                        <div class="flex border-1 border-bluegray-50 p-2 hover:bg-teal-50 hover:text-green-900">
                            <Checkbox v-model="supportSelected" name="support" class="mr-2" :inputId="support.key" :value="support.name" />
                            <label class="ml-2 cursor-pointer block select-none flex-grow-1" :for="support.key">{{ support.name }}</label>
                        </div>
                    </div>
                </div>






            </div>
        </div>
        <template #footer>
            <Button label="Vazgeç" outlined @click="addRoleModal = false" />
            <Button label="Güncelle" icon="pi pi-check" severity="success" @click="addRoleModal = false" />
        </template>
    </Dialog>

</template>



<style lang="scss" scoped></style>
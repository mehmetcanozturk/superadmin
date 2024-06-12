<script setup>
import { ref } from 'vue';
import { FilterMatchMode } from 'primevue/api';

const users = ref([
    { id: 1, name: 'Bahaddin Yazıcı', roles: 'Yönetici', mail: 'byazici@atakdomain.com' },
    { id: 412, name: 'Recep Şerit', roles: 'Domain Yöneticisi', mail: 'recep@atakdomain.com' },
    { id: 432, name: 'Mehmet Can Öztürk', roles: 'Yazılım Birimi', mail: 'mehmetcan@atakdomain.com' },
    { id: 623, name: 'Çağrı Topçu', roles: 'Yazılım Birimi', mail: 'cagri@atakdomain.com' },
    { id: 174, name: 'Bahadır Topçu', roles: 'Yazılım Birimi', mail: 'bahadir@atakdomain.com' },
    { id: 856, name: 'Talip Bulundu', roles: 'Yazılım Birimi', mail: 'talip@atakdomain.com' },
]);
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    mail: { value: null, matchMode: FilterMatchMode.CONTAINS },
    roles: { value: null, matchMode: FilterMatchMode.IN },
});

const role = ref([...new Set(users.value.map(item => item.roles))]);
const selectedRole = ref();

const removeUserModal = ref();
const lockUserModal = ref();
const editUserModal = ref();
const addUserModal = ref();
const resellerpw = ref('*CokGüvenliBirSifre_00!');


</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Kullanıcı Listesi</h5>
                <DataTable :value="users" size="small" scrollable scrollHeight="63dvh" class="small p-datatable-gridlines" stripedRows removableSort :paginator="true" :rowHover="true" :rows="25" v-model:filters="filters" dataKey="id" filterDisplay="row" :globalFilterFields="['name', 'roles']">
                    <template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            <div class="flex flex-column sm:flex-row">
                                <span class="p-input-icon-left mb-2">
                                    <i class="pi pi-search" />
                                    <InputText placeholder="Ara" style="width: 100%" v-model="filters['global'].value" />
                                </span>
                            </div>
                            <div class="flex gap-3">
                                <router-link to="/user/roles">
                                    <Button type="button" icon="pi pi-user" label="Yetki Grupları" class="mb-2" />
                                </router-link>
                                <Button type="button" icon="pi pi-plus" label="Yeni Kullanıcı Ekle" severity="success" @click="addUserModal = true" class="mb-2" />

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


                    <Column field="name" header="Yetkili" class="max-w-6rem" sortable :showFilterMenu="false">
                        <template #body="{ data }">
                            <span class="font-bold">{{ data.name }}</span>
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtre" />
                        </template>
                    </Column>
                    <Column field="roles" header="Yetki Grubu" class="max-w-6rem" sortable :showFilterMenu="false">
                        <template #body="{ data }">
                            {{ data.roles }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter :options="role" placeholder="Filtre" class="p-column-filter w-full" />
                        </template>
                    </Column>
                    <Column field="mail" header="Mail" class="max-w-6rem" sortable :showFilterMenu="false">
                        <template #body="{ data }">
                            {{ data.mail }}
                        </template>
                        <template #filter="{ filterModel, filterCallback }">
                            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Filtre" />
                        </template>
                    </Column>


                    <Column header="İşlem" :exportable="false" alignFrozen="right" :frozen="true">
                        <template #body="">
                            <div class="flex justify-content-center">
                                <Button icon="pi pi-pencil" v-tooltip.top="'Kullanıcı Düzenle'" rounded link size="small" @click="editUserModal = true" />
                                <Button icon="pi pi-lock" v-tooltip.top="'Kullanıcıyı kilitle'" rounded link size="small" @click="lockUserModal = true" />
                                <Button icon="pi pi-trash" v-tooltip.top="'Kullanıcıyı Sil'" rounded size="small" link @click="removeUserModal = true" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>

    <Dialog v-model:visible="removeUserModal" maximizable modal :style="{ width: '500px' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <template #header>
            <div class="inline-flex align-items-center justify-content-center gap-2">
                <span class="font-bold white-space-nowrap select-all text-xl">Kullanıcı Sil</span>
            </div>
        </template>
        <div class="mt-5 text-lg">
            <p> <b>Mehmet Can Öztürk</b> Kullanıcısı siliniyor</p>
            <Message :closable="false" severity="error" icon="pi pi-">Kullanıcı tamamen silinecek. Lütfen dikkatli işlem yapınız</Message>
        </div>
        <template #footer>
            <Button label="Bu kullanıcıyı sil" icon="pi pi-trash" severity="danger" @click="removeUserModal = false" />
        </template>
    </Dialog>

    <Dialog v-model:visible="lockUserModal" maximizable modal :style="{ width: '500px' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <template #header>
            <div class="inline-flex align-items-center justify-content-center gap-2">
                <span class="font-bold white-space-nowrap select-all text-xl">Kullanıcı kilitle</span>
            </div>
        </template>
        <div class="mt-5 text-lg">
            <p> <b>Mehmet Can Öztürk</b> Kullanıcısı kilitlenecek</p>
            <Message :closable="false" icon="pi pi-" severity="info">Kilitlendiği zaman kullanıcı veritabanından silinmez ancak artık o hesap ile sisteme erişemez ve herhangi bir işlem yapamaz.</Message>
        </div>
        <template #footer>
            <Button label="Bu kullanıcıyı kilitle" icon="pi pi-lock" severity="info" @click="lockUserModal = false" />
        </template>
    </Dialog>

    <Dialog v-model:visible="editUserModal" maximizable modal :style="{ width: '50dvw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <template #header>
            <div class="inline-flex align-items-center justify-content-center gap-2">
                <span class="font-bold white-space-nowrap select-all text-xl">Kullanıcıyı Düzenle</span>
            </div>
        </template>
        <div class="mt-3 grid">

            <div class="field col-12 md:col-6 px-3 p-1">
                <label class="block" for="">Yetkili ismi:</label>
                <span class="p-input-icon-left w-full">
                    <i class="pi pi-user" />
                    <InputText type="text" placeholder="İsmi" value="Mehmet Can Öztürk" class="w-full" />
                </span>
            </div>
            <div class="field col-12 md:col-6 px-3 p-1">
                <label class="block" for="">Telefon:</label>
                <span class="p-input-icon-left w-full">
                    <i class="pi pi-phone" />
                    <InputMask value="(+90)-999-999-9999" mask="(+99)-999-999-9999" placeholder="(+90)-123-123-1234" class="w-full" />
                </span>
            </div>
            <div class="field col-12 md:col-6 px-3 p-1">
                <label class="block" for="">Mail:</label>
                <span class="p-input-icon-left w-full">
                    <i class="pi pi-envelope" />
                    <InputText type="text" placeholder="İsmi" value="mehmetcan@atakdomain.com" class="w-full" />
                </span>
            </div>
            <div class="field col-12 md:col-6 px-3 p-1">
                <label class="block" for="">Şifre:</label>
                <Password v-model="resellerpw" toggleMask class="opacity-100 font-semibold w-full" />
            </div>

            <div class="field col-12 md:col-6 px-3 p-1">
                <label class="block" for="">Yetki Grubu:</label>
                <Dropdown v-model="selectedRole" :options="role" placeholder="Yetki Grubunu Seç" class="w-full" />
            </div>



        </div>
        <template #footer>
            <Button label="Vazgeç" outlined @click="editUserModal = false" />
            <Button label="Güncelle" icon="pi pi-check" severity="success" @click="editUserModal = false" />
        </template>
    </Dialog>

    <Dialog v-model:visible="addUserModal" maximizable modal :style="{ width: '50dvw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <template #header>
            <div class="inline-flex align-items-center justify-content-center gap-2">
                <span class="font-bold white-space-nowrap select-all text-xl">Kullanıcı Ekle</span>
            </div>
        </template>
        <div class="mt-3 grid">

            <div class="field col-12 md:col-6 px-3 p-1">
                <label class="block" for="">Yetkili ismi:</label>
                <span class="p-input-icon-left w-full">
                    <i class="pi pi-user" />
                    <InputText type="text" placeholder="İsmi" class="w-full" />
                </span>
            </div>
            <div class="field col-12 md:col-6 px-3 p-1">
                <label class="block" for="">Telefon:</label>
                <span class="p-input-icon-left w-full">
                    <i class="pi pi-phone" />
                    <InputMask value="(+90)-999-999-9999" mask="(+99)-999-999-9999" placeholder="(+90)-123-123-1234" class="w-full" />
                </span>
            </div>
            <div class="field col-12 md:col-6 px-3 p-1">
                <label class="block" for="">Mail:</label>
                <span class="p-input-icon-left w-full">
                    <i class="pi pi-envelope" />
                    <InputText type="text" placeholder="recep@atakdomain.com" class="w-full" />
                </span>
            </div>
            <div class="field col-12 md:col-6 px-3 p-1">
                <label class="block" for="">Şifre:</label>
                <Password toggleMask v-model="resellerpw" placeholder="******" class="opacity-100 font-semibold w-full" />
            </div>

            <div class="field col-12 md:col-6 px-3 p-1">
                <label class="block" for="">Yetki Grubu:</label>
                <Dropdown v-model="selectedRole" :options="role" placeholder="Yetki Grubunu Seç" class="w-full" />
            </div>



        </div>
        <template #footer>
            <Button label="Vazgeç" outlined @click="addUserModal = false" />
            <Button label="Güncelle" icon="pi pi-check" severity="success" @click="addUserModal = false" />
        </template>
    </Dialog>

</template>



<style lang="scss" scoped></style>
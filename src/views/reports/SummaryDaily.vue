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
                <h5> Hazırlanıyor</h5>

            </div>
        </div>
    </div>


</template>



<style lang="scss" scoped></style>
<script setup>
import { ref } from 'vue';
import { FilterMatchMode } from 'primevue/api';

const general = ref([
    {name: 'Satış', value:'$2,112.59' },
    {name: 'Maliyet', value:'$1,152.59' },
    {name: 'Kâr', value:'$1,152.59' },
    {name: 'Satılan Uzantı', value:'49' },
    {name: 'Satılan Domain', value:'2' },
    {name: 'Satılan SSL', value:'12' },
    {name: 'Sipariş sayisi', value:'53' },
    {name: 'Aktif Depozito', value:'$563.54' },
    {name: 'Tüm Depozito', value:'$2,963.54' },
]);


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
                <h5>Günün Özeti - 10.06.2024</h5>
                <DataTable :value="general" size="small" scrollable scrollHeight="63dvh" class="small p-datatable-gridlines" stripedRows removableSort :paginator="true" :rowHover="true" :rows="25"  dataKey="id">
           
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


                    <Column field="name" header="Genel İstatistikler - 10.06.2024"></Column>
                    <Column field="value" header="değerler" headerClass="text-left"></Column>
       
                </DataTable>
            </div>
        </div>
    </div>


</template>



<style lang="scss" scoped></style>
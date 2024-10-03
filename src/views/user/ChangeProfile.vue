<script setup>
import { ref } from 'vue';
import Fieldset from 'primevue/fieldset';
import { useToast } from "primevue/usetoast";
const toast = useToast();



const profileImageUrl = ref('/images/user.jpg');

const onFileSelect = (event) => {
    const file = event.files[0];
    if (file) profileImageUrl.value = URL.createObjectURL(file);
};
const value1 = ref();
const value2 = ref();
const value3 = ref();
</script>

<template>
    <Toast />

    <div class="grid">
        <div class="col-12">
            <div class="card ">
                <h5>Profil Ayarları</h5>
                <div class="flex flex-wrap align-items-stretch">
                    <div class="col-12 lg:col-6">
                        <Fieldset legend="Şifre Değiştir" class="max-w-full h-full">
                            <div class="grid mt-1 column-gap-2 row-gap-1 p-0 ">
                                <div class="field col-12">
                                    <span class="p-float-label">
                                        <Password v-model="value1" toggleMask />
                                        <label for="inputtext">Şifren</label>
                                    </span>
                                    <small>Şuanki Şifreni girmelisin. </small>
                                </div>
                                <div class="field col-fixed">
                                    <span class="p-float-label w-">
                                        <Password v-model="value2" toggleMask>
                                            <template #header>
                                                <div class="font-semibold text-xm mb-4">Şifre Onayı</div>
                                            </template>
                                            <template #footer>
                                                <Divider />
                                                <ul class="pl-2 ml-2 my-0 leading-normal">
                                                    <li>En az bir küçük harf</li>
                                                    <li>En az bir büyük harf</li>
                                                    <li>En az bir rakam (0-9)</li>
                                                    <li>En az bir özel işaret (. , @ ! - _)</li>
                                                    <li>Minimum 12 karakter</li>
                                                </ul>
                                            </template>
                                        </Password>
                                        <label for="inputtext">Yeni Şifre</label>
                                    </span>
                                    <small>Lütfen </small>
                                </div>
                                <div class="field col-fixed">
                                    <span class="p-float-label">
                                        <Password v-model="value3" toggleMask>
                                            <template #header>
                                                <div class="font-semibold text-xm mb-4">ifre Onayı</div>
                                            </template>
                                            <template #footer>
                                                <Divider />
                                                <ul class="pl-2 ml-2 my-0 leading-normal">
                                                    <li>En az bir küçük harf</li>
                                                    <li>En az bir büyük harf</li>
                                                    <li>En az bir rakam (0-9)</li>
                                                    <li>En az bir özel işaret (. , @ ! - _)</li>
                                                    <li>Minimum 12 karakter</li>
                                                </ul>
                                            </template>
                                        </Password>
                                        <label for="inputtext">Yeni Şifre Onayla</label>
                                    </span>
                                    <small>Şifre Onayı için</small>
                                </div>
                            </div>
                        </Fieldset>
                    </div>
                    <div class="col-12 lg:col-6">
                        <Fieldset legend="Profil Resmi Değiştir" class="max-w-full h-full">
                            <div class="flex flex-column align-items-center gap-3">
                                <img :src="profileImageUrl" alt="Profile Image" class="border-round-lg" width="150" />
                                <div>
                                    <Avatar :image="profileImageUrl" class="mr-2" size="xlarge" shape="circle" />
                                    <Avatar :image="profileImageUrl" class="mr-2" size="large" shape="circle" />
                                    <Avatar :image="profileImageUrl" shape="circle" />
                                </div>
                                <FileUpload mode="basic" name="demo[]" accept="image/jpeg,image/jpg,image/png" :maxFileSize="1000000" @select="onFileSelect" :auto="true" chooseLabel="Profil Resmi Değiştir" />
                            </div>
                        </Fieldset>
                    </div>
                </div>
                <div class="flex justify-content-end mt-3">
                    <Button label="Kaydet" icon="pi pi-check" severity="success" iconPos="right" />
                </div>
            </div>
        </div>
    </div>
</template>
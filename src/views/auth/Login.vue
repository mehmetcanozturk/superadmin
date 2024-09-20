<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useLayout } from '@/layout/composables/layout';
import AppConfig from '@/layout/AppConfig.vue';

const router = useRouter();
const rememberMe = ref(false);
const { layoutConfig } = useLayout();

const darkMode = computed(() => {
    return layoutConfig.colorScheme.value !== 'light';
});
const navigateToDashboard = () => {
    router.push({ name: 'dashboard' });
};
</script>

<template>
    
    <div class="px-5 min-h-screen flex flex-column justify-content-center align-items-center">
        <img class="mb-3" src="https://test1.atakteknoloji.com/dna-2022/assets/images/domain-name-api-logo.webp" width="250"  alt=""> 
        <span class="text-400 mb-4 text-xl font-medium">We Can Change To World</span>
        <div class="border-1 surface-border surface-card border-round py-7 px-4 md:px-7 z-1">
            <div class="mb-4">
                <div class="text-900 text-xl font-bold mb-2">Giriş Yap</div>
                <span class="text-600 font-medium">Lütfen Giriş bilgilerinizi Giriniz</span>
            </div>
            <div class="flex flex-column">
                <span class="p-input-icon-left w-full mb-4">
                    <i class="pi pi-envelope"></i>
                    <InputText id="email" type="text" class="w-full md:w-25rem" placeholder="E-Posta" />
                </span>
                <span class="p-input-icon-left w-full mb-4">
                    <i class="pi pi-lock"></i>
                    <InputText id="password" type="password" class="w-full md:w-25rem" placeholder="Şifre" />
                </span>
                <span class="p-input-icon-left w-full mb-4">
                    <i class="pi pi-qrcode"></i>
                    <InputText id="password" type="password" class="w-full md:w-25rem" placeholder="2FA" />
                </span>
                <div class="mb-4 flex flex-wrap gap-3">
                    <div>
                        <label  class="text-900 font-medium mr-8"><Checkbox  v-model="rememberMe" binary class="mr-2"></Checkbox> Beni Hatırla </label>
                    </div>
                </div>
                <Button label="Giriş Yap" severity="success" class="w-full" @click="navigateToDashboard"></Button>
            </div>
        </div>
    </div>
    <AppConfig simple />
</template>

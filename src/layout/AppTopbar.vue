<script setup>
import AppBreadcrumb from './AppBreadcrumb.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';

const { onMenuToggle, onProfileSidebarToggle, onConfigSidebarToggle } = useLayout();

const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const opDeposit = ref(null);
const opCurrency= ref(null);
const toggleDeposit = (event) => {
    opDeposit.value.toggle(event);
};
const toggleCurrency = (event) => {
    opCurrency.value.toggle(event);
};


const activeCurrency = ref('$ Dolar');
const selectCurrencyValues = ref(['$ Dolar', '₺ TL']);

onMounted(() => {
    bindOutsideClickListener();
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event) => {
    if (!topbarMenuActive.value) return;

    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};

const showProfileSidebar = () => {
    onProfileSidebarToggle();
};


</script>

<template>
    
    <div class="layout-topbar">
        <div class="topbar-start">
            <Button type="button" class="topbar-menubutton p-link p-trigger" @click="onMenuToggle">
                <i class="pi pi-bars"></i>
            </Button>

            <AppBreadcrumb class="topbar-breadcrumb"></AppBreadcrumb>
        </div>
        

        <div class="topbar-end">
            <ul class="topbar-menu">
                <li class="topbar-search ">
                    <span class="p-input-icon-left w-full">
                        <i class="pi pi-search"></i>
                        <InputText type="text" spellcheck="false" placeholder="Bayi, Uzantı, Sipariş" class="w-12rem sm:w-full " />
                    </span>
                </li>
                <li class="ml-3">
                    <Button text rounded severity="secondary" type="button" @click="toggleDeposit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 512 512"><path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"/></svg>
                        <span class="ml-2 font-semibold">Depozito</span>
                    </Button>
                    <OverlayPanel ref="opDeposit" appendTo="body" :showCloseIcon="false" class="min-w-68 text-600">
                        <div>
                            <div class="font-semibold mb-2 bg-blue-50 p-1 text-primary text-center border-round">Aktif Depozito</div>
                            <table>
                                <tr class="p-3">
                                    <td class="py-1">Dolar($):</td>
                                    <td class="py-1 font-bold text-primary pl-3">$ 13.951</td>
                                </tr>
                                <tr>
                                    <td class="py-1">TL (₺):</td>
                                    <td class="py-1 font-bold text-primary pl-3">55.545 ₺</td>
                                </tr>
                                <tr>
                                    <td class="py-1">Trabis (₺):</td>
                                    <td class="py-1 font-bold text-primary pl-3">3242.545 ₺</td>
                                </tr>
                            </table>
                            
                        </div>
                    </OverlayPanel>
                </li>
                <!-- <li>
                    <Button text rounded severity="secondary" type="button" @click="toggleCurrency">
                        <span class="ml-1 font-semibold">{{ activeCurrency }}</span>
                    </Button>
                    <OverlayPanel ref="opCurrency" appendTo="body" :showCloseIcon="false">
                        <div>
                            <div class="font-semibold mb-3  p-1 px-2 text-primary text-center border-round bg-blue-50">Döviz Kuru</div>
                            <SelectButton v-model="activeCurrency" unselectable="false" :options="selectCurrencyValues" aria-labelledby="basic" />
                        </div>
                    </OverlayPanel>
                </li> -->
                <li class="topbar-profile ml-2">
                    <Button type="button" class="p-link border-2  border-gray-600 hover:border-primary transition-all transition-duration-500  w-3rem h-3rem" @click="showProfileSidebar"><img src="/images/user.jpg" class="w-3rem h-3rem" alt="Profile" /></Button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

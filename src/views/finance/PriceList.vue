<script setup>
import { ref, watch } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';



const list = ref([
    { id: 357, domain: '.NET', domain_group: 'TLD', currency: '$', cost: '8.99', reseller_register: '11.99', reseller_transfer: '11.99', reseller_renew: '11.99', premium_register: '10.99', premium_transfer: '10.99', premium_renew: '10.99', platinum_register: '9.99', platinum_transfer: '9.99', platinum_renew: '9.99', vip_register: '8.99', vip_transfer: '8.99', vip_renew: '8.99', restore: '9.99', backorder: '12.99', trustee: '4.99', promotion: 1 },
    { id: 358, domain: '.ORG', domain_group: 'TLD', currency: '₺', cost: '6.99', reseller_register: '9.99', reseller_transfer: '9.99', reseller_renew: '9.99', premium_register: '8.99', premium_transfer: '8.99', premium_renew: '8.99', platinum_register: '7.99', platinum_transfer: '7.99', platinum_renew: '7.99', vip_register: '6.99', vip_transfer: '6.99', vip_renew: '6.99', restore: '8.99', backorder: '11.99', trustee: '3.99', promotion: 0 },
    { id: 359, domain: '.INFO', domain_group: 'TLD', currency: '$', cost: '7.49', reseller_register: '10.49', reseller_transfer: '10.49', reseller_renew: '10.49', premium_register: '9.49', premium_transfer: '9.49', premium_renew: '9.49', platinum_register: '8.99', platinum_transfer: '8.99', platinum_renew: '8.99', vip_register: '7.99', vip_transfer: '7.99', vip_renew: '7.99', restore: '9.49', backorder: '12.49', trustee: '4.49', promotion: 1 },
    { id: 360, domain: '.BIZ', domain_group: 'TLD', currency: '$', cost: '9.49', reseller_register: '12.49', reseller_transfer: '12.49', reseller_renew: '12.49', premium_register: '11.49', premium_transfer: '11.49', premium_renew: '11.49', platinum_register: '10.99', platinum_transfer: '10.99', platinum_renew: '10.99', vip_register: '9.49', vip_transfer: '9.49', vip_renew: '9.49', restore: '10.49', backorder: '13.49', trustee: '5.49', promotion: 0 },
    { id: 361, domain: '.CO', domain_group: 'TLD', currency: '₺', cost: '11.99', reseller_register: '14.99', reseller_transfer: '14.99', reseller_renew: '14.99', premium_register: '13.99', premium_transfer: '13.99', premium_renew: '13.99', platinum_register: '12.49', platinum_transfer: '12.49', platinum_renew: '12.49', vip_register: '11.49', vip_transfer: '11.49', vip_renew: '11.49', restore: '12.99', backorder: '15.99', trustee: '6.99', promotion: 1 },
    { id: 362, domain: '.US', domain_group: 'ccTLD', currency: '$', cost: '4.99', reseller_register: '7.99', reseller_transfer: '7.99', reseller_renew: '7.99', premium_register: '6.99', premium_transfer: '6.99', premium_renew: '6.99', platinum_register: '5.99', platinum_transfer: '5.99', platinum_renew: '5.99', vip_register: '4.99', vip_transfer: '4.99', vip_renew: '4.99', restore: '5.99', backorder: '8.99', trustee: '2.99', promotion: 0 },
    { id: 363, domain: '.CA', domain_group: 'ccTLD', currency: '$', cost: '12.99', reseller_register: '15.99', reseller_transfer: '15.99', reseller_renew: '15.99', premium_register: '14.99', premium_transfer: '14.99', premium_renew: '14.99', platinum_register: '13.49', platinum_transfer: '13.49', platinum_renew: '13.49', vip_register: '12.49', vip_transfer: '12.49', vip_renew: '12.49', restore: '13.99', backorder: '16.99', trustee: '7.99', promotion: 1 },
    { id: 364, domain: '.DE', domain_group: 'ccTLD', currency: '₺', cost: '5.99', reseller_register: '8.99', reseller_transfer: '8.99', reseller_renew: '8.99', premium_register: '7.99', premium_transfer: '7.99', premium_renew: '7.99', platinum_register: '6.99', platinum_transfer: '6.99', platinum_renew: '6.99', vip_register: '5.99', vip_transfer: '5.99', vip_renew: '5.99', restore: '6.99', backorder: '9.99', trustee: '3.49', promotion: 0 },
    { id: 365, domain: '.FR', domain_group: 'ccTLD', currency: '$', cost: '6.49', reseller_register: '9.49', reseller_transfer: '9.49', reseller_renew: '9.49', premium_register: '8.49', premium_transfer: '8.49', premium_renew: '8.49', platinum_register: '7.49', platinum_transfer: '7.49', platinum_renew: '7.49', vip_register: '6.49', vip_transfer: '6.49', vip_renew: '6.49', restore: '7.49', backorder: '10.49', trustee: '3.99', promotion: 1 },
    { id: 366, domain: '.IT', domain_group: 'ccTLD', currency: '$', cost: '7.99', reseller_register: '10.99', reseller_transfer: '10.99', reseller_renew: '10.99', premium_register: '9.99', premium_transfer: '9.99', premium_renew: '9.99', platinum_register: '8.99', platinum_transfer: '8.99', platinum_renew: '8.99', vip_register: '7.99', vip_transfer: '7.99', vip_renew: '7.99', restore: '8.99', backorder: '11.99', trustee: '4.99', promotion: 0 },
    { id: 367, domain: '.ES', domain_group: 'ccTLD', currency: '₺', cost: '9.99', reseller_register: '12.99', reseller_transfer: '12.99', reseller_renew: '12.99', premium_register: '11.99', premium_transfer: '11.99', premium_renew: '11.99', platinum_register: '10.99', platinum_transfer: '10.99', platinum_renew: '10.99', vip_register: '9.99', vip_transfer: '9.99', vip_renew: '9.99', restore: '10.99', backorder: '13.99', trustee: '5.99', promotion: 1 },
    { id: 368, domain: '.RU', domain_group: 'ccTLD', currency: '$', cost: '8.49', reseller_register: '11.49', reseller_transfer: '11.49', reseller_renew: '11.49', premium_register: '10.49', premium_transfer: '10.49', premium_renew: '10.49', platinum_register: '9.49', platinum_transfer: '9.49', platinum_renew: '9.49', vip_register: '8.49', vip_transfer: '8.49', vip_renew: '8.49', restore: '9.49', backorder: '12.49', trustee: '4.49', promotion: 0 },
    { id: 369, domain: '.CN', domain_group: 'ccTLD', currency: '$', cost: '5.49', reseller_register: '8.49', reseller_transfer: '8.49', reseller_renew: '8.49', premium_register: '7.49', premium_transfer: '7.49', premium_renew: '7.49', platinum_register: '6.49', platinum_transfer: '6.49', platinum_renew: '6.49', vip_register: '5.49', vip_transfer: '5.49', vip_renew: '5.49', restore: '6.49', backorder: '9.49', trustee: '3.49', promotion: 1 },
    { id: 370, domain: '.JP', domain_group: 'ccTLD', currency: '₺', cost: '10.99', reseller_register: '13.99', reseller_transfer: '13.99', reseller_renew: '13.99', premium_register: '12.99', premium_transfer: '12.99', premium_renew: '12.99', platinum_register: '11.99', platinum_transfer: '11.99', platinum_renew: '11.99', vip_register: '10.99', vip_transfer: '10.99', vip_renew: '10.99', restore: '11.99', backorder: '14.99', trustee: '6.49', promotion: 0 },
    { id: 371, domain: '.COM.TR', domain_group: 'ccTLD', currency: '₺', cost: '10.99', reseller_register: '13.99', reseller_transfer: '13.99', reseller_renew: '13.99', premium_register: '12.99', premium_transfer: '12.99', premium_renew: '12.99', platinum_register: '11.99', platinum_transfer: '11.99', platinum_renew: '11.99', vip_register: '10.99', vip_transfer: '10.99', vip_renew: '10.99', restore: '11.99', backorder: '14.99', trustee: '6.49', promotion: 1 },
]);


const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    id: { value: null, matchMode: FilterMatchMode.CONTAINS },
    domain: { value: null, matchMode: FilterMatchMode.CONTAINS },
    domain_group: { value: null, matchMode: FilterMatchMode.IN },
    currency: { value: null, matchMode: FilterMatchMode.IN },
    cost: { value: null, matchMode: FilterMatchMode.CONTAINS },
    reseller_register: { value: null, matchMode: FilterMatchMode.CONTAINS },
    reseller_transfer: { value: null, matchMode: FilterMatchMode.CONTAINS },
    reseller_renew: { value: null, matchMode: FilterMatchMode.CONTAINS },

    premium_register: { value: null, matchMode: FilterMatchMode.CONTAINS },
    premium_transfer: { value: null, matchMode: FilterMatchMode.CONTAINS },
    premium_renew: { value: null, matchMode: FilterMatchMode.CONTAINS },

    platinum_register: { value: null, matchMode: FilterMatchMode.CONTAINS },
    platinum_transfer: { value: null, matchMode: FilterMatchMode.CONTAINS },
    platinum_renew: { value: null, matchMode: FilterMatchMode.CONTAINS },

    restore: { value: null, matchMode: FilterMatchMode.CONTAINS },
    backorder: { value: null, matchMode: FilterMatchMode.CONTAINS },
    trustee: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },


});

const group = ref([...new Set(list.value.map(item => item.domain_group))]);
const currency = ref([...new Set(list.value.map(item => item.currency))]);


const sslList = ref([
    { name: 'Comodo Positive SSL', currency: '$', cost: '$19.99', resellerSale: '$24.99', premiumSale: '$23.99', platiumSale: '$22.99', vipSale: '$20.99', renewSale: '29.99' },
    { name: 'GeoTrust QuickSSL Premium', currency: '$', cost: '$149.00', resellerSale: '$199.00', premiumSale: '$189.00', platiumSale: '$179.00', vipSale: '$169.00', renewSale: '219.00' },
    { name: 'DigiCert Standard SSL', currency: '$', cost: '$99.00', resellerSale: '$129.00', premiumSale: '$119.00', platiumSale: '$109.00', vipSale: '$99.00', renewSale: '139.00' },
    { name: 'RapidSSL', currency: '$', cost: '$49.00', resellerSale: '$59.00', premiumSale: '$55.00', platiumSale: '$53.00', vipSale: '$49.00', renewSale: '69.00' },
    { name: 'Thawte SSL123', currency: '$', cost: '$79.00', resellerSale: '$99.00', premiumSale: '$95.00', platiumSale: '$89.00', vipSale: '$85.00', renewSale: '109.00' },
    { name: 'GlobalSign DomainSSL', currency: '$', cost: '$79.00', resellerSale: '$99.00', premiumSale: '$95.00', platiumSale: '$89.00', vipSale: '$85.00', renewSale: '109.00' },
    { name: 'Comodo EssentialSSL', currency: '$', cost: '$29.00', resellerSale: '$39.00', premiumSale: '$35.00', platiumSale: '$33.00', vipSale: '$31.00', renewSale: '49.00' },
    { name: 'Symantec Secure Site', currency: '$', cost: '$399.00', resellerSale: '$449.00', premiumSale: '$429.00', platiumSale: '$419.00', vipSale: '$409.00', renewSale: '499.00' },
    { name: 'Sectigo SSL', currency: '$', cost: '$69.00', resellerSale: '$89.00', premiumSale: '$85.00', platiumSale: '$79.00', vipSale: '$75.00', renewSale: '99.00' },
    { name: 'AlphaSSL', currency: '$', cost: '$49.00', resellerSale: '$59.00', premiumSale: '$55.00', platiumSale: '$53.00', vipSale: '$49.00', renewSale: '69.00' },
    { name: 'Comodo Wildcard SSL', currency: '$', cost: '$249.00', resellerSale: '$299.00', premiumSale: '$289.00', platiumSale: '$279.00', vipSale: '$269.00', renewSale: '349.00' },
    { name: 'Comodo Positive SSL', currency: '$', cost: '$19.99', resellerSale: '$24.99', premiumSale: '$23.99', platiumSale: '$22.99', vipSale: '$20.99', renewSale: '29.99' },
    { name: 'GeoTrust QuickSSL Premium', currency: '$', cost: '$149.00', resellerSale: '$199.00', premiumSale: '$189.00', platiumSale: '$179.00', vipSale: '$169.00', renewSale: '219.00' },
    { name: 'DigiCert Standard SSL', currency: '$', cost: '$99.00', resellerSale: '$129.00', premiumSale: '$119.00', platiumSale: '$109.00', vipSale: '$99.00', renewSale: '139.00' },
    { name: 'RapidSSL', currency: '$', cost: '$49.00', resellerSale: '$59.00', premiumSale: '$55.00', platiumSale: '$53.00', vipSale: '$49.00', renewSale: '69.00' },
    { name: 'Thawte SSL123', currency: '$', cost: '$79.00', resellerSale: '$99.00', premiumSale: '$95.00', platiumSale: '$89.00', vipSale: '$85.00', renewSale: '109.00' },
    { name: 'GlobalSign DomainSSL', currency: '$', cost: '$79.00', resellerSale: '$99.00', premiumSale: '$95.00', platiumSale: '$89.00', vipSale: '$85.00', renewSale: '109.00' },
    { name: 'Comodo EssentialSSL', currency: '$', cost: '$29.00', resellerSale: '$39.00', premiumSale: '$35.00', platiumSale: '$33.00', vipSale: '$31.00', renewSale: '49.00' },
    { name: 'Symantec Secure Site', currency: '$', cost: '$399.00', resellerSale: '$449.00', premiumSale: '$429.00', platiumSale: '$419.00', vipSale: '$409.00', renewSale: '499.00' },
    { name: 'Sectigo SSL', currency: '$', cost: '$69.00', resellerSale: '$89.00', premiumSale: '$85.00', platiumSale: '$79.00', vipSale: '$75.00', renewSale: '99.00' },
    { name: 'AlphaSSL', currency: '$', cost: '$49.00', resellerSale: '$59.00', premiumSale: '$55.00', platiumSale: '$53.00', vipSale: '$49.00', renewSale: '69.00' },
    { name: 'Comodo Wildcard SSL', currency: '$', cost: '$249.00', resellerSale: '$299.00', premiumSale: '$289.00', platiumSale: '$279.00', vipSale: '$269.00', renewSale: '349.00' },
    { name: 'Comodo EV SSL', currency: '$', cost: '$199.00', resellerSale: '$249.00', premiumSale: '$239.00', platiumSale: '$229.00', vipSale: '$219.00', renewSale: '279.00' },
    { name: 'DigiCert EV SSL', currency: '$', cost: '$299.00', resellerSale: '$349.00', premiumSale: '$339.00', platiumSale: '$329.00', vipSale: '$319.00', renewSale: '399.00' },
    { name: 'GeoTrust True BusinessID', currency: '$', cost: '$179.00', resellerSale: '$229.00', premiumSale: '$219.00', platiumSale: '$209.00', vipSale: '$199.00', renewSale: '259.00' },
    { name: 'RapidSSL Wildcard', currency: '$', cost: '$149.00', resellerSale: '$199.00', premiumSale: '$189.00', platiumSale: '$179.00', vipSale: '$169.00', renewSale: '219.00' },
    { name: 'Thawte Web Server SSL', currency: '$', cost: '$119.00', resellerSale: '$149.00', premiumSale: '$139.00', platiumSale: '$129.00', vipSale: '$119.00', renewSale: '169.00' },
    { name: 'GlobalSign ExtendedSSL', currency: '$', cost: '$229.00', resellerSale: '$279.00', premiumSale: '$269.00', platiumSale: '$259.00', vipSale: '$249.00', renewSale: '309.00' },
    { name: 'Comodo Multi-Domain SSL', currency: '$', cost: '$299.00', resellerSale: '$349.00', premiumSale: '$339.00', platiumSale: '$329.00', vipSale: '$319.00', renewSale: '399.00' },
    { name: 'Symantec Wildcard SSL', currency: '$', cost: '$999.00', resellerSale: '$1099.00', premiumSale: '$1049.00', platiumSale: '$1029.00', vipSale: '$999.00', renewSale: '1199.00' },
    { name: 'Sectigo EV SSL', currency: '$', cost: '$299.00', resellerSale: '$349.00', premiumSale: '$339.00', platiumSale: '$329.00', vipSale: '$319.00', renewSale: '399.00' },
    { name: 'AlphaSSL Wildcard', currency: '$', cost: '$199.00', resellerSale: '$249.00', premiumSale: '$239.00', platiumSale: '$229.00', vipSale: '$219.00', renewSale: '279.00' }
]);


const promotionList = ref([
    {domain:'.XYZ', start_date:'05.05.2024', finish_date:'01.01.2025', remaining:'300 gün', cost: '$8.99', resellerSale: '$24.99', premiumSale: '$23.99', platiumSale: '$22.99', vipSale: '$20.99' },
    {domain:'.COM', start_date:'01.06.2024', finish_date:'01.12.2024', remaining:'183 gün', cost: '$9.99', resellerSale: '$25.99', premiumSale: '$24.99', platiumSale: '$23.99', vipSale: '$21.99' },
    {domain:'.NET', start_date:'10.07.2024', finish_date:'10.01.2025', remaining:'184 gün', cost: '$10.99', resellerSale: '$26.99', premiumSale: '$25.99', platiumSale: '$24.99', vipSale: '$22.99' },
    {domain:'.ORG', start_date:'15.08.2024', finish_date:'15.02.2025', remaining:'184 gün', cost: '$11.99', resellerSale: '$27.99', premiumSale: '$26.99', platiumSale: '$25.99', vipSale: '$23.99' },
    {domain:'.INFO', start_date:'20.09.2024', finish_date:'20.03.2025', remaining:'182 gün', cost: '$12.99', resellerSale: '$28.99', premiumSale: '$27.99', platiumSale: '$26.99', vipSale: '$24.99' },
    {domain:'.BIZ', start_date:'25.10.2024', finish_date:'25.04.2025', remaining:'182 gün', cost: '$13.99', resellerSale: '$29.99', premiumSale: '$28.99', platiumSale: '$27.99', vipSale: '$25.99' },
    {domain:'.CO', start_date:'30.11.2024', finish_date:'30.05.2025', remaining:'181 gün', cost: '$14.99', resellerSale: '$30.99', premiumSale: '$29.99', platiumSale: '$28.99', vipSale: '$26.99' },
    {domain:'.ME', start_date:'05.12.2024', finish_date:'05.06.2025', remaining:'183 gün', cost: '$15.99', resellerSale: '$31.99', premiumSale: '$30.99', platiumSale: '$29.99', vipSale: '$27.99' },
    {domain:'.TV', start_date:'10.01.2025', finish_date:'10.07.2025', remaining:'181 gün', cost: '$16.99', resellerSale: '$32.99', premiumSale: '$31.99', platiumSale: '$30.99', vipSale: '$28.99' },
    {domain:'.SHOP', start_date:'15.02.2025', finish_date:'15.08.2025', remaining:'181 gün', cost: '$17.99', resellerSale: '$33.99', premiumSale: '$32.99', platiumSale: '$31.99', vipSale: '$29.99' },
    {domain:'.ONLINE', start_date:'20.03.2025', finish_date:'20.09.2025', remaining:'184 gün', cost: '$18.99', resellerSale: '$34.99', premiumSale: '$33.99', platiumSale: '$32.99', vipSale: '$30.99' },
    {domain:'.STORE', start_date:'25.04.2025', finish_date:'25.10.2025', remaining:'184 gün', cost: '$19.99', resellerSale: '$35.99', premiumSale: '$34.99', platiumSale: '$33.99', vipSale: '$31.99' },
    {domain:'.SITE', start_date:'30.05.2025', finish_date:'30.11.2025', remaining:'184 gün', cost: '$20.99', resellerSale: '$36.99', premiumSale: '$35.99', platiumSale: '$34.99', vipSale: '$32.99' },
    {domain:'.TECH', start_date:'05.06.2025', finish_date:'05.12.2025', remaining:'183 gün', cost: '$21.99', resellerSale: '$37.99', premiumSale: '$36.99', platiumSale: '$35.99', vipSale: '$33.99' },
    {domain:'.FUN', start_date:'10.07.2025', finish_date:'10.01.2026', remaining:'184 gün', cost: '$22.99', resellerSale: '$38.99', premiumSale: '$37.99', platiumSale: '$36.99', vipSale: '$34.99' },
    {domain:'.SPACE', start_date:'15.08.2025', finish_date:'15.02.2026', remaining:'184 gün', cost: '$23.99', resellerSale: '$39.99', premiumSale: '$38.99', platiumSale: '$37.99', vipSale: '$35.99' },
    {domain:'.APP', start_date:'20.09.2025', finish_date:'20.03.2026', remaining:'182 gün', cost: '$24.99', resellerSale: '$40.99', premiumSale: '$39.99', platiumSale: '$38.99', vipSale: '$36.99' },
    {domain:'.TECH', start_date:'25.10.2025', finish_date:'25.04.2026', remaining:'182 gün', cost: '$25.99', resellerSale: '$41.99', premiumSale: '$40.99', platiumSale: '$39.99', vipSale: '$37.99' },
    {domain:'.ONLINE', start_date:'30.11.2025', finish_date:'30.05.2026', remaining:'181 gün', cost: '$26.99', resellerSale: '$42.99', premiumSale: '$41.99', platiumSale: '$40.99', vipSale: '$38.99' },
    {domain:'.SHOP', start_date:'05.12.2025', finish_date:'05.06.2026', remaining:'183 gün', cost: '$27.99', resellerSale: '$43.99', premiumSale: '$42.99', platiumSale: '$41.99', vipSale: '$39.99' },
    {domain:'.FUN', start_date:'10.01.2026', finish_date:'10.07.2026', remaining:'181 gün', cost: '$28.99', resellerSale: '$44.99', premiumSale: '$43.99', platiumSale: '$42.99', vipSale: '$40.99' }
]);


const costValue = ref();
const saleValue = ref();
const date1 = ref();
const date2 = ref();
const addPriceModal = ref(false);
const selectedExtension = ref();
const selectedYear = ref();
const extensionList = ref([
{ name: '.com', cost: '8.00' }, { name: '.net', cost: '7.50' }, { name: '.org', cost: '9.00' }, { name: '.edu', cost: '12.00' }, { name: '.gov', cost: '15.00' }, { name: '.mil', cost: '14.50' }, { name: '.int', cost: '13.00' }, { name: '.biz', cost: '6.50' }, { name: '.info', cost: '5.00' }, { name: '.name', cost: '4.50' }, { name: '.pro', cost: '10.00' }, { name: '.museum', cost: '20.00' }, { name: '.coop', cost: '11.00' }, { name: '.aero', cost: '18.00' }, { name: '.jobs', cost: '16.00' }, { name: '.mobi', cost: '9.50' }, { name: '.travel', cost: '17.00' }, { name: '.asia', cost: '8.50' }, { name: '.cat', cost: '6.00' }, { name: '.tel', cost: '7.00' }, { name: '.post', cost: '22.00' }, { name: '.xxx', cost: '25.00' }, { name: '.xyz', cost: '3.00' }, { name: '.top', cost: '4.00' }, { name: '.site', cost: '5.50' }, { name: '.online', cost: '6.75' }, { name: '.tech', cost: '10.50' }, { name: '.store', cost: '12.50' }, { name: '.art', cost: '7.25' }, { name: '.club', cost: '5.25' }, { name: '.vip', cost: '9.25' }, { name: '.design', cost: '11.50' }
]);

const yearList = ref(Array.from({ length: 10 }, (_, i) => ({ name: (i + 1).toString() + ' ' + 'yıl' })));


watch(selectedExtension, (newValue) => {
  if (newValue) {
    costValue.value = '$' + newValue.cost;
    saleValue.value = '$' + (newValue.cost * 1.5);
  } else {
    costValue.value = null
    saleValue.value = null
  }
})

</script>


<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5 class="mb-4">Fiyat Listeleri</h5>
                <TabView class="sticky-tab">
                    <TabPanel>
                        <template #header>
                            <div class="flex align-items-center gap-2">
                                <i class="pi pi-globe text-xl"></i>
                                <span class="font-bold white-space-nowrap">Domain Fiyatları</span>
                            </div>
                        </template>
                        <DataTable :value="list" size="small"
                            class="small p-datatable-gridlines text-sm custom-hover header-center" stripedRows
                            removableSort :paginator="true" :rows="25" v-model:filters="filters" dataKey="id"
                            filterDisplay="row" :globalFilterFields="['domain', 'domain_group']">
                            <template #header>
                                <div class="flex justify-content-between flex-column sm:flex-row">
                                    <div class="flex flex-column sm:flex-row">
                                        <span class="p-input-icon-left mb-2">
                                            <i class="pi pi-search" />
                                            <InputText placeholder="Ara" style="width: 100%"
                                                v-model="filters['global'].value" />
                                        </span>
                                    </div>
                                    <div class="flex gap-3">
                                        <Button type="button" icon="pi pi-file-excel" label="Excel Çıktısı"
                                            class="p-button-outlined p-button-info mb-2" />
                                    </div>
                                </div>
                            </template>
                            <template #empty>
                                <div class="col-12 text-center text-bluegray-300">
                                    <div class="icon m-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="CurrentColor" width="5rem"
                                            height="5rem" viewBox="0 0 512 512">
                                            <path
                                                d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM182.4 382.5c-12.4 5.2-26.5-4.1-21.1-16.4c16-36.6 52.4-62.1 94.8-62.1s78.8 25.6 94.8 62.1c5.4 12.3-8.7 21.6-21.1 16.4c-22.4-9.5-47.4-14.8-73.7-14.8s-51.3 5.3-73.7 14.8zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                        </svg>
                                    </div>
                                    <p class="">Üzgünüz, sonuç Bulunumadı</p>
                                </div>
                            </template>
                            <template #loading> Tablo Yükleniyor Lütfen Bekleyin. </template>
                            <ColumnGroup type="header">
                                <Row>
                                    <Column header="Genel bilgiler" :colspan="3" />
                                    <Column header="Maliyetler" :colspan="5" />

                                    <Column class="surface-100 border-bluegray-200 text-bluegray-900" header="Reseller" :colspan="3" />
                                    <Column class="bg-green-100 border-green-300 text-green-900" header="Premium" :colspan="3" />
                                    <Column class="bg-orange-100 border-orange-200 text-orange-900" header="Platinum" :colspan="3" />
                                    <Column class="bg-purple-100 border-purple-200 text-purple-900" header="VIP" :colspan="3" />
                                    <Column header="Diğer Fiyatlar" :colspan="4" />
                                </Row>
                                <Row>
                                    <Column header="Domain" field="domain" />
                                    <Column header="Grup" field="domain_group" />
                                    <Column header="Döviz" field="currency" />

                                    <Column header="Kayıt" field="cost" />
                                    <Column header="Yenileme" field="backorder" />
                                    <Column header="Trustee" field="trustee" />
                                    <Column header="Restore" field="backorder" />
                                    <Column header="Trade" field="trustee" />

                                    <Column class="surface-100 border-bluegray-200 text-bluegray-900" header="Kayıt"
                                        field="reseller_register" />
                                    <Column class="surface-100 border-bluegray-200 text-bluegray-900" header="Transfer"
                                        field="reseller_transfer" />
                                    <Column class="surface-100 border-bluegray-200 text-bluegray-900" header="Yenileme"
                                        field="reseller_renew" />

                                    <Column class="bg-green-100 border-green-300 text-green-900" header="Kayıt"
                                        field="premium_register" />
                                    <Column class="bg-green-100 border-green-300 text-green-900" header="Transfer"
                                        field="premium_transfer" />
                                    <Column class="bg-green-100 border-green-300 text-green-900" header="Yenileme"
                                        field="premium_renew" />

                                    <Column class="bg-orange-100 border-orange-200 text-orange-900" header="Kayıt"
                                        field="platinum_register" />
                                    <Column class="bg-orange-100 border-orange-200 text-orange-900" header="Transfer"
                                        field="platinum_transfer" />
                                    <Column class="bg-orange-100 border-orange-200 text-orange-900" header="Yenileme"
                                        field="platinum_renew" />

                                    <Column class="bg-purple-100 border-purple-200 text-purple-900" header="Kayıt"
                                        field="vip_register" />
                                    <Column class="bg-purple-100 border-purple-200 text-purple-900" header="Transfer"
                                        field="vip_transfer" />
                                    <Column class="bg-purple-100 border-purple-200 text-purple-900" header="Yenileme"
                                        field="vip_renew" />

                                    <Column header="restore" field="restore" />
                                    <Column header="backorder" field="backorder" />
                                    <Column header="trustee" field="trustee" />
                                    <Column header="Trade" field="trustee" />

                                </Row>
                            </ColumnGroup>
                            <Column field="domain" header="Domain" sortable :showFilterMenu="false">
                                <template #body="{ data }">
                                    <span class="font-bold white-space-nowrap">{{ data.domain }} </span>
                                </template>
                                <template #filter="{ filterModel, filterCallback }">
                                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()"
                                        class="p-column-filter" placeholder="Filtre" />
                                </template>
                            </Column>
                            <Column field="domain_group" header="Domain Grubu" :showFilterMenu="false" sortable>
                                <template #body="{ data }">
                                    {{ data.domain_group }}
                                </template>
                                <template #filter="{ filterModel, filterCallback }">
                                    <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter
                                        :options="group" placeholder="Filtre" class="p-column-filter w-full" />
                                </template>
                            </Column>
                            <Column field="currency" header="Döviz" :showFilterMenu="false" sortable>
                                <template #body="{ data }">
                                    {{ data.currency }}
                                </template>
                                <template #filter="{ filterModel, filterCallback }">
                                    <MultiSelect v-model="filterModel.value" @change="filterCallback()" filter
                                        :options="currency" placeholder="Filtre" class="p-column-filter w-full" />
                                </template>
                            </Column>
                            <Column field="cost" header="Maliyet" :showFilterMenu="false" sortable>
                                <template #body="{ data }">
                                    {{ data.cost }}
                                </template>
                                <template #filter="{ filterModel, filterCallback }">
                                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()"
                                        class="p-column-filter" placeholder="Filtre" />
                                </template>
                            </Column>
                            <Column field="cost" header="Default"></Column>
                            <Column field="cost" header="Default"></Column>
                            <Column field="cost" header="Default"></Column>
                            <Column field="cost" header="Default"></Column>


                            <Column class="surface-100 border-bluegray-200 text-bluegray-900 text-center " field="" header="Default">
                                <template #body="{ data }">
                                    <span class="white-space-nowrap" :class="data.promotion == 1 ? 'font-bold' : '' ">{{ data.reseller_register }}  <i v-if="data.promotion == 1" class="pi pi-star-fill text-bluegray-200" v-tooltip="'Kampanyalı'"></i></span> 
                                </template>
                      
                                
                            </Column>
                            <Column class="surface-100 border-bluegray-200 text-bluegray-900 text-center"
                                field="reseller_transfer" header="Default"></Column>
                            <Column class="surface-100 border-bluegray-200 text-bluegray-900 text-center"
                                field="reseller_renew" header="Default"></Column>

                            <Column class="bg-green-100 border-green-300 text-green-900 text-center"
                                field="premium_register" header="Default"></Column>
                            <Column class="bg-green-100 border-green-300 text-green-900 text-center"
                                field="premium_transfer" header="Default"></Column>
                            <Column class="bg-green-100 border-green-300 text-green-900 text-center"
                                field="premium_renew" header="Default"></Column>

                            <Column class="bg-orange-100 border-orange-200 text-orange-900 text-center"
                                field="platinum_register" header="Default"></Column>
                            <Column class="bg-orange-100 border-orange-200 text-orange-900 text-center"
                                field="platinum_transfer" header="Default"></Column>
                            <Column class="bg-orange-100 border-orange-200 text-orange-900 text-center"
                                field="platinum_renew" header="Default"></Column>

                            <Column class="bg-purple-100 border-purple-200 text-purple-900 text-center"
                                field="vip_register" header="Default"></Column>
                            <Column class="bg-purple-100 border-purple-200 text-purple-900 text-center"
                                field="vip_transfer" header="Default"></Column>
                            <Column class="bg-purple-100 border-purple-200 text-purple-900 text-center"
                                field="vip_renew" header="Default"></Column>

                            <Column class="text-center" field="restore" header="Default"></Column>
                            <Column class="text-center" field="backorder" header="Default"></Column>
                            <Column class="text-center" field="trustee" header="Default"></Column>
                            <Column class="text-center" field="trustee" header="Default"></Column>


                        </DataTable>
                    </TabPanel>

                    <TabPanel>
                        <template #header>
                            <div class="flex align-items-center gap-2">
                                <i class="pi pi-shield text-xl"></i>
                                <span class="font-bold white-space-nowrap">SSL Fiyatları</span>
                            </div>
                        </template>
                        <DataTable :value="sslList" size="small" class="small custom-hover text-sm header-center"
                            stripedRows showGridlines removableSort :paginator="true" :rowHover="false" :rows="25"
                            dataKey="id">
                            <template #header>
                                <div class="flex justify-content-between flex-column sm:flex-row">
                                    <div class="flex flex-column sm:flex-row">
                                        <span class="p-input-icon-left mb-2">
                                            <i class="pi pi-search" />
                                            <InputText placeholder="Ara" style="width: 100%"
                                                v-model="filters['name'].value" />
                                        </span>
                                    </div>
                                    <div class="flex gap-3">
                                        <Button type="button" icon="pi pi-file-excel" label="Excel Çıktısı"
                                            class="p-button-outlined p-button-info mb-2" />
                                    </div>
                                </div>
                            </template>
                            <Column field="name" header="SSL" sortable></Column>
                            <Column field="currency" header="Döviz" sortable></Column>
                            <Column field="cost" header="Maliyet" sortable></Column>
                            <Column field="resellerSale" class="surface-100 border-bluegray-200 text-bluegray-900 "
                                header="Reseller" sortable></Column>
                            <Column field="premiumSale" class="bg-green-100 border-green-300 text-green-900 "
                                header="Premium" sortable></Column>
                            <Column field="platiumSale" class="bg-orange-100 border-orange-200 text-orange-900 "
                                header="Platium" sortable></Column>
                            <Column field="vipSale" class="bg-purple-100 border-purple-200 text-purple-900 "
                                header="VIP" sortable></Column>
                            <Column field="renewSale" header="Yenileme" sortable></Column>
                        </DataTable>
                    </TabPanel>

                    <TabPanel>
                        <template #header>
                            <div class="flex align-items-center gap-2">
                                <i class="pi pi-star text-xl"></i>
                                <span class="font-bold white-space-nowrap">Kampanya</span>
                            </div>
                        </template>
                        <DataTable :value="promotionList" size="small" class="small custom-hover text-sm header-center"
                            stripedRows showGridlines removableSort :paginator="true" :rowHover="false" :rows="25"
                            dataKey="id">
                            <template #header>
                                <div class="flex justify-content-between flex-column sm:flex-row">
                                    <div class="flex flex-column sm:flex-row">
                                        <span class="p-input-icon-left mb-2">
                                            <i class="pi pi-search" />
                                            <InputText placeholder="Ara" style="width: 100%"
                                                v-model="filters['name'].value" />
                                        </span>
                                    </div>
                                    <div class="flex gap-3">
                                        <Button type="button" icon="pi pi-file-excel" label="Excel Çıktısı"
                                            class="p-button-outlined p-button-info mb-2"  />
                                        <Button type="button" icon="pi pi-plus" label="Yeni Kampanya Tanımla"
                                            class="p-button p-button-success mb-2 mr-2" @click="addPriceModal = true" />
                                    </div>
                                </div>
                            </template>
                            <Column field="domain" header="Domain" sortable></Column>
                            <Column field="start_date" header="Başlangıç" sortable></Column>
                            <Column field="finish_date" header="Bitiş" sortable></Column>
                            <Column field="cost" header="Maliyet" sortable></Column>
                            <Column field="resellerSale" class="surface-100 border-bluegray-200 text-bluegray-900"
                                header="Reseller" sortable></Column>
                            <Column field="premiumSale" class="bg-green-100 border-green-300 text-green-900"
                                header="Premium" sortable></Column>
                            <Column field="platiumSale" class="bg-orange-100 border-orange-200 text-orange-900"
                                header="Platium" sortable></Column>
                            <Column field="vipSale" class="bg-purple-100 border-purple-200 text-purple-900" header="VIP"
                                sortable></Column>
                        </DataTable>
                    </TabPanel>

                </TabView>
            </div>
        </div>
    </div>

    <Dialog v-model:visible="addPriceModal" maximizable modal header="Yeni Kampanya Ekle" :style="{ width: '700px' , maxWidth:'100%' }" >

        <div class="grid mt-3">
            <div class="field col-12 md:col-6 px-3 p-1">
                <label for="name">Domain:</label>
                <Dropdown v-model="selectedExtension" :options="extensionList" filter optionLabel="name"  placeholder="Domain , SSL" class="w-full" filterPlaceholder="Domain Ara" />
            </div>
            <div class="field col-12 md:col-6 px-3 p-1">
                <label for="name">Yıl:</label>
                <MultiSelect v-model="selectedYear" display="chip" :options="yearList" optionLabel="name" placeholder="Yıl Seç"  class="w-full" />
            </div>
            <div class="field col-12 md:col-6 px-3 p-1">
                <label for="name">Maliyeti:</label>
                <InputText v-model="costValue" class="w-full p-input-filled" readonly placeholder="Maliyet Fiyatı" />
            </div>
            <div class="field col-12 md:col-6 px-3 p-1">
                <label for="name">Normal Satış Fiyatı:</label>
                <InputText v-model="saleValue" class="w-full p-input-filled" readonly placeholder="Normal Satış Fiyatı" />
            </div>
            <div class="field col-12 md:col-6 px-3 p-1">
                <label for="name">Reseller Satış:</label>
                <InputNumber mode="currency" currency="USD" locale="en-US" class="w-full" placeholder="$13.99" />
            </div>
            <div class="field col-12 md:col-6 px-3 p-1">
                <label for="name" class="text-green-600">Premium Satış:</label>
                <InputNumber mode="currency" currency="USD" locale="en-US" class="w-full" placeholder="$12.99" />
            </div>
            <div class="field col-12 md:col-6 px-3 p-1">
                <label for="name" class="text-orange-600">Platium Satış:</label>
                <InputNumber mode="currency" currency="USD" locale="en-US" class="w-full" placeholder="$11.49" />
            </div>
            <div class="field col-12 md:col-6 px-3 p-1">
                <label for="name" class="text-purple-600">VIP Satış:</label>
                <InputNumber mode="currency" currency="USD" locale="en-US" class="w-full" placeholder="$10.49" />
            </div>
            <div class="field col-12 md:col-6 px-3 p-1">
                <label for="name" class="block">Başlangıç Tarihi:</label>
                <Calendar v-model="date1" showButtonBar :manualInput="true" placeholder="17/04/2024" dateFormat="dd/mm/yy"  showIcon :showOnFocus="false" class="w-full" />
            </div>
            <div class="field col-12 md:col-6 px-3 p-1">
                <label for="name">Bitiş Tarihi:</label>
                <Calendar v-model="date2" showButtonBar :manualInput="true" placeholder="17/04/2024" dateFormat="dd/mm/yy"  showIcon :showOnFocus="false" class="w-full" />
            </div>

        </div>
        <template #footer>
            <ConfirmDialog group="headless"></ConfirmDialog>
            <Button label="Vazgeç" text @click="addPriceModal = false" />
            <Button label="Kaydet" icon="pi pi-check" severity="success" @click=" addPriceModal = false" />
        </template>
    </Dialog>

</template>

<style scoped lang="scss"></style>
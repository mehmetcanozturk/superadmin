<script setup>
    const goBack = () => {
      window.history.back();
    };
</script>

<template>

    <div class="px-5 min-h-screen flex justify-content-center align-items-center">
        <div class="z-1 text-center">
            <img src="/images/notfound.svg" @click="goBack"  width="400" class="max-w-full cursor-pointer" />
            <div class="font-bold text-5xl mt-3">Sanırım Kayboldun</div>
            <p class="line-height-3 mt-0 mb-5 text-600 text-lg font-medium">Sayfa Bulunumadı</p>
            <button type="button" class="p-button p-button-primary font-medium " @click="goBack">Geri Dön</button>
        </div>
    </div>
</template>

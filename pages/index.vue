<template>
    <main class="flex items-center justify-center bg-gray-100 min-h-screen pt-8">
        <section>
            <div class="flex items-center justify-center">
                <NuxtLogo class="max-w-[4rem] max-h-[4rem]"/>
                <h1 class="text-4xl font-bold ml-3">NuxtJS</h1>
            </div>
            <div class="max-w-3xl mx-auto mt-3">
                <div class="bg-white rounded-lg shadow p-6">
                    <h1 class="text-2xl font-medium">Welcome to the Ultimate Nuxt Template</h1>
                    <p class="text-gray-600 mt-3">This is some boilerplate code for creating a NuxtJS app. You will have a solid basis to start working on your project. Enjoy!</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'IndexPage'
})
</script>

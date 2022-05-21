<template>
    <main class="flex items-center justify-center bg-gray-100 min-h-screen pt-8">
        <section>
            <div class="flex items-center justify-center">
<!--                <NuxtLogo class="max-w-[4rem] max-h-[4rem]"/>-->
                <nuxt-img
                    width="60px"
                    src="https://nuxtjs.org/design-kit/colored-logo.svg"
                />
                <h1 class="text-4xl font-bold ml-3">NuxtJS</h1>
            </div>
            <div class="max-w-3xl mx-auto mt-3">
                <div class="bg-white rounded-lg shadow p-6">
                    <h1 class="text-2xl font-medium">Welcome to the Ultimate Nuxt Template</h1>
                    <p class="text-gray-600 mt-3">This is some boilerplate code for creating a NuxtJS app. You will have a solid basis to start working on your project. Enjoy!</p>
                </div>

                <nuxt-img
                    sizes="sm:100vw md:100vw lg:100vw"
                    src="/unsplash/photo-1653108826787-766c449f2cd2"
                    class="rounded-lg shadow w-full h-[300px] object-cover mt-5"
                />
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: 'IndexPage'
}
</script>

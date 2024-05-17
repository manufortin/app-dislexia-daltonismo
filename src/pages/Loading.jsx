import React from 'react'

//Loading page
function Loading() {
    return (
        <section>
            <div class="h-screen flex justify-center items-center">
                <h1 class="animate-pulse mb-4 text-3xl font-extrabold text-gray-900 dark:text-gray md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Cargando</span><span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">BETA</span><br /></h1>
            </div>
        </section>
    )
}

export default Loading
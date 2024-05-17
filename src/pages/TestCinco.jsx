import React from 'react'
import Layout from '../components/layout/Layout'

//Parte 5 test dislexia
function TestCinco() {
    return (
        <Layout>
            <section class="text-gray-700 body-font border-t border-gray-200">
                <div class="container px-20 py-16 mx-auto">
                    <div>
                        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 md:text-xl lg:text-6xl text-left"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Test Dislexia Niños | 5</span><span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded ms-2">BETA</span></h1>
                        <p class="text-lg font-normal text-gray-500 lg:text-xl py-4 text-justify">
                            En esta parte, identifique el objeto que se le presenta en la imagen a la izquierda, luego <strong>lea la palabra</strong> e indique ¿Con qué letra <strong>termina</strong> la palabra representada por la imagen?:</p>
                    </div>
                    <div class="">
                        <div class="absolute top-28 end-44">
                            <button type="button" class="flex items-center justify-center text-white bg-blue-600 rounded-full w-16 h-16 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                                <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12 5a7 7 0 0 0-7 7v1.17c.313-.11.65-.17 1-.17h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-6a9 9 0 0 1 18 0v6a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2c.35 0 .687.06 1 .17V12a7 7 0 0 0-7-7Z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div class="absolute top-28 end-24 md:h-1/2">
                            <button type="button" class="flex items-center justify-center text-white bg-green-600 rounded-full w-16 h-16 hover:bg-green-800 focus:ring-4 focus:ring-green-300 focus:outline-none">
                                <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M5 8a1 1 0 0 1 1 1v3a4.006 4.006 0 0 0 4 4h4a4.006 4.006 0 0 0 4-4V9a1 1 0 1 1 2 0v3.001A6.006 6.006 0 0 1 14.001 18H13v2h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2H9.999A6.006 6.006 0 0 1 4 12.001V9a1 1 0 0 1 1-1Z" clip-rule="evenodd" />
                                    <path d="M7 6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='py-5 flex grid grid-cols-2 md:flex grid-cols-1'>
                        <div class="px-20">
                            <div class="max-w-screen-lg bg-white border border-gray-200 rounded-lg shadow-lg">
                                <img class="rounded-t-lg" src="/assets/img/pics/gato.png" alt="" />
                                <div class="p-5">
                                    <p class="mb-3 font-normal text-gray-700 text-center text-lg">¿Con qué letra <strong>termina</strong> la palabra representada aquí?</p>
                                </div>
                            </div>
                        </div>
                        < div class="" >
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
                                <div class="grid gap-4">
                                    <div>
                                        <img class="h-auto max-w-full rounded-lg hover:scale-90 ease-in duration-300" src="/assets/img/letters/p.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img class="h-auto max-w-full rounded-lg hover:scale-90 ease-in duration-300" src="/assets/img/letters/v.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="grid gap-4">
                                    <div>
                                        <img class="h-auto max-w-full rounded-lg hover:scale-90 ease-in duration-300" src="/assets/img/letters/a.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img class="h-auto max-w-full rounded-lg hover:scale-90 ease-in duration-300" src="/assets/img/letters/f.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="grid gap-4">
                                    <div>
                                        <img class="h-auto max-w-full rounded-lg hover:scale-90 ease-in duration-300" src="/assets/img/letters/o.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img class="h-auto max-w-full rounded-lg hover:scale-90 ease-in duration-300" src="/assets/img/letters/z.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="grid gap-4">
                                    <div>
                                        <img class="h-auto max-w-full rounded-lg hover:scale-90 ease-in duration-300" src="/assets/img/letters/n.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img class="h-auto max-w-full rounded-lg hover:scale-90 ease-in duration-300" src="/assets/img/letters/v.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
                    <div class="w-full bg-gray-200 rounded-full mt-5">
                        <div class="bg-green-600 text-xs font-bold text-green-100 text-center p-0.5 leading-none rounded-full" style={{ width: '99.99%' }}>99.99%</div>
                    </div>
                    <div className='mt-10'>
                        <a href='/testcuatro'>
                            <button class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-red-600 via-red-600 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100">
                                Regresar
                                <svg class="w-[25px] h-[25px] text-white ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                                </svg>
                            </button>
                        </a>
                        <a href='/working'>
                            <button class="mt-3 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-green-600 via-green-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100">
                                Continuar
                                <svg class="w-[25px] h-[25px] text-white ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default TestCinco


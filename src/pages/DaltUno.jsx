import React from 'react'
import Layout from '../components/layout/Layout'
import ChangeImage from '../components/changer/ChangeImage'

//Daltonismo (Ishihara Tests)
function DaltUno() {
    return (
        <Layout>
            <section class="text-gray-700 body-font border-t border-gray-200">
                <div class="container px-20 py-16 mx-auto">
                    <div class="">
                        <div>
                            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 md:text-xl lg:text-6xl text-left"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Test Daltonismo | 1</span><span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded ms-2">BETA</span></h1>
                            <p class="text-lg font-normal text-gray-500 lg:text-xl py-4 text-justify">
                                Se le presentará una serie de platos con patrones de color que deberá identificar, luego <strong>indique</strong> ¿Qué <strong>muestra</strong> cada plato de la imagen?:</p>
                        </div>
                    </div>
                    <div class="block rounded-md bg-white shadow-md text-surface">
                        <div class="flex relative items-center text-center overflow-hidden bg-cover justify-center bg-no-repeat"  onClick={ChangeImage}>
                            <img id='image'
                                class="rounded-t-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200 hover:cursor-pointer"
                                src="assets/img/plates/Plate1.gif"
                                alt="" 
                                />
                        </div>
                        <div class="p-6">
                            <p class="mb-4 text-base">
                                ¿Qué observa en la imagen?
                            </p>
                            <div className='flex justify-center'>
                                <input type="text" id="answer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5" placeholder="Ingresar respuesta" required />
                            </div>
                            <p class="text-base text-surface/75 dark:text-neutral-300">
                                <small>Ishihara Test</small>
                            </p>
                        </div>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full mt-16">
                        <div class="bg-green-600 text-xs font-bold text-green-100 text-center p-0.5 leading-none rounded-full" style={{ width: '10%' }}>10%</div>
                    </div>
                    <div className='mt-10'>
                        <a href='/'>
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

export default DaltUno
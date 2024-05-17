import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'

//Homepage
function Home() {
    return (
        <Layout>
            <section class="bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/3951828/pexels-photo-3951828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-gray-700 bg-blend-multiply">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-5 lg:py-56">
                    <h1 class="hover:animate-pulse mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Tests <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded">v 0.9.9</span></h1>
                    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">¿Sabías que la dislexia y el daltonismo afectan a millones de personas?, Realiza pruebas rápidas y sencillas</p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#about" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Aprende más
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            <section>
                <div className='px-20'>
                    <section class="text-gray-700 body-font py-10" id='about'>
                        <div class="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                            <div class="place-self-center mr-auto lg:col-span-7">
                                <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-5xl">¿Qué es la dislexia?</h1>
                                <p class="mb-6 max-w-2xl font-regular text-gray-500 lg:mb-8 md:text-lg lg:text-xl py-5 text-justify">Dificultad del aprendizaje que afecta la lectura. Se caracteriza por problemas para leer con fluidez, escribir correctamente y decodificar palabras. No es un problema de inteligencia o visión.
                                    Las personas con dislexia pueden tener dificultades para comprender y disfrutar de la lectura. Afecta el vocabulario y conocimiento general.
                                    Detección temprana y apoyo adecuado son claves para el éxito.</p>
                                <a href="/testgeneral" class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    Pruebas
                                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                                <img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src="/assets/img/home_dis.jpg" alt="" />
                            </div>
                        </div>
                        <div class="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 border-t border-gray-200">
                            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                                <img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src="/assets/img/home_dalt.jpg" alt="" />
                            </div>
                            <div class="place-self-center lg:col-span-7">
                                <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-5xl">¿Qué es el daltonismo?</h1>
                                <p class="mb-6 max-w-2xl font-regular text-gray-500 lg:mb-8 md:text-lg lg:text-xl py-5 text-justify">El daltonismo es una condición que afecta la visión del color. Las personas con daltonismo tienen dificultad para distinguir entre ciertos colores, como el rojo y el verde, o el azul y el amarillo.
                                    No es una enfermedad, sino una condición hereditaria. No tiene cura, pero existen herramientas y estrategias para ayudar a las personas con daltonismo a vivir una vida normal.
                                    La detección temprana y el apoyo son importantes para el desarrollo y la autoestima.</p>
                                <a href="/daltuno" class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-green-600 via-green-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100">
                                    Pruebas
                                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </section>
                    <section class="text-gray-700 body-font border-t border-gray-200 mb-10">
                        <div class="container px-5 py-10 mx-auto">
                            <div class="place-self-center w-full mb-12">
                                <h2 class="text-l text-indigo-500 tracking-widest font-bold title-font mb-3">MÁS SOBRE LA DISLEXIA</h2>
                                <h1 class="text-4xl font-extrabold leading-none md:text-5xl xl:text-5xl">¿Cómo se ve la dislexia?</h1>
                            </div>
                            <div class="flex flex-wrap -m-4">
                                <div class="hover:scale-105 duration-300 p-4 md:w-1/3">
                                    <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                        <div class="flex items-center mb-3">
                                            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                </svg>
                                            </div>
                                            <h2 class="text-gray-900 text-lg title-font font-medium">Ideas</h2>
                                        </div>
                                        <div class="flex-grow">
                                            <p class="leading-relaxed text-base text-justify">Tiene ideas creativas, pero le cuesta ponerlas por escrito.
                                                puede leer, pero es laborioso y lleva mucho tiempo
                                                tiene gran dificultad para pronunciar palabras nuevas / desconocidas
                                                trabaja muy duro para estudiar para un examen de ortografía, pero no puede retener las palabras la semana siguiente</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="hover:scale-105 duration-300 p-4 md:w-1/3">
                                    <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                        <div class="flex items-center mb-3">
                                            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                            <h2 class="text-gray-900 text-lg title-font font-medium">Nivel</h2>
                                        </div>
                                        <div class="flex-grow">
                                            <p class="leading-relaxed text-base text-justify">Está detrás del nivel de grado en lectura y ortografía
                                                lleva mucho tiempo escribir a mano, incluso al copiar
                                                teme ir a la escuela
                                                tiene dificultad para hablar cuando trata de encontrar las palabras correctas; dice “cositas” o “como se llame”
                                                luchó para crear rimas</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="hover:scale-105 duration-300 p-4 md:w-1/3">
                                    <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                        <div class="flex items-center mb-3">
                                            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <circle cx="6" cy="6" r="3"></circle>
                                                    <circle cx="6" cy="18" r="3"></circle>
                                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                                </svg>
                                            </div>
                                            <h2 class="text-gray-900 text-lg title-font font-medium">Confusión</h2>
                                        </div>
                                        <div class="flex-grow">
                                            <p class="leading-relaxed text-base text-justify">Confunde izquierda y derecha
                                                tomó mucho tiempo aprender a atar los zapatos o todavía no puedo
                                                tiene uno o ambos padres que tuvieron problemas en la escuela
                                                no puede memorizar cosas simples como direcciones, números de teléfono y datos matemáticos básicos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="text-gray-700 body-font border-t border-gray-200 mb-10">
                        <div class="container px-5 py-10 mx-auto">
                            <div class="place-self-center w-full mb-12">
                                <h2 class="text-l text-indigo-500 tracking-widest font-bold title-font mb-3">¿QUÉ HAY SOBRE EL DALTONISMO?</h2>
                                <h1 class="text-4xl font-extrabold leading-none md:text-5xl xl:text-5xl">¿Cómo se manifiesta el daltonismo?</h1>
                            </div>
                            <div class="flex flex-wrap -m-4">
                                <div class="hover:scale-105 duration-300 p-4 md:w-1/3">
                                    <div class="flex rounded-lg h-full bg-green-100 p-8 flex-col">
                                        <div class="flex items-center mb-3">
                                            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                                <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <h2 class="text-gray-900 text-lg title-font font-medium">Deuteranopía</h2>
                                        </div>
                                        <div class="flex-grow">
                                            <p class="leading-relaxed text-base text-justify">Es la forma más común de daltonismo, afecta a aproximadamente el 1% de los hombres y el 0,05% de las mujeres. Las personas con deuteranopía tienen dificultad para distinguir entre el verde y el rojo, especialmente en tonos más claros.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="hover:scale-105 duration-300 p-4 md:w-1/3">
                                    <div class="flex rounded-lg h-full bg-red-100 p-8 flex-col">
                                        <div class="flex items-center mb-3">
                                            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                                <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                                    <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                            </div>
                                            <h2 class="text-gray-900 text-lg title-font font-medium">Protanopía</h2>
                                        </div>
                                        <div class="flex-grow">
                                            <p class="leading-relaxed text-base text-justify">Es la segunda forma más común de daltonismo, afecta a aproximadamente el 1% de los hombres y el 0,02% de las mujeres. Las personas con protanopía tienen dificultad para distinguir entre el rojo y el verde, especialmente en tonos más oscuros.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="hover:scale-105 duration-300 p-4 md:w-1/3">
                                    <div class="flex rounded-lg h-full bg-blue-100 p-8 flex-col">
                                        <div class="flex items-center mb-3">
                                            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                                <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <h2 class="text-gray-900 text-lg title-font font-medium">Tritanopía</h2>
                                        </div>
                                        <div class="flex-grow">
                                            <p class="leading-relaxed text-base text-justify">Es la forma menos común de daltonismo, afecta a aproximadamente el 0,001% de la población. Las personas con tritanopía tienen dificultad para distinguir entre el azul y el amarillo.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="bg-white mb-10 text-gray-700 body-font border-t border-gray-200">
                        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                            <div class="font-light text-gray-500 sm:text-lg">
                                <h2 class="mb-4 text-4xl font-extrabold text-gray-600">Dislexia y daltonismo: Más allá de las dificultades</h2>
                                <p class="mb-4 font-regular text-justify">La dislexia y el daltonismo son dos condiciones que afectan a millones de personas en el mundo. Aunque no son enfermedades, pueden tener un impacto significativo en la vida de quienes las padecen.
                                    Es importante valorar estas condiciones y comprender cómo afectan a las personas que las tienen. Esto nos ayudará a crear un mundo más inclusivo y comprensivo para todos.</p>
                                <p class="mb-4 font-regular text-justify">Para ello, debemos aprender más sobre estas condiciones, ser comprensivos y pacientes con las personas que las tienen, y celebrar sus fortalezas. Al hacerlo, podemos crear un mundo donde todos se sientan aceptados y valorados.</p>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-8">
                                <img class="hover:scale-110 duration-300 w-full rounded-lg" src="/assets/img/colors.jpg" alt="office content 1" />
                                <img class="hover:scale-110 duration-300 mt-4 w-full rounded-lg lg:mt-10" src="/assets/img/books.jpg" alt="office content 2" />
                            </div>
                        </div>
                    </section>
                    <a href="http://wa.me/50432106799" class="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000"><path d="M24 11.7c0 6.45-5.27 11.68-11.78 11.68-2.07 0-4-.53-5.7-1.45L0 24l2.13-6.27a11.57 11.57 0 0 1-1.7-6.04C.44 5.23 5.72 0 12.23 0 18.72 0 24 5.23 24 11.7M12.22 1.85c-5.46 0-9.9 4.41-9.9 9.83 0 2.15.7 4.14 1.88 5.76L2.96 21.1l3.8-1.2a9.9 9.9 0 0 0 5.46 1.62c5.46 0 9.9-4.4 9.9-9.83a9.88 9.88 0 0 0-9.9-9.83m5.95 12.52c-.08-.12-.27-.19-.56-.33-.28-.14-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.29-.75.93-.91 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43a8.64 8.64 0 0 1-1.6-1.98c-.18-.29-.03-.44.12-.58.13-.13.29-.34.43-.5.15-.17.2-.3.29-.48.1-.2.05-.36-.02-.5-.08-.15-.65-1.56-.9-2.13-.24-.58-.48-.48-.64-.48-.17 0-.37-.03-.56-.03-.2 0-.5.08-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.96.14.19 2 3.17 4.93 4.32 2.94 1.15 2.94.77 3.47.72.53-.05 1.7-.7 1.95-1.36.24-.67.24-1.25.17-1.37" /></svg>
                    </a>
                </div>
            </section>
        </Layout>
    )
}

export default Home
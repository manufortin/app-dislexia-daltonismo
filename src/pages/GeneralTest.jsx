import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'

//Teste General Dislexia
function GeneralTest() {
    return (
        <Layout>
            <section class="text-gray-700 body-font border-t border-gray-200">
                <div class="container px-14 py-20 mx-auto">
                    <div>
                        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-justify"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Test Dislexia</span><span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded ms-2">BETA</span></h1>
                        <p class="text-lg font-normal text-gray-500 lg:text-xl py-6 text-justify">
                            La dislexia afecta a 1 de cada 10 personas y puede causar dificultades para leer, escribir y deletrear.
                            No es un problema de inteligencia, pero puede tener un impacto negativo en la vida de las personas que no son diagnosticadas y no reciben ayuda.
                            Si cree que usted o alguien que conoce puede tener dislexia, complete la autoevaluación de 10 preguntas a continuación.</p>
                    </div>
                    <div class="flex flex-col text-center w-full mb-20 py-5">
                        <h2 class="text-s text-indigo-500 tracking-widest font-medium title-font mb-1">TEST PRELIMINAR</h2>
                        <h1 class="sm:text-5xl text-3xl font-extrabold text-gray-900">¿Tengo dislexia?</h1>
                    </div>
                    <div class="flex flex-wrap -m-10 text-justify">
                        <div class="p-4 md:w-1/2">
                            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <div class="hover:scale-105 duration-300 inline-flex items-center">
                                            <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="customStyle">
                                                <input type="checkbox"
                                                    class="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:scale-105 hover:before:opacity-0"
                                                    id="customStyle" />
                                                <span
                                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                        stroke="currentColor" stroke-width="1">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">¿Lees despacio?</h2>

                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">¿Tardas más tiempo que la mayoría de las personas en leer un texto de la misma longitud?
                                        ¿Te sientes como si estuvieras descifrando cada palabra en lugar de leer con fluidez?</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/2">
                            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <div class="hover:scale-105 duration-300 inline-flex items-center">
                                            <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="customStyle">
                                                <input type="checkbox"
                                                    class="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:scale-105 hover:before:opacity-0"
                                                    id="customStyle" />
                                                <span
                                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                        stroke="currentColor" stroke-width="1">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">¿Tuviste problemas para aprender a leer cuando estabas en la escuela?</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">¿Te tomó más tiempo que a tus compañeros aprender a leer?
                                        ¿Tuviste dificultades para comprender las letras, los sonidos y la fonética?</p>
                                </div>

                            </div>
                        </div>
                        <div class="p-4 md:w-1/2">
                            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <div class="hover:scale-105 duration-300 inline-flex items-center">
                                            <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="customStyle">
                                                <input type="checkbox"
                                                    class="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:scale-105 hover:before:opacity-0"
                                                    id="customStyle" />
                                                <span
                                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                        stroke="currentColor" stroke-width="1">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">¿A menudo tienes que leer algo dos o tres veces antes de que tenga sentido?</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">¿Te cuesta entender lo que lees la primera vez?
                                        ¿Necesitas releer el texto para comprender completamente el significado?</p>
                                </div>

                            </div>
                        </div>
                        <div class="p-4 md:w-1/2">
                            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <div class="hover:scale-105 duration-300 inline-flex items-center">
                                            <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="customStyle">
                                                <input type="checkbox"
                                                    class="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:scale-105 hover:before:opacity-0"
                                                    id="customStyle" />
                                                <span
                                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                        stroke="currentColor" stroke-width="1">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">¿Te sientes incómodo leyendo en voz alta?</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">¿Te sientes ansioso o nervioso al leer en voz alta?
                                        ¿Evitas leer en público por miedo a cometer errores?</p>
                                </div>

                            </div>
                        </div>
                        <div class="p-4 md:w-1/2">
                            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <div class="hover:scale-105 duration-300 inline-flex items-center">
                                            <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="customStyle">
                                                <input type="checkbox"
                                                    class="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:scale-105 hover:before:opacity-0"
                                                    id="customStyle" />
                                                <span
                                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                        stroke="currentColor" stroke-width="1">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">¿Omite, transpone o agrega letras cuando lee o escribe?</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">¿Cometes errores frecuentes como omitir letras, invertir el orden de las letras o agregar letras adicionales?
                                        ¿Te cuesta mantener la atención mientras lees o escribes?</p>
                                </div>

                            </div>
                        </div>
                        <div class="p-4 md:w-1/2">
                            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <div class="hover:scale-105 duration-300 inline-flex items-center">
                                            <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="customStyle">
                                                <input type="checkbox"
                                                    class="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:scale-105 hover:before:opacity-0"
                                                    id="customStyle" />
                                                <span
                                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                        stroke="currentColor" stroke-width="1">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">¿Te encuentras con que todavía tienes errores de ortografía en tu escritura incluso después del corrector ortográfico?</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">¿A pesar de usar el corrector ortográfico, sigues cometiendo errores de ortografía?
                                        ¿Te cuesta recordar cómo se escriben ciertas palabras?</p>
                                </div>

                            </div>
                        </div>
                        <div class="p-4 md:w-1/2">
                            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <div class="hover:scale-105 duration-300 inline-flex items-center">
                                            <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="customStyle">
                                                <input type="checkbox"
                                                    class="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:scale-105 hover:before:opacity-0"
                                                    id="customStyle" />
                                                <span
                                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                        stroke="currentColor" stroke-width="1">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">¿Te resulta difícil pronunciar palabras polisílabas poco comunes cuando lees?</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">¿Te cuesta pronunciar palabras largas o con varias sílabas?
                                        ¿Tienes que dividir las palabras en sílabas para poder pronunciarlas correctamente?</p>
                                </div>

                            </div>
                        </div>
                        <div class="p-4 md:w-1/2">
                            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <div class="hover:scale-105 duration-300 inline-flex items-center">
                                            <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="customStyle">
                                                <input type="checkbox"
                                                    class="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:scale-105 hover:before:opacity-0"
                                                    id="customStyle" />
                                                <span
                                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                        stroke="currentColor" stroke-width="1">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">¿Prefieres leer revistas o artículos cortos en lugar de libros y novelas más largos?</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">¿Te desanimas al leer textos extensos?
                                        ¿Prefieres leer textos concisos y de fácil digestión?</p>
                                </div>

                            </div>
                        </div>
                        <div class="p-4 md:w-1/2">
                            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <div class="hover:scale-105 duration-300 inline-flex items-center">
                                            <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="customStyle">
                                                <input type="checkbox"
                                                    class="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:scale-105 hover:before:opacity-0"
                                                    id="customStyle" />
                                                <span
                                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                        stroke="currentColor" stroke-width="1">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">Cuando estabas en la escuela, ¿te resultó extremadamente difícil aprender un idioma extranjero?</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">¿Tuviste dificultades para aprender vocabulario y gramática en un idioma extranjero?
                                        ¿Te costaba pronunciar correctamente las palabras en un idioma extranjero?</p>
                                </div>

                            </div>
                        </div>
                        <div class="p-4 md:w-1/2">
                            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <div class="hover:scale-105 duration-300 inline-flex items-center">
                                            <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="customStyle">
                                                <input type="checkbox"
                                                    class="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:scale-105 hover:before:opacity-0"
                                                    id="customStyle" />
                                                <span
                                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                        stroke="currentColor" stroke-width="1">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <h2 class="text-gray-900 text-lg title-font font-medium">¿Evita proyectos de trabajo o cursos que requieran una lectura extensa?</h2>
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">¿Tiendes a evitar tareas que impliquen leer grandes cantidades de texto?
                                        ¿Prefieres tareas que no requieran tanta lectura?</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full mt-16">
                        <div class="bg-green-600 text-xs font-bold text-green-100 text-center p-0.5 leading-none rounded-full" style={{ width: '16.67%' }}>16.67%</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="max-w-4xl mt-14 p-6 bg-white border border-gray-200 rounded-lg shadow">
                            <svg class="w-[40px] h-[40px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z" clip-rule="evenodd" />
                            </svg>
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Consideraciones</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-500">Si marcó siete o más de estas preguntas, podría ser un indicio de dislexia.  <br />Considere consultar con un especialista o solicitar una evaluación diagnóstica formal por parte de un examinador calificado. <br />Continuar con una prueba más especializada.</p>
                            <a href='/testuno'>
                                <button class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-green-600 via-green-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100">
                                    Más pruebas
                                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default GeneralTest
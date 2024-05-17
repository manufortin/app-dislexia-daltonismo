import React from 'react'
import Layout from '../components/layout/Layout'

//Tercera parte del test para dislexia
function TestTres() {
    return (
        <div>
            <Layout>
                <section class="text-gray-700 body-font border-t border-gray-200">
                    <div class="container px-20 py-16 mx-auto">
                        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 md:text-xl lg:text-6xl text-left"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Test Dislexia Niños | 3</span><span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded ms-2">BETA</span></h1>
                        <p class="text-lg font-normal text-gray-500 lg:text-xl py-4 text-justify">
                            Prueba de lectura, debe leer el siguiente texto y responder las preguntas sobre el mismo, para leer el texto debe colocar su cursor encima para descubrirlo:</p>

                        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-5xl">El Concierto Escolar</h1>
                        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-l sm:px-16 xl:px-48">ANEXO TEXTO DE DIAGNÓSTICO ESPECÍFICO.</p>


                        <p class="text-justify text-2xl mb-3 text-gray-500 blur hover:blur-none duration-500">El día 20 de Diciembre, todos los alumnos de los Colegios de la ciudad se reunieron en el teatro de la
                            Universidad, para celebrar un gran concierto. Cada uno de ellos tenía que actuar en una u otra parte del
                            programa. Este programa consistió en coros escolares, bailes regionales, parodias. </p>
                        <p class="text-gray-500 text-2xl text-justify blur hover:blur-none duration-500">Finalmente la representación de una comedia. El número de personas que asistió a esta fiesta fue de
                            620 persona.
                            La venta de entradas proporcionó más de 5000 lempiras. </p>

                        <div className='py-5 flex grid grid-cols-2 md:flex-col items-center'>
                            <div>
                                <h2 className='text-xl text-justify py-5'><span class="underline underline-offset-3 decoration-8 decoration-blue-400">Comprensión lectora del texto::</span></h2>
                                <div>
                                    <label for="pregunta1" class="py-2 block mb-2 text-m font-medium text-gray-900 text-justify">1: ¿Cuál es el titulo de la lectura?</label>
                                    <textarea id="pregunta1" rows="2" class="block p-2.5 w-3/4 text-m text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Escribe tu respuesta aquí..."></textarea>
                                </div>
                                <div>
                                    <label for="pregunta2" class="py-2 block mb-2 text-m font-medium text-gray-900 text-justify">2: ¿Dónde tuvo lugar el concierto?</label>
                                    <textarea id="pregunta2" rows="2" class="block p-2.5 w-3/4 text-m text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Escribe tu respuesta aquí..."></textarea>
                                </div>
                                <div>
                                    <label for="pregunta3" class="py-2 block mb-2 text-m font-medium text-gray-900 text-justify">3: ¿Cuándo se celebró?</label>
                                    <textarea id="pregunta3" rows="2" class="block p-2.5 w-3/4 text-m text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Escribe tu respuesta aquí..."></textarea>
                                </div>
                                <div>
                                    <label for="pregunta4" class="py-2 block mb-2 text-m font-medium text-gray-900 text-justify">4: ¿En qué consistió el programa? </label>
                                    <textarea id="pregunta4" rows="2" class="block p-2.5 w-3/4 text-m text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Escribe tu respuesta aquí..."></textarea>
                                </div>
                            </div>
                            <div class='md:flex hidden'>
                                <img class=" py-28 h-auto max-w-l mx-auto" src="/assets/img/universidad.png" alt="" />
                            </div>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full mt-5 mb-10">
                            <div class="bg-green-600 text-xs font-bold text-green-100 text-center p-0.5 leading-none rounded-full" style={{ width: '66.67%' }}>66.67%</div>
                        </div>
                        <div className=''>
                            <a href='/testdos'>
                                <button class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-red-600 via-red-600 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100">
                                    Regresar
                                    <svg class="w-[25px] h-[25px] text-white ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                                    </svg>
                                </button>
                            </a>
                            <a href='/testcuatro'>
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
        </div>
    )
}

export default TestTres
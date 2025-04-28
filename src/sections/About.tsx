'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-light/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">O <span className="text-primary">Nas</span></h2>
          <p className="text-gray-dark max-w-3xl mx-auto">
            Poznaj firmę Bogusław Król Art Bud - Twojego zaufanego partnera w kompleksowych remontach i wykończeniach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/about.jpg"
                alt="Bogusław Król Art Bud"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-lg max-w-xs">
              <p className="text-primary font-bold text-lg">Remontujemy od 2016 roku</p>
              <p className="text-gray-dark">Z pasją i profesjonalizmem realizujemy projekty remontowe.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col space-y-6"
          >
            <div>
              <h3 className="heading-md mb-4">Kim jesteśmy?</h3>
              <p className="text-gray-dark mb-4">
                Jesteśmy profesjonalną firmą remontową z siedzibą w Sosnowcu, specjalizującą się w kompleksowych remontach mieszkań i domów. 
                Nasz zespół składa się z doświadczonych fachowców, którzy z pasją podchodzą do każdego projektu.
              </p>
              <p className="text-gray-dark">
                Firma Bogusław Król Art Bud powstała w 2016 roku i od tego czasu zrealizowaliśmy setki projektów, 
                zyskując zaufanie i uznanie naszych klientów.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Jakość</h4>
                <p className="text-gray-dark text-sm">
                  Stawiamy na najwyższą jakość wykonania i używamy tylko sprawdzonych materiałów.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Terminowość</h4>
                <p className="text-gray-dark text-sm">
                  Dotrzymujemy ustalonych terminów, szanując czas naszych klientów.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Doświadczenie</h4>
                <p className="text-gray-dark text-sm">
                  Nasz zespół to doświadczeni fachowcy z wieloletnim stażem w branży.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Uczciwe ceny</h4>
                <p className="text-gray-dark text-sm">
                  Oferujemy konkurencyjne ceny przy zachowaniu najwyższej jakości usług.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

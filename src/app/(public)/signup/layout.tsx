'use client'
import type { ReactNode } from 'react'
import { LinkCustom } from '@components'
import Image from 'next/image'
import Lottie from 'lottie-react'
import boy from '@public/animations-lottie/boy-studying.json'

type LayoutSignupProps = {
  children: ReactNode
}

export default function LayoutSignup({ children }: LayoutSignupProps) {
  return (
    <section className="py-10  bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="p-1 px-10 md:px-0 xs:p-5 bg-gray-900 border border-gray-800 rounded-3xl">
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/2 p-8">
              <div className="py-12 md:max-w-md mx-auto">
                <div className="flex flex-wrap items-center justify-between -m-2 mb-2">
                  <div className="w-auto p-2">
                    <Image
                      width={100}
                      height={100}
                      src="/images/logo.png"
                      alt="logo"
                    />
                  </div>
                  <div className="w-auto p-2">
                    <LinkCustom href="/login">Já tem uma conta?</LinkCustom>
                  </div>
                </div>
                <div className="mb-3">
                  <h3 className="font-heading mb-3 text-3xl text-white font-black tracking-tight">
                    Cadastre sua Escola!
                  </h3>
                </div>
                {children}
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="hidden lg:flex flex-col justify-end py-16 px-8 text-center h-full rounded-3xl">
                <div className="md:max-w-md mx-auto ">
                  <Lottie animationData={boy} width={400} height={400} />
                  <h3 className="font-heading mb-3 text-3xl text-white font-black tracking-tight">
                    Melhore suas correções!
                  </h3>
                  <p className="mb-9 text-blue-100 font-bold">
                    Promovendo a originalidade e o aprendizado autêntico,
                    oferecemos serviços especializados para verificar e
                    aprimorar trabalhos escolares, eliminando o plágio e
                    garantindo o sucesso acadêmico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

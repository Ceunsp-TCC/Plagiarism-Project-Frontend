'use client'
import React from 'react'
import Image from 'next/image'
import { Button, Input, LinkCustom, ButtonLoading } from '@/components/.'
import Lottie from 'react-lottie'
import boy from '@public/animations-lottie/boy-studying.json'

export default function Login() {
  return (
    <>
      <section className="h-screen py-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="p-2 bg-white rounded-3xl">
            <div className="flex flex-wrap -m-8">
              <div className="w-full md:w-1/2 p-8">
                <div className="py-12 md:max-w-md mx-auto">
                  <div className="flex flex-wrap items-center justify-between -m-2 mb-24">
                    <div className="w-auto p-2">
                      <div className="w-auto p-2">
                        <Image
                          src="/images/logo1.png"
                          alt="Logo"
                          width={100}
                          height={60}
                        />
                      </div>
                    </div>
                    <div className="w-auto p-2 flex-none">
                      <Button
                        variant="secondary"
                        loading={() => <ButtonLoading />}
                        isLoading
                      >
                        Criar uma conta
                      </Button>
                    </div>
                  </div>
                  <div className="mb-10">
                    <h3 className="font-heading mb-3 text-3xl text-black font-black tracking-tight">
                      Entrar
                    </h3>
                    <p className="text-gray-500 font-bold">
                      Descubra um mundo de aprendizado autêntico e impecável!
                    </p>
                  </div>
                  <form>
                    <div className="flex flex-wrap -m-3">
                      <div className="w-full p-3">
                        <label
                          className="block mb-2 text-sm text-gray-500 font-bold"
                          htmlFor="signInLightReverseInput4-1"
                        >
                          Email
                        </label>
                        <Input type="email" placeholder="Digite seu e-mail" />
                      </div>
                      <div className="w-full p-3">
                        <label
                          className="block mb-2 text-sm text-gray-500 font-bold"
                          htmlFor="signInLightReverseInput4-2"
                        >
                          Senha
                        </label>
                        <Input type="password" placeholder="*************" />
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap items-center justify-between -m-3">
                          <div className="w-auto p-3">
                            <LinkCustom href="/Plagiarism-Project-Frontend/src/app/page.tsx">
                              Esqueceu a senha?
                            </LinkCustom>
                            <div className="flex items-center"></div>
                          </div>
                          <div className="w-auto p-3"></div>
                        </div>
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap md:justify-end -m-2">
                          <div className="w-full p-2">
                            <Button loading={() => <ButtonLoading />} isLoading>
                              Entrar
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap md:justify-end -m-2">
                          <div className="w-full p-2"></div>
                        </div>
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap md:justify-end -m-2">
                          <div className="w-full p-2"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div className=" hidden md:flex flex-col justify-end py-16 px-8 text-center h-full rounded-3xl bg-gray-100">
                  <Lottie
                    options={{ animationData: boy, autoplay: true, loop: true }}
                    isClickToPauseDisabled
                    width={550}
                    height={550}
                  />
                  <div className="md:max-w-md mx-auto">
                    <h3 className="font-heading mb-3 text-3xl text-black font-black tracking-tight">
                      Melhore suas correções!
                    </h3>
                    <p className="mb-9 text-blue-500 font-bold">
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
    </>
  )
}

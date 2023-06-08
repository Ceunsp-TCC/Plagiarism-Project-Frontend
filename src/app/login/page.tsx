import { Button, Input } from '@/components'

export default function Login() {
  return (
    <>
      <section className="py-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="p-10 bg-white rounded-3xl">
            <div className="flex flex-wrap -m-8">
              <div className="w-full md:w-1/2 p-8">
                <div className="py-12 md:max-w-md mx-auto">
                  <div className="flex flex-wrap items-center justify-between -m-2 mb-24">
                    <div className="max-w-full p-2"></div>
                    <div className="w-auto p-2">
                      <a
                        className="text-blue-500 hover:text-blue-600 font-bold"
                        href="#"
                      >
                        Create your account
                      </a>
                    </div>
                  </div>
                  <div className="mb-10">
                    <h3 className="font-heading mb-3 text-3xl text-black font-black tracking-tight">
                      Sign In to Zanrly
                    </h3>
                    <p className="text-gray-500 font-bold">
                      Lorem ipsum dolor sit amet, to the con adipiscing.
                      Volutpat tempor to the condim entum.
                    </p>
                  </div>
                  <form>
                    <div className="flex flex-wrap -m-3">
                      <div className="w-full p-3">
                        <label
                          className="block mb-2 text-sm text-gray-500 font-bold"
                          htmlFor="signInLightReverseInput4-1"
                        >
                          Email Address
                        </label>
                        <Input type="email" placeholder="Enter email address" />
                      </div>
                      <div className="w-full p-3">
                        <label
                          className="block mb-2 text-sm text-gray-500 font-bold"
                          htmlFor="signInLightReverseInput4-2"
                        >
                          Password
                        </label>
                        <Input type="password" placeholder="*************" />
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap items-center justify-between -m-3">
                          <div className="w-auto p-3">
                            <div className="flex items-center">
                              <input
                                className="opacity-0 absolute h-6 w-6"
                                id="signInLightReverseCheckbox4-1"
                                type="checkbox"
                              ></input>
                              <div className="flex flex-shrink-0 justify-center items-center w-6 h-6 mr-4 text-transparent bg-gray-100 border border-gray-200 border-neutral-200 rounded-md">
                                <svg
                                  width="9"
                                  height="7"
                                  viewBox="0 0 9 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.603516 3.77075L2.68685 5.85409L7.89518 0.645752"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </div>
                              <label
                                className="text-gray-500 font-bold"
                                htmlFor="signInLightReverseCheckbox4-1"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="w-auto p-3">
                            <a
                              className="text-blue-500 hover:text-blue-600 font-bold"
                              href="#"
                            >
                              Forgot password?
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap md:justify-end -m-2">
                          <div className="w-full p-2">
                            <Button href="#">Sign In</Button>
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap md:justify-end -m-2">
                          <div className="w-full p-2">
                            <a
                              className="flex items-center justify-center px-8 py-3.5 bg-white hover:bg-gray-50 focus:ring-4 focus:ring-blue-200 rounded-full"
                              href="#"
                            >
                              <span className="text-lg text-gray-900 text-center font-bold">
                                Sign in with Google
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap md:justify-end -m-2">
                          <div className="w-full p-2">
                            <a
                              className="flex items-center justify-center px-8 py-3.5 bg-white hover:bg-gray-50 focus:ring-4 focus:ring-blue-200 rounded-full"
                              href="#"
                            >
                              <span className="text-lg text-gray-900 text-center font-bold">
                                Sign in with Twitter
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div
                  className="flex flex-col justify-end py-16 px-8 text-center h-full rounded-3xl"
                  style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL}/zanrly-assets/images/sign-in/work.jpg')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'`,
                  }}
                >
                  <div className="md:max-w-md mx-auto">
                    <h3 className="font-heading mb-3 text-3xl text-white font-black tracking-tight">
                      Pure enjoyment with Zanrly
                    </h3>
                    <p className="mb-9 text-blue-100 font-bold">
                      Lorem ipsum dolor sit amet, to the con adipiscing.
                      Volutpat tempor to the condim entum.
                    </p>
                    <div className="flex flex-wrap justify-center -m-1">
                      <div className="w-auto p-1">
                        <a
                          className="inline-block w-3 h-3 bg-white rounded-full"
                          href="#"
                        ></a>
                      </div>
                      <div className="w-auto p-1">
                        <a
                          className="inline-block w-3 h-3 bg-blue-600 rounded-full"
                          href="#"
                        ></a>
                      </div>
                      <div className="w-auto p-1">
                        <a
                          className="inline-block w-3 h-3 bg-blue-600 rounded-full"
                          href="#"
                        ></a>
                      </div>
                      <div className="w-auto p-1">
                        <a
                          className="inline-block w-3 h-3 bg-blue-600 rounded-full"
                          href="#"
                        ></a>
                      </div>
                    </div>
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

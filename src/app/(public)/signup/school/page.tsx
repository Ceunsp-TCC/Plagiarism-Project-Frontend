import { Button } from '@/components'
export default function School() {
  return (
    <>
      <div className="mb-10">
        <h3 className="font-heading mb-3 text-3xl text-white font-black tracking-tight">
          Create free account
        </h3>
        <p className="text-gray-500 font-bold">
          Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat tempor to
          the condim entum.
        </p>
      </div>
      <form>
        <div className="flex flex-wrap -m-3">
          <div className="w-full p-3">
            <input
              className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-800 placeholder-gray-500 outline-none border border-gray-700 focus:ring-4 focus:ring-blue-200 rounded-full"
              id="signUpDarkBorderInput4-1"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="w-full p-3">
            <input
              className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-800 placeholder-gray-500 outline-none border border-gray-700 focus:ring-4 focus:ring-blue-200 rounded-full"
              id="signUpDarkBorderInput4-2"
              type="email"
              placeholder="Email address"
            />
          </div>
          <div className="w-full p-3">
            <input
              className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-800 placeholder-gray-500 outline-none border border-gray-700 focus:ring-4 focus:ring-blue-200 rounded-full"
              id="signUpDarkBorderInput4-3"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="w-full p-3">
            <div className="flex flex-wrap items-center justify-between -m-3">
              <div className="w-auto p-3">
                <div className="flex items-center">
                  <input
                    className="opacity-0 absolute h-6 w-6"
                    id="signUpDarkBorderCheckbox4-1"
                    type="checkbox"
                  />
                  <div className="flex flex-shrink-0 justify-center items-center w-6 h-6 mr-4 text-transparent bg-gray-800 border border-gray-700 rounded-md">
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
                    htmlFor="signUpDarkBorderCheckbox4-1"
                  >
                    <span>By signing up, I agree to the </span>
                    <a className="text-blue-500 hover:text-blue-600" href="#">
                      Terms &amp; Conditions
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-3">
            <div className="flex flex-wrap md:justify-end -m-2">
              <div className="w-full p-2">
                <Button>Avançar</Button>
              </div>
              <div className="w-full p-2">
                <Button variant="secondary">Voltar</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export function Hero2() {
  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 bg-white rounded-3xl">
          <div className="flex flex-col justify-center">
            <a href="#">
              <img src="zanrly-assets/logos/zanrly-logo-xl.svg" alt="" />
            </a>
            <ul className="-m-6 mb-7 text-center">
              <li className="inline-flex p-6">
                <a
                  className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                  href="#"
                >
                  Products
                </a>
              </li>
              <li className="inline-flex p-6">
                <a
                  className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="inline-flex p-6">
                <a
                  className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li className="inline-flex p-6">
                <a
                  className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                  href="#"
                >
                  Portfolio
                </a>
              </li>
              <li className="inline-flex p-6">
                <a
                  className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap justify-center -m-4 mb-12">
              <div className="w-auto p-4">
                <a className="block" href="#">
                  <img src="zanrly-assets/images/insta.svg" alt="" />
                </a>
              </div>
              <div className="w-auto p-4">
                <a className="block" href="#">
                  <img src="zanrly-assets/images/twitter.svg" alt="" />
                </a>
              </div>
              <div className="w-auto p-4">
                <a className="block" href="#">
                  <img src="zanrly-assets/images/footers/fb.svg" alt="" />
                </a>
              </div>
            </div>
            <p className="text-center font-bold">
              <span>Ⓒ Copyright. All rights reserved by </span>
              <a className="text-blue-500 hover:text-blue-600" href="#">
                Zanrly
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

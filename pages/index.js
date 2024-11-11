import Image from 'next/image';
import { FeaturedPosts } from '../sections/index';

export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex-col items-center justify-center hidden lg:flex">
        <div className="bg-transparent">
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 brightness-50 hidden lg:flex"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="relative px-6 lg:px-8 -mt-36" data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
            <div className="mx-auto max-w-2xl">
              <div className="text-center">
                <h1 className="text-4xl xl:text-6xl font-bold tracking-tight text-white">
                  Selamat datang di website resmi Desa Kerjo Kidul
                </h1>
                <p className="mt-6 text-lg leading-8 text-white">
                  Kerjo Kidul adalah sebuah desa yang terletak di kecamatan Ngadirojo,
                  Kabupaten Wonogiri, Jawa Tengah, Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex-col items-center justify-center background flex lg:hidden">
        <div className="bg-transparent">
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="text-center">
                <h1 className="text-4xl xl:text-6xl font-bold tracking-tight text-white text-bright">
                  Selamat datang di website resmi Desa Kerjo Kidul
                </h1>
                <p className="mt-6 text-lg leading-8 text-white text-bright">
                  Kerjo Kidul adalah sebuah desa yang terletak di kecamatan Ngadirojo,
                  Kabupaten Wonogiri, Jawa Tengah, Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center -mt-12">
        <div className="flex flex-wrap gap-4 justify-center z-10">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-gray-700/35 shadow-xl dark:bg-gray-800 dark:border-gray-700 text-center flex flex-col justify-center items-center w-60 xl:w-80 h-96" data-aos="zoom-out-up">
            <img src="/DrawKit-onlineshopping-Illustration-03.svg" className="h-56" alt="" />
            <a href="/">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Layanan Masyarakat
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Layanan masyarakat yang tersedia di Desa Kerjo Kidul
            </p>
            <a
              href="/"
              className="inline-flex font-medium items-center text-green-600 hover:underline"
            >
              Lebih lanjut
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 text-center flex flex-col justify-center items-center w-60 xl:w-80 shadow-gray-700/35 shadow-xl h-96" data-aos="zoom-out-up">
            <img src="/DrawKit-onlineshopping-Illustration-04.svg" className="h-56" alt="" />
            <a href="/potensidesa">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ">
                Potensi Desa
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Potensi Desa Kerjo Kidul
            </p>
            <a
              href="/potensidesa"
              className="inline-flex font-medium items-center text-green-600 hover:underline"
            >
              Lebih lanjut
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-gray-700/35 shadow-xl dark:bg-gray-800 dark:border-gray-700 text-center flex flex-col justify-center items-center w-60 xl:w-80 h-96" data-aos="zoom-out-up">
            <img src="/DrawKit-onlineshopping-Illustration-07.svg" className="h-56" alt="" />
            <a href="/pembangunan">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Pembangunan Desa
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Informasi pembangunan Desa Kerjo Kidul
            </p>
            <a
              href="/pembangunan"
              className="inline-flex font-medium items-center text-green-600 hover:underline"
            >
              Lebih lanjut
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-gray-700/35 shadow-xl dark:bg-gray-800 dark:border-gray-700 text-center flex flex-col justify-center items-center w-60 xl:w-80 h-96" data-aos="zoom-out-up">
            <img src="/DrawKit-onlineshopping-Illustration-15.svg" className="h-56" alt="" />
            <a href="/keuangan">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Keuangan Desa
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Laporan keuangan Desa Kerjo Kidul
            </p>
            <a
              href="/keuangan"
              className="inline-flex font-medium items-center text-green-600 hover:underline"
            >
              Lebih lanjut
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <section data-aos="fade-up">
        <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 mt-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white dark:text-white">
              Berita Terkini
            </h2>
            <p className="font-light text-white sm:text-xl">
              Berita terkini di Desa Kerjo Kidul
            </p>
          </div>
        </div>

        <div className="text-end px-4 mx-auto max-w-screen-xl lg:px-6 flex justify-center mb-10">
          <a
            className="inline-flex items-center justify-center bg-white py-3 px-6 font-dm text-base font-medium text-green-950 shadow-xl shadow-gray-700/35 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
            href="/berita"
          >
            Selengkapnya
            <svg
              className="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className='flex flex-col xl:flex-row gap-x-6 justify-center items-center p-10' data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500">
          <div className="container mx-auto">
            <FeaturedPosts />
          </div>
          <div id="default-carousel" className="relative w-full h-full lg:w-1/4 cursor-pointer" data-carousel="slide">
            {/* Carousel wrapper */}
            <a href='/perangkatdesa'>
              <div className='font-bold text-white text-center mb-2'>
                Perangkat Desa
              </div>
              <div className="relative h-56 overflow-hidden md:h-96">
                {/* Item 1 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <Image
                    layout="responsive"
                    objectFit='cover'
                    width={800}
                    height={1000}
                    src="/blank.jpg"
                    className="absolute top-1/2 left-1/2 w-full h-full"
                    alt="Kepala Desa"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <span className="text-white text-xl text-center mt-24 lg:mt-44"><span className='font-bold'>GIYANTO</span> <br></br>Kepala Desa</span>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <Image
                    layout="responsive"
                    objectFit='cover'
                    width={800}
                    height={1000}
                    src="/WINARTI.jpeg"
                    className="absolute top-1/2 left-1/2 w-full h-full"
                    alt="Sekretaris Desa"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <span className="text-white text-xl text-center mt-24 lg:mt-44"><span className='font-bold'>WINARTI</span>  <br></br>Sekretaris Desa</span>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <Image
                    layout="responsive"
                    objectFit='cover'
                    width={800}
                    height={1000}
                    src="/TRI.jpeg"
                    className="absolute top-1/2 left-1/2 w-full h-full"
                    alt="Kasi Pemerintahan"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <span className="text-white text-xl text-center mt-24 lg:mt-44"><span className='font-bold'>TRI SUJARWANTO</span>  <br></br>Kasi Pemerintahan</span>
                  </div>
                </div>
                {/* Item 4 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <Image
                    layout="responsive"
                    objectFit='cover'
                    width={800}
                    height={1000}
                    src="/ARIP.jpeg"
                    className="absolute top-1/2 left-1/2 w-full h-full"
                    alt="Kasi Kesejahteraan"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <span className="text-white text-xl text-center mt-24 lg:mt-44"><span className='font-bold'>ARIP SETYAWAN</span> <br></br>Kasi Kesejahteraan</span>
                  </div>
                </div>
                {/* Item 5 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <Image
                    layout="responsive"
                    objectFit='cover'
                    width={800}
                    height={1000}
                    src="/KASMO.jpeg"
                    className="absolute top-1/2 left-1/2 w-full h-full"
                    alt="Kasi Pelayanan"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <span className="text-white text-xl text-center mt-24 lg:mt-44"><span className='font-bold'>KASMO</span>  <br></br>Kasi Pelayanan</span>
                  </div>
                </div>
                {/* Item 6 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <Image
                    layout="responsive"
                    objectFit='cover'
                    width={800}
                    height={1000}
                    src="/SUSANTO.jpeg"
                    className="absolute top-1/2 left-1/2 w-full h-full"
                    alt="Kaur Keuangan"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <span className="text-white text-xl text-center mt-24 lg:mt-44"><span className='font-bold'>SUSANTO</span>  <br></br>Kaur Keuangan</span>
                  </div>
                </div>
                {/* Item 7 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <Image
                    layout="responsive"
                    objectFit='cover'
                    width={800}
                    height={1000}
                    src="/ARIS.jpeg"
                    className="absolute top-1/2 left-1/2 w-full h-full"
                    alt="Kaur Umum dan Perencanaan"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <span className="text-white text-xl text-center mt-24 lg:mt-44"><span className='font-bold'>ARIS MIDAYANI</span>  <br></br>Kaur Umum dan Perencanaan</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 6"
                data-carousel-slide-to="5"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 7"
                data-carousel-slide-to="6"
              ></button>
            </div>
            {/* Slider controls */}
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-gray-300 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none transition-all">
                <svg
                  className="w-4 h-4 text-green-700 dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-gray-300 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none transition-all">
                <svg
                  className="w-4 h-4 text-green-700 dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>



      </section>


      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31619.2270854114!2d111.00137250724177!3d-7.852781933262463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a2be780d7c1a5%3A0x5027a76e356a610!2sKerjo%20Kidul%2C%20Kec.%20Ngadirojo%2C%20Kabupaten%20Wonogiri%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1721183152764!5m2!1sid!2sid"
        width="600"
        height="450"
        style={{ border: 0 }}
        title="Google Maps showing Kerjo Kidul"
      />
    </main>
  );
}
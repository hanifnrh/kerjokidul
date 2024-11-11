import { MdOutlineFileDownload } from "react-icons/md";

export default function Perda() {
    return (
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <header className="mb-4 lg:mb-6 not-format">
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-center text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                            Peraturan Daerah
                        </h1>
                    </header>

                    <p className="lead leading-7 text-center">
                        Peraturan Daerah adalah salah satu produk peraturan perundang-undangan tingkat daerah yang dibentuk oleh Kepala Daerah, baik Daerah Propinsi maupun daerah kabupaten/Kota dengan Dewan Perwakilan Rakyat Daerah Provinsi maupun Kabupaten Kota.
                    </p>

                    <div className="mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow-gray-700/35 dark:bg-gray-800 dark:border-gray-700 text-center flex flex-col justify-center items-center" data-aos="zoom-out-up">
                        <a href="/peraturan_daerah_peraturan_daerah_kabupaten_wonogiri_nomor_4_tahun_2022_ocr.pdf" download>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Peraturan Daerah Kabupaten Wonogiri
                                Nomor 4 Tahun 2022
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Tentang Anggaran Pendapatan dan Belanja Daerah Tahun Anggaran 2023
                        </p>
                        <a
                            href="/peraturan_daerah_peraturan_daerah_kabupaten_wonogiri_nomor_4_tahun_2022_ocr.pdf"
                            download
                            className="inline-flex font-medium items-center text-green-600 hover:underline"
                        >
                            Download
                            <MdOutlineFileDownload className="ml-2" />
                        </a>
                    </div>

                    <div className="mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow-gray-700/35 dark:bg-gray-800 dark:border-gray-700 text-center flex flex-col justify-center items-center" data-aos="zoom-out-up">
                        <a href="/PERBUP 60 2019.pdf" download>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Peraturan Bupati Wonogiri
                                Nomor 6 Tahun 2019
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Petunjuk Pelaksanaan Peraturan Daerah Kabupaten Wonogiri Nomor 6 Tahun 2019 Tentang Penyelenggaraan Bantuan Hukum Bagi Warga Miskin
                        </p>
                        <a
                            href="/PERBUP 60 2019.pdf"
                            download
                            className="inline-flex font-medium items-center text-green-600 hover:underline"
                        >
                            Download
                            <MdOutlineFileDownload className="ml-2" />
                        </a>
                    </div>

                    <div className="mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow-gray-700/35 dark:bg-gray-800 dark:border-gray-700 text-center flex flex-col justify-center items-center" data-aos="zoom-out-up">
                        <a href="/Perbup 33 Tahun 2023.pdf" download>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Peraturan Bupati Wonogiri
                                Nomor 33 Tahun 2023
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Tentang Penyelenggaraan Perlindungan Masyarakat
                        </p>
                        <a
                            href="/Perbup 33 Tahun 2023.pdf"
                            download
                            className="inline-flex font-medium items-center text-green-600 hover:underline"
                        >
                            Download
                            <MdOutlineFileDownload className="ml-2" />
                        </a>
                    </div>

                    <div className="mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow-gray-700/35 dark:bg-gray-800 dark:border-gray-700 text-center flex flex-col justify-center items-center" data-aos="zoom-out-up">
                        <a href="/Perda Wngr 8_2023.pdf" download>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Peraturan Daerah Kabupaten Wonogiri
                                Nomor 8 Tahun 2023
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Tentang Pajak dan Retribusi Daerah
                        </p>
                        <a
                            href="/Perda Wngr 8_2023.pdf"
                            download
                            className="inline-flex font-medium items-center text-green-600 hover:underline"
                        >
                            Download
                            <MdOutlineFileDownload className="ml-2" />
                        </a>
                    </div>
                </article>
            </div>
        </main>
    );
}

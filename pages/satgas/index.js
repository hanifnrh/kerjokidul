import { FaFacebook, FaFax, FaGlobe, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';
export default function Satgas() {
    return (
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <header className="mb-4 lg:mb-6 not-format">
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white text-center">
                            SATUAN TUGAS PENGADUAN KASUS KEKERASAN PEREMPUAN DESA KERJO KIDUL
                        </h1>
                    </header>

                    <p className="lead leading-7 text-xl mt-10 text-center bg-gradient-to-r from-green-700 to-green-600 hover:bg-gradient-to-b dark:shadow-green-900 shadow-green-200 hover:shadow-2xl hover:shadow-green-400 hover:-tranneutral-y-px cursor-pointer text-white p-10 rounded-lg transition-all">
                        Tata cara pengaduan kasus kekerasan perempuan kepada komisi nasional anti kekerasan terhadap perempuan
                    </p>

                    <header className="mt-10 mb-4 lg:mb-6 not-format">
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                            1. Mengisi Formulir
                        </h1>
                    </header>
                    <div className="space-y-4 text-justify">
                        <p>Mengisi formulir pengaduan terlebih dahulu di tautan berikut <a href="https://bit.ly/PengaduanKomnasPerempuan" className="font-bold text-blue-800 hover:underline transition-all" target="_blank">bit.ly/PengaduanKomnasPerempuan</a></p>
                    </div>

                    <header className="mt-10 mb-4 lg:mb-6 not-format">
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                            2. Pengaduan dilakukan melalui:
                        </h1>
                    </header>
                    <div className="space-y-4 text-justify">
                        <p>
                            <span className="flex items-center">
                                <FaGlobe className="mr-2 text-blue-500" />
                                <a href="https://komnasperempuan.go.id" className="font-bold text-blue-800 hover:underline transition-all" target="_blank">
                                    Website: komnasperempuan.go.id
                                </a>
                            </span>
                            <span className="flex items-center">
                                <FaTwitter className="mr-2 text-blue-500" />
                                <a href="https://twitter.com/KomnasPerempuan" className="font-bold text-blue-800 hover:underline transition-all" target="_blank">
                                    Twitter: @KomnasPerempuan
                                </a>
                            </span>
                            <span className="flex items-center">
                                <FaFacebook className="mr-2 text-blue-700" />
                                <a href="https://facebook.com/KomnasPerempuan" className="font-bold text-blue-800 hover:underline transition-all" target="_blank">
                                    Facebook: Komnas Perempuan
                                </a>
                            </span>
                            <span className="flex items-center">
                                <FaInstagram className="mr-2 text-pink-500" />
                                <a href="https://instagram.com/KomnasPerempuan" className="font-bold text-blue-800 hover:underline transition-all" target="_blank">
                                    Instagram: @KomnasPerempuan
                                </a>
                            </span>
                            <span className="flex items-center">
                                <FaPhone className="mr-2 text-green-500" />
                                Telp: +62-21-3903963
                            </span>
                            <span className="flex items-center">
                                <FaFax className="mr-2 text-yellow-500" />
                                Fax: +62-21-3903922
                            </span>
                        </p>
                    </div>

                    <header className="mt-10 mb-4 lg:mb-6 not-format">
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                            3. Alur pengaduan
                        </h1>
                    </header>
                    <div className="space-y-4 text-justify">
                        <ul className="list-decimal list-inside space-y-2">
                            <li>Seluruh kasus yang masuk dibaca selambat-lambatnya dalam waktu 14 hari.</li>
                            <li>Berkas yang telah lengkap, selanjutnya disusun kertas posisi yang meliputi:
                                <ul className="list-disc list-inside ml-4 space-y-2">
                                    <li>Kronologi kasus</li>
                                    <li>HAM Perempuan yang dilanggar</li>
                                    <li>Instrumen nasional dan internasional yang melindungi</li>
                                    <li>Menentukan Lembaga tujuan surat dan tembusannya</li>
                                </ul>
                                Semua ini dilakukan selambat-lambatnya dalam waktu 14 hari.
                            </li>
                            <li>Untuk berkas yang tidak lengkap, pengadu akan dihubungi melalui telepon sebanyak 3 kali dalam waktu 2 bulan untuk melengkapi informasi yang dibutuhkan. Jika dalam waktu dua bulan pengadu/pelapor tidak dapat dihubungi dan tidak melengkapi berkasnya, maka kasus tidak dilanjutkan, namun dapat dilanjutkan dengan pengaduan yang baru.</li>
                            <li>Jika berdasarkan analisa kebutuhan korban bukan surat penyikapan seperti rekomendasi, maka pelapor diberikan surat rujukan/surat keterangan lapor atau surat pemantauan.</li>
                        </ul>
                    </div>

                    <header className="mt-10 mb-4 lg:mb-6 not-format">
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                            4. Komisi Nasional Anti Kekerasan Terhadap Perempuan
                        </h1>
                    </header>
                    <div className="space-y-4 text-justify">
                        <p>Komisi Nasional Anti Kekerasan terhadap Perempuan adalah lembaga negara yang independen untuk penegakan hak asasi manusia perempuan Indonesia. Komnas Perempuan dibentuk melalui Keputusan Presiden No. 181 Tahun 1998, yang diperkuat dengan Peraturan Presiden No. 65 Tahun 2005. Komnas Perempuan lahir
                            dari tuntutan masyarakat sipil., kepada pemerintah untuk mewujudkan tanggung jawab negara dalam menanggapi dan menangani persoalan kekerasan terhadap perempuan.
                        </p>
                    </div>

                </article>
            </div>
        </main>
    );
}

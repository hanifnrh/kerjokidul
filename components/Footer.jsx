import React from 'react';
import { MdEmail } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

export default function Footer() {
    return (
        <footer className="footer dark:bg-gray-900 text-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-6 md:mb-0 md:w-1/2">
                        <a href="/" className="flex flex-col justify-start items-start w-full gap-y-6">
                            <div className="flex items-center">
                                <img
                                    src="/kerjokidul.png"
                                    className="h-8 mr-3"
                                    alt="Desa Kerjo Kidul Logo"
                                />
                                <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
                                    Desa Kerjo Kidul
                                </span>
                            </div>
                            <p className='text-justify'>
                                Website desa dibangun dengan tujuan sebagai media pelayanan publik resmi desa, yang dibangun dan dikelola oleh tim desa setempat. Dengan memanfaatkan website penyelenggaraan pelayanan publik dapat dilakukan secara cepat dan mudah.
                            </p>
                        </a>
                    </div>
                    <div className="md:w-2/5">
                        <div className="bg-white text-black p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Kontak Kami</h3>
                            <p className="text-sm mb-4">Kami akan selalu ada untuk Anda</p>
                            <ul className="font-light flex flex-col">
                                <li className="mb-4 text-justify">
                                    Kantor Pemerintahan Desa Kerjo Kidul Kecamatan Ngadirojo Kabupaten Wonogiri. Kode Pos 57681
                                </li>
                                {/* <li className="flex items-center gap-x-2 mb-2">
                                    <IoCall className="text-lg" />
                                    <a href="/telepon" className="hover:text-green font-semibold transition-all">+62XX XXXX XXXX</a>
                                </li> */}
                                <li className="flex items-center gap-x-2 mb-2">
                                    <MdEmail className="text-lg" />
                                    <a href="mailto:pemdeskerjokidul@gmail.com" className="hover:underline font-semibold transition-all">pemdeskerjokidul@gmail.com</a>
                                </li>
                                <li className="flex items-center gap-x-2">
                                    <RiInstagramFill className="text-lg" />
                                    <a href="https://www.instagram.com/desakerjokidul/" className="hover:underline font-semibold transition-all">@desakerjokidul</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="text-center">
                    2020-2024 © Kementerian Komunikasi dan Informatika RI.
                </div>
            </div>
        </footer>
    );
}

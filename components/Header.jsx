import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

// Dropdown Menu Components
const DropdownMenu = ({ id, isOpen, onClick, children }) => {
    return (
        <div className="relative hover:bg-green-700 hover:text-white p-3 text-sm">
            <button
                onClick={() => onClick(id)}
                className="flex items-center space-x-2"
            >
                {React.Children.toArray(children).find(child => child.type === DropdownMenuTrigger)}
                <IoMdArrowDropdown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                    {React.Children.toArray(children).find(child => child.type === DropdownMenuContent)}
                </div>
            )}
        </div>
    );
};

const DropdownMenuTrigger = ({ children }) => (
    <>{children}</>
);

const DropdownMenuContent = ({ children }) => (
    <>{children}</>
);

const DropdownMenuItem = ({ href, target, rel, children }) => (
    <Link href={href} target={target} rel={rel}>
        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            {children}
        </a>
    </Link>
);

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="space-y-2">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-base font-semibold leading-7 text-gray-900"
            >
                {title}
                <IoMdArrowDropdown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="pl-4 space-y-2">
                    {children}
                </div>
            )}
        </div>
    );
};

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleDropdownClick = (id) => {
        setActiveDropdown(activeDropdown === id ? null : id);
    };

    return (
        <header className="sticky bg-white border-b inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex items-center justify-center gap-x-6 cursor-pointer">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-auto w-12" src="/kerjokidul.png" alt="" />
                    </a>
                    <div>
                        <div className="font-bold">Desa Kerjo Kidul</div>
                        <div>Kabupaten Wonogiri</div>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="justify-center items-center hidden lg:flex gap-x-6 xl:gap-x-12">
                    {/* Desktop Menu */}
                    <DropdownMenu id="profil-desa" isOpen={activeDropdown === "profil-desa"} onClick={handleDropdownClick}>
                        <DropdownMenuTrigger>Profil Desa</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem href="/tentang">Tentang Kami</DropdownMenuItem>
                            <DropdownMenuItem href="/visimisi">Visi & Misi</DropdownMenuItem>
                            <DropdownMenuItem href="/sejarah">Sejarah Desa</DropdownMenuItem>
                            <DropdownMenuItem href="/geografis">Geografis Desa</DropdownMenuItem>
                            <DropdownMenuItem href="/demografi">Demografi Desa</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu id="pemerintahan" isOpen={activeDropdown === "pemerintahan"} onClick={handleDropdownClick}>
                        <DropdownMenuTrigger>Pemerintahan</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem href="/organisasi">Struktur Organisasi</DropdownMenuItem>
                            <DropdownMenuItem href="/perangkat">Perangkat Desa</DropdownMenuItem>
                            <DropdownMenuItem href="/lembaga">Lembaga Desa</DropdownMenuItem>
                            <DropdownMenuItem href="/perda">Peraturan Daerah</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu id="informasi" isOpen={activeDropdown === "informasi"} onClick={handleDropdownClick}>
                        <DropdownMenuTrigger>Informasi</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem href="/berita">Berita</DropdownMenuItem>
                            <DropdownMenuItem href="/pengumuman">Pengumuman</DropdownMenuItem>
                            <DropdownMenuItem href="/agenda">Agenda Kegiatan</DropdownMenuItem>
                            <DropdownMenuItem href="/galeri">Galeri</DropdownMenuItem>
                            <DropdownMenuItem href="/download">Download</DropdownMenuItem>
                            <DropdownMenuItem href="/apbdesa">APBDesa</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu id="layanan" isOpen={activeDropdown === "layanan"} onClick={handleDropdownClick}>
                        <DropdownMenuTrigger>Layanan</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem href="/layanan">Layanan Umum</DropdownMenuItem>
                            <DropdownMenuItem href="/satgas">Aduan Satgas</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu id="potensi" isOpen={activeDropdown === "potensi"} onClick={handleDropdownClick}>
                        <DropdownMenuTrigger>Potensi</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem href="/potensidesa">Potensi Desa</DropdownMenuItem>
                            <DropdownMenuItem href="/potensiumkm">Potensi UMKM</DropdownMenuItem>
                            <DropdownMenuItem href="/potensipertanian">Potensi Pertanian</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu id="fitur" isOpen={activeDropdown === "fitur"} onClick={handleDropdownClick}>
                        <DropdownMenuTrigger>Fitur</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem href="https://kalkulator-stunting.site/" target="_blank" rel="noopener noreferrer">Kalkulator Stunting</DropdownMenuItem>
                            <DropdownMenuItem href="https://inventarisasi.neocities.org/">Tanaman Obat</DropdownMenuItem>
                            <DropdownMenuItem href="https://docs.google.com/forms/d/e/1FAIpQLSffk_mvmocLmQ7Iii2RKJAq_GVFONcHq1VPeGJKOPc5ZyG30g/viewform" target="_blank" rel="noopener noreferrer">Upload Berita</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
            {/* Mobile menu */}
            <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-50 bg-gray-900/50"></div>
                <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src="/kerjokidul.png" alt="" />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 space-y-4">
                        <Accordion title="Profil Desa">
                            <Link href="/tentang">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Tentang Kami</a>
                            </Link>
                            <Link href="/visimisi">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Visi & Misi</a>
                            </Link>
                            <Link href="/sejarah">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Sejarah Desa</a>
                            </Link>
                            <Link href="/geografis">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Geografis Desa</a>
                            </Link>
                            <Link href="/demografi">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Demografi Desa</a>
                            </Link>
                        </Accordion>
                        <Accordion title="Pemerintahan">
                            <Link href="/organisasi">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Struktur Organisasi</a>
                            </Link>
                            <Link href="/perangkat">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Perangkat Desa</a>
                            </Link>
                            <Link href="/lembaga">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Lembaga Desa</a>
                            </Link>
                            <Link href="/perda">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Peraturan Daerah</a>
                            </Link>
                        </Accordion>
                        <Accordion title="Informasi">
                            <Link href="/berita">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Berita</a>
                            </Link>
                            <Link href="/pengumuman">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Pengumuman</a>
                            </Link>
                            <Link href="/agenda">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Agenda Kegiatan</a>
                            </Link>
                            <Link href="/galeri">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Galeri</a>
                            </Link>
                            <Link href="/download">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Download</a>
                            </Link>
                            <Link href="/apbdesa">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">APBDesa</a>
                            </Link>
                        </Accordion>

                        <Accordion title="Layanan">
                            <Link href="/layanan" target="_blank">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Layanan Umum</a>
                            </Link>
                            <Link href="/satgas">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Aduan Satgas</a>
                            </Link>
                        </Accordion>

                        <Accordion title="Potensi">
                            <Link href="/potensidesa">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Potensi Desa</a>
                            </Link>
                            <Link href="/potensiumkm">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Potensi UMKM</a>
                            </Link>
                            <Link href="/potensipertanian">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Potensi Pertanian</a>
                            </Link>
                        </Accordion>

                        <Accordion title="Fitur">
                            <Link href="https://kalkulator-stunting.vercel.app/" target="_blank">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Kalkulator Stunting</a>
                            </Link>
                            <Link href="https://inventarisasi.neocities.org/">
                                <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Tanaman Obat</a>
                            </Link>
                        </Accordion>
                    </div>
                </div>
            </div>
        </header>
    );
}

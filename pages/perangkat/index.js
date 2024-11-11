// pages/index.tsx atau file komponen yang sesuai
import Link from 'next/link';

export default function PerangkatDesa() {
    const members = [
        { id: 'giyanto', name: 'Giyanto', position: 'Kepala Desa', image: '/blank.jpg' },
        { id: 'winarti', name: 'Winarti', position: 'Sekretaris Desa', image: '/WINARTI.jpeg' },
        { id: 'tri', name: 'Tri Sujarwanto', position: 'Kasi Pemerintahan', image: '/TRI.jpeg' },
        { id: 'arip', name: 'Arip Setyawan', position: 'Kasi Kesejahteraan', image: '/ARIP.jpeg' },
        { id: 'kasmo', name: 'Kasmo', position: 'Kasi Pelayanan', image: '/KASMO.jpeg' },
        { id: 'susanto', name: 'Susanto', position: 'Kaur Keuangan', image: '/SUSANTO.jpeg' },
        { id: 'aris', name: 'Aris Midayani', position: 'Kaur Umum dan Perencanaan', image: '/ARIS.jpeg' },
    ];

    return (
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
            <div className="px-4 mx-auto max-w-screen-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {members.map((member) => (
                        <div key={member.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <Link href={`/${member.id}`}>
                                <a>
                                    <img className="w-full h-64 object-cover rounded-t-lg" src={member.image} alt={member.name} />
                                </a>
                            </Link>
                            <div className="p-5 flex flex-col justify-center items-center">
                                <Link href={`/${member.id}`}>
                                    <a>
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{member.name}</h5>
                                    </a>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{member.position}</p>
                                <Link href={`/${member.id}`}>
                                    <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-green-700 to-green-600 hover:bg-gradient-to-b dark:shadow-green-900 shadow-green-200 hover:shadow-2xl hover:shadow-green-400 hover:-tranneutral-y-px cursor-pointer rounded-md">
                                        Detail
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

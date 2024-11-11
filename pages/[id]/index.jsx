// pages/[id].jsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const members = [
    { id: 'giyanto', name: 'Giyanto', position: 'Kepala Desa', nip: '-', image: '/blank.jpg', lastUpdated: '2023-08-07' },
    { id: 'winarti', name: 'Winarti', position: 'Sekretaris Desa', nip: '-', image: '/WINARTI.jpeg', lastUpdated: '2023-08-07' },
    { id: 'tri', name: 'Tri Sujarwanto', position: 'Kasi Pemerintahan', nip: '-', image: '/TRI.jpeg', lastUpdated: '2023-08-07' },
    { id: 'arip', name: 'Arip Setyawan', position: 'Kasi Kesejahteraan', nip: '-', image: '/ARIP.jpeg', lastUpdated: '2023-08-07' },
    { id: 'kasmo', name: 'Kasmo', position: 'Kasi Pelayanan', nip: '-', image: '/KASMO.jpeg', lastUpdated: '2023-08-07' },
    { id: 'susanto', name: 'Susanto', position: 'Kaur Keuangan', nip: '-', image: '/SUSANTO.jpeg', lastUpdated: '2023-08-07' },
    { id: 'aris', name: 'Aris Midayani', position: 'Kaur Umum dan Perencanaan', nip: '-', image: '/ARIS.jpeg', lastUpdated: '2023-08-07' },
];

const DetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [member, setMember] = useState(undefined);

    useEffect(() => {
        if (id) {
            const foundMember = members.find(member => member.id === id);
            setMember(foundMember);
        }
    }, [id]);

    if (!member) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 antialiased flex items-center justify-center p-4">
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6">
                <div className="flex flex-col lg:flex-row items-center">
                    <img className="w-96 h-96 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6" src={member.image} alt={member.name} />
                    <div className="w-full">
                        <div className="mb-2">
                            <span className="font-semibold text-gray-900 dark:text-white">Nama</span>
                            <span className="mx-2">:</span>
                            <span className="text-gray-700 dark:text-gray-400">{member.name}</span>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold text-gray-900 dark:text-white">Jabatan</span>
                            <span className="mx-2">:</span>
                            <span className="text-gray-700 dark:text-gray-400">{member.position}</span>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold text-gray-900 dark:text-white">NIP</span>
                            <span className="mx-2">:</span>
                            <span className="text-gray-700 dark:text-gray-400">{member.nip}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;

export default function PotensiPertanian() {
    const dataPertanian = [
        {
            title: "Padi",
            description: `Desa Kerjo Kidul, Kecamatan Ngadirojo, Kabupaten Wonogiri memiliki potensi besar dalam pertanian tanaman padi. Luas tanah yang digunakan mencapai ±500 hektar dengan jenis tanaman padi IR-64 dan Ciherang, menghasilkan ±2.500 ton produksi tahunan. Tanah subur dengan pH 6,5 dan sumber air irigasi dari sungai dan sumur bor. Pengolahan tanah dilakukan secara tradisional, penanaman pada musim hujan, dan pengairan menggunakan sistem irigasi tradisional dan modern. Penggunaan teknologi seperti traktor dan mesin tanam telah meningkatkan efisiensi dalam proses pertanian. Pengembangan varietas padi yang tahan hama dan penyakit juga telah dilakukan untuk meningkatkan kualitas produksi.`,
            image: "https://ketahananpangan.semarangkota.go.id/v3/content/images/Padi.jpg"
        },
        {
            title: "Singkong",
            description: `Desa Kerjo Kidul, Kecamatan Ngadirojo, Kabupaten Wonogiri memiliki potensi pertanian yang sangat baik untuk tanaman singkong. Lahan pertanian yang subur dan iklim yang cocok membuat daerah ini sangat sesuai untuk budidaya singkong. Budidaya singkong di Desa Kerjo Kidul telah dilakukan oleh masyarakat setempat selama beberapa generasi, sehingga petani lokal memiliki pengetahuan dan keterampilan yang baik dalam budidaya pohon ini. Beberapa tahun terakhir, pemerintah Kabupaten Wonogiri telah melakukan berbagai upaya untuk meningkatkan pertanian di Desa Kerjo Kidul, seperti pelatihan dan penyediaan sumber daya untuk petani lokal. Selain itu, lokasi desa ini juga sangat strategis karena dekat dengan pasar-pasar utama di Wonogiri dan daerah sekitarnya, sehingga petani dapat dengan mudah menjual hasil panennya.`,
            image: "https://awsimages.detik.net.id/community/media/visual/2023/10/13/manfaat-daun-singkong-1_169.jpeg?w=1200"
        },
        {
            title: "Kacang Tanah",
            description: `Desa Kerjo Kidul, Kecamatan Ngadirojo, Kabupaten Wonogiri, terdapat 50 hektar lahan yang ditanami dengan kacang tanah. Dalam luasan tersebut, terdapat sekitar ±25.000 pohon kacang tanah yang berusia lebih dari 6 bulan. Jenis kacang tanah yang ditanam oleh petani di Desa Kerjo Kidul adalah kacang tanah jenis "Beraspal" yang memiliki kualitas baik dan umur panjang. Dalam hal penggunaan teknologi pertanian, petani di Desa Kerjo Kidul menggunakan teknologi sistem irigasi yang cukup efektif untuk mengairi lahan-lahan tersebut. Selain itu, petani juga menggunakan pestisida organik dan kimia untuk mengendalikan hama dan penyakit pada tanaman kacang tanah. Berdasarkan data survei, produksi kacang tanah di Desa Kerjo Kidul sekitar 500 ton per tahun dengan harga jual rata-rata sekitar Rp10.000 per kilogram.`,
            image: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1695018704/attached_image/11-manfaat-kacang-tanah-bagi-kesehatan-tubuh.jpg"
        },
        {
            title: "Jambu Mete",
            description: `Desa Kerjo Kidul, Kecamatan Ngadirojo, Kabupaten Wonogiri memiliki luas lahan pertanian sekitar 8.400 hektar dan kondisi lingkungan yang mendukung, telah berhasil mengembangkan budidaya jambu mete. Produktivitas yang tinggi, rata-rata 10 ton per hektar, serta dukungan pemerintah telah menjadikan jambu mete sebagai komoditas unggulan di wilayah ini. Permintaan pasar yang terus meningkat, baik untuk konsumsi langsung maupun untuk tujuan medis, semakin memperkuat potensi pengembangan budidaya jambu mete di masa depan. Selain itu, pemerintah setempat telah mengimplementasikan inisiatif untuk mendukung perkembangan sektor pertanian, termasuk memberikan pelatihan dan fasilitas kredit kepada petani.`,
            image: "https://greenmedia.co.id/wp-content/uploads/2024/01/Jambu-Mete.jpg"
        },
        {
            title: "Jagung",
            description: `Desa Kerjo Kidul, Kecamatan Ngadirojo, Kabupaten Wonogiri memiliki potensi pertanian yang sangat baik untuk tanaman jagung. Luas lahan sawah irigasi mencapai 500 hektar, dengan kondisi tanah yang subur dan tingkat kesuburan yang tinggi. Berdasarkan data survei Balai Pengkajian Teknologi Pertanian (BPTP) pada tahun 2022, diperkirakan bahwa produksi jagung di Desa Kerjo Kidul dapat mencapai 10.000 ton per tahun. Dengan demikian, inventarisasi potensi pertanian tanaman jagung ini dapat menjadi acuan bagi petani dan pemerintah setempat dalam meningkatkan produksi dan kualitas hasil pertanian.`,
            image: "https://umsu.ac.id/health/wp-content/uploads/2023/09/Manfaat-Jagung-Untuk-Kesehatan-scaled.jpg"
        },
    ];

    return (
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <header className="mb-4 lg:mb-6 not-format">
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                            Potensi Pertanian Desa Kerjo Kidul
                        </h1>
                    </header>
                    {dataPertanian.map((item, index) => (
                        <section key={index} className="mb-8">
                            <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white mb-2">
                                {item.title}
                            </h2>
                            <img src={item.image} alt={item.title} className="mb-4 w-full h-auto rounded" />
                            <p className="leading-7 text-justify">
                                {item.description}
                            </p>
                        </section>
                    ))}
                </article>
            </div>
        </main>
    );
}

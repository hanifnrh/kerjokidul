import { useEffect } from 'react';

export default function PotensiDesa() {
    useEffect(() => {

        const getChartOptions = () => {
            return {
                series: [2199, 2305],
                colors: ["#eb4899", "#3b82f6"],
                chart: {
                    height: 320,
                    width: "100%",
                    type: "donut",
                },
                stroke: {
                    colors: ["transparent"],
                    lineCap: "",
                },
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontFamily: "Inter, sans-serif",
                                    offsetY: 20,
                                },
                                total: {
                                    showAlways: true,
                                    show: true,
                                    label: "Penduduk",
                                    fontFamily: "Inter, sans-serif",
                                    formatter: function (w) {
                                        const sum = w.globals.seriesTotals.reduce((a, b) => {
                                            return a + b
                                        }, 0)
                                        return sum + ' jiwa'
                                    },
                                },
                                value: {
                                    show: true,
                                    fontFamily: "Inter, sans-serif",
                                    offsetY: -20,
                                    formatter: function (value) {
                                        return value + "k"
                                    },
                                },
                            },
                            size: "80%",
                        },
                    },
                },
                grid: {
                    padding: {
                        top: -2,
                    },
                },
                labels: ["Perempuan", "Laki-laki"],
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    position: "bottom",
                    fontFamily: "Inter, sans-serif",
                },
                yaxis: {
                    labels: {
                        formatter: function (value) {
                            return value + " jiwa"
                        },
                    },
                },
                xaxis: {
                    labels: {
                        formatter: function (value) {
                            return value + " jiwa"
                        },
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                },
            }
        }

        if (document.getElementById("donut-chart") && typeof ApexCharts !== 'undefined') {
            const chart = new ApexCharts(document.getElementById("donut-chart"), getChartOptions());
            chart.render();

            // Get all the checkboxes by their class name
            const checkboxes = document.querySelectorAll('#devices input[type="checkbox"]');

            // Function to handle the checkbox change event
            function handleCheckboxChange(event, chart) {
                const checkbox = event.target;
                if (checkbox.checked) {
                    switch (checkbox.value) {
                        case 'desktop':
                            chart.updateSeries([15.1, 22.5, 4.4, 8.4]);
                            break;
                        case 'tablet':
                            chart.updateSeries([25.1, 26.5, 1.4, 3.4]);
                            break;
                        case 'mobile':
                            chart.updateSeries([45.1, 27.5, 8.4, 2.4]);
                            break;
                        default:
                            chart.updateSeries([55.1, 28.5, 1.4, 5.4]);
                    }

                } else {
                    chart.updateSeries([35.1, 23.5, 2.4, 5.4]);
                }
            }

            // Attach the event listener to each checkbox
            checkboxes.forEach((checkbox) => {
                checkbox.addEventListener('change', (event) => handleCheckboxChange(event, chart));
            });
        }


        const getChartOptions2 = () => {
            return {
                series: [71, 164, 659],
                colors: ["#1C64F2", "#16BDCA", "#9061F9"],
                chart: {
                    height: 420,
                    width: "100%",
                    type: "pie",
                },
                stroke: {
                    colors: ["white"],
                    lineCap: "",
                },
                plotOptions: {
                    pie: {
                        labels: {
                            show: true,
                        },
                        size: "100%",
                        dataLabels: {
                            offset: -25
                        }
                    },
                },
                labels: ["Tanah Fasum", "Tanah Sawah", "Tanah Kering"],
                dataLabels: {
                    enabled: true,
                    style: {
                        fontFamily: "Inter, sans-serif",
                    },
                },
                legend: {
                    position: "bottom",
                    fontFamily: "Inter, sans-serif",
                },
                yaxis: {
                    labels: {
                        formatter: function (value) {
                            return value + " Ha"
                        },
                    },
                },
                xaxis: {
                    labels: {
                        formatter: function (value) {
                            return value + "%"
                        },
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                },
            }
        }

        if (document.getElementById("pie-chart") && typeof ApexCharts !== 'undefined') {
            const chart = new ApexCharts(document.getElementById("pie-chart"), getChartOptions2());
            chart.render();
        }


    }, []);

    return (
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <div className="flex items-start p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                        <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div className='text-justify'>
                            <span className="font-semibold">Informasi Potensi Desa</span> <br></br>Menyajikan Informasi data desa yang bersumber dari prodeskel dan epdeskel. Pengumpulan dan Pengelolaan data dan informasi berada di Direktorat Jenderal Bina Pemerintahan Desa. Fitur integrasi dan validasi data oleh Pemerintah, Pemerintah Provinsi, Pemerintah Kabupaten/Kota dan Desa sesuai ketentuan yang berlaku.
                        </div>
                    </div>
                    <header className="mb-4 lg:mb-6 not-format mt-10">
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                            Potensi Penduduk
                        </h1>
                    </header>
                    <div className="flex flex-col sm:flex-row gap-y-3 gap-x-3 justify-between">
                        <a href="#" className="flex flex-col justify-center items-center w-full p-6 bg-green-500 border border-green-200 rounded-lg shadow hover:bg-green-600 dark:bg-gray-800 shadow-green-300 transition-all">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-center">Jumlah Penduduk</h5>
                            <p className="font-normal text-white text-center">4.504 jiwa</p>
                        </a>
                        <a href="#" className="flex flex-col justify-center items-center w-full p-6 bg-blue-500 border border-blue-200 rounded-lg shadow hover:bg-blue-600 dark:bg-gray-800 shadow-blue-300 transition-all">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-center">Laki-laki</h5>
                            <p className="font-normal text-white text-center">2.305 jiwa</p>
                        </a>
                        <a href="#" className="flex flex-col justify-center items-center w-full p-6 bg-pink-500 border border-pink-200 rounded-lg shadow hover:bg-pink-600 dark:bg-gray-800 shadow-pink-300 transition-all">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-center">Perempuan</h5>
                            <p className="font-normal text-white text-center">2.199 jiwa</p>
                        </a>
                    </div>

                    <div className="w-full bg-white rounded-lg shadow border dark:bg-gray-800 p-4 md:p-6 mt-10">
                        <div className="flex justify-between mb-3">
                            <div className="flex justify-center items-center">
                                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">
                                    Grafik penduduk
                                </h5>
                                <svg
                                    data-popover-target="chart-info"
                                    data-popover-placement="bottom"
                                    className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
                                </svg>
                                <div
                                    data-popover
                                    id="chart-info"
                                    role="tooltip"
                                    className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                                >
                                    <div className="p-3 space-y-2">
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            Jumlah penduduk laki-laki dan perempuan
                                        </h3>
                                        <p>
                                            Desa Kerjo Kidul memiliki jumlah penduduk laki-laki 2.305 jiwa dan penduduk perempuan 2.199 jiwa per 2024. Data dapat berubah sewaktu-waktu.
                                        </p>
                                    </div>
                                    <div data-popper-arrow></div>
                                </div>
                            </div>
                        </div>

                        {/* Donut Chart */}
                        <div className="py-6" id="donut-chart"></div>
                    </div>


                    <div className="flex flex-col sm:flex-row gap-y-3 gap-x-3 justify-between mt-10">
                        <a href="#" className="flex flex-col justify-center items-center w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Jumlah Kepala Keluarga</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-center">1.650 KK</p>
                        </a>
                        <a href="#" className="flex flex-col justify-center items-center w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Kepadatan Penduduk</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-center">504 jiwa/km2</p>
                        </a>
                    </div>


                    <header className="mb-4 lg:mb-6 not-format mt-20">
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                            Potensi Wilayah
                        </h1>
                    </header>


                    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">

                        <div className="flex justify-between items-start w-full">
                            <div className="flex-col items-center">
                                <div className="flex items-center mb-1">
                                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white me-1">Luas Wilayah</h5>
                                </div>
                                <button id="dateRangeButton" data-dropdown-toggle="dateRangeDropdown" data-dropdown-ignore-click-outside-className="datepicker" type="button" className="inline-flex items-center text-blue-700 dark:text-blue-600 font-medium hover:underline">Data Tahun 2024
                                </button>
                            </div>
                        </div>

                        <div className="py-6" id="pie-chart"></div>
                    </div>


                    <div class="max-w-full mx-auto bg-white shadow-md rounded my-6 overflow-hidden">
                        <div class="bg-blue-800 text-white p-4 rounded-t">
                            Orbitasi Desa
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jarak Ke Ibu Kota Kecamatan</div>
                                <div>10 Km</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Lama Jarak Tempuh Ke Ibu Kota Kecamatan Dgn Kendaraan Bermotor</div>
                                <div>0.25 Jam</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Lama Jarak Tempuh Ke Ibu Kota Kecamatan</div>
                                <div>2.5 Jam</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Kendaraan Umum Ke Ibu Kota Kecamatan</div>
                                <div>25 Unit</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jarak Ke Ibu Kota Kabkota</div>
                                <div>25 Km</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Lama Jarak Tempuh Ke Ibu Kota Kabupaten Dgn Kendaraan Bermotor</div>
                                <div>0.5 Jam</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Lama Jarak Tempuh Ke Ibu Kota Kabupaten</div>
                                <div>7 Jam</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Kendaraan Umum Ke Ibu Kota Kabkota</div>
                                <div>2 Unit</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jarak Ke Ibu Kota Provinsi</div>
                                <div>175 Km</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Lama Jarak Tempuh Ke Ibu Kota Provinsi Dengan Kendaraan Bermotor</div>
                                <div>5 Jam</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Lama Jarak Tempuh Ke Ibu Kota Provinsi</div>
                                <div>50 Jam</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Kendaraan Umum Ke Ibu Kota Provinsi</div>
                                <div>0 Unit</div>
                            </div>
                        </div>
                    </div>


                    <div class="max-w-full mx-auto bg-white shadow-md rounded my-6 overflow-hidden">
                        <div class="bg-blue-700 text-white p-4 rounded-t">
                            Batas Wilayah Desa
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Deskel Sebelah Utara</div>
                                <div>KERJO LOR</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Deskel Sebelah Selatan</div>
                                <div>GEMAWANG</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Deskel Sebelah Timur</div>
                                <div>NGABEYAN</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Deskel Sebelah Barat</div>
                                <div>GEDONG</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Kecamatan Sebelah Utara</div>
                                <div>JATIPURO</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Kecamatan Sebelah Selatan</div>
                                <div>NGUNTORONADI</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Kecamatan Sebelah Timur</div>
                                <div>SIDOHARJO</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Kecamatan Sebelah Barat</div>
                                <div>WONOGIRI</div>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-full mx-auto bg-white shadow-md rounded my-6 overflow-hidden">
                        <div class="bg-blue-700 text-white p-4 rounded-t">
                            Jenis Lahan
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Sawah Irigasi Teknis</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Sawah Irigasi Setengah Teknis</div>
                                <div>107 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Sawah Tadah Hujan</div>
                                <div>57.15 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Sawah Pasang Surut</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Luas Tanah Sawah</div>
                                <div>164.15 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Tegal Ladang</div>
                                <div>458.1303 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Pemukiman</div>
                                <div>45.78 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Pekarangan</div>
                                <div>154.943 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Luas Tanah Kering</div>
                                <div>658.8533 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Tanah Rawa</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Pasang Surut</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Lahan Gambut</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Situ Waduk Danau</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Luas Tanah Basah</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Perkebunan Rakyat</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Perkebunan Negara</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Perkebunan Swasta</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Perkebunan Perorangan</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Luas Tanah Perkebunan</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Kas Desa Kelurahan</div>
                                <div>33.7808 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Lokasi Tanah Kas Desa</div>
                                <div>2 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Tanah Bengkok</div>
                                <div>33.7808 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Tanah Titi Sara</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Kebun Desa</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Sawah Desa</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Lapangan Olahraga</div>
                                <div>0.7959 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Perkantoran Pemerintah</div>
                                <div>0.4 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Ruang Publik Taman Kota</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Tempat Pemakaman Umum</div>
                                <div>4.5 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Tempat Pembuangan Sampah</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Bangunan Sekolah Perguruan Tinggi</div>
                                <div>10.71 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Pertokoan</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Fasilitas Pasar</div>
                                <div>0.32 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Terminal</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jalan</div>
                                <div>18.79 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Daerah Tangkapan Air</div>
                                <div>2 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Usaha Perikanan</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Sutet Aliran Listrik Tegangan Tinggi</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Luas Tanah Fasilitas Umum</div>
                                <div>71.2967 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Lindung</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Produksi Tetap</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Produksi Terbatas</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Produksi</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Konservasi</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Adat</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Asli</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Sekunder</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Buatan</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Mangrove</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Suaka Alam</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Suaka Margasatwa</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Suaka</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Rakyat</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Luas Tanah Hutan</div>
                                <div>0 Ha.</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Total Luas Entri Data</div>
                                <div>894.3 Ha.</div>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-full mx-auto bg-white shadow-md rounded my-6 overflow-hidden">
                        <div class="bg-blue-700 text-white p-4 rounded-t">
                            Potensi Wisata
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Lokasi / Tempat</div>
                                <div>Luas</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4 col-span-2">
                                <div class="text-center text-gray-500 dark:text-gray-400">Tidak ada data yang ditampilkan</div>
                            </div>
                        </div>
                    </div>

                    <header className="mb-4 lg:mb-6 not-format mt-20">
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                            Sarana & Prasarana
                        </h1>
                    </header>

                    <div class="max-w-full mx-auto bg-white shadow-md rounded my-6 overflow-hidden">
                        <div class="bg-blue-700 text-white p-4 rounded-t">
                            Kantor Desa
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Gedung Kantor</div>
                                <div>Tidak Ada</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Kondisi</div>
                                <div>Baik</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Ruang Kerja</div>
                                <div>1</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Balai Desa</div>
                                <div>Ada</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Listrik</div>
                                <div>Ada</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Air Bersih</div>
                                <div>Ada</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Telepon</div>
                                <div>Ada</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Rumah Dinas Kepala Desa</div>
                                <div>Tidak Ada</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Rumah Dinas Perangkat Desa</div>
                                <div>Tidak Ada</div>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-full mx-auto bg-white shadow-md rounded my-6 overflow-hidden">
                        <div class="bg-blue-700 text-white p-4 rounded-t">
                            Lembaga Pemerintahan
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Kades</div>
                                <div>GIYANTO</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Pendidikan Kades</div>
                                <div>SLTA</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Pendidikan Sekdes</div>
                                <div>SLTA</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Pendidikan Ketua Bpd</div>
                                <div>SLTA</div>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-full mx-auto bg-white shadow-md rounded my-6 overflow-hidden">
                        <div class="bg-blue-700 text-white p-4 rounded-t">
                            Sarana dan Prasarana PKK
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jenis Organisasi</div>
                                <div>PKK</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Kepengurusan</div>
                                <div>Ada dan Aktif</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Buku Administrasi</div>
                                <div>8</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Kegiatan</div>
                                <div>4</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Dasar Hukum Pembentukan</div>
                                <div>Peraturan Daerah</div>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-full mx-auto bg-white shadow-md rounded my-6 overflow-hidden">
                        <div class="bg-blue-700 text-white p-4 rounded-t">
                            Sarana dan Prasarana Pendidikan
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Gedung Kampus PTN Milik Sendiri</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Gedung Kampus PTS Milik Sendiri</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Gedung SMA Milik Sendiri</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Gedung SMP Milik Sendiri</div>
                                <div>1</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Gedung SD Milik Sendiri</div>
                                <div>3</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Gedung TK Milik Sendiri</div>
                                <div>2</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Gedung Tempat Bermain Anak Milik Sendiri</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Lembaga Pendidikan Agama Milik Sendiri</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Perpustakaan Keliling Milik Sendiri</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Perpustakaan Desa Milik Sendiri</div>
                                <div>1</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Taman Bacaan Milik Sendiri</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Gedung Kampus PTN Sewa</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Gedung Kampus PTS Sewa</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Gedung SMA Sewa</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Gedung SMP Sewa</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Gedung SD Sewa</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Gedung TK Sewa</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Gedung Tempat Bermain Anak Sewa</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Lembaga Pendidikan Agama Sewa</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Perpustakaan Keliling Sewa</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Perpustakaan Desa Sewa</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Taman Bacaan Sewa</div>
                                <div>*tidak ada data</div>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-full mx-auto bg-white shadow-md rounded my-6 overflow-hidden">
                        <div class="bg-blue-700 text-white p-4 rounded-t">
                            Sarana dan Prasarana Peribadatan
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Masjid</div>
                                <div>17</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Mushola</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Gereja Kristen Protestan</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Gereja Katholik</div>
                                <div>1</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Wihara</div>
                                <div>1</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Pura</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Klenteng</div>
                                <div>*tidak ada data</div>
                            </div>
                        </div>
                    </div>


                    <div class="max-w-full mx-auto bg-white shadow-md rounded my-6 overflow-hidden">
                        <div class="bg-blue-700 text-white p-4 rounded-t">
                            Sarana dan Prasarana Kesehatan
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Sawah Irigasi Teknis</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Sawah Irigasi Setengah Teknis</div>
                                <div>107</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Sawah Tadah Hujan</div>
                                <div>57.15</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Sawah Pasang Surut</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Luas Tanah Sawah</div>
                                <div>164.15</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Tegal Ladang</div>
                                <div>458.1303</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Pemukiman</div>
                                <div>45.78</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Pekarangan</div>
                                <div>154.943</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Luas Tanah Kering</div>
                                <div>658.8533</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Tanah Rawa</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Pasang Surut</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Lahan Gambut</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Situ Waduk Danau</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Luas Tanah Basah</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Perkebunan Rakyat</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Perkebunan Negara</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Perkebunan Swasta</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Perkebunan Perorangan</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Luas Tanah Perkebunan</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Kas Desa Kelurahan</div>
                                <div>33.7808</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Lokasi Tanah Kas Desa</div>
                                <div>2</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Tanah Bengkok</div>
                                <div>33.7808</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Tanah Titi Sara</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Kebun Desa</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Sawah Desa</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Lapangan Olahraga</div>
                                <div>0.7959</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Perkantoran Pemerintah</div>
                                <div>0.4</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Ruang Publik Taman Kota</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Tempat Pemakaman Umum</div>
                                <div>4.5</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Tempat Pembuangan Sampah</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Bangunan Sekolah Perguruan Tinggi</div>
                                <div>10.71</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Pertokoan</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Fasilitas Pasar</div>
                                <div>0.32</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Terminal</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jalan</div>
                                <div>18.79</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Daerah Tangkap Air</div>
                                <div>2</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Usaha Perikanan</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Sutet Aliran Listrik Tegangan Tinggi</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Luas Tanah Fasilitas Umum</div>
                                <div>71.2967</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Lindung</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Produksi Tetap</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Produksi Terbatas</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Produksi</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Konservasi</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Adat</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Asli</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Sekunder</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Buatan</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Mangrove</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Suaka Alam</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Suaka Margasatwa</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Suaka</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Hutan Rakyat</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Luas Tanah Hutan</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Total Luas Entri Data</div>
                                <div>894.3</div>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-full mx-auto bg-white shadow-md rounded my-6 overflow-hidden">
                        <div class="bg-blue-700 text-white p-4 rounded-t">
                            Sarana dan Prasarana Air Bersih
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Sumur Pompa</div>
                                <div>67</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Sumur Gali</div>
                                <div>680</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Hidran Umum</div>
                                <div>4</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Penampung Air Hujan</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Tangki Air Bersih</div>
                                <div>11</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Embung</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Mata Air</div>
                                <div>1</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Bangunan Pengolahan Air Bersih</div>
                                <div>8</div>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-full mx-auto bg-white shadow-md rounded my-6 overflow-hidden">
                        <div class="bg-blue-700 text-white p-4 rounded-t">
                            Sarana dan Prasarana Irigasi
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Panjang Saluran Primer</div>
                                <div>54</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Panjang Saluran Sekunder</div>
                                <div>20261</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Panjang Saluran Tersier</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Pintu Sadap</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Pintu Pembagi Air</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Panjang Saluran Primer Rusak</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Panjang Saluran Sekunder Rusak</div>
                                <div>4052</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Panjang Saluran Tersier Rusak</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Pintu Sadap Rusak</div>
                                <div>*tidak ada data</div>
                            </div>
                            <div class="bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
                                <div class="font-medium text-gray-900 dark:text-white">Jumlah Pintu Pembagi Air Rusak</div>
                                <div>*tidak ada data</div>
                            </div>
                        </div>
                    </div>


                </article>
            </div>
        </main>
    );
}

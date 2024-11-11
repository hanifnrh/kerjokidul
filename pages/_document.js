import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" /> */}
          <link href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="./node_modules/apexcharts/dist/apexcharts.css"></link>
          <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        </Head>
        <body className='bg-green-700'>
          <Main/>
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
          <script src="./node_modules/lodash/lodash.min.js"></script>
          <script src="./node_modules/apexcharts/dist/apexcharts.min.js"></script>
          <script src="https://preline.co/assets/js/hs-apexcharts-helpers.js"></script>
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
          <script>
            AOS.init();
          </script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

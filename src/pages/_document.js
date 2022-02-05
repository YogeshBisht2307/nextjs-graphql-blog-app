import Document, { Html, Head, Main, NextScript } from 'next/document';

class CodingKotaDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className='scroll-smooth'>
        <Head>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CodingKotaDocument;
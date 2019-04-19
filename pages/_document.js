import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>React JSON Dynamic Form</title>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=EDGE" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1,
                    maximum-scale=1, user-scalable=no"
          />
          <meta property="og:description" content="React JSON Dynamic Form" />
          <meta property="og:site_name" content="React JSON Dynamic Form" />
          <meta property="og:image" content="./static/images/client/logo.png" />
          <meta property="og:type" content="website" />
          <meta name="theme-color" content="#ec1d23" />

          <link rel="shortcut icon" href="./static/images/favicon/favicon-24x24.ico?v=1.2" />
          <link rel="stylesheet" href="./static/css/semantic-icon.min.css" />
          <link rel="stylesheet" href="./static/css/main.css" />
          <link rel="stylesheet" href="./static/css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

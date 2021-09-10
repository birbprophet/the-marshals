import { NextSeo } from "next-seo";
import Head from "next/head";

import appConfig from "@/utils/appConfig";

type IMetaProps = {
  title: string;
  description: string;
};

const Meta = (props: IMetaProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <NextSeo
        title={props.title ?? appConfig.title}
        description={props.description ?? appConfig.description}
        openGraph={{
          title: props.title ?? appConfig.title,
          description: props.description ?? appConfig.description,
          locale: appConfig.locale,
          site_name: appConfig.site_name,
        }}
      />
    </>
  );
};

export default Meta;

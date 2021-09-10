import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import appConfig from "@/utils/appConfig";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title={appConfig.title}
        description={appConfig.description}
        openGraph={{
          title: appConfig.title,
          description: appConfig.description,
          locale: appConfig.locale,
          site_name: appConfig.site_name,
          images: [{ url: "/assets/notion/preview.jpg" }],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

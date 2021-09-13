import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import appConfig from "@/utils/appConfig";
import { Metrics } from "@layer0/rum";

new Metrics({
  token: "ba62f62c-62d1-4a12-b8f5-93a31d3a53d4",
}).collect();

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

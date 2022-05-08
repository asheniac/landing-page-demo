import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProductSection from "../components/ProductSection";
import ContactSection from "../components/ContactSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quick Book - All you need for your accounting matters</title>
        <meta
          name="description"
          content="Quick Book is a professional accounting software which will reduce your time on accounting matter,and let you focus on running your business."
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <ContactSection />
    </>
  );
}

import Image from "next/image";
import next from "@/public/next.svg";
import { getDictionary } from "@/app/[lang]/lib/get-dictionary";
import { Locale } from "@/i18n-config";


interface HomeProps {
  params: { lang: Locale }
}

export default async function Home({ params: { lang } }: HomeProps) {

  const dictionary = await getDictionary(lang);
  const dictionaryHome = dictionary.Home;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 py-2">
      <Image
        src={next}
        alt="Next.js logo"
        width={300}
        height={300}
      />
      <div className="text-lg text-centerr w-96">
        <h1>{dictionaryHome["titulo-apresentacao"]}</h1>
        <h2>{dictionaryHome["sub-titulo"]}</h2>
        <p>{dictionaryHome.paragrafo[1]}</p>
        <p className="text-gray-950">{dictionaryHome.paragrafo[2]}</p>
      </div>
    </div>
  );
}

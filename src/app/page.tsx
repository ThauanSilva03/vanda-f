import { Search } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col h-[480px] bg-green-600 text-white">
        <div className="w-full flex justify-end pb-10 pt-3">
          <div>
            <nav className="px-24">
              <ul className="flex gap-4 font-semibold text-xl">
                <li>
                  <a href="">Analyze your daya</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="" className="flex flex-row gap-1 items-center">
                    <p>Github</p>
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex items-center justify-center py-4">
          <div className="flex flex-col w-2/5">
            <div className="flex items-end pb-2 gap-1">
              <div className="bg-white h-24 w-24 flex items-center justify-center rounded-full">
                <Image
                  src="/logo/vandaLogo.svg"
                  width={80}
                  height={80}
                  alt=""
                />
              </div>
              <div className=" flex flex-col">
                <h1 className="font-bold text-6xl">VANDA</h1>
                <h3 className="font-semibold">
                  Visualization and Analysis Nutrigenetic Data
                </h3>
              </div>
            </div>

            <div className="h-20 flex flex-row max-w-full">
              <input
                type="text"
                name=""
                id=""
                className="h-full flex-grow text-xl pl-3 text-black rounded-s-xl outline-none"
              />
              <button className="h-full w-20 bg-green-900 rounded-e-xl items-center justify-center flex">
                <Search />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="px-96 pb-20">
        <section className="flex flex-row py-10">
          {" "}
          {/* About section */}
          <div className="flex-grow">
            <h1 className="font-bold text-3xl py-6">About the plataform</h1>
            <p className="font-semibold text-xl text-justify">
              VANDA is a web platform designed for the analysis and exploration
              of nutrigenetic data. By linking genetic variations (SNPs) to
              pathologies, it assists researchers and healthcare professionals
              in creating personalized dietary plans. The platform integrates
              data from public repositories like dbSNP and uses advanced
              categorization and summarization techniques to offer a
              user-friendly experience.
            </p>
          </div>
        </section>
        <section className="flex flex-col">
          {/* Database section */}
          <h1 className="font-bold text-3xl py-6">Database</h1>
          <div className="flex-grow">
            <div className="flex flex-row gap-2 items-center">
              <h1 className="font-bold text-2xl py-6">NCBI</h1>
              <a href="https://www.ncbi.nlm.nih.gov/">
                <Image
                  src="/logo/NIH_Logo.png"
                  alt=""
                  width={57}
                  height={0}
                  className="w-[57px] h-[36px]"
                />
              </a>
            </div>
            <p className="font-semibold text-xl text-justify">
              The NCBI (National Center for Biotechnology Information) is part
              of the U.S. National Institutes of Health (NIH), focused on
              biotechnology and bioinformatics. It provides a wide range of
              resources and tools for biomedical and genomic research. Among its
              features, the NCBI hosts important databases such as GenBank (DNA
              sequences), PubMed (scientific articles), BLAST (sequence
              alignment tool), and Gene (gene information). The site is widely
              used by scientists, doctors, and students to access genetic data,
              perform sequence analysis, and consult academic publications.
            </p>
          </div>
          <div className="flex-grow">
            <div className="flex flex-row gap-2 items-center">
              <h1 className="font-bold text-2xl py-6">GeneCards</h1>
              <a href="https://www.genecards.org/">
                <Image
                  src="/logo/GeneCards-logo.png"
                  alt=""
                  width={30}
                  height={0}
                  className="w-[30px] h-[31px]"
                />
              </a>
            </div>
            <p className="font-semibold text-xl text-justify">
              GeneCards is a searchable, integrative database that provides
              comprehensive, user-friendly information on all annotated and
              predicted human genes. The knowledgebase automatically integrates
              gene-centric data from ~150 web sources, including genomic,
              transcriptomic, proteomic, genetic, clinical and functional
              information.
            </p>
          </div>
        </section>
      </section>
      <hr className="border-t-gray-400 my-6" />
      <footer className="flex flex-col items-center ">
        <div className="text-sm flex gap-16 font-semibold text-gray-400">
          <div className="flex flex-col items-center ">
            <h3 className="px-3">DEPARTAMENTOS</h3>
            <hr className="border-t-gray-400 border my-1 w-full" />
            <div className="flex px-3 gap-1">
              <Image src="/logo/dacc-logo.png" alt="" width={30} height={30} />
              <h3>DACC</h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="px-3">UNIVERSIDADE</h3>
            <hr className="border-t-gray-400 border my-1 w-full" />
            <div className="flex px-3 gap-1">
              <Image src="/logo/unir-logo.ico" width={20} height={30} alt="" />
              <h3>UNIR</h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="px-3">CONTACT</h3>
            <hr className="border-t-gray-400 border my-1 w-full" />
            <h3 className="px-3">dacc@unir.br</h3>
          </div>
        </div>
        <div className="py-6 text-gray-400 text-sm font-normal">
          <h3>
            © 2024 ©CopyRight -{" "}
            <span className="text-gray-800">
              <a href="https://www.unir.br/homepage" target="blank">
                UNIR
              </a>
            </span>{" "}
            - Todos os Direitos Reservados
          </h3>
        </div>
      </footer>
    </div>
  );
}

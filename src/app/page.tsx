"use client";
import Footer from "@/components/footer";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;
    // Directly navigate to SNP details if the query looks like an SNP ID
    router.push(`/snp/${encodeURIComponent(query)}`);
  };
  return (
    <div>
      <section className="flex flex-col h-[480px] bg-green-600 text-white">
        <div className="w-full flex justify-end pb-10 pt-3">
          <div>
            <nav className="px-96">
              <ul className="flex gap-6 font-semibold text-xl ">
                <li className="hover:underline">
                  <a href="/dataAnalysis">Data analysis</a>
                </li>
                <li className="hover:underline">
                  <a href="/about">About</a>
                </li>
                <li className="hover:underline">
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
                placeholder="Search article by SNP"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-full flex-grow text-xl pl-3 text-black rounded-s-xl outline-none"
              />
              <button
                onClick={handleSearch}
                className="h-full w-20 bg-green-900 rounded-e-xl items-center justify-center flex hover:bg-green-800"
              >
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
            <p className="font-normal text-xl text-justify">
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
            <p className="font-normal text-xl text-justify">
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
            <p className="font-normal text-xl text-justify">
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
      <Footer />
    </div>
  );
}

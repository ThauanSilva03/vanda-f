"use client";
import Header from "@/components/header";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getFastAPI } from "@/api/fastAPI";
import Link from "next/link";
import { LiaSpinnerSolid } from "react-icons/lia";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleResult = async () => {
    if (!query) return;

    setLoading(true);
    setResults([]);
    setError(null);

    try {
      const { searchSearchGet } = getFastAPI();
      const response = await searchSearchGet(
        { query },
        {
          baseURL: "http://0.0.0.0:8000/api",
        }
      );
      setResults(response.data.items || []);
    } catch (err: any) {
      setError(err.message || "Erro na busca");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      handleResult();
    }
  }, [query]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Seção de carregamento */}
        {loading && (
          <div className="flex p-10 justify-center items-center">
            <LiaSpinnerSolid className="animate-spin text-green-600 text-4xl" />
            <h2 className="ml-2 text-xl text-green-600">Loading SNPs...</h2>
          </div>
        )}

        {/* Exibição de erro */}
        {error && (
          <h2 className="text-center mt-4 text-red-600 text-lg">{error}</h2>
        )}

        {/* Exibição dos resultados */}
        {results.length > 0 && (
          <div className=" mt-6 space-y-6">
            <h2 className="text-2xl font-semibold mb-4">SNP IDs found:</h2>
            <ul className="flex flex-col pl-8 space-y-6">
              {results.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/snp/${item.snp_id}`}
                    className="text-xl  text-blue-700 font-semibold hover:underline"
                  >
                    {item.snp_id}
                  </Link>
                  <div className="flex flex-col px-2">
                    <p className="text-gray-900 text-base mt-2">
                      <span className="font-bold">Alleles</span>: {item.alleles}
                    </p>
                    <p className="text-gray-900 text-base mt-2">
                      <span className="font-bold">Chromossome number</span>:{" "}
                      {item.chromossome_number}
                    </p>
                    <div className="flex">
                      {item.mutations.genomics.length > 0 && (
                        <div className="flex">
                          <p className="text-gray-900 text-base mt-2">
                            <span className="font-bold">HGVS</span>:{" "}
                          </p>
                          <div className="pl-2 mt-2">
                            {item.mutations.genomics.map((genomic, idx) => (
                              <div key={idx} className="flex">
                                <p className="text-gray-900 text-base">
                                  {genomic.id}
                                </p>
                                <p>{genomic.mutation}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Mensagem de nenhum resultado */}
        {!loading && !error && results.length === 0 && query && (
          <p className="text-center mt-4 text-gray-600 text-lg">
            No results found for "{query}".
          </p>
        )}
      </div>
    </div>
  );
}

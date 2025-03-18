"use client";
import Header from "@/components/header";
import { useEffect, useState } from "react";
import { getFastAPI } from "@/api/fastAPI";
import { useParams } from "next/navigation";
import { LiaSpinnerSolid } from "react-icons/lia";

// Tipos para o retorno das publicações
interface Article {
  pmid: string;
  title: string;
  abstract: string;
}

interface Topics {
  [key: string]: Article[];
}

export default function SNPDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [result, setResult] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSNP = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const api = getFastAPI();
      const response = await api.snpPageSnpSnpIdGet(id, {
        baseURL: "http://computacao.unir.br/vanda/api",
      });

      setResult(response.data);
    } catch (err: any) {
      console.error("Erro ao carregar SNP:", err);
      setError(err.message || "Erro ao carregar os dados");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchSNP();
    }
  }, [id]);

  return (
    <>
      <Header />
      <div className="max-w-6xl p-4 mx-auto">
        {loading && (
          <div className="flex p-10 justify-center items-center">
            <LiaSpinnerSolid className="animate-spin text-green-600 text-4xl" />
            <h2 className="ml-2 text-xl text-green-600">Loading articles...</h2>
          </div>
        )}
        {error && <h2 className="text-center text-red-600 mt-4">{error}</h2>}

        {result?.topics && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold px-4 pt-4 mb-4">{id}</h2>

            {Object.entries(result.topics as Topics).map(
              ([topic, articles]: [string, Article[]]) => (
                <div key={topic} className="bg-white p-4 rounded-xl shadow">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">
                    {topic}
                  </h3>
                  {articles.length > 0 ? (
                    <ul className="space-y-4">
                      {articles.map((article, index) => (
                        <li
                          key={`${article.pmid}-${index}`}
                          className="border-l-4 border-green-600 pl-4"
                        >
                          <p className="font-semibold text-lg">
                            {article.title}
                          </p>
                          <p className="text-gray-700 text-sm">
                            {article.abstract}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            <a
                              href={`https://pubmed.ncbi.nlm.nih.gov/${article.pmid}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              PMID: {article.pmid}
                            </a>
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">
                      No publications found for this topic.
                    </p>
                  )}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </>
  );
}

"use client";
import Header from "@/components/header";
import { useEffect, useState } from "react";
import { getFastAPI } from "@/api/fastAPI";
import { useParams } from "next/navigation";
import { LiaSpinnerSolid } from "react-icons/lia";
import { AlertTriangle } from "lucide-react";

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
  const [notFound, setNotFound] = useState(false);

  const fetchSNP = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    setNotFound(false);

    try {
      const api = getFastAPI();
      const response = await api.snpPageSnpSnpIdGet(id, {
        baseURL: "http://computacao.unir.br/vanda/api",
      });

      // Check if the response is empty or indicates no data
      if (
        !response.data ||
        (response.data.topics && Object.keys(response.data.topics).length === 0)
      ) {
        setNotFound(true);
      } else {
        setResult(response.data);
      }
    } catch (err: any) {
      console.error("Erro ao carregar SNP:", err);

      // Treat network errors or 404 as "not found"
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchSNP();
    }
  }, [id]);

  // Render SNP not found message
  if (notFound) {
    return (
      <>
        <Header />
        <div className="max-w-6xl p-4 mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="text-center">
            <AlertTriangle className="mx-auto mb-4 text-yellow-500" size={64} />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              SNP Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              The SNP "{id}" could not be found in our database.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-yellow-700 mb-2">Possible reasons:</p>
              <ul className="list-disc list-inside text-left text-yellow-700">
                <li>Incorrect SNP ID</li>
                <li>SNP not in our current database</li>
                <li>Typo in the SNP identifier</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }

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

        {error && (
          <div className="text-center mt-4">
            <h2 className="text-red-600 text-xl">{error}</h2>
            <p className="text-gray-600 mt-2">Please try again later.</p>
          </div>
        )}

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

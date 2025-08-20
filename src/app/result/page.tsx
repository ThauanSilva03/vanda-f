// pages/result.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Para acessar os parâmetros da URL

export default function ResultPage() {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("query"); // Pega o valor do parâmetro 'query'
  const [query, setQuery] = useState(queryParam || ""); // Inicia o estado com o valor da query da URL
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Função para buscar os resultados
  const handleSearchGene = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setResults(null);
    setError(null);

    try {
      // A API que você está utilizando
      const response = await fetch(
        `http://10.99.0.73:8000/api/gene/${query}`
      );
      const data = await response.json();
      setResults(data);
    } catch (err: any) {
      setError(err.message || "Erro na busca");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (queryParam) {
      handleSearchGene(); // Faz a busca automaticamente quando a página carrega com o parâmetro
    }
  }, [queryParam]); // Sempre que o parâmetro de consulta mudar, faz a busca

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🔍 Resultados da Pesquisa</h1>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Pesquisar novamente..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "0.5rem", width: "300px", marginRight: "1rem" }}
        />
        <button onClick={handleSearchGene} style={{ padding: "0.5rem 1rem" }}>
          Buscar
        </button>
      </div>

      {loading && <p>🔄 Buscando...</p>}
      {error && <p style={{ color: "red" }}>❌ {error}</p>}

      {results && (
        <>
          <h2>📄 Resultados:</h2>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            {JSON.stringify(results, null, 2)}
          </pre>
        </>
      )}
    </main>
  );
}

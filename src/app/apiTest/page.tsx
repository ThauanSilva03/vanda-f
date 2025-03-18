"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/result?query=${encodeURIComponent(query)}`);
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🔍 Pesquisa</h1>

      <div>
        <input
          type="text"
          placeholder="Digite sua busca..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "0.5rem", width: "300px", marginRight: "1rem" }}
        />
        <button onClick={handleSearch} style={{ padding: "0.5rem 1rem" }}>
          Buscar
        </button>
      </div>
    </main>
  );
}

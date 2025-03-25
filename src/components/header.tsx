"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;
    // Directly navigate to SNP details if the query looks like an SNP ID
    router.push(`/snp/${encodeURIComponent(query)}`);
  };

  return (
    <div className="flex flex-col bg-green-600 py-5">
      <div className="flex flex-row justify-between px-96 font-bold text-xl text-white">
        <div>
          <Link href="/">VANDA</Link>
        </div>
        <nav>
          <ul className="flex flex-row gap-6">
            <li className="hover:underline">
              <Link href="/dataAnalysis">Data Analysis</Link>
            </li>
            <li className="hover:underline">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:underline">
              <Link
                href="https://github.com/riccardoalv/vanda"
                className="flex flex-row gap-1 items-center"
              >
                <p>Github</p>
                <FaGithub />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-center py-8">
        <div className="flex flex-row w-full items-center justify-center">
          <input
            className="w-4/12 h-14 pl-2 rounded-s-xl text-xl outline-none"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search article by SNP"
          />
          <button
            onClick={handleSearch}
            className="bg-green-900 h-14 w-14 rounded-e-xl flex items-center justify-center text-white hover:bg-green-800"
          >
            <Search />
          </button>
        </div>
      </div>
    </div>
  );
}

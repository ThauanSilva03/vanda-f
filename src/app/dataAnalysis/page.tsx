"use client";
import { getFastAPI } from "@/api/fastAPI";
import BarChartGenes from "@/components/barChart";
import BarraChart from "@/components/barChart";
import Header from "@/components/header";
import PizzaChart from "@/components/pieChart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import { useState } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";

export default function DataAnalysis() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleAnalise = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    setNotFound(false);

    try {
      const api = getFastAPI();
      const response = await api.foodAnalizeSnpsFoodAnalizeFoodNameGet(value, {
        baseURL: "http://10.99.0.73:8000/api",
      });
      console.log("Response ", response);
      if (!response.data || !response.data.counts.beneficial) setNotFound(true);
      else setResult(response.data);
    } catch (e: any) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const snpsArray = result
    ? [
        { name: "Beneficial", value: result.counts.beneficial.snps },
        { name: "Neutral", value: result.counts.neutral.snps },
        { name: "Harmful", value: result.counts.harmful.snps },
      ]
    : [];

  const genesArray = result
    ? [
        { name: "Beneficial", value: result.counts.beneficial.genes },
        { name: "Neutral", value: result.counts.neutral.genes },
        { name: "Harmful", value: result.counts.harmful.genes },
      ]
    : [];

  const snpByGene = result?.snpByGene ?? [];

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold p-4">Data analysis by food</h1>
        <div className="flex flex-row px-4 py-2">
          <input
            type="text"
            name="search"
            id="search"
            className="border p-2 rounded-s-xl outline-none w-72"
            placeholder="Search food name"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={handleAnalise}
            className="flex items-center justify-center bg-green-900 text-white px-2 rounded-e-xl"
          >
            <Search />
          </button>
        </div>

        {loading && (
          <div className="flex p-10 justify-center items-center">
            <LiaSpinnerSolid className="animate-spin text-green-600 text-4xl" />
            <h2 className="ml-2 text-xl text-green-600">
              Analyzing {value}...
            </h2>
          </div>
        )}
        {result && (
          <div className="py-8 px-4">
            <div className="text-gray-500 font-bold">
              <p>{result.totalDetails.total_snps} distinct SNPs found</p>
              <p>{result.totalDetails.total_genes} distinct Genes found</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex flex-col items-center">
                <h3 className="font-bold">SNPs count</h3>
                <PizzaChart data={snpsArray} />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-bold">Genes count</h3>
                <PizzaChart data={genesArray} />
              </div>
            </div>
            <div className="flex flex-col items-center py-4">
              <h3 className="font-bold">SNPs per gene</h3>
              <BarChartGenes data={snpByGene} />
            </div>
            <div className="my-2">
              <h1 className="py-4 font-bold">Harmful disease</h1>
              <div className="p-2 border border-slate-400 rounded-xl">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Disease</TableHead>
                      <TableHead>Gene</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {result.disease.map((r, index) => (
                      <TableRow key={index}>
                        <TableCell>{r.disease}</TableCell>
                        <TableCell>{r.gene_info}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-center text-sm py-2 text-gray-500">
                First 10 distinct harmful disease result
              </p>
            </div>
            <div className="my-2">
              <h1 className="py-4 font-bold">Harmful results info</h1>
              <p></p>
              <div className="p-2 border border-slate-400 rounded-xl">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Food</TableHead>
                      <TableHead>Disease</TableHead>
                      <TableHead>Direction</TableHead>
                      <TableHead>SNP id</TableHead>
                      <TableHead>Gene</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {result.details.harmful.map((r, index) => (
                      <TableRow key={index}>
                        <TableCell>{r.food}</TableCell>
                        <TableCell>{r.disease}</TableCell>
                        <TableCell>{r.direction}</TableCell>
                        <TableCell>{r.snp_id}</TableCell>
                        <TableCell>{r.gene_info}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-center text-sm py-2 text-gray-500">
                First 10 harmful results
              </p>
            </div>
            <div className="my-2">
              <h1 className="py-4 font-bold">Beneficial results info</h1>
              <div className="p-2 border border-slate-400 rounded-xl">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Food</TableHead>
                      <TableHead>Disease</TableHead>
                      <TableHead>Direction</TableHead>
                      <TableHead>SNP id</TableHead>
                      <TableHead>Gene</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {result.details.beneficial.map((r, index) => (
                      <TableRow key={index}>
                        <TableCell>{r.food}</TableCell>
                        <TableCell>{r.disease}</TableCell>
                        <TableCell>{r.direction}</TableCell>
                        <TableCell>{r.snp_id}</TableCell>
                        <TableCell>{r.gene_info}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-center text-sm py-2 text-gray-500">
                First 10 beneficial results
              </p>
            </div>
            <div className="my-2">
              <h1 className="py-4 font-bold">Neutral results info</h1>
              <div className="p-2 border border-slate-400 rounded-xl">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Food</TableHead>
                      <TableHead>Disease</TableHead>
                      <TableHead>Direction</TableHead>
                      <TableHead>SNP id</TableHead>
                      <TableHead>Gene</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {result.details.neutral.map((r, index) => (
                      <TableRow key={index}>
                        <TableCell>{r.food}</TableCell>
                        <TableCell>{r.disease}</TableCell>
                        <TableCell>{r.direction}</TableCell>
                        <TableCell>{r.snp_id}</TableCell>
                        <TableCell>{r.gene_info}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-center text-sm py-2 text-gray-500">
                First 10 neutral results
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

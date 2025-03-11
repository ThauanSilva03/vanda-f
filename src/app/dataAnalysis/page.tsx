import Header from "@/components/header";

export default function DataAnalysis() {
  return (
    <div>
      <Header page="about" />
      <div className="p-5 flex flex-row">
        <div className="w-1/5 h-10 bg-blue-600"></div>
        <div className="flex-1 bg-slate-800"></div>
      </div>
    </div>
  );
}

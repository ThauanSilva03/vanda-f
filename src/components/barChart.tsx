"use client";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#8dd1e1",
  "#a4de6c",
  "#d0ed57",
  "#ffbb28",
  "#ff6666",
  "#66ccff",
];

interface Props {
  data: any;
}

export default function BarChartGenes({ data }: Props) {
  return (
    <div
      style={{ width: "100%", height: 400 }}
      className="border border-slate-400 rounded-xl my-2 px-2 pt-12"
    >
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 140, left: 20, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="gene_info"
            angle={-45}
            textAnchor="end"
            interval={0}
          />
          <YAxis />
          <Tooltip formatter={(value) => [value, "SNPs"]} />
          <Bar dataKey="snp_count">
            {data.map((entry: any, index: any) => (
              <Cell
                key={`cell-${entry.gene_info}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

import { Search } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface Props {
  page: string;
}

export default function Header({ page }: Props) {
  return (
    <div className="flex flex-col bg-green-600 py-5">
      <div className="flex flex-row justify-between px-96 font-bold text-xl text-white">
        <div>
          <Link href="/">VANDA</Link>
        </div>
        <nav>
          <ul className="flex flex-row gap-2">
            <li className="hover:underline">
              <Link href={page == "dataAnalysis" ? `/${page}` : "#"}>
                Data Analysis
              </Link>
            </li>
            <li className="hover:underline">
              <Link href={page == "about" ? `/${page}` : "#"}>About</Link>
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
            placeholder="Search..."
          />
          <button className="bg-green-900 h-14 w-14 rounded-e-xl flex items-center justify-center text-white hover:bg-green-800">
            <Search />
          </button>
        </div>
      </div>
    </div>
  );
}

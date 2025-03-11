import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <hr className="border-t-gray-400 my-6" />
      <footer className="flex flex-col items-center ">
        <div className="text-sm flex gap-16 font-semibold text-gray-400">
          <div className="flex flex-col items-center ">
            <h3 className="px-3">DEPARTAMENTOS</h3>
            <hr className="border-t-gray-400 border my-1 w-full" />
            <div className="flex px-3 gap-1">
              <Image src="/logo/dacc-logo.png" alt="" width={30} height={30} />
              <h3>DACC</h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="px-3">UNIVERSIDADE</h3>
            <hr className="border-t-gray-400 border my-1 w-full" />
            <div className="flex px-3 gap-1">
              <Image src="/logo/unir-logo.ico" width={20} height={30} alt="" />
              <h3>UNIR</h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="px-3">CONTACT</h3>
            <hr className="border-t-gray-400 border my-1 w-full" />
            <h3 className="px-3">dacc@unir.br</h3>
          </div>
        </div>
        <div className="py-6 text-gray-400 text-sm font-normal">
          <h3>
            © 2024 ©CopyRight -{" "}
            <span className="text-gray-800">
              <a href="https://www.unir.br/homepage" target="blank">
                UNIR
              </a>
            </span>{" "}
            - Todos os Direitos Reservados
          </h3>
        </div>
      </footer>
    </div>
  );
}

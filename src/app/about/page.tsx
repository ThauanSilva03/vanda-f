import Footer from "@/components/footer";
import Header from "@/components/header";

export default function About() {
  return (
    <div>
      <Header />
      <div className="px-96">
        <div>
          <h2 className="text-3xl font-bold py-5">About us</h2>
          <div className="py-3">
            <p>
              Texto falando sobre como a gente eh muito legal e bom no que a
              gente faz e como foi desenvolvido o sistema inteiro do VANDA,
              falar sobre a universidade e mais alguma coisa boa(mas tem que ser
              em ingles)
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold py-5">Team</h2>
          <div className="py-3">
            <div className="flex flex-row gap-3 py-3">
              <div className="bg-black w-28 h-28 rounded-full">
                {/* foto */}
              </div>
              <div>
                <div>
                  <h3 className="font-bold text-xl">Nome</h3>
                </div>
                <div>
                  <p>Informações</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 py-3">
              <div className="bg-black w-28 h-28 rounded-full">
                {/* foto */}
              </div>
              <div>
                <div>
                  <h3 className="font-bold text-xl">Nome</h3>
                </div>
                <div>
                  <p>Informações</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 py-3">
              <div className="bg-black w-28 h-28 rounded-full">
                {/* foto */}
              </div>
              <div>
                <div>
                  <h3 className="font-bold text-xl">Nome</h3>
                </div>
                <div>
                  <p>Informações</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

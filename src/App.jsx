import "./App.css";

import { useEffect, useState } from "react";

// 2. Contador de Votos
//     Cria um componente que recebe um array de candidatos ([{nome, votos}]).
//     Mostra cada candidato com seu número de votos.
//     Botões para votar em cada candidato (incrementar votos).
//     Destaca o candidato líder (quem tem mais votos).

const candidatosS = [
  { id: 1, nome: "João", votos: 3 },
  { id: 2, nome: "Ana", votos: 5 },
  { id: 3, nome: "Pedro", votos: 2 },
  { id: 4, nome: "Carla", votos: 4 },
  { id: 5, nome: "Lucas", votos: 6 },
  { id: 6, nome: "Beatriz", votos: 1 },
  { id: 7, nome: "Rafael", votos: 0 },
  { id: 8, nome: "Mariana", votos: 3 },
  { id: 9, nome: "Tiago", votos: 4 },
  { id: 10, nome: "Sofia", votos: 2 },
];

import { ChevronUp } from "lucide-react";

function App() {
  const [candidatos, setCandidatos] = useState(candidatosS);
  const [melhor, setMelhor] = useState("");

  const handleVote = (id) => {
    const novoA = candidatos.map((candidato) => {
      if (candidato.id === id) {
        return {
          ...candidato,
          votos: candidato.votos + 1,
        };
      } else {
        return candidato;
      }
    });
    setCandidatos(novoA);
  };

  useEffect(() => {
    const melhor = candidatos.reduce((maior, candidato) => {
      return candidato.votos > maior.votos ? candidato : maior;
    });
    setMelhor(melhor);
  }, [candidatos]);

  return (
    <>
      <div className="">
        <div className="max-w-sm mx-auto">
          <div className="font-mono font-bold text-3xl text-center">
            Votaçao: Melhor Dev
          </div>
          <div className="mt-10 text-lg mb-2 text-center">Candidatos:</div>
          {candidatos && (
            <div className="space-y-1">
              {candidatos.map((candidato) => (
                <div
                  className={
                    melhor.id === candidato.id
                      ? "flex items-center justify-between bg-green-300 p-2 rounded-lg font-bold"
                      : "flex items-center justify-between bg-gray-100 p-2 rounded-lg"
                  }
                  key={candidato.id}
                >
                  <div className="flex-1">
                    <div className="font-bold">{candidato.nome}</div>
                    <div className="text-sm text-gray-800">
                      Votos: {candidato.votos}
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => handleVote(candidato.id)}
                      className="flex items-center justify-center cursor-pointer"
                    >
                      <ChevronUp />
                      Votar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-15">
            Lider atual: {melhor.nome}, {melhor.votos} votos
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

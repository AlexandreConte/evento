import { Produto } from "@/core";
import Especificacoes from "./Especificacoes";
import Image from "next/image";

export interface InformacoesProdutoProps {
  produto: Produto
}

export default function InformacoesProduto(props: InformacoesProdutoProps) {
  const { produto } = props
  return produto ? (
    <div className="flex items-center bg-violet-dark rounded-xl p-5">
      <div className="flex flex-1 justify-center relative h-96">
        <Image src={produto.imagem}
          fill
          className="object-cover p-7"
          alt="Imagem do produto"
        />
      </div>
      <Especificacoes produto={produto} />
    </div>
  ) : null
}

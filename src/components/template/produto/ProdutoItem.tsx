import { Produto } from "@/core"
import Image from "next/image"
import Link from "next/link"

export interface ProdutoItemProps {
  produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
  const { produto } = props
  return (
    <Link href={`/produto/${produto.id}`}
      className="flex flex-col bg-violet-dark border border-white/10"
    >
      <div className="w-full h-48 relative">
        <Image
          src={produto.imagem}
          fill
          className="object-contain"
          alt="Imagem do Produto"
        />
      </div>
    </Link>
  )
}

import { produtos } from "@/core"

export default function PaginaProduto(props: any) {
  const id = +props.params.id
  const produto = produtos.find((produto) => produto.id === id)
  return (
    <div>
      Produto: {produto?.nome}
    </div>
  )
}

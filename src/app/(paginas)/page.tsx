import ListaProdutos from "@/components/produto/ListaProduto";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col container gap-5 py-10">
      <ListaProdutos />
    </div>
  );
}

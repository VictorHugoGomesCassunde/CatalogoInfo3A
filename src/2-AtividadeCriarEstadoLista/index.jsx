// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.


import { useState } from "react";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'fusca', preco: 'R$ 5,00' },
    { id: 2, nome: 'uno', preco: 'R$ 2000,00' },
    { id: 3, nome: 'chevette', preco: 'R$ 4300,00' }
  ]);

  return (
    <div>
         <h1>Vendas de carros</h1>
    </div>
   
  );
}


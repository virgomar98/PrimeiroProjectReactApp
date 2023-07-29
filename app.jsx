import React, {useState} from 'react';

const App = () => {
     const [ListaProdutos, setListaProduto] = useState([]);


 const getLista = () => {
    fetch('https://dummyjson.com/docs/products')
    .then(data => data.json())
    .then(resposta => { setListaProdutos(resposta.products);
    });

 }



   return (
    <div>
        <div>
            <button onClick={getLista}>Trazer a lista</button>
            {
                ListaProdutos.length ?
                ListaProdutos.map(produto => {
                     return <div key={produto.id}>{produto.title}</div>
                })
                : <div></div>
            }
        </div>
        <br /><br />
        <div>
            <input placeholder="ID" onChange={(event) => ValorDigitado(event)} />
            <button  onClick={getProdutoId}>Buscar por ID</button>
            <br />
            { produto ? produto.description :'' }
            
        </div>
    </div>
   );
 };
 
import React from 'react'
import Filtro from '../../filtro/Filtro'
import ProdutoItem from './ProdutoItem'
import classes from './Produtos.module.css'

const produtos = [
  {
    nome: 'Praesent auctor',
    preco: '42.49',
    img: 'img1.webp'
  },
  {
    nome: 'Duis commodo',
    preco: '24.99',
    img: 'img2.webp'
  },
  {
    nome: 'Ligula ipsum',
    preco: '22.25',
    img: 'img3.webp'
  },
  {
    nome: 'Quisque',
    preco: '36.49',
    img: 'img4.webp'
  },
  {
    nome: 'Maecenas elementum',
    preco: '27.79',
    img: 'img5.webp'
  },
  {
    nome: 'Phasellus mattis',
    preco: '51.49',
    img: 'img6.webp'
  },
  {
    nome: 'Curabitur',
    preco: '12.25',
    img: 'img7.webp'
  },
  {
    nome: 'Donec placerat',
    preco: '25.99',
    img: 'img8.webp'
  },
  {
    nome: 'Orci varius',
    preco: '42.75',
    img: 'img9.webp'
  },

]

const Produtos = () => {

  const listaProdutos = produtos.map(produto =>
    <ProdutoItem key={produto.nome} nome={produto.nome} preco={produto.preco} img={produto.img} />
  );



  return (
    <main className={classes.main}>
      <Filtro />
      <section className={classes.produtos}>
        <h1>Todas as categorias</h1>
        <ul>
          {listaProdutos}
        </ul>
      </section>
    </main>
  )
}

export default Produtos
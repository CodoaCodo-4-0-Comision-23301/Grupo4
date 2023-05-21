import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import ContenProducto from '@/components/card/ContenProducto';
import Productos from '@/components/card/Cards';
import data from '../data/postres.json';
import Barra from '@/components/navbar/Navbar';
import Chat from '@/components/chat/Chat';
import Footer from '@/components/footer/Footer';

export default function Home() {
  
  return (
    <>
    <div>
      <Head>
        <title>Postres</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/P.png" />
      </Head>
      <main>
        <Barra></Barra>
      </main>
      <body>
        <br></br>
        <br></br>
        <br></br>
        <ContenProducto>

          {data.map( postres =>
          <Productos
            titulo = {postres.titulo}
            precio = {postres.precio}
            imagen = {postres.imagen}
            texto = {postres.texto}
                   
          />
            
            )}
        </ContenProducto>
        <br></br>

        <Chat></Chat>
        <Footer></Footer>

     
      </body>

      </div>
    
      </>

  )
}


import {Categoria} from "./../interfaces/categoria";

export const CATEGORIAS: Categoria []= [
    {
      nombre: "Pastas",
      id: 1,
      fotoUrl: "https://i.blogs.es/90b0cc/istock-527135691/840_560.jpg", 
      productos:[{
        nombre: 'spagetti', 
        precio: 3200, 
        descripcion: 'salsa a eleccion', 
        imagen: 'https://www.thecookierookie.com/wp-content/uploads/2023/07/featured-baked-spaghetti-recipe.jpg'
      }, 
    {
      nombre: 'ñoquis', 
        precio: 3000, 
        descripcion: 'salsa a eleccion', 
        imagen: 'https://assets.unileversolutions.com/recipes-v2/210909.png'
    }]
    },
    {
      nombre: "Carne",
      id: 2,
      fotoUrl: "https://img.freepik.com/foto-gratis/bistec-jugoso-carne-rara-especias-verduras-asadas_24972-2328.jpg?w=2000",
    productos: [{
      nombre: 'Lomo ', 
      precio: 4500, 
      descripcion: 'Guarnicion a eleccion', 
      imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/0c/69/delicioso-lomo-a-la-parrilla.jpg'
    }, 
  {
    nombre: 'Entraña', 
      precio: 5000, 
      descripcion: 'Guarnicion a eleccion', 
      imagen: 'https://www.clarin.com/img/2022/02/15/nPJ1Lpq3n_1256x620__1.jpg'
  }]
    }, 
    {
     nombre: "Postres", 
     id: 3, 
     fotoUrl:"https://images.hola.com/imagenes/cocina/noticiaslibros/20200529168994/macarons-recetas/0-829-535/macarons-m.jpg",
      productos:[{
        nombre: 'Brownie con helado ', 
        precio: 3000, 
        descripcion: 'Helado de vainilla', 
        imagen: 'https://mandolina.co/wp-content/uploads/2020/11/brownie-con-helado-destacada.jpg'
      }, 
    {
      nombre: 'Chocotorta', 
        precio: 2000, 
        descripcion: '', 
        imagen: 'https://cdn.buenavibra.es/wp-content/uploads/2016/07/06194538/choctorta-1200.jpg'
    }]
    },
    {
      nombre: "Bebidas", 
      id: 4, 
      fotoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Soft_drink_shelf_2.jpg/1200px-Soft_drink_shelf_2.jpg",
    productos:[{
      nombre: 'Coca cola ', 
      precio: 2000, 
      descripcion: 'Comun-zero-light', 
      imagen: 'https://cdn-3.expansion.mx/dims4/default/1b14363/2147483647/strip/true/crop/2096x1430+0+0/resize/1200x819!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F95%2F6c%2F722abfb544dcb4a46b9ca967a1ef%2Fistock-499925476.jpg'
    }, 
  {
    nombre: 'Agua ', 
      precio: 2000, 
      descripcion: 'Con gas-sin gas', 
      imagen: 'https://www.pineo.cat/wp-content/uploads/DSC03534.jpg'
  },
  {
    nombre: 'Sprite', 
    precio: 2000, 
    descripcion: 'Comun o cero', 
    imagen: 'https://ams3.digitaloceanspaces.com/graffica/2022/05/Sprite-Dieline-can-reg-1024x614.jpeg'
  }, 
{
  nombre: 'Aquarius', 
    precio: 2000, 
    descripcion: 'De pera o de manzana', 
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_759754-MLA46276114669_062021-O.webp'
}]
    }
   
    ]
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const menu = {
  "Entradas": [
    { nombre: "Aritos de Cebolla", descripcion: "Cebolla en aros crujientes y dorados.", precio: "$8.000" },
    { nombre: "Canastos de Camarón", descripcion: "Canastillas crujientes rellenas de camarones en salsa especial.", precio: "$16.000" },
    { nombre: "Canastos con Mollejas", descripcion: "Mollejas en salsa blanca servidas en canasto de patacón.", precio: "$12.000" },
    { nombre: "Canastos Ropa Vieja", descripcion: "Canastillas crujientes rellenas de carne desmechada, gratinadas con queso mozzarella.", precio: "$12.000" },
    { nombre: "Patacón con Salsa del Lago", descripcion: "Patacones acompañados con salsa tártara de la casa.", precio: "$8.000" },
    { nombre: "Fritas de Mazorca", descripcion: "Tortitas de mazorca tierna fritas a la perfección.", precio: "$8.000" },
    { nombre: "Chorizo Criollo", descripcion: "Acompañado con arepa o papa.", precio: "$8.000" }
  ],
  "De la Tierra": [
    { nombre: "Sancocho El Lago + Gallina Dorada", descripcion: "Sancocho de gallina hecho en leña, junto a gallina dorada a la parrilla. Incluye arroz con menudencias, yuca, papa, plátano, guiso especial y limonada de panela.", precio: "$75.000" },
    { nombre: "Carne Ahumada", descripcion: "Lomo ancho y punta de anca de res ahumados lentamente durante ocho horas y dorados en parrilla. Acompañado de guarniciones criollas.", precio: "Desde $25.000" },
    { nombre: "Cerdo al Barril", descripcion: "Piezas de cerdo cocinadas con hierbas y especias en barril, con piel crujiente y carne jugosa. Acompañado de guarniciones criollas.", precio: "Desde $25.000" },
    { nombre: "Ajiaco Santafereño", descripcion: "Sopa tradicional de pollo desmechado con mazorca, guascas y tres tipos de papa. Servido con arroz, aguacate, alcaparras y crema de leche.", precio: "$25.000" },
    { nombre: "Picada del Lago", descripcion: "Trifásico de carnes: cerdo al barril, res ahumada, chorizo y pechuga a la parrilla. Acompañado de papa criolla, cascajos y arepa santandereana.", precio: "Desde $25.000" }
  ],
  "Del Lago": [
    { nombre: "Amarillo a la Monseñor", descripcion: "Bagre amarillo en guiso criollo con toque de salsa bechamel. Acompañado de patacón, papas a la francesa y ensalada.", precio: "$52.000" },
    { nombre: "Bocachico Frito - sudado", descripcion: "Bocachico fresco frito y sudado en guiso criollo. Acompañado de patacón, papas a la francesa y ensalada.", precio: "$40.000" },
    { nombre: "Mojarra Frita", descripcion: "Mojarra fresca frita y crocante. Acompañada con arroz, patacones y aguacate.", precio: "$35.000" },
    { nombre: "Cachama (Frita o Sudada)", descripcion: "Cachama fresca en preparación al gusto. Acompañada de arroz, patacones y aguacate.", precio: "$35.000" }
  ],
  "Del Mar": [
    { nombre: "Trucha al Ajillo", descripcion: "Trucha fresca cocinada con ajo natural y un toque secreto de la casa. Servida con patacón, papas a la francesa y ensalada.", precio: "$32.000" },
    { nombre: "Trucha a la Marinera", descripcion: "Trucha fresca bañada en salsa de mariscos y flameada. Acompañada de patacón y papas a la francesa.", precio: "$36.000" },
    { nombre: "Cazuela de Mariscos", descripcion: "Selección de mariscos frescos en salsa cremosa flameada con queso doble crema y parmesano. Acompañada de arroz y patacón.", precio: "$55.000" },
    { nombre: "Salmón del Lago", descripcion: "Salmón en salsa de frutos ácidos y crema de leche, con verduras flameadas, papas a la francesa y patacón.", precio: "$52.000" },
    { nombre: "Salmón Monsieur", descripcion: "Salmón sellado a la parrilla con reducción de brandy, mantequilla y toque picante. Acompañada de papas a la francesa, patacón y ensalada.", precio: "$50.000" },
    { nombre: "Ceviche de Camarones", descripcion: "Camarones marinados en limón y salsa de tomate con especias. Acompañada de galletas de soda.", precio: "$34.000" },
    { nombre: "Cocktail de Camarones", descripcion: "Camarones en aderezo ligero servidos en aguacate maduro. Acompañada de galletas de soda.", precio: "$38.000" }
  ],
  "Del Corral": [
    { nombre: "Pechuga a la Marinera", descripcion: "Pechuga a la parrilla bañada en salsa de mariscos y flameada. Acompañada de patacón, papas a la francesa y ensalada.", precio: "$35.000" },
    { nombre: "Pechuga en Salsa de Champiñones", descripcion: "Pechuga a la parrilla cubierta con salsa flameada de champiñones. Acompañada de patacón, papas a la francesa y ensalada.", precio: "$32.000" },
    { nombre: "Pechuga Apanada", descripcion: "Pechuga marinada, empanizada y frita hasta lograr textura crocante. Acompañada de patacón, papas a la francesa y ensalada.", precio: "$32.000" },
    { nombre: "Tirado de Pechuga", descripcion: "Tiras de pechuga salteadas en wok con verduras frescas y salsa especial. Acompañada de patacón y papas a la francesa.", precio: "$35.000" }
  ],
  "De la Parrilla": [
    { nombre: "Churrasco", descripcion: "400 gr de lomo ancho de res asado al término que prefieras, con chimichurri. Acompañada de patacón, papas a la francesa y ensalada.", precio: "$45.000" },
    { nombre: "Filet Mignon", descripcion: "Filete de lomo fino envuelto en tocineta, sellado en mantequilla y cubierto con salsa de champiñones y vino. Acompañada de patacón, papas a la francesa y ensalada.", precio: "$55.000" },
    { nombre: "Estofado del Lago", descripcion: "Cubos de lomo fino dorados en mantequilla con tocineta, champiñones y verduras en salsa especial.", precio: "$42.000" },
    { nombre: "Mar y Tierra del Lago", descripcion: "Medallón de lomo fino con camarones en su salsa, sobre cama de verduras y rúgula fresca. Con patacón y papas a la francesa", precio: "$60.000" },
    { nombre: "Steak a la Pimienta", descripcion: "Corte de lomo fino a la parrilla en salsa de pimienta. Acompañada de patacón, papas a la francesa y ensalada.", precio: "$40.000" },
    { nombre: "Bistec al Caballo", descripcion: "Filete de res cubierto con dos huevos fritos. Con papas, patacón y ensalada.", precio: "$42.000" },
    { nombre: "Rib-Eye", descripcion: "Corte premium de res adobado y asado a la parrilla. Acompañada de patacón, papas a la francesa y ensalada.", precio: "$50.000" },
    { nombre: "Costillas BBQ", descripcion: "Costillas ahumadas artesanalmente y bañadas en salsa BBQ de la casa. Acompañada de patacón, papas a la francesa y ensalada.", precio: "$40.000" }
  ],
  "Pastas": [
    { nombre: "Pasta Carbonara", descripcion: "Espagueti artesanal con salsa cremosa de huevo, tocineta, parmesano y res ahumada. Acompañado de pan al ajillo.", precio: "$28.000" },
    { nombre: "Pasta con Camarones", descripcion: "Espagueti artesanal con camarones salteados al ajo, salsa bechamel y parmesano. Acompañado de pan al ajillo.", precio: "$35.000" },
    { nombre: "Pasta Boloñesa", descripcion: "Espagueti artesanal en salsa boloñesa flameada con queso parmesano y toque de bechamel. Acompañado de pan al ajillo.", precio: "$28.000" }
  ],
  "Menú Infantil": [
    { nombre: "Hamburguesa Infantil", descripcion: "Jugosa hamburguesa de carne ahumada, acompañada de papitas a la francesa y sorpresa.", precio: "$16.000" },
    { nombre: "Snack del Lago", descripcion: "Tiras de pechuga apanadas y fritas. Acompañadas con papitas a la francesa.", precio: "$22.000" },
    { nombre: "Sándwich del Lago", descripcion: "Pechuga desmechada salteada con salsa de la casa.", precio: "$14.000" },
    { nombre: "Sándwich Lasaña", descripcion: "Sándwich XL con pollo y salsa boloñesa, gratinado con bechamel y queso. Acompañado de papitas a la francesa.", precio: "$18.000" }
  ],
  "Ensaladas": [
    { nombre: "Ensalada del Lago", descripcion: "Lechuga, cebolla, tomate, zanahoria rallada, salsa agridulce y queso parmesano.", precio: "$5.000" },
    { nombre: "Ensalada Oriental", descripcion: "Verduras salteadas (calabacín, zanahoria, habichuela, apio, espárragos y champiñones) sobre tortilla española.", precio: "$20.000" },
    { nombre: "Hamburguesa de Lentejas (Vegetariana)", descripcion: "Hamburguesa de lentejas sazonadas, servida en tartaleta de zanahoria.", precio: "$20.000" }
  ],
  "Guarniciones": [
    { nombre: "Papa criolla", descripcion: "Guarnición tradicional colombiana.", precio: "$5.000" },
    { nombre: "Papa rústica", descripcion: "Papas doradas con toque de romero.", precio: "$5.000" },
    { nombre: "Patacón", descripcion: "Plátano verde frito crocante.", precio: "$5.000" },
    { nombre: "Plátano al queso", descripcion: "Plátano maduro con queso fundido.", precio: "$6.000" },
    { nombre: "Cascajos verdes", descripcion: "Plátano verde cortado en trozos crujientes.", precio: "$5.000" },
    { nombre: "Arepa santandereana", descripcion: "Arepa tostada artesanal.", precio: "$4.000" },
    { nombre: "Arroz", descripcion: "Porción individual de arroz blanco.", precio: "$4.000" }
  ],
  "Bebidas y Jugos": [
    { nombre: "Jugos Naturales", descripcion: "Uva, Mora, Fresa, Maracuyá, Lulo, Mango, Guanábana, Piña-Hierbabuena, Tamarindo.", precio: "" },
    { nombre: "Bebidas", descripcion: "Gaseosas, Agua, Agua con gas, Soda, Cerveza Club Colombia, Coronita, Águila, Cola y Pola.", precio: "" },
    { nombre: "Malteadas", descripcion: "", precio: "" },
    { nombre: "Sodas del Lago", descripcion: "Frutos rojos, Frutos amarillos, Cereza - limón.", precio: "" }
  ]
};

const sections = Object.keys(menu);

export default function MenuElLago() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <div className="min-h-screen bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/paper.png')] bg-beige-100 p-4 text-gray-800">
      <header className="text-center mb-8">
        <p className="text-sm italic text-olive-700">
          Sabores tradicionales con un toque moderno.
          <br />
          En El Lago cada plato celebra la frescura y el sabor auténtico de nuestra tierra, con una propuesta gourmet que honra la cocina artesanal y los ingredientes locales.
        </p>
      </header>

      <div className="flex justify-center flex-wrap gap-2 mb-6">
        {sections.map((section) => (
          <Button key={section} variant={activeSection === section ? "default" : "outline"} onClick={() => setActiveSection(section)}>
            {section}
          </Button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        <Card className="bg-white/70 shadow-md rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-olive-800 mb-4">{activeSection}</h2>
            <ul className="space-y-4">
              {menu[activeSection].map((item, index) => (
                <li key={index} className="border-b pb-2">
                  <div className="flex justify-between font-medium">
                    <span>{item.nombre}</span>
                    <span>{item.precio}</span>
                  </div>
                  <p className="text-sm text-gray-700 italic">{item.descripcion}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <footer className="text-center mt-10 text-sm text-olive-700 font-medium">
        @ellagorestauranteoficial
      </footer>
    </div>
  );
}

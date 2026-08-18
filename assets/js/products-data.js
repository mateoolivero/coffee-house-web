var CATEGORY_LABELS = {
    cafes: 'Cafés',
    frias: 'Bebidas frías',
    pasteleria: 'Pastelería',
    veganas: 'Veganas'
};

var BLEU_PRODUCTS = [
    { id: "la-victoria", name: "Café La Victoria", cat: "cafes", price: 18, img: "coffee-pack-01.jpg", desc: "Origen Ortega, Tolima, Colombia. Variedad Geisha, proceso lavado, con notas a crisantemo blanco, kiwi y nectarina amarilla.", format: "500g" },
    { id: "la-victoria-1kg", name: "Café La Victoria — Pack 1kg", cat: "cafes", price: 32, img: "coffee-pack-01.jpg", desc: "El mismo origen Ortega, Tolima, en formato grande para el hogar o la oficina.", format: "1kg" },
    { id: "fazenda-pinhal", name: "Café Fazenda Pinhal 87+", cat: "cafes", price: 20, img: "coffee-pack-02.jpg", desc: "Origen Minas Gerais, Brasil. Variedades Arara, Catucaí y Catiguá, proceso natural anaeróbico de 96 horas, con notas a pera, durazno amarillo y azúcar de caña.", format: "500g" },
    { id: "fazenda-pinhal-1kg", name: "Café Fazenda Pinhal 87+ — Pack 1kg", cat: "cafes", price: 36, img: "coffee-pack-02.jpg", desc: "Blend intenso de Minas Gerais en formato familiar de un kilo.", format: "1kg" },
    { id: "dulce-misterio", name: "Café Dulce Misterio", cat: "cafes", price: 17, img: "coffee-pack-03.jpg", desc: "Origen Nariño, Colombia. Variedad Bourbon Aji, proceso lavado, con notas a melón, manzanilla y miel.", format: "500g" },
    { id: "dulce-misterio-1kg", name: "Café Dulce Misterio — Pack 1kg", cat: "cafes", price: 30, img: "coffee-pack-03.jpg", desc: "El mismo origen Nariño en formato grande, ideal para consumo diario.", format: "1kg" },
    { id: "cold-brew", name: "Cold Brew Bleu", cat: "frias", price: 7, img: "bleu-cup-latte.jpg", desc: "Reposo en frío 16 horas, cuerpo sedoso y bajo en acidez.", format: "500ml" },
    { id: "iced-latte-vainilla", name: "Iced Latte Vainilla", cat: "frias", price: 8, img: "bleu-cup-latte.jpg", desc: "Espresso doble, leche fría y jarabe de vainilla natural.", format: "500ml" },
    { id: "frappe-bleu", name: "Frappé Bleu", cat: "frias", price: 9, img: "bleu-cup-latte.jpg", desc: "Café frapeado con hielo, leche y un toque de canela.", format: "400ml" },
    { id: "mocha-helado", name: "Mocha Helado", cat: "frias", price: 9, img: "bleu-cup-latte.jpg", desc: "Espresso, chocolate semi amargo y leche bien fría.", format: "400ml" },
    { id: "te-frio-jazmin", name: "Té Frío de Jazmín", cat: "frias", price: 6, img: "bleu-cup-latte.jpg", desc: "Infusión de jazmín, hielo y un toque de miel.", format: "500ml" },
    { id: "limonada-cafe", name: "Limonada de Café", cat: "frias", price: 7, img: "bleu-cup-latte.jpg", desc: "Espresso, limón exprimido y jarabe de azúcar mascabo.", format: "400ml" },
    { id: "croissant-manteca", name: "Croissant de Manteca", cat: "pasteleria", price: 4.5, img: "coffee-2.jpg", desc: "Hojaldre de 36 capas, laminado a mano durante tres días.", format: "Unidad" },
    { id: "medialunas-bleu", name: "Medialunas Bleu", cat: "pasteleria", price: 3.2, img: "coffee-2.jpg", desc: "Receta clásica de manteca, glaseadas apenas salen del horno.", format: "Unidad" },
    { id: "cheesecake-maracuya", name: "Cheesecake de Maracuyá", cat: "pasteleria", price: 6.8, img: "coffee-2.jpg", desc: "Base de galletas de avena y coulis de maracuyá casero.", format: "Porción" },
    { id: "brownie-cafe", name: "Brownie de Café", cat: "pasteleria", price: 4.0, img: "coffee-2.jpg", desc: "Chocolate 70% con un shot de nuestro espresso de la casa.", format: "Unidad" },
    { id: "scon-arandanos", name: "Scon de Arándanos", cat: "pasteleria", price: 3.9, img: "coffee-2.jpg", desc: "Textura crocante por fuera, tierna por dentro, con arándanos frescos.", format: "Unidad" },
    { id: "alfajor-maicena", name: "Alfajor de Maicena", cat: "pasteleria", price: 2.8, img: "coffee-2.jpg", desc: "Relleno de dulce de leche artesanal y coco rallado.", format: "Unidad" },
    { id: "latte-avena", name: "Latte de Avena", cat: "veganas", price: 8.5, img: "bleu-cup-latte.jpg", desc: "Espresso doble con leche de avena texturizada.", format: "400ml" },
    { id: "muffin-banana", name: "Muffin Vegano de Banana", cat: "veganas", price: 4.2, img: "bolso-bleu.webp", desc: "Sin huevo ni lácteos, endulzado con banana madura.", format: "Unidad" },
    { id: "tarta-chocolate", name: "Tarta Vegana de Chocolate", cat: "veganas", price: 6.5, img: "c1.png", desc: "Base de cacao amargo y ganache de leche de coco.", format: "Porción" },
    { id: "medialunas-veganas", name: "Medialunas Veganas", cat: "veganas", price: 3.5, img: "menu-bleu.webp", desc: "Laminadas con margarina vegetal, mismo hojaldre de siempre.", format: "Unidad" },
    { id: "granola-bowl", name: "Granola Bowl", cat: "veganas", price: 7.0, img: "c2.png", desc: "Granola casera, yogur de coco y fruta de estación.", format: "Bowl" },
    { id: "latte-coco", name: "Latte de Coco Vegano", cat: "veganas", price: 8.5, img: "bleu-cup-latte.jpg", desc: "Espresso con leche de coco cremosa, notas tropicales.", format: "400ml" },
    { id: "cold-brew-1l", name: "Cold Brew Bleu — Botella 1L", cat: "frias", price: 14, img: "bleu-cup-latte.jpg", desc: "Formato botella para compartir o guardar en la heladera.", format: "1L" },
    { id: "iced-latte-grande", name: "Iced Latte Vainilla — Vaso grande", cat: "frias", price: 10, img: "bleu-cup-latte.jpg", desc: "La misma receta de siempre en un formato bien grande.", format: "700ml" },
    { id: "medialunas-docena", name: "Medialunas Bleu — Docena", cat: "pasteleria", price: 28, img: "coffee-2.jpg", desc: "Doce medialunas recién horneadas para compartir.", format: "Docena" },
    { id: "alfajor-caja", name: "Alfajor de Maicena — Caja x6", cat: "pasteleria", price: 15, img: "coffee-2.jpg", desc: "Caja de seis alfajores, ideal para regalar.", format: "Caja x6" }
];

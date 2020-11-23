let data = [
    {
        name: "Vans Old Skool Black Trainers",
        price: 82.99,
        brand: "Vans",
        colour: "Black",
        category: "Shoes",
        image: "https://images.asos-media.com/products/vans-classic-old-skool-black-trainers/11911199-1-black?$n_640w$&wid=634&fit=constrain"
    },
    {
        name: "Nike Air Tailwind",
        price: 110.99,
        brand: "Nike",
        colour: "Black",
        category: "Shoes",
        image: "https://images.asos-media.com/products/nike-air-tailwind-79-trainers-in-black/20525056-1-black?$n_640w$&wid=634&fit=constrain"
    },
    {
        name: "Nike Jordan CL99 snapback cap",
        price: 25.85,
        brand: "Nike",
        colour: "Black",
        category: "Hats",
        image: "https://images.asos-media.com/products/nike-jordan-cl99-snapback-cap-in-black-white/21095082-1-black?$n_640w$&wid=634&fit=constrain"
    },
    {
        name: "The North Face Salty Dog beanie",
        price: 37.99,
        brand: "The North Face",
        colour: "Black",
        category: "Hats",
        image: "https://images.asos-media.com/products/the-north-face-salty-dog-beanie-in-blue/21361763-1-aviatornavy?$n_640w$&wid=634&fit=constrain"
    },
    {
        name: "Levis 511 Slim Fit stretch",
        price: 131.99,
        brand: "Levis",
        colour: "Navy",
        category: "Jeans & Trousers",
        image: "https://images.asos-media.com/products/levis-511-slim-fit-stretch-jeans-in-manilla-sea-adapt-mid-wash/22276390-1-manillaseaadapt?$n_640w$&wid=634&fit=constrain"
    },
    {
        name: "Tommy Jeans Austin Slim",
        price: 110.99,
        brand: "Tommy Jeans",
        colour: "Black",
        category: "Jeans & Trousers",
        image: "https://images.asos-media.com/products/tommy-jeans-austin-slim-taper-jeans-in-black-wash/20426835-1-black?$n_640w$&wid=634&fit=constrain"
    },
    {
        name: "adidas Originals Collegiate Crest Hoodie",
        price: 87.99,
        brand: "Adidas",
        colour: "Green",
        category: "Hoodies & Sweatshirts",
        image: "https://images.asos-media.com/products/adidas-originals-hoodie-with-collegiate-crest-in-green-fleece/20863593-1-green?$n_640w$&wid=634&fit=constrain"
    },
    {
        name: "Nike Running Challenger 7 inch shorts",
        price: 37.26,
        sale_price: 29.79,
        brand: "Nike",
        colour: "Black",
        category: "Shorts",
        image: "https://images.asos-media.com/products/nike-running-challenger-7-inch-shorts-in-black/10602783-1-black?$n_320w$&wid=317&fit=constrain"
    },
    {
        name: "Reebok Classics Club C Revenge",
        price: 96.99,
        brand: "Reebok",
        colour: "White",
        category: "Shoes",
        image: "https://images.asos-media.com/products/reebok-classics-club-c-revenge-trainers-in-white-and-green/21239640-1-white?$n_320w$&wid=317&fit=constrain"
    },
    {
        name: "Nike Running Air Zoom Pegasus 37",
        price: 145.99,
        brand: "Nike",
        colour: "Black",
        category: "Shoes",
        image: "https://images.asos-media.com/products/nike-running-air-zoom-pegasus-37-trainers-in-black-gold/20561249-1-black?$n_320w$&wid=317&fit=constrain"
    },
    {
        name: "Helly Hansen Sirdal insulated jacket",
        price: 152.99,
        brand: "Helly Hansen",
        colour: "Khaki",
        category: "Jackets & Coats",
        image: "https://images.asos-media.com/products/helly-hansen-sirdal-insulated-jacket-in-green/20877163-1-lavgreen?$n_320w$&wid=317&fit=constrain"
    },
    {
        name: "French Connection buckle belt",
        price: 62.21,
        sale_price: 19.91,
        brand: "French Connection",
        colour: "Brown",
        category: "Accessories",
        image: "https://images.asos-media.com/products/french-connection-keeper-buckle-belt-in-brown-leather/21255174-1-brownmarine?$n_320w$&wid=317&fit=constrain"
    }
]

data = data.sort(() => Math.random() - 0.5)
export default data;
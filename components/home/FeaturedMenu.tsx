"use client";

import Image from "next/image";
import RouteLink from "../ui/RouteLink";

const categories = [
  {
    name: "Main Menu",
    image: "/image/Chicken_Stripes.png",
    items: ["Picada", "Casuela De Frijoles", "Bandeja Paisa"],
  },
  {
    name: "Appetizers",
    image: "/image/Churasco.png",
    items: ["Empandas", "Chicarron", "Arepa de Yuca con Queso"],
  },
  {
    name: "Breakfast",
    image: "/image/Huevos_Rancheros.png",
    items: ["Scrambled egg with cheese", "Beef sausage", "Bacon"],
  },
  {
    name: "Explore",
    image: "/image/explore.png",
    items: ["Daily specials", "Beverages", "Kids menu"],
  },
];

export default function FeaturedMenu() {
  return (
    <section className="bg-stone-900 text-white py-16 sm:py-24 md:py-32 px-[clamp(1rem,4vw,2rem)]">
      {/* GRID */}
      <div className="grid md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <RouteLink
            key={cat.name}
            href="/menu"
            className="group bg-stone-800/90 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg transition duration-300 hover:bg-stone-700 hover:-translate-y-2"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              width={240}
              height={240}
              className="object-contain mb-4 sm:mb-6 transition duration-500 group-hover:scale-110"
            />

            <h3 className="text-xl sm:text-2xl font-semibold tracking-wide mb-2 sm:mb-3">
              {cat.name}
            </h3>

            <p className="text-sm text-stone-400 leading-relaxed text-center">
              {cat.items.join(" • ")}
            </p>
          </RouteLink>
        ))}
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { useModalStore } from "@/feature/store/useModalStore";
import { motion } from "framer-motion";
import type { Dish } from "@/feature/store/useModalStore";

export default function TodaySpecial() {
  const { openModal } = useModalStore();

  // 7 DAYS SPECIAL DATA
  const dailySpecials: Dish[] = [
    {
      name: "Churrasco",
      price: "$25",
      serves: "Serves 1–2 people",
      description: "Grilled steak • Chimichurri • Rice • Beans • Salad",
      image: "/image/Churasco.png",
    },
    {
      name: "Churrasco",
      price: "$25",
      serves: "Serves 1–2 people",
      description: "Grilled steak • Chimichurri • Rice • Beans • Salad",
      image: "/image/Churasco.png",
    },
    {
      name: "Churrasco",
      price: "$25",
      serves: "Serves 1–2 people",
      description: "Grilled steak • Chimichurri • Rice • Beans • Salad",
      image: "/image/Churasco.png",
    },
    {
      name: "Churrasco",
      price: "$25",
      serves: "Serves 1–2 people",
      description: "Grilled steak • Chimichurri • Rice • Beans • Salad",
      image: "/image/Churasco.png",
    },
    {
      name: "Churrasco",
      price: "$25",
      serves: "Serves 1–2 people",
      description: "Grilled steak • Chimichurri • Rice • Beans • Salad",
      image: "/image/Churasco.png",
    },
    {
      name: "Churrasco",
      price: "$25",
      serves: "Serves 1–2 people",
      description: "Grilled steak • Chimichurri • Rice • Beans • Salad",
      image: "/image/Churasco.png",
    },
    {
      name: "Churrasco",
      price: "$25",
      serves: "Serves 1–2 people",
      description: "Grilled steak • Chimichurri • Rice • Beans • Salad",
      image: "/image/Churasco.png",
    },
  ];

  // DAY LABELS
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // GET TODAY
  const todayIndex = new Date().getDay();
  const todayDish = dailySpecials[todayIndex];
  const todayName = days[todayIndex];

  // MARQUEE TEXT
  const marqueeText = Array.from({ length: 20 }).map((_, i) => (
    <span
      key={i}
      className="text-3xl md:text-5xl font-extrabold text-stone-400 uppercase mx-8">
      Today's Special
    </span>
  ));

  return (
    <>
      {/* MARQUEE */}
      <div className="overflow-hidden bg-black py-4">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          }}>
          {marqueeText}
          {marqueeText}
        </motion.div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen">
        {/* IMAGE */}
        <div className="flex justify-center items-center bg-stone-700 h-full">
          <Image
            src={todayDish.image}
            alt={todayDish.name}
            width={650} // max width
            height={650} // max height
            className="w-[clamp(20rem,50vw,65rem)] h-[clamp(20rem,50vw,45rem)] object-contain"
            priority
          />
        </div>

        {/* CONTENT */}
        <div className="bg-stone-800 h-full flex flex-col items-center justify-center gap-4 sm:gap-6 px-[clamp(1rem,4vw,2rem)] text-center py-8 sm:py-12">
          
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-stone-400">
            {todayName} Special
          </p>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] sm:text-[clamp(3rem,7vw,6rem)] font-extrabold leading-none text-stone-300">
            {todayDish.name}
          </h1>

          <div className="w-16 h-[2px] bg-stone-500 my-3 sm:my-4" />

          <p className="text-[clamp(0.95rem,3vw,1.5rem)] sm:text-[clamp(1rem,4vw,1.8rem)] tracking-tight leading-[clamp(1rem,5vw,3rem)]  text-stone-300 max-w-lg">
            {todayDish.description?.split("•").map((item, i, arr) => (
              <span key={i}>
                {item.trim()}
                {i !== arr.length - 1 && <span className="opacity-50"> • </span>}
              </span>
            ))}
          </p>

          <p className="text-sm sm:text-base text-stone-400">{todayDish.serves}</p>

          <p className="text-xl sm:text-2xl font-semibold text-white">{todayDish.price}</p>

          <button
            onClick={() => openModal("order", todayDish)}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full hover:scale-105 transition"
          >
            Order Now
          </button>
        </div>
      </div>
    </>
  );
}

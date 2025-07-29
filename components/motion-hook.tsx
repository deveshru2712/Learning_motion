import React, { useRef, useState } from "react";
import { Gauge, Zap, Shield } from "lucide-react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
  useSpring,
  useMotionValueEvent,
} from "motion/react";

const MotionHook = () => {
  type IconType = {
    icon: React.ReactNode;
    text: string;
  };

  type SupercarFeaturesType = {
    title: string;
    description: string;
    image: string;
    icons: IconType[];
  };

  const Card = ({
    feature,
    idx,
  }: {
    feature: SupercarFeaturesType;
    idx: number;
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    });

    // convert one motion value to another

    const translateContent = useSpring(
      useTransform(scrollYProgress, [0, 1], [200, -100]),
      { stiffness: 100, mass: 1, damping: 30 },
    );

    const translateOpacity = useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [0, 1, 0],
    );

    const translateblur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
    const translateScale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

    // useSpring -> springy like

    // use for tracking the current value of motion

    return (
      <div
        ref={ref}
        key={idx}
        className="grid grid-cols-2 items-center gap-20 py-50"
      >
        <motion.div
          // cause will not be able to use the px directly as motion values
          style={{
            filter: useMotionTemplate`blur(${translateblur}px)`,
            scale: translateScale,
          }}
          className="flex flex-col items-start gap-5"
        >
          <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
          <p className="text-sm text-neutral-200">{feature.description}</p>
          <div className="flex items-center justify-between gap-5">
            {feature.icons.map((feature) => (
              <div className="flex items-center gap-1.5 text-sm text-neutral-200">
                <span>{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          style={{
            y: translateContent,
            opacity: translateOpacity,
          }}
        >
          <img
            src={feature.image}
            alt={feature.title}
            className="object-contain"
          />
        </motion.div>
      </div>
    );
  };

  const supercarFeatures: SupercarFeaturesType[] = [
    {
      title: "Bugatti Chiron",
      description:
        "The Bugatti Chiron is a mid-engine two-seated sports car designed and developed in Germany by Bugatti Engineering GmbH and manufactured in Molsheim, France, by Bugatti Automobiles S.A.S. With a top speed of 420 km/h (261 mph), it's one of the fastest production cars in the world.",
      image: "./car1.png",
      icons: [
        { icon: <Gauge />, text: "1,500 HP" },
        { icon: <Zap />, text: "0-60 mph in 2.3s" },
        { icon: <Shield />, text: "Carbon fiber body" },
      ],
    },
    {
      title: "Koenigsegg Jesko",
      description:
        "The Koenigsegg Jesko is a limited production mid-engine sports car produced by Swedish automobile manufacturer Koenigsegg. Named after Jesko von Koenigsegg, the father of company founder Christian von Koenigsegg, it features revolutionary aerodynamics and a 5.0L twin-turbo V8 engine.",
      image: "./car2.png",
      icons: [
        { icon: <Gauge />, text: "1,600 HP (on E85)" },
        { icon: <Zap />, text: "0-250-0 mph in 12.3s" },
        { icon: <Shield />, text: "Ultra-light carbon fiber" },
      ],
    },
    {
      title: "McLaren P1",
      description:
        "The McLaren P1 is a British limited-production plug-in hybrid sports car produced by McLaren Automotive. Debuted at the 2012 Paris Motor Show, it combines a twin-turbo V8 engine with an electric motor for a combined output of 903 horsepower, representing the ultimate in hybrid supercar technology.",
      image: "./car3.png",
      icons: [
        { icon: <Gauge />, text: "903 HP combined" },
        { icon: <Zap />, text: "0-60 mph in 2.7s" },
        { icon: <Shield />, text: "MonoCage carbon chassis" },
      ],
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  const background_arr = ["#003652", "#002137", "#0c1821"];

  const [background, setBackground] = useState(background_arr[0]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.floor(latest * background_arr.length);
    setBackground(background_arr[index]);
    // console.log(background_arr[index]);
  });

  return (
    <motion.div
      ref={containerRef}
      animate={{ background }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex min-h-screen w-screen items-center justify-center bg-neutral-900"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-10 py-40">
        {supercarFeatures.map((features, idx) => (
          <Card feature={features} idx={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default MotionHook;

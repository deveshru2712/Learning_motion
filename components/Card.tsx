import { AnimatePresence, motion } from "motion/react";
import {
  CalendarCheck,
  CirclePlus,
  Clock,
  MessageSquareText,
  X,
} from "lucide-react";
import { useState } from "react";

const Card = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className=" bg-white w-96 min-h-[32rem] rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-6 flex flex-col"
          >
            <h2 className="font-bold text-xl">Aceternity UI Component</h2>
            <p className="text-neutral-600 mt-2 text-base font-semibold">
              A collection of beautiful component, let's get started with it.
            </p>
            <div className="flex items-center justify-center mt-2">
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center justify-center cursor-pointer rounded-lg px-2 py-1 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
              >
                <img src="./mail.webp" alt="icon" width={50} height={50} />
                <p className="font-semibold text-neutral-600 ml-1">
                  Aceternity
                </p>
                <X className="ml-1" size={20} />
              </button>
            </div>
            <div className="flex-1 mt-4 rounded-lg bg-gray-100 border border-dashed border-neutral-200 relative">
              {/* motion div start here */}
              <motion.div
                whileHover={{ opacity: 1, filter: "blur(0)", scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200 text-lg font-normal border border-neutral-200"
              >
                <div className="p-4 flex items-center gap-2">
                  <div className="text-neutral-600 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-lg p-2">
                    <MessageSquareText />
                  </div>
                  <div className="flex flex-col items-start text-sm">
                    <h2 className="font-semibold">Aceternity UI Component</h2>
                    <span className="text-neutral-500">
                      A collection of UI Components
                    </span>
                  </div>
                </div>

                <div className="p-4 flex items-center gap-2">
                  <div className="text-neutral-600 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-lg p-2">
                    <Clock />
                  </div>
                  <div className="flex flex-col items-start text-sm">
                    <h2 className="font-semibold">24 Hours turn around</h2>
                    <span className="text-neutral-500">
                      Super fast delivery at warp speed.
                    </span>
                  </div>
                </div>

                <div className="p-4 flex items-center gap-2">
                  <div className="text-neutral-600 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-lg p-2">
                    <CalendarCheck />
                  </div>
                  <div className="flex flex-col items-start text-sm">
                    <h2 className="font-semibold">360 days all around</h2>
                    <span className="text-neutral-500">
                      We're here to help.
                    </span>
                  </div>
                </div>

                <div className="p-4 flex items-center gap-2">
                  <div className="text-neutral-600 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-lg p-2">
                    <CirclePlus />
                  </div>
                  <div className="flex flex-col items-start text-sm">
                    <h2 className="font-semibold">Some other components</h2>
                    <span className="text-neutral-500">
                      Here goes subtitle.
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;

import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IAccordianCustom {
  index: number;
  expanded: number | boolean;
  setExpanded: (value: boolean | number) => void;
  children: any;
}

const AccordianCustom: FC<IAccordianCustom> = ({
  index,
  expanded,
  setExpanded,
  children,
}) => {
  const isOpen = index === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : index)}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccordianCustom;

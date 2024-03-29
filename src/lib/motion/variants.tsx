export const menuButtonTopVariants = {
  closed: {
    rotate: 0,
  },
  open: {
    rotate: 45,
    y: 7.5,
  },
};

export const menuButtonMiddleVariants = {
  closed: {
    rotate: 0,
  },
  open: {
    opacity: 0,
  },
};

export const menuButtonBottomVariants = {
  closed: {
    rotate: 0,
  },
  open: {
    rotate: -45,
    y: -7.5,
  },
};

export const menuItemVariants = {
  open: {
    x: "0%",
    opacity: 1,
    transition: {
      when: "beforeChildren",
      type: "just",
      bounce: 0,
    },
  },
  closed: {
    x: "-100%",
    opacity: 0,
    transition: {
      when: "afterChildren",
      type: "just",
      bounce: 0,
    },
  },
};

export const menuItemContentVariants = {
  open: {
    x: "0%",
    opacity: 1,
  },
  closed: {
    x: "75%",
    opacity: 0,
  },
};

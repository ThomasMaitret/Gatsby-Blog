const colors = require("./colors");

const theme = {
  navigator: {
    colors: {
      title: colors.middle,
      subTitle: colors.lightDark,
      linkHover: colors.first,
      header: colors.firstDark,
      asideItemActiveBorder: colors.first
    },
    sizes: {
      asideWidth: "20em",
      maxWidth: "56em"
    },
    backgrounds: {
      wrapper: colors.superLight,
      asideItemActive: colors.firstLight
    }
  },
  post: {
    colors: {
      bold: colors.middle,
      blockquoteFrame: colors.light,
      link: colors.first,
      linkHover: colors.firstDark,
      meta: colors.middle,
      metaBorder: colors.first,
      text: colors.dark,
      title: colors.middle,
      subTitle: colors.superDark
    },
    backgrounds: {
      wrapper: colors.bright,
      meta: colors.light
    },
    sizes: {
      maxWidth: "50em"
    }
  },
  bottomBar: {
    colors: {
      link: colors.bright,
      icon: colors.firstSuperLight
    },
    backgrounds: {
      wrapper: colors.first,
      icon: colors.firstDark
    },
    sizes: {
      height: 45 //pixels
    }
  },
  topBar: {
    colors: {
      link: colors.bright,
      linkPost: colors.first
    },
    backgrounds: {
      wrapper: colors.first,
      wrapperPost: colors.firstDark
    },
    sizes: {
      height: 40 //pixels
    }
  },
  mediaQueryTresholds: {
    XL: "65em",
    L: "49em",
    M: "37em",
    S: "28em",
    XS: "21em"
  }
};

export default theme;

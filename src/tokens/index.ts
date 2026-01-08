// Design Tokens extracted from Figma - ReachMD Design System v1.0
// Source: https://www.figma.com/design/MNAYVbOITb0jSGEqNvgdtq/Design-System-ReachMD-v1.0

export const colors = {
  // Primary colors
  primary: {
    rest: '#0b66e4',
    hover: '#004cb2',
    pressed: '#004cb2',
    focus: '#004cb2',
    disabled: '#0b66e4',
  },
  
  // Guava (accent) colors
  guava: {
    rest: '#fa4b35',
    hover: '#d62400',
    pressed: '#d62400',
    focus: '#d62400',
    disabled: '#fa4b35',
  },
  
  // Error colors
  error: {
    rest: '#d5351f',
    hover: '#b41d08',
    pressed: '#b41d08',
    focus: '#72111d',
    disabled: '#d5351f',
  },
  
  // Neutral colors
  neutral: {
    salt200: '#fbfafa',
    salt1000: '#1c1c1c',
  },
  
  // Button specific colors
  button: {
    text: {
      primary: {
        rest: '#ffffff',
        inverted: '#1c1c1c',
        disabled: '#ffffff',
      },
      secondary: {
        rest: '#0b66e4',
        hover: '#004cb2',
        pressed: '#004cb2',
        disabled: '#0b66e4',
      },
      tertiary: {
        rest: '#0b66e4',
        hover: '#004cb2',
        pressed: '#004cb2',
        disabled: '#0b66e4',
      },
      disabled: '#bababc',
    },
    surface: {
      primary: {
        neutral: {
          rest: '#f4f4f3',
          hover: '#eaeaea',
          pressed: '#dcdcdc',
        },
        rest: '#0b66e4',
        hover: '#004cb2',
        pressed: '#004cb2',
        focus: '#004cb2',
        disabled: '#0b66e4',
      },
      secondary: {
        hover: '#f7fcfc',
        pressed: '#f2f7ff',
        focus: '#f7fcfc',
      },
      tertiary: {
        hover: '#f7fcfc',
        pressed: '#f7fcfc',
        focus: '#f7fcfc',
      },
      neutral: {
        focus: '#dcdcdc',
      },
    },
    outline: {
      secondary: {
        rest: '#0b66e4',
        hover: '#004cb2',
        pressed: '#004cb2',
        focus: '#004cb2',
        disabled: '#0b66e4',
      },
    },
    focus: {
      neutral: '#dcdcdc',
      error: '#72111d',
    },
  },
  
  // Spinner colors
  spinner: {
    primary: '#0b66e4',
    secondary: '#fa4b35',
    neutral: '#6c6c72',
    error: '#ee3f59',
    natural: '#fbfafa',
  },
  
  // Icon colors
  icon: {
    neutral5: '#1c1c1c',
  },
  
  // Background colors
  background: {
    neutral: {
      subtlePressed: 'rgba(28, 28, 28, 0.15)',
    },
  },
  
  // Accordion colors (from design system)
  accordion: {
    surface: {
      neutral: {
        hover: 'rgba(28, 28, 28, 0.05)',
        pressed: 'rgba(28, 28, 28, 0.10)',
      },
    },
  },
  
  // Alert colors
  alert: {
    neutral: {
      surface: '#fbfafa',
      border: '#dcdcdc',
      icon: '#1c1c1c',
      text: '#1c1c1c',
    },
    information: {
      surface: '#f2f7ff',
      border: '#0b66e4',
      icon: '#0b66e4',
      text: '#1c1c1c',
    },
    warning: {
      surface: '#fff7ed',
      border: '#fb923c',
      icon: '#fb923c',
      text: '#1c1c1c',
    },
    success: {
      surface: '#f0fdf4',
      border: '#22c55e',
      icon: '#22c55e',
      text: '#1c1c1c',
    },
    error: {
      surface: '#fef2f2',
      border: '#d5351f',
      icon: '#d5351f',
      text: '#1c1c1c',
    },
  },
};

export const typography = {
  fontFamily: {
    inter: 'Inter',
  },
  
  // Body styles
  body: {
    md: {
      400: {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: '0px',
        fontFamily: 'Inter',
      },
      500: {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '24px',
        letterSpacing: '0px',
        fontFamily: 'Inter',
      },
      700: {
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '24px',
        letterSpacing: '0px',
        fontFamily: 'Inter',
      },
    },
    sm: {
      500: {
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0px',
        fontFamily: 'Inter',
      },
      700: {
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: '20px',
        letterSpacing: '0px',
        fontFamily: 'Inter',
      },
    },
  },
  
  // Heading styles
  heading: {
    lg: {
      600: {
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '26px',
        letterSpacing: '0px',
        fontFamily: 'Inter',
      },
    },
  },
};

export const spacing = {
  button: {
    large: {
      paddingHorizontal: '24px',
      paddingVertical: '12px',
      gap: '8px',
    },
    medium: {
      paddingHorizontal: '16px',
      paddingVertical: '8px',
      gap: '8px',
    },
    small: {
      paddingHorizontal: '12px',
      paddingVertical: '8px',
      gap: '4px',
    },
  },
};

export const borderRadius = {
  pill: '9999px',
};

export const shadows = {
  // Shadow styles will be added as needed
};

export const breakpoints = {
  // Responsive breakpoints
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
};

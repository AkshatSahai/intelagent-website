/* @ds-bundle: {"format":3,"namespace":"IntelagentDesignSystem_a247ec","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"8a5382b5ae2e","components/core/Badge.jsx":"4be1b7ad73f7","components/core/Button.jsx":"ed59044ad26e","components/core/Card.jsx":"2741226c567a","components/feedback/Alert.jsx":"09225dff4987","components/feedback/Spinner.jsx":"d5ab3d68db00","components/forms/Checkbox.jsx":"b7ff353f9c9f","components/forms/Input.jsx":"601084e4edc4","ui_kits/website/CTA.jsx":"2805e28e8623","ui_kits/website/Footer.jsx":"d24fb49d5213","ui_kits/website/Hero.jsx":"63b84aa1f992","ui_kits/website/HowItWorks.jsx":"7694d120986e","ui_kits/website/Nav.jsx":"08c489851f55","ui_kits/website/Personas.jsx":"e4f99faaf90c","ui_kits/website/Services.jsx":"f6574e354171"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IntelagentDesignSystem_a247ec = window.IntelagentDesignSystem_a247ec || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function Avatar({
  src,
  name,
  size = 'md',
  style
}) {
  const sizes = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64
  };
  const px = sizes[size] || sizes.md;
  const initials = name ? name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() : '?';
  const base = {
    width: px,
    height: px,
    borderRadius: '50%',
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    background: 'var(--orange-100)',
    color: 'var(--orange-700)',
    fontSize: Math.floor(px * 0.36) + 'px',
    fontFamily: 'var(--font-display)',
    fontWeight: '700',
    userSelect: 'none',
    ...style
  };
  return src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || '',
    style: {
      ...base,
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: base
  }, initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const variantStyles = {
  default: {
    bg: 'var(--cream-200)',
    color: 'var(--charcoal-700)',
    border: 'var(--cream-500)'
  },
  accent: {
    bg: 'var(--orange-50)',
    color: 'var(--orange-700)',
    border: 'var(--orange-200)'
  },
  success: {
    bg: 'var(--status-success-bg)',
    color: 'var(--status-success-text)',
    border: 'var(--status-success-border)'
  },
  warning: {
    bg: 'var(--status-warning-bg)',
    color: 'var(--status-warning-text)',
    border: 'var(--status-warning-border)'
  },
  error: {
    bg: 'var(--status-error-bg)',
    color: 'var(--status-error-text)',
    border: 'var(--status-error-border)'
  },
  info: {
    bg: 'var(--status-info-bg)',
    color: 'var(--status-info-text)',
    border: 'var(--status-info-border)'
  },
  dark: {
    bg: 'var(--charcoal-900)',
    color: '#fff',
    border: 'transparent'
  }
};
const sizeStyles = {
  sm: {
    fontSize: '11px',
    padding: '2px 8px',
    height: '20px',
    gap: '4px'
  },
  md: {
    fontSize: '12px',
    padding: '3px 10px',
    height: '24px',
    gap: '5px'
  },
  lg: {
    fontSize: '13px',
    padding: '4px 12px',
    height: '28px',
    gap: '6px'
  }
};
function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  children,
  style
}) {
  const vr = variantStyles[variant] || variantStyles.default;
  const sz = sizeStyles[size] || sizeStyles.md;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: sz.gap,
      height: sz.height,
      padding: sz.padding,
      fontSize: sz.fontSize,
      fontFamily: 'var(--font-body)',
      fontWeight: '600',
      letterSpacing: '0.02em',
      borderRadius: '9999px',
      background: vr.bg,
      color: vr.color,
      border: `1px solid ${vr.border}`,
      whiteSpace: 'nowrap',
      lineHeight: 1,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'currentColor',
      flexShrink: 0,
      opacity: 0.8
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeMap = {
  sm: {
    height: '32px',
    padding: '0 14px',
    fontSize: '13px',
    gap: '6px',
    iconSize: '14px',
    borderRadius: '9999px'
  },
  md: {
    height: '40px',
    padding: '0 20px',
    fontSize: '14px',
    gap: '8px',
    iconSize: '16px',
    borderRadius: '9999px'
  },
  lg: {
    height: '48px',
    padding: '0 28px',
    fontSize: '15px',
    gap: '10px',
    iconSize: '18px',
    borderRadius: '9999px'
  }
};
const variantMap = {
  primary: {
    background: 'var(--orange-500)',
    color: '#fff',
    border: 'none',
    hoverBg: 'var(--orange-700)',
    activeBg: 'var(--orange-800)',
    shadow: 'var(--shadow-orange)',
    hoverShadow: 'var(--shadow-orange-lg)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--charcoal-900)',
    border: '1.5px solid var(--cream-600)',
    hoverBg: 'var(--cream-200)',
    activeBg: 'var(--cream-300)',
    shadow: 'var(--shadow-xs)',
    hoverShadow: 'var(--shadow-sm)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--charcoal-700)',
    border: 'none',
    hoverBg: 'var(--cream-200)',
    activeBg: 'var(--cream-300)',
    shadow: 'none',
    hoverShadow: 'none'
  },
  destructive: {
    background: 'var(--status-error-bg)',
    color: 'var(--status-error-text)',
    border: '1.5px solid var(--status-error-border)',
    hoverBg: '#f8d5d2',
    activeBg: '#f0bebb',
    shadow: 'none',
    hoverShadow: 'none'
  },
  accent: {
    background: 'var(--orange-50)',
    color: 'var(--orange-700)',
    border: '1.5px solid var(--orange-200)',
    hoverBg: 'var(--orange-100)',
    activeBg: 'var(--orange-200)',
    shadow: 'none',
    hoverShadow: 'none'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  children,
  onClick,
  type = 'button',
  style
}) {
  const [hovered, setHovered] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sz = sizeMap[size] || sizeMap.md;
  const vr = variantMap[variant] || variantMap.primary;
  const isDisabled = disabled || loading;
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sz.gap,
    height: sz.height,
    padding: sz.padding,
    fontSize: sz.fontSize,
    fontFamily: 'var(--font-body)',
    fontWeight: '600',
    letterSpacing: '0.01em',
    borderRadius: sz.borderRadius,
    border: vr.border || 'none',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'background 180ms ease, box-shadow 180ms ease, opacity 180ms ease, transform 120ms ease',
    outline: 'none',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    boxSizing: 'border-box',
    transform: active && !isDisabled ? 'scale(0.97)' : 'scale(1)',
    background: hovered && !isDisabled ? vr.hoverBg : vr.background,
    color: vr.color,
    boxShadow: hovered && !isDisabled ? vr.hoverShadow : vr.shadow,
    ...style
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    style: baseStyle,
    disabled: isDisabled,
    onClick: isDisabled ? undefined : onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, loading && /*#__PURE__*/React.createElement("svg", {
    width: sz.iconSize,
    height: sz.iconSize,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    style: {
      animation: 'spin 0.8s linear infinite',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes spin { to { transform: rotate(360deg); } }`), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 0 1 10 10"
  })), !loading && iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexShrink: 0,
      width: sz.iconSize,
      height: sz.iconSize
    }
  }, iconLeft), children && /*#__PURE__*/React.createElement("span", null, children), !loading && iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexShrink: 0,
      width: sz.iconSize,
      height: sz.iconSize
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = 'md',
  shadow = 'md',
  radius = 'xl',
  border = true,
  style,
  onClick
}) {
  const [hovered, setHovered] = React.useState(false);
  const padMap = {
    none: '0',
    sm: '16px',
    md: '24px',
    lg: '32px'
  };
  const shadowMap = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  const radiusMap = {
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    '2xl': 'var(--radius-2xl)'
  };
  const isClickable = typeof onClick === 'function';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => isClickable && setHovered(true),
    onMouseLeave: () => isClickable && setHovered(false),
    style: {
      background: '#fff',
      borderRadius: radiusMap[radius] || 'var(--radius-xl)',
      padding: padMap[padding] || '24px',
      boxShadow: hovered && isClickable ? 'var(--shadow-lg)' : shadowMap[shadow] || 'var(--shadow-md)',
      border: border ? '1px solid var(--cream-400)' : 'none',
      transition: 'box-shadow 180ms ease, transform 150ms ease',
      transform: hovered && isClickable ? 'translateY(-2px)' : 'none',
      cursor: isClickable ? 'pointer' : 'default',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const icons = {
  success: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 4 12 14.01l-3-3"
  })),
  warning: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  })),
  error: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15"
  })),
  info: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12.01",
    y2: "8"
  }))
};
const variantMap = {
  success: {
    bg: 'var(--status-success-bg)',
    color: 'var(--status-success-text)',
    border: 'var(--status-success-border)'
  },
  warning: {
    bg: 'var(--status-warning-bg)',
    color: 'var(--status-warning-text)',
    border: 'var(--status-warning-border)'
  },
  error: {
    bg: 'var(--status-error-bg)',
    color: 'var(--status-error-text)',
    border: 'var(--status-error-border)'
  },
  info: {
    bg: 'var(--status-info-bg)',
    color: 'var(--status-info-text)',
    border: 'var(--status-info-border)'
  },
  neutral: {
    bg: 'var(--cream-200)',
    color: 'var(--charcoal-800)',
    border: 'var(--cream-500)'
  }
};
function Alert({
  variant = 'info',
  title,
  children,
  onClose,
  style
}) {
  const vr = variantMap[variant] || variantMap.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start',
      padding: '14px 16px',
      background: vr.bg,
      color: vr.color,
      border: `1px solid ${vr.border}`,
      borderRadius: 'var(--radius-lg)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      marginTop: '1px'
    }
  }, icons[variant] || icons.info), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px',
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: 1.3
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '13px',
      lineHeight: '1.5',
      opacity: 0.9
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      flexShrink: 0,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'currentColor',
      opacity: 0.6,
      padding: '2px',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function Spinner({
  size = 'md',
  color = 'var(--orange-500)',
  style
}) {
  const sizes = {
    xs: 12,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48
  };
  const px = sizes[size] || sizes.md;
  const stroke = px <= 16 ? 2 : px <= 24 ? 2.5 : 3;
  return /*#__PURE__*/React.createElement("svg", {
    width: px,
    height: px,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    style: {
      animation: 'ia-spin 0.75s linear infinite',
      flexShrink: 0,
      ...style
    },
    "aria-label": "Loading"
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes ia-spin { to { transform: rotate(360deg); } }`), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    strokeOpacity: "0.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3a9 9 0 0 1 9 9"
  }));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  helperText,
  id,
  style
}) {
  const [hovered, setHovered] = React.useState(false);
  const cbId = id || (label ? 'cb-' + label.toLowerCase().replace(/\s+/g, '-') : 'cb');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '18px',
      height: '18px',
      flexShrink: 0,
      borderRadius: 'var(--radius-sm)',
      border: `2px solid ${checked ? 'var(--orange-500)' : hovered ? 'var(--orange-400)' : 'var(--cream-600)'}`,
      background: checked ? 'var(--orange-500)' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background 150ms ease, border-color 150ms ease',
      marginTop: '1px'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "8",
    viewBox: "0 0 10 8",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 4l2.5 2.5L9 1",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: cbId,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--charcoal-800)',
      lineHeight: '1.5'
    }
  }, label)), helperText && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 0 28px',
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      color: 'var(--charcoal-500)'
    }
  }, helperText));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  helperText,
  error,
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  placeholder,
  value,
  onChange,
  type = 'text',
  id,
  style
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const sizes = {
    sm: {
      height: '32px',
      fontSize: '13px',
      padding: '0 10px',
      paddingLeft: iconLeft ? '30px' : '10px',
      paddingRight: iconRight ? '30px' : '10px'
    },
    md: {
      height: '40px',
      fontSize: '14px',
      padding: '0 12px',
      paddingLeft: iconLeft ? '36px' : '12px',
      paddingRight: iconRight ? '36px' : '12px'
    },
    lg: {
      height: '48px',
      fontSize: '15px',
      padding: '0 16px',
      paddingLeft: iconLeft ? '42px' : '16px',
      paddingRight: iconRight ? '42px' : '16px'
    }
  };
  const sz = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      fontWeight: '500',
      color: error ? 'var(--status-error-text)' : 'var(--charcoal-800)',
      letterSpacing: '0.01em'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: size === 'sm' ? '8px' : size === 'lg' ? '14px' : '10px',
      color: 'var(--charcoal-500)',
      display: 'flex',
      pointerEvents: 'none',
      width: '16px',
      height: '16px'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    disabled: disabled,
    placeholder: placeholder,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      height: sz.height,
      paddingLeft: sz.paddingLeft,
      paddingRight: sz.paddingRight,
      fontSize: sz.fontSize,
      fontFamily: 'var(--font-body)',
      fontWeight: '400',
      color: disabled ? 'var(--charcoal-400)' : 'var(--charcoal-900)',
      background: disabled ? 'var(--cream-200)' : '#fff',
      border: `1.5px solid ${error ? 'var(--status-error-border)' : focused ? 'var(--orange-500)' : 'var(--cream-600)'}`,
      borderRadius: 'var(--radius-md)',
      outline: focused ? `3px solid ${error ? 'rgba(179,43,26,0.15)' : 'rgba(224,117,14,0.2)'}` : 'none',
      outlineOffset: '0px',
      transition: 'border-color 150ms ease, outline 150ms ease',
      boxSizing: 'border-box',
      cursor: disabled ? 'not-allowed' : 'text'
    }
  }), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: size === 'sm' ? '8px' : size === 'lg' ? '14px' : '10px',
      color: 'var(--charcoal-400)',
      display: 'flex',
      pointerEvents: 'none',
      width: '16px',
      height: '16px'
    }
  }, iconRight)), (helperText || error) && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      color: error ? 'var(--status-error-text)' : 'var(--charcoal-500)',
      lineHeight: '1.4'
    }
  }, error || helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CTA.jsx
try { (() => {
// CTA.jsx — Final call-to-action section
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--orange-500)',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '680px',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-reversed.svg",
    height: "32",
    style: {
      maxWidth: '180px',
      objectFit: 'contain',
      marginBottom: '28px',
      opacity: 0.9
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(32px, 5vw, 52px)',
      fontWeight: '800',
      letterSpacing: '-0.025em',
      color: '#fff',
      margin: '0 0 20px',
      lineHeight: '1.08'
    }
  }, "Your operations, handled."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '18px',
      color: 'rgba(255,255,255,0.82)',
      margin: '0 0 40px',
      lineHeight: '1.6'
    }
  }, "We start by understanding how you work. No commitment, no pitch \u2014 just a real conversation about where the grind is."), /*#__PURE__*/React.createElement("button", {
    onClick: () => document.getElementById('contact-modal').style.display = 'flex',
    style: {
      height: '56px',
      padding: '0 40px',
      background: 'var(--charcoal-900)',
      color: '#fff',
      border: 'none',
      borderRadius: '9999px',
      fontFamily: 'var(--font-body)',
      fontSize: '17px',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 8px 24px rgba(43,39,36,0.3)',
      transition: 'background 150ms, transform 120ms'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = '#1a1614';
      e.currentTarget.style.transform = 'scale(1.02)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--charcoal-900)';
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, "Let's talk \u2192"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '20px',
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'rgba(255,255,255,0.55)'
    }
  }, "No commitment. No jargon. We go from there.")));
}
Object.assign(window, {
  CTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Footer.jsx — Site footer
function Footer() {
  const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };
  const linkStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    color: 'rgba(255,255,255,0.55)',
    textDecoration: 'none',
    transition: 'color 150ms ease',
    cursor: 'pointer'
  };
  const headingStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.35)',
    marginBottom: '4px'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--charcoal-900)',
      padding: '64px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1100px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: '48px',
      marginBottom: '56px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-reversed.svg",
    height: "24",
    style: {
      maxWidth: '160px',
      objectFit: 'contain',
      marginBottom: '16px'
    },
    alt: "Intelagent"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'rgba(255,255,255,0.5)',
      margin: '0 0 20px',
      lineHeight: '1.65',
      maxWidth: '280px'
    }
  }, "The done-for-you AI partner that quietly handles the operational grind for small and growing business owners."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'rgba(255,255,255,0.35)',
      fontStyle: 'italic'
    }
  }, "\"Your operations, handled.\"")), /*#__PURE__*/React.createElement("div", {
    style: colStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: headingStyle
  }, "Services"), ['Lead capture', 'Booking', 'Follow-up', 'Invoicing', 'Payments'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: linkStyle,
    onMouseEnter: e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: colStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: headingStyle
  }, "Company"), ['About', 'How it works', 'Who it\'s for', 'Case studies'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: linkStyle,
    onMouseEnter: e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: colStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: headingStyle
  }, "Get in touch"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: linkStyle,
    onMouseEnter: e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
  }, "hello@intelagent.com"), /*#__PURE__*/React.createElement("button", {
    onClick: () => document.getElementById('contact-modal').style.display = 'flex',
    style: {
      height: '36px',
      padding: '0 18px',
      width: 'fit-content',
      background: 'var(--orange-500)',
      color: '#fff',
      border: 'none',
      borderRadius: '9999px',
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '4px'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--orange-700)',
    onMouseLeave: e => e.currentTarget.style.background = 'var(--orange-500)'
  }, "Book a conversation \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.08)',
      paddingTop: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'rgba(255,255,255,0.3)'
    }
  }, "\xA9 2025 Intelagent. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '24px'
    }
  }, ['Privacy', 'Terms'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      ...linkStyle,
      fontSize: '13px'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
  }, l))))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero.jsx — Above-the-fold hero section
function Hero() {
  const tagStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    background: 'var(--orange-50)',
    color: 'var(--orange-700)',
    border: '1px solid var(--orange-200)',
    borderRadius: '9999px',
    padding: '5px 14px',
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '0.04em',
    textTransform: 'uppercase'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-100)',
      padding: '96px 32px 80px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '780px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: tagStyle
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'var(--orange-500)'
    }
  }), "AI consulting for small business"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(40px, 6vw, 72px)',
      fontWeight: '800',
      letterSpacing: '-0.03em',
      color: 'var(--charcoal-900)',
      lineHeight: '1.05',
      margin: '28px 0 24px'
    }
  }, "Stop being the", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, "bottleneck.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '19px',
      lineHeight: '1.65',
      color: 'var(--charcoal-600)',
      margin: '0 auto 40px',
      maxWidth: '560px'
    }
  }, "We build AI that quietly handles the busywork \u2014 leads, bookings, follow-ups, invoicing \u2014 set up around how you already work."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => document.getElementById('contact-modal').style.display = 'flex',
    style: {
      height: '52px',
      padding: '0 32px',
      background: 'var(--orange-500)',
      color: '#fff',
      border: 'none',
      borderRadius: '9999px',
      fontFamily: 'var(--font-body)',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-orange)',
      transition: 'background 150ms, box-shadow 150ms'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--orange-700)';
      e.currentTarget.style.boxShadow = 'var(--shadow-orange-lg)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--orange-500)';
      e.currentTarget.style.boxShadow = 'var(--shadow-orange)';
    }
  }, "Let's talk about your workflow"), /*#__PURE__*/React.createElement("a", {
    href: "#how-it-works",
    style: {
      height: '52px',
      padding: '0 28px',
      background: 'transparent',
      color: 'var(--charcoal-700)',
      border: '1.5px solid var(--cream-600)',
      borderRadius: '9999px',
      fontFamily: 'var(--font-body)',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      textDecoration: 'none',
      transition: 'border-color 150ms, background 150ms'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--cream-200)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, "See how it works", /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '32px',
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--charcoal-400)'
    }
  }, "We study how you work first. No templates, no pressure.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '680px',
      margin: '64px auto 0',
      display: 'flex',
      gap: '40px',
      justifyContent: 'center',
      borderTop: '1px solid var(--cream-400)',
      paddingTop: '32px',
      flexWrap: 'wrap'
    }
  }, [{
    stat: 'Done-for-you',
    label: 'We set it up. You don\'t operate a tool.'
  }, {
    stat: 'Plain English',
    label: 'No jargon. You understand every step.'
  }, {
    stat: 'You\'re in control',
    label: 'You approve what matters. Always.'
  }].map(({
    stat,
    label
  }) => /*#__PURE__*/React.createElement("div", {
    key: stat,
    style: {
      textAlign: 'center',
      flex: '1',
      minWidth: '160px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '16px',
      fontWeight: '700',
      color: 'var(--charcoal-900)',
      marginBottom: '4px'
    }
  }, stat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--charcoal-500)',
      lineHeight: '1.4'
    }
  }, label)))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HowItWorks.jsx
try { (() => {
// HowItWorks.jsx — 3-step process
function HowItWorks() {
  const steps = [{
    num: '01',
    title: 'We map your workflow',
    body: 'Before we propose anything, we study how you actually work — your tools, your process, where things fall through the cracks. No templates, no guesswork.'
  }, {
    num: '02',
    title: 'We build the system',
    body: 'We layer agents on top of your existing operations. You don\'t learn new software. We configure, test, and run it for you.'
  }, {
    num: '03',
    title: 'It runs quietly',
    body: 'The agents handle the repetitive work in the background. You stay the one in charge, making the calls that matter. We stay in the relationship — not build-and-walk-away.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "how-it-works",
    style: {
      background: 'var(--cream-100)',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1100px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: '700',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--orange-600)',
      marginBottom: '12px'
    }
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(28px, 4vw, 40px)',
      fontWeight: '700',
      letterSpacing: '-0.02em',
      color: 'var(--charcoal-900)',
      margin: 0
    }
  }, "We handle it. You don't.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '32px',
      position: 'relative'
    }
  }, steps.map(({
    num,
    title,
    body
  }, i) => /*#__PURE__*/React.createElement("div", {
    key: num,
    style: {
      position: 'relative'
    }
  }, i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '20px',
      left: 'calc(100% + 4px)',
      width: 'calc(32px - 8px)',
      height: '1px',
      background: 'var(--cream-500)',
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'var(--orange-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: '13px',
      fontWeight: '800',
      marginBottom: '20px',
      flexShrink: 0
    }
  }, i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '20px',
      fontWeight: '700',
      color: 'var(--charcoal-900)',
      margin: '0 0 12px',
      letterSpacing: '-0.01em'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--charcoal-600)',
      margin: 0,
      lineHeight: '1.65'
    }
  }, body)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '64px',
      padding: '28px 32px',
      background: 'var(--charcoal-900)',
      borderRadius: 'var(--radius-xl)',
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-reversed.svg",
    height: "24",
    style: {
      maxWidth: '130px',
      objectFit: 'contain'
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'rgba(255,255,255,0.75)',
      margin: 0,
      flex: 1,
      lineHeight: '1.55'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff',
      fontWeight: '600'
    }
  }, "This isn't a DIY tool."), ' ', "You don't need to learn anything or configure anything. We do the work, keep it running, and explain everything in plain English."), /*#__PURE__*/React.createElement("button", {
    onClick: () => document.getElementById('contact-modal').style.display = 'flex',
    style: {
      height: '40px',
      padding: '0 22px',
      flexShrink: 0,
      background: 'var(--orange-500)',
      color: '#fff',
      border: 'none',
      borderRadius: '9999px',
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--orange-700)',
    onMouseLeave: e => e.currentTarget.style.background = 'var(--orange-500)'
  }, "Get started"))));
}
Object.assign(window, {
  HowItWorks
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HowItWorks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Nav.jsx — Sticky navigation bar
const {
  useState,
  useEffect
} = React;
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const linkStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--charcoal-700)',
    textDecoration: 'none',
    padding: '4px 0',
    borderBottom: '2px solid transparent',
    transition: 'color 150ms ease, border-color 150ms ease',
    cursor: 'pointer'
  };
  const links = ['How it works', 'Services', 'Who it\'s for', 'About'];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 200,
      background: 'rgba(251,247,242,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid var(--cream-400)' : '1px solid transparent',
      transition: 'border-color 200ms ease, box-shadow 200ms ease',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 32px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    height: "28",
    style: {
      maxWidth: '160px',
      objectFit: 'contain'
    },
    alt: "Intelagent"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: linkStyle,
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--orange-600)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--charcoal-700)';
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      ...linkStyle,
      fontSize: '14px'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--orange-600)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--charcoal-700)'
  }, "Sign in"), /*#__PURE__*/React.createElement("button", {
    onClick: () => document.getElementById('contact-modal').style.display = 'flex',
    style: {
      height: '36px',
      padding: '0 20px',
      background: 'var(--orange-500)',
      color: '#fff',
      border: 'none',
      borderRadius: '9999px',
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background 150ms ease'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--orange-700)',
    onMouseLeave: e => e.currentTarget.style.background = 'var(--orange-500)'
  }, "Get started"))));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Personas.jsx
try { (() => {
// Personas.jsx — Who it's for
function Personas() {
  const personas = [{
    name: 'Marcus, 44',
    role: 'Owner, 6-person HVAC & plumbing company',
    quote: '"I started this to be my own boss, but now I\'m a slave to my phone."',
    problems: ['Losing leads while on a job', 'Invoices going out late', 'Every tool needs setup time he doesn\'t have'],
    outcome: 'Now leads get answered automatically. Invoices go out same-day. Marcus takes weekends off.',
    tag: 'Local owner (1–10 staff)'
  }, {
    name: 'Priya, 39',
    role: 'Co-founder, 28-person digital marketing agency',
    quote: '"Half my week is plugging holes that a decent process should handle on its own."',
    problems: ['Tools that don\'t talk to each other', 'DIY automation that stalls', 'No internal owner for processes'],
    outcome: 'Intelagent acts as the ops brain. Systems scale. Priya focuses on growth.',
    tag: 'Growing SMB (10–50 staff)'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "who-it-s-for",
    style: {
      background: 'var(--cream-200)',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1100px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: '700',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--orange-600)',
      marginBottom: '12px'
    }
  }, "Who it's for"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(28px, 4vw, 40px)',
      fontWeight: '700',
      letterSpacing: '-0.02em',
      color: 'var(--charcoal-900)',
      margin: 0
    }
  }, "Intelagent is built for the owner who is the bottleneck.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px'
    }
  }, personas.map(({
    name,
    role,
    quote,
    problems,
    outcome,
    tag
  }) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-2xl)',
      padding: '32px',
      border: '1px solid var(--cream-400)',
      boxShadow: 'var(--shadow-md)',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      background: 'var(--orange-50)',
      color: 'var(--orange-700)',
      border: '1px solid var(--orange-200)',
      borderRadius: '9999px',
      padding: '3px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: '600',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      marginBottom: '16px'
    }
  }, tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      fontWeight: '700',
      color: 'var(--charcoal-900)',
      marginBottom: '4px'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--charcoal-500)'
    }
  }, role)), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: '15px',
      fontWeight: '600',
      fontStyle: 'italic',
      color: 'var(--charcoal-800)',
      lineHeight: '1.45',
      borderLeft: '3px solid var(--orange-300)',
      paddingLeft: '16px'
    }
  }, quote), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: '700',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--charcoal-400)',
      marginBottom: '8px'
    }
  }, "Their problems"), problems.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'flex-start',
      marginBottom: '6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: 'var(--cream-500)',
      marginTop: '7px',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--charcoal-600)',
      lineHeight: '1.4'
    }
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--orange-50)',
      borderRadius: 'var(--radius-lg)',
      padding: '14px 16px',
      border: '1px solid var(--orange-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: '700',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--orange-600)',
      marginBottom: '6px'
    }
  }, "The outcome"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--charcoal-700)',
      lineHeight: '1.5'
    }
  }, outcome)))))));
}
Object.assign(window, {
  Personas
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Personas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
// Services.jsx — What gets handled
function Services() {
  const services = [{
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "7",
      r: "4"
    })),
    title: 'Lead capture',
    desc: 'Every enquiry gets a reply within minutes, even when you\'re on a job.'
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "2",
      x2: "16",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "10",
      x2: "21",
      y2: "10"
    })),
    title: 'Booking',
    desc: 'Appointments confirmed automatically, synced to your calendar.'
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    })),
    title: 'Follow-up',
    desc: 'Warm, personal sequences that keep leads and customers engaged without sounding robotic.'
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "14 2 14 8 20 8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "13",
      x2: "8",
      y2: "13"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "17",
      x2: "8",
      y2: "17"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "10 9 9 9 8 9"
    })),
    title: 'Invoicing',
    desc: 'Invoices out same-day, every time. No more chasing or forgetting.'
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "1",
      y: "4",
      width: "22",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "1",
      y1: "10",
      x2: "23",
      y2: "10"
    })),
    title: 'Payments',
    desc: 'Payment links sent automatically. Cash flow stops being a white-knuckle ride.'
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "22,6 12,13 2,6"
    })),
    title: 'Email nurturing',
    desc: 'Stays in touch with your list between jobs — so you\'re top of mind when they\'re ready.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      background: 'var(--cream-200)',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1100px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: '700',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--orange-600)',
      marginBottom: '12px'
    }
  }, "What gets handled"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(28px, 4vw, 40px)',
      fontWeight: '700',
      letterSpacing: '-0.02em',
      color: 'var(--charcoal-900)',
      margin: '0 0 16px'
    }
  }, "The full operational spine, quietly handled."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '17px',
      color: 'var(--charcoal-600)',
      margin: 0,
      maxWidth: '520px',
      lineHeight: '1.6'
    }
  }, "We build agents that sit on top of the tools you already use. Nothing gets ripped out and replaced.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '16px'
    }
  }, services.map(({
    icon,
    title,
    desc
  }) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      padding: '28px',
      border: '1px solid var(--cream-400)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'box-shadow 180ms ease, transform 150ms ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.transform = 'none';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '44px',
      height: '44px',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--orange-50)',
      color: 'var(--orange-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '16px'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '16px',
      fontWeight: '700',
      color: 'var(--charcoal-900)',
      marginBottom: '8px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--charcoal-600)',
      lineHeight: '1.55'
    }
  }, desc))))));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

})();

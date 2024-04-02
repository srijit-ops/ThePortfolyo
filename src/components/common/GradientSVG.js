function GradientSVG({ gradientTransform, gradientId, color1, color2 }) {
  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={gradientId} gradientTransform={gradientTransform}>
          <stop offset="16.29%" stopColor={color1} />
          <stop offset="85.56%" stopColor={color2} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GradientSVG;

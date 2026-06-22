import logoImg from "@/assets/logo-murugan.png";

/**
 * Murugan Xpress Logo
 * Uses the provided brand image.
 * - In the nav (light background): mix-blend-mode:multiply removes the red bg visually
 * - In the footer (dark background): shown as-is with a slight glow
 */
export default function Logo({
  size = 48,
  variant = "nav",
}: {
  size?: number;
  variant?: "nav" | "footer";
}) {
  if (variant === "footer") {
    return (
      <img
        src={logoImg}
        alt="Murugan Xpress"
        width={size * 2.5}
        height={size}
        className="object-contain"
        style={{ height: size, width: "auto" }}
      />
    );
  }

  // Nav: blend away the red background on white/light surfaces
  return (
    <img
      src={logoImg}
      alt="Murugan Xpress"
      width={size * 2.5}
      height={size}
      className="object-contain"
      style={{
        height: size,
        width: "auto",
        mixBlendMode: "multiply",
      }}
    />
  );
}

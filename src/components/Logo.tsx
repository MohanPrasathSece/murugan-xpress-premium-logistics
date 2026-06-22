import logoImg from "@/assets/logo.jpeg";

export default function Logo({
  size = 44,
  variant = "nav",
}: {
  size?: number;
  variant?: "nav" | "footer";
}) {
  return (
    <img
      src={logoImg}
      alt="Murugan Xpress"
      style={{
        height: size,
        width: "auto",
        objectFit: "contain",
        // On white/glass nav: multiply blends away the red background
        // On dark footer: show as-is
        mixBlendMode: variant === "nav" ? "multiply" : "normal",
      }}
    />
  );
}

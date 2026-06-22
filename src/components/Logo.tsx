import logoImg from "@/assets/logo-removebg-preview.png";

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
      }}
    />
  );
}

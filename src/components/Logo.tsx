import logoImg from "@/assets/logo-removebg-preview.png";

export default function Logo({
  variant = "nav",
}: {
  size?: number;
  variant?: "nav" | "footer";
}) {
  return (
    <img
      src={logoImg}
      alt="Murugan Xpress"
      className={variant === "nav" ? "h-8 sm:h-9 md:h-[44px] w-auto object-contain" : "h-[44px] w-auto object-contain"}
    />
  );
}

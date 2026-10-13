import { siteConfig } from "./site";

export const facts = [
  { value: siteConfig.workingHours, label: "Жұмыс уақыты" },
  { value: "3 топ", label: "Топтар саны" },
  { value: "1,6–6 жас", label: "Балалардың жасы" },
  { value: "Қазақ / орыс", label: "Оқыту тілі" },
  { value: "5 рет", label: "Күнделікті тамақтану" },
] as const;

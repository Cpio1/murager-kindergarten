import { siteConfig } from "./site";

export const facts = [
  { value: "1,6–6 жас", label: "Балалардың жасы" },
  { value: "3 топ", label: "Топтар саны" },
  { value: "Қазақ / орыс", label: "Оқыту тілі" },
  { value: "5 рет", label: "Күнделікті тамақтану" },
  { value: siteConfig.workingHours, label: "Жұмыс уақыты" },
] as const;

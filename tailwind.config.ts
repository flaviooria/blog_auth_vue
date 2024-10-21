import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        component: "var(--component-color)",
        "font-color": "var(--text-color)",
      },
    },
  },
  plugins: [],
};

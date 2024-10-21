import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";

export const AuraPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{emerald.50}",
      100: "{emerald.100}",
      200: "{emerald.200}",
      300: "{emerald.300}",
      400: "{emerald.400}",
      500: "{emerald.500}",
      600: "{emerald.600}",
      700: "{emerald.700}",
      800: "{emerald.800}",
      900: "{emerald.900}",
      950: "{emerald.950}",
    },
  },
  components: {
    inputtext: {
      dark: {
        background: "var(--component-color)",
        color: "var(--text-color)",
        focus: {
          borderColor: "var(--secondary-color)",
        },
      },
    },
    floatlabel: {
      dark: {
        color: "var(--primary-color)",
        focusColor: "var(--text-color)",
      },
    },
  },
});

import type { Config } from "tailwindcss";
const sharedConfig = require("tailwindconfig");

const config: Config = {
  ...sharedConfig,
  content: ["./**/*.{js,ts,jsx,tsx,mdx}"],
};
export default config;

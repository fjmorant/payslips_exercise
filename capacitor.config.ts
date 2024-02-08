import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.morant.payslips",
  appName: "payslips",
  webDir: "build",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.68.14:3000",
    androidScheme: "https",
    cleartext: true,
  },
};

export default config;

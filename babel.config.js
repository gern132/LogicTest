module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@api": "./src/api",
          "@assets": "./src/assets",
          "@utils": "./src/utils",
          "@store": "./src/store",
          "@screens": "./src/screens",
          "@providers": "./src/providers",
          "@navigation": "./src/navigation",
          "@components": "./src/components",
          "@hooks": "./src/hooks",
          "@locales": "./src/locales",
          "@models": "./src/models",
        },
      },
    ],
  ],
}

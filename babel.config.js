module.exports = {
  presets: ['module:@react-native/babel-preset','nativewind/babel'],
   plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@": ".*",
            "@components": "./src/components",
            "@screens": "./src/screens",
          },
        },
      ],
    ],
};

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
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
    }],
    ],
};

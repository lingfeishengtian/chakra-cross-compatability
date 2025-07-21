// // src/index.ts
// export let chakraMajorVersion = 2;

// try {
//   // Dynamically require Chakra's package.json
//   const { version } = require("@chakra-ui/react/package.json");
//   chakraMajorVersion = parseInt(version.split(".")[0], 10);
// } catch (e) {
//   console.warn("⚠️ Could not detect Chakra UI version. Defaulting to v2.");
// }

// module.exports =
//   chakraMajorVersion >= 3
//     ? require("./v3")
//     : require("./v2");

export * from './components';
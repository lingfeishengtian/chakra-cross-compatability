import del from "rollup-plugin-delete";
import { dts } from "rollup-plugin-dts";

export default [
  {
    input: {
      index: "declarations_tmp/index.d.ts",
      v2: "declarations_tmp/v2.d.ts",
      v3: "declarations_tmp/v3.d.ts",
    },
    output: {
      dir: "dist",
      format: "esm",
    },
    external: [
      "lodash",
      "lodash.mergewith",
      "@types/react",
      /^react(?:\/[\w-]+)*$/,
    ],
    plugins: [
      dts({
        respectExternal: true,
      }),
      del({
        targets: "declarations_tmp/**/*",
        hook: "buildEnd",
      }),
      del({
        targets: "dist/**/*",
      }),
    ],
  },
];

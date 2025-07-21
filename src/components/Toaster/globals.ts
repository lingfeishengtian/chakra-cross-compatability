import { chakraVersion } from "../../global/chakraVersion";
import type { ToastOptions } from "./types";

export const toaster = {
  create: (options: ToastOptions<string>) => {
    if (chakraVersion === "2") {
      v2CreateToaster?.(options);

      return;
    }

    v3CreateToaster?.(options);
  },
};

export function setV2CreateToaster(
  createToaster: (ToastOptions: ToastOptions<string>) => void
) {
  v2CreateToaster = createToaster;
}

export function setV3CreateToaster(
  createToaster: (ToastOptions: ToastOptions<string>) => void
) {
  v3CreateToaster = createToaster;
}

let v2CreateToaster: any = undefined;
let v3CreateToaster: any = undefined;

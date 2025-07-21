"use client";

import * as chakra from "@chakra-ui/react";
import { chakraVersion } from "../../../global/chakraVersion";
import { setV3CreateToaster } from "../globals";

const InternalV3Toaster = (() => {
  if (chakraVersion !== "3") return null;

  const { createToaster } = chakra;

  const internalCreatedToaster = createToaster({
    pauseOnPageIdle: true,
  });

  setV3CreateToaster((options) => {
    internalCreatedToaster.attrs.placement = options.placement || "bottom";
    internalCreatedToaster.create(options);
  });
  return internalCreatedToaster;
})();

export const Toaster = () => {
  const { Toaster: ChakraToaster, Portal, Spinner, Stack, Toast } = chakra;

  return (
    <Portal>
      <ChakraToaster toaster={InternalV3Toaster!} insetInline={{ mdDown: "4" }}>
        {(toast: any) => (
          <Toast.Root width={{ md: "sm" }}>
            {toast.type === "loading" ? (
              <Spinner size="sm" color="blue.solid" />
            ) : (
              <Toast.Indicator />
            )}
            <Stack gap="1" flex="1" maxWidth="100%">
              {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
              {toast.description && (
                <Toast.Description>{toast.description}</Toast.Description>
              )}
            </Stack>
            {toast.action && (
              <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
            )}
            {toast.closable && <Toast.CloseTrigger />}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  );
};

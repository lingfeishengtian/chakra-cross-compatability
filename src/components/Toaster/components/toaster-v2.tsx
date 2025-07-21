import type { chakrav2 } from "chakra-ts-compatability-layer";
import { chakraVersionSplitter } from "../../../global/chakraVersionSplitter";
import { setV2CreateToaster } from "../globals";
import type { V2Placement, ToastOptions, V3Placement } from "../types";

const placementTranslation: Record<V3Placement, V2Placement> = {
    "top-start": "top-left",
    "top": "top",
    "top-end": "top-right",
    "bottom-start": "bottom-left",
    "bottom": "bottom",
    "bottom-end": "bottom-right",
}

export const Toaster = () => {
    const { useToast } = chakraVersionSplitter<chakrav2>();
    const toast = useToast();

    setV2CreateToaster((ToastOptions: ToastOptions<string>) => {
        const translatedPlacement: V2Placement = placementTranslation[ToastOptions.placement ?? "bottom-end"] || "bottom-right";

        toast({
            title: ToastOptions.title,
            description: ToastOptions.description,
            position: translatedPlacement,
            duration: ToastOptions.duration,
            isClosable: ToastOptions.closable,
            status: ToastOptions.type,
        });
    })

    return null;
}
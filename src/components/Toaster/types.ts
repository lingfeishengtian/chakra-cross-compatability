export type V3Placement = "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
export type V2Placement = "top-left" | "top" | "top-right" | "bottom-left" | "bottom" | "bottom-right";

export type ToastOptions<T> = {
    title?: T | undefined;
    description?: T | undefined;
    duration?: number | undefined;
    id?: string | undefined;
    type?: "success" | "error" | "loading" | "info" | undefined;
    closable?: boolean | undefined;
    placement?: V3Placement | undefined;
}
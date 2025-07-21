export type KeysInBoth<T, U> = Extract<keyof T, keyof U>;

export type Merge<T, U> = {
    [K in keyof T | keyof U]: 
        K extends keyof U 
            ? U[K] 
            : K extends keyof T 
                ? T[K] 
                : never;
};
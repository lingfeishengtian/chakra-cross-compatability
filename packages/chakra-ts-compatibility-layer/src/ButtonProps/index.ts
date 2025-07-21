import { ButtonProps as V2ButtonProps } from 'chakra-v2';
import { ButtonProps as V3ButtonProps } from 'chakra-v3';

// type KeysInBoth = Extract<keyof V2ButtonProps, keyof V3ButtonProps>;

// type Merge<T, U> = {
//     [K in keyof T | keyof U]: 
//         K extends keyof U 
//             ? U[K] 
//             : K extends keyof T 
//                 ? T[K] 
//                 : never;
// };

type MissingKeys<A, B> = Omit<A, keyof B>;

// type Partialize<T> = {
//     [K in keyof T]?: T[K];
// };

export type ButtonProps = V3ButtonProps;

export type ButtonPropsV2Missing = MissingKeys<V2ButtonProps, V3ButtonProps>;
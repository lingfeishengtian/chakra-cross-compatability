// import { ChakraProvider as V2ChakraProvider } from 'chakra-v2';
// import { defaultSystem, ChakraProvider as V3ChakraProvider } from 'chakra-v3';
import { ChakraProvider } from '@chakra-ui/react';
import ChangeRuntime from './ChangeRuntime';

export type ChakraSideBySideProps = {
    children?: React.ReactNode;
};

export default function ChakraSideBySide(props: ChakraSideBySideProps) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <ChangeRuntime>
                <ChakraProvider>{props.children}</ChakraProvider>
            </ChangeRuntime>
        </div>
    );
}

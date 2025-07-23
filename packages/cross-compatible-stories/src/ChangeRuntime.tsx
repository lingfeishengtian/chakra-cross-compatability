import React from 'react';
import * as ChakraV2 from 'chakra-v2'; // Your replacement package

// Cache original require if needed
const originalRequire = window.require;

export default function ChangeRuntime({ children }: { children: React.ReactNode }) {
    React.useEffect(() => {
        // Intercept require calls

        //@ts-ignore
        window.require = function (moduleName) {
            if (moduleName === '@chakra-ui/react') {
                return ChakraV2;
            }
            //@ts-ignore
            return originalRequire.apply(this, arguments);
        };

        // For ES modules (more complex)
        //@ts-ignore
        if (window._importIntercept) {
            //@ts-ignore
            window._importIntercept.set('@chakra-ui/react', ChakraV2);
        }

        return () => {
            // Cleanup - restore original require
            window.require = originalRequire;
            //@ts-ignore
            if (window._importIntercept) {
                //@ts-ignore
                window._importIntercept.delete('@chakra-ui/react');
            }
        };
    }, []);

    // Clone children with new context if needed
    return React.Children.map(children, (child) => {
        //@ts-ignore
        return React.cloneElement(child);
    });
}

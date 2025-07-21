import { chakraVersion } from "../../global/chakraVersion";
import { Toaster as V3Toaster } from "./components/toaster-v3";
import { Toaster as V2Toaster } from "./components/toaster-v2";

export default function Toaster() {
    if (chakraVersion === '2') {
        return <V2Toaster />;
    }
    
    return <V3Toaster />
}

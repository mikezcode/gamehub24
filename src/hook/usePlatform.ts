import useData from "./use-Data";
import { Platform } from "./use-Game";

const usePlatform = ( )=> useData<Platform>('/platforms/lists/parents')
export default usePlatform;
import { NAV_PATHS } from "./constants";

export const GetPath = (path: string):number => {
    const pathIndex = NAV_PATHS.findIndex(navPath => navPath.path === path.replace('/', '')); 
    return pathIndex > -1 ? pathIndex : 0;
}
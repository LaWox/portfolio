import { SPA_NAV_PATHS } from "./constants";

export const GetPath = (path: string):number => {
    const pathIndex = SPA_NAV_PATHS.findIndex(navPath => navPath.path === path.replace('/', '')); 
    return pathIndex > -1 ? pathIndex : 0;
}
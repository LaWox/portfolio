import { ANCHOR_PATHS } from "./constants";

export const GetPath = (path: string):number => {
    const pathIndex = ANCHOR_PATHS.findIndex(navPath => navPath.path === path.replace('/', '')); 
    return pathIndex > -1 ? pathIndex : 0;
}
import {MAP_TYPE_CHANGED} from '../types/map';


export const mapTypeChangeSync = (newMapType) => ({
    type:MAP_TYPE_CHANGED,
    mapType:newMapType
})
import { Feature } from 'ol';
import getFeaturesExtent from './getFeaturesExtent';

export const zoomInLocation = (event: any, maxZoom: number) => {
    const target = event.target;
    const map = event.map;
    const features: Feature[] = target.get('features');
    const extent = getFeaturesExtent(features);

    map.getView().fit(extent, {
        duration: 500,
        maxZoom: maxZoom,
    });
};

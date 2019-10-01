import VectorLayer from 'react-spatial/layers/VectorLayer';
import OLVectorLayer from 'ol/layer/Vector';
import OLVectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { Style, Circle, Fill } from 'ol/style';
import CONF from '../../config/appConfig';

/**
 * Layer for visualizing Handicap Topic.
 * @class
 * @params {Object} options
 * @inheritdoc
 */
class HandicapLayer extends VectorLayer {
  constructor(options = {}) {
    const olLayer = new OLVectorLayer({
      style: (f, r) => this.style(f, r),
      source: new OLVectorSource({
        format: new GeoJSON(),
        loader: () => {
          fetch(`${CONF.cartaroUrl}handicap/items/`)
            .then(data => data.json())
            .then(data => {
              const format = new GeoJSON();
              let features = format.readFeatures(data);
              features = features.filter(
                f =>
                  f.get('stuetzpunktbahnhof') === this.showStuetzpunktbahnhof,
              );
              this.olLayer.getSource().clear();
              this.olLayer.getSource().addFeatures(features);
            });
        },
      }),
      zIndex: 0,
    });

    super({
      ...options,
      olLayer,
    });

    this.setVisible(this.visible);

    this.showStuetzpunktbahnhof = options.showStuetzpunktbahnhof;

    this.onClick(f => {
      [this.clickedFeature] = f;
      this.olLayer.changed();
    });
  }

  /**
   * Create Style from feature
   * @param {ol.feature} feature
   * @returns {Object|null}
   */
  style(feature) {
    const style = [
      new Style({
        image: new Circle({
          radius: 7,
          fill: new Fill({
            color: feature.get('stuetzpunktbahnhof') ? 'blue' : 'red',
          }),
        }),
      }),
    ];

    if (feature === this.clickedFeature) {
      style.unshift(
        new Style({
          image: new Circle({
            radius: 10,
            fill: new Fill({
              color: 'rgba(0, 61, 133, 0.3)',
            }),
          }),
        }),
      );
    }

    return style;
  }
}

export default HandicapLayer;
<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## 

Layer for visualizing fare networks.

### Parameters

-   `options` **[Object][1]** Layer options.
    -   `options.visible` **[boolean][2]** Visibility of the layer.
    -   `options.url` **[string][3]** Url of the geOps fare network backend.
-   `null`  (number} options.labelOptimizationMinResolution Minimum resolution for
      using optimized label placement based on the current extent. Default is 100.

### zoomToZones

Zoom to visible zones.

#### Parameters

-   `options`  
-   `fitOptions` **[Object][1]?** Options,
      see [https://openlayers.org/en/latest/apidoc/module-ol_View-View.html][4]

### selectZonesByConfig

Select zones by a given configuration.

#### Parameters

-   `config` **[Array][5]&lt;[Object][1]>** Array of objects defining selected zones.
    -   `config[].partnerCode` **[number][6]** Partner code.
    -   `config[].zones` **[Array][5]&lt;[Object][1]>** Array of zones to select.
-   `number` **[number][6]** \[].zoneCode] Code of zone to select.
-   `string` **[string][3]** \[].zoneName] Name of zone to select.

Returns **[Promise][7]&lt;[Array][5]&lt;Feature>>** Promise resolving OpenLayers features.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[4]: https://openlayers.org/en/latest/apidoc/module-ol_View-View.html

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[6]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise
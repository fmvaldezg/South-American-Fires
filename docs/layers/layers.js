var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_72hrsfireshotspotsVIIRS_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://firms.modaps.eosdis.nasa.gov/mapserver/wms/fires/60b625c71ff732afb4bb397003ab597c/",
    attributions: ' ',
                              params: {
                                "LAYERS": "fires_viirs_snpp_72",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "72 hrs fires/hotspots VIIRS",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_72hrsfireshotspotsVIIRS_1, 0]);
var format_IndigenousTerritories_2 = new ol.format.GeoJSON();
var features_IndigenousTerritories_2 = format_IndigenousTerritories_2.readFeatures(json_IndigenousTerritories_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndigenousTerritories_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndigenousTerritories_2.addFeatures(features_IndigenousTerritories_2);
var lyr_IndigenousTerritories_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndigenousTerritories_2, 
                style: style_IndigenousTerritories_2,
                interactive: true,
                title: '<img src="styles/legend/IndigenousTerritories_2.png" /> Indigenous Territories'
            });

lyr_ESRIGraydark_0.setVisible(true);lyr_72hrsfireshotspotsVIIRS_1.setVisible(true);lyr_IndigenousTerritories_2.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_72hrsfireshotspotsVIIRS_1,lyr_IndigenousTerritories_2];
lyr_IndigenousTerritories_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Slug': 'Slug', 'description': 'description', 'color': 'color', });
lyr_IndigenousTerritories_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Slug': 'TextEdit', 'description': 'TextEdit', 'color': 'TextEdit', });
lyr_IndigenousTerritories_2.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Slug': 'no label', 'description': 'inline label', 'color': 'no label', });
lyr_IndigenousTerritories_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
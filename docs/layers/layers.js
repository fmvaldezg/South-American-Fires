ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-116.373023, -58.753547, 2.717406, 19.828092]);
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
var lyr_VIIRSSuomiNPP72hrsfireshotspots_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://firms.modaps.eosdis.nasa.gov/mapserver/wms/fires/60b625c71ff732afb4bb397003ab597c/",
    attributions: ' ',
                              params: {
                                "LAYERS": "fires_viirs_snpp_72",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "VIIRS Suomi NPP 72 hrs fires/hotspots",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VIIRSSuomiNPP72hrsfireshotspots_1, 0]);
var format_map_2 = new ol.format.GeoJSON();
var features_map_2 = format_map_2.readFeatures(json_map_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_map_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_map_2.addFeatures(features_map_2);
var lyr_map_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_map_2, 
                style: style_map_2,
                interactive: true,
                title: '<img src="styles/legend/map_2.png" /> map'
            });

lyr_ESRIGraydark_0.setVisible(true);lyr_VIIRSSuomiNPP72hrsfireshotspots_1.setVisible(true);lyr_map_2.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_VIIRSSuomiNPP72hrsfireshotspots_1,lyr_map_2];
lyr_map_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'ID': 'ID', 'Slug': 'Slug', 'description': 'description', 'color': 'color', });
lyr_map_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'ID': 'Range', 'Slug': 'TextEdit', 'description': 'TextEdit', 'color': 'TextEdit', });
lyr_map_2.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'ID': 'no label', 'Slug': 'no label', 'description': 'inline label', 'color': 'no label', });
lyr_map_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
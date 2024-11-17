ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([12162551.941819, -831969.756259, 12163467.642900, -831587.565628]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AdministrasiDesa_1 = new ol.format.GeoJSON();
var features_AdministrasiDesa_1 = format_AdministrasiDesa_1.readFeatures(json_AdministrasiDesa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiDesa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiDesa_1.addFeatures(features_AdministrasiDesa_1);
var lyr_AdministrasiDesa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrasiDesa_1, 
                style: style_AdministrasiDesa_1,
                popuplayertitle: "Administrasi Desa",
                interactive: true,
                title: '<img src="styles/legend/AdministrasiDesa_1.png" /> Administrasi Desa'
            });
var format_batasRW_2 = new ol.format.GeoJSON();
var features_batasRW_2 = format_batasRW_2.readFeatures(json_batasRW_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasRW_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasRW_2.addFeatures(features_batasRW_2);
var lyr_batasRW_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasRW_2, 
                style: style_batasRW_2,
                popuplayertitle: "batas RW",
                interactive: true,
    title: 'batas RW<br />\
    <img src="styles/legend/batasRW_2_0.png" /> RW.01<br />\
    <img src="styles/legend/batasRW_2_1.png" /> RW.02<br />\
    <img src="styles/legend/batasRW_2_2.png" /> RW.03<br />\
    <img src="styles/legend/batasRW_2_3.png" /> RW.04<br />\
    <img src="styles/legend/batasRW_2_4.png" /> RW.05<br />'
        });
var format_BatasRT_3 = new ol.format.GeoJSON();
var features_BatasRT_3 = format_BatasRT_3.readFeatures(json_BatasRT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasRT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRT_3.addFeatures(features_BatasRT_3);
var lyr_BatasRT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasRT_3, 
                style: style_BatasRT_3,
                popuplayertitle: "Batas RT",
                interactive: true,
    title: 'Batas RT<br />\
    <img src="styles/legend/BatasRT_3_0.png" /> RT.02/RW.01<br />\
    <img src="styles/legend/BatasRT_3_1.png" /> RT.01/RW.01<br />\
    <img src="styles/legend/BatasRT_3_2.png" /> RT.03/RW.01<br />\
    <img src="styles/legend/BatasRT_3_3.png" /> RT.01/RW.05<br />\
    <img src="styles/legend/BatasRT_3_4.png" /> RT.02/RW.05<br />\
    <img src="styles/legend/BatasRT_3_5.png" /> RT.03/RW.02<br />\
    <img src="styles/legend/BatasRT_3_6.png" /> RT.05/RW.02<br />\
    <img src="styles/legend/BatasRT_3_7.png" /> RT.01/RW.02<br />\
    <img src="styles/legend/BatasRT_3_8.png" /> RT.01/RW.03<br />\
    <img src="styles/legend/BatasRT_3_9.png" /> RT.01/RW.04<br />\
    <img src="styles/legend/BatasRT_3_10.png" /> RT.02/RW.02<br />\
    <img src="styles/legend/BatasRT_3_11.png" /> RT.02/RW.03<br />\
    <img src="styles/legend/BatasRT_3_12.png" /> RT.02/RW.04<br />\
    <img src="styles/legend/BatasRT_3_13.png" /> RT.03/RW.03<br />\
    <img src="styles/legend/BatasRT_3_14.png" /> RT.03/RW.04<br />\
    <img src="styles/legend/BatasRT_3_15.png" /> RT.04/RW.03<br />\
    <img src="styles/legend/BatasRT_3_16.png" /> RT.04/RW.04<br />\
    <img src="styles/legend/BatasRT_3_17.png" /> RT.04/RW.2<br />\
    <img src="styles/legend/BatasRT_3_18.png" /> RT.05.<br />\
    <img src="styles/legend/BatasRT_3_19.png" /> RT.06/RW.03<br />\
    <img src="styles/legend/BatasRT_3_20.png" /> RT.04/RW.02<br />'
        });
var format_bangunan_4 = new ol.format.GeoJSON();
var features_bangunan_4 = format_bangunan_4.readFeatures(json_bangunan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunan_4.addFeatures(features_bangunan_4);
var lyr_bangunan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bangunan_4, 
                style: style_bangunan_4,
                popuplayertitle: "bangunan",
                interactive: true,
                title: '<img src="styles/legend/bangunan_4.png" /> bangunan'
            });
var format_samplejalan_5 = new ol.format.GeoJSON();
var features_samplejalan_5 = format_samplejalan_5.readFeatures(json_samplejalan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_samplejalan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_samplejalan_5.addFeatures(features_samplejalan_5);
var lyr_samplejalan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_samplejalan_5, 
                style: style_samplejalan_5,
                popuplayertitle: "sample jalan",
                interactive: true,
                title: '<img src="styles/legend/samplejalan_5.png" /> sample jalan'
            });
var format_Lokasi_6 = new ol.format.GeoJSON();
var features_Lokasi_6 = format_Lokasi_6.readFeatures(json_Lokasi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokasi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokasi_6.addFeatures(features_Lokasi_6);
var lyr_Lokasi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokasi_6, 
                style: style_Lokasi_6,
                popuplayertitle: "Lokasi",
                interactive: true,
    title: 'Lokasi<br />\
    <img src="styles/legend/Lokasi_6_0.png" /> Bakso pak kus<br />\
    <img src="styles/legend/Lokasi_6_1.png" /> balaidesa Karangrau<br />\
    <img src="styles/legend/Lokasi_6_2.png" /> bonavia town house<br />\
    <img src="styles/legend/Lokasi_6_3.png" /> Gudang wardah<br />\
    <img src="styles/legend/Lokasi_6_4.png" /> Kos Bu lis<br />\
    <img src="styles/legend/Lokasi_6_5.png" /> musala nurul iman<br />\
    <img src="styles/legend/Lokasi_6_6.png" /> MYURA Guesthouse<br />\
    <img src="styles/legend/Lokasi_6_7.png" /> Nik salon/weding<br />\
    <img src="styles/legend/Lokasi_6_8.png" /> Perum Dewandaru<br />\
    <img src="styles/legend/Lokasi_6_9.png" /> perumahan shappire<br />\
    <img src="styles/legend/Lokasi_6_10.png" /> PT anak bangsa <br />\
    <img src="styles/legend/Lokasi_6_11.png" /> PT.kensai perkasa<br />\
    <img src="styles/legend/Lokasi_6_12.png" /> Rumah Mas Bowo<br />\
    <img src="styles/legend/Lokasi_6_13.png" /> Rumah rt2/2<br />\
    <img src="styles/legend/Lokasi_6_14.png" /> Rumah rt3/2<br />\
    <img src="styles/legend/Lokasi_6_15.png" /> SD N Karangrau<br />\
    <img src="styles/legend/Lokasi_6_16.png" /> Tiki Karangrau<br />\
    <img src="styles/legend/Lokasi_6_17.png" /> <br />'
        });
var format_JalanDesa_7 = new ol.format.GeoJSON();
var features_JalanDesa_7 = format_JalanDesa_7.readFeatures(json_JalanDesa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_7.addFeatures(features_JalanDesa_7);
var lyr_JalanDesa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_7, 
                style: style_JalanDesa_7,
                popuplayertitle: "Jalan Desa",
                interactive: true,
                title: '<img src="styles/legend/JalanDesa_7.png" /> Jalan Desa'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AdministrasiDesa_1.setVisible(true);lyr_batasRW_2.setVisible(true);lyr_BatasRT_3.setVisible(true);lyr_bangunan_4.setVisible(true);lyr_samplejalan_5.setVisible(true);lyr_Lokasi_6.setVisible(true);lyr_JalanDesa_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AdministrasiDesa_1,lyr_batasRW_2,lyr_BatasRT_3,lyr_bangunan_4,lyr_samplejalan_5,lyr_Lokasi_6,lyr_JalanDesa_7];
lyr_AdministrasiDesa_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', });
lyr_batasRW_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_BatasRT_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_bangunan_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'height': 'height', 'religion': 'religion', 'denominati': 'denominati', 'layer': 'layer', 'building_l': 'building_l', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'emergency': 'emergency', 'name': 'name', 'amenity': 'amenity', });
lyr_samplejalan_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'smoothness': 'smoothness', 'covered': 'covered', 'service': 'service', 'motorcar': 'motorcar', 'import': 'import', 'motorcycle': 'motorcycle', 'ref': 'ref', 'layer': 'layer', 'bridge': 'bridge', 'maxspeed_t': 'maxspeed_t', 'maxspeed': 'maxspeed', 'alt_name': 'alt_name', 'name': 'name', 'lanes': 'lanes', 'int_name': 'int_name', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'access': 'access', 'surface': 'surface', 'oneway': 'oneway', });
lyr_Lokasi_6.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_JalanDesa_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'lebar': 'lebar', });
lyr_AdministrasiDesa_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', });
lyr_batasRW_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_BatasRT_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_bangunan_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'height': '', 'religion': '', 'denominati': '', 'layer': '', 'building_l': '', 'addr_stree': '', 'addr_postc': '', 'addr_house': '', 'addr_city': '', 'emergency': '', 'name': '', 'amenity': '', });
lyr_samplejalan_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'smoothness': 'TextEdit', 'covered': 'TextEdit', 'service': 'TextEdit', 'motorcar': 'TextEdit', 'import': 'TextEdit', 'motorcycle': 'TextEdit', 'ref': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'maxspeed_t': 'TextEdit', 'maxspeed': 'TextEdit', 'alt_name': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', 'int_name': 'TextEdit', 'horse': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'access': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', });
lyr_Lokasi_6.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_JalanDesa_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'lebar': 'TextEdit', });
lyr_AdministrasiDesa_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Kecamatan': 'no label', 'Kabupaten': 'no label', 'Provinsi': 'no label', });
lyr_batasRW_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_BatasRT_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_bangunan_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'height': 'no label', 'religion': 'no label', 'denominati': 'no label', 'layer': 'no label', 'building_l': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'addr_city': 'no label', 'emergency': 'no label', 'name': 'no label', 'amenity': 'no label', });
lyr_samplejalan_5.set('fieldLabels', {'full_id': 'header label - visible with data', 'osm_id': 'header label - visible with data', 'osm_type': 'no label', 'highway': 'no label', 'smoothness': 'no label', 'covered': 'no label', 'service': 'no label', 'motorcar': 'no label', 'import': 'no label', 'motorcycle': 'no label', 'ref': 'no label', 'layer': 'no label', 'bridge': 'no label', 'maxspeed_t': 'no label', 'maxspeed': 'no label', 'alt_name': 'no label', 'name': 'no label', 'lanes': 'no label', 'int_name': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'access': 'no label', 'surface': 'no label', 'oneway': 'no label', });
lyr_Lokasi_6.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_JalanDesa_7.set('fieldLabels', {'id': 'no label', 'nama': 'header label - visible with data', 'lebar': 'no label', });
lyr_JalanDesa_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
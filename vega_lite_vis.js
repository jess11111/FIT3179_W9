var vg_1 = "choropleth2.vg.json";
vegaEmbed("#map", vg_1).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "bubble2.vega";
vegaEmbed("#bubble", vg_2).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_1 = "co2_by_country.json"; // Looks like it can't load this file for some reason.
vegaEmbed("#content", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
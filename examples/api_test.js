var datapoint = require('../src/datapoint');

datapoint.set_key("41bf616e-7dbc-4066-826a-7270b8da4b93");

site = datapoint.get_nearest_site(-0.124626, 51.500728);

forecast = datapoint.get_forecast_for_site(site.id);

now = forecast.days[0].timesteps[0];

console.log("Temperature is " + now.temperature.value + "°" + now.temperature.units + " in " + site.name);
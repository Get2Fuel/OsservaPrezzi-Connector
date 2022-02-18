import axios from "axios";
import querystring from "querystring";

const api = async (action, fields) => {
  const baseURL = "https://carburanti.mise.gov.it/OssPrezziSearch/ricerca/";
  const params = querystring.stringify(fields);
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const response = await axios.post(baseURL + action, params, config);
  const data = {
    center: {
      lat: response.data.center.first,
      lon: response.data.center.second,
    },
    pumps: [],
  };
  response.data.array.forEach((pump) => {
    const pumpObj = {
      lat: pump.lat,
      lon: pump.lon,
      address: pump.addr,
      name: pump.name,
      brand: pump.bnd,
      lastUpdate: pump.dIns,
      fuels: {},
    };
    pump.carburanti.forEach((fuel) => {
      if (fuel.idCarb === 1) {
        pumpObj.fuels.gasoline = { ...pumpObj.fuels.gasoline };
        if (fuel.isSelf === 1 && pumpObj.fuels.gasoline.self !== false) {
          pumpObj.fuels.gasoline.self = +fuel.prezzo;
        }
        if (fuel.isSelf === 0 && pumpObj.fuels.gasoline.served !== false) {
          pumpObj.fuels.gasoline.served = +fuel.prezzo;
        }
      }
      if (fuel.idCarb === 2) {
        pumpObj.fuels.petrol = { ...pumpObj.fuels.petrol };
        if (fuel.isSelf === 1 && pumpObj.fuels.petrol.self !== false) {
          pumpObj.fuels.petrol.self = +fuel.prezzo;
        }
        if (fuel.isSelf === 0 && pumpObj.fuels.petrol.served !== false) {
          pumpObj.fuels.petrol.served = +fuel.prezzo;
        }
      }
      if (fuel.idCarb === 3) {
        pumpObj.fuels.methane = { ...pumpObj.fuels.methane };
        if (fuel.isSelf === 1 && pumpObj.fuels.methane.self !== false) {
          pumpObj.fuels.methane.self = +fuel.prezzo;
        }
        if (fuel.isSelf === 0 && pumpObj.fuels.methane.served !== false) {
          pumpObj.fuels.methane.served = +fuel.prezzo;
        }
      }
      if (fuel.idCarb === 4) {
        pumpObj.fuels.lpg = { ...pumpObj.fuels.lpg };
        if (fuel.isSelf === 1 && pumpObj.fuels.lpg.self !== false) {
          pumpObj.fuels.lpg.self = +fuel.prezzo;
        }
        if (fuel.isSelf === 0 && pumpObj.fuels.lpg.served !== false) {
          pumpObj.fuels.lpg.served = +fuel.prezzo;
        }
      }
    });
    // console.log(pumpObj);
    data.pumps.push(pumpObj);
  });
  return data;
};

export default api;

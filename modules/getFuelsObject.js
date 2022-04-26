const getfuelsObject = (fuels) => {
  const fuelsObject = {};

  fuels.forEach((fuel) => {
    // gasoline
    if (fuel.fuelId === 1) {
      fuelsObject.gasoline = { ...fuelsObject.gasoline };
      if (fuel.isSelf && fuelsObject.gasoline.self !== false) {
        fuelsObject.gasoline.self = +fuel.price;
      }
      if (!fuel.isSelf && fuelsObject.gasoline.served !== false) {
        fuelsObject.gasoline.served = +fuel.price;
      }
    }
    // petrol
    if (fuel.fuelId === 2) {
      fuelsObject.petrol = { ...fuelsObject.petrol };
      if (fuel.isSelf === true && fuelsObject.petrol.self !== false) {
        fuelsObject.petrol.self = +fuel.price;
      }
      if (fuel.isSelf === false && fuelsObject.petrol.served !== false) {
        fuelsObject.petrol.served = +fuel.price;
      }
    }
    // methane
    if (fuel.fuelId === 3) {
      fuelsObject.methane = { ...fuelsObject.methane };
      if (fuel.isSelf === true && fuelsObject.methane.self !== false) {
        fuelsObject.methane.self = +fuel.price;
      }
      if (fuel.isSelf === false && fuelsObject.methane.served !== false) {
        fuelsObject.methane.served = +fuel.price;
      }
    }
    // lpg
    if (fuel.fuelId === 4) {
      fuelsObject.lpg = { ...fuelsObject.lpg };
      if (fuel.isSelf === true && fuelsObject.lpg.self !== false) {
        fuelsObject.lpg.self = +fuel.price;
      }
      if (fuel.isSelf === false && fuelsObject.lpg.served !== false) {
        fuelsObject.lpg.served = +fuel.price;
      }
    }
    // hundredOctane
    if (fuel.fuelId === 7) {
      fuelsObject.hundredOctane = { ...fuelsObject.hundredOctane };
      if (fuel.isSelf === true && fuelsObject.hundredOctane.self !== false) {
        fuelsObject.hundredOctane.self = +fuel.price;
      }
      if (fuel.isSelf === false && fuelsObject.hundredOctane.served !== false) {
        fuelsObject.hundredOctane.served = +fuel.price;
      }
    }
    // eniBlueSuper
    if (fuel.fuelId === 5) {
      fuelsObject.eniBlueSuper = { ...fuelsObject.eniBlueSuper };
      if (fuel.isSelf === true && fuelsObject.eniBlueSuper.self !== false) {
        fuelsObject.eniBlueSuper.self = +fuel.price;
      }
      if (fuel.isSelf === false && fuelsObject.eniBlueSuper.served !== false) {
        fuelsObject.eniBlueSuper.served = +fuel.price;
      }
    }
    // eniBlueDiesel
    if (fuel.fuelId === 20) {
      fuelsObject.eniBlueDiesel = { ...fuelsObject.eniBlueDiesel };
      if (fuel.isSelf === true && fuelsObject.eniBlueDiesel.self !== false) {
        fuelsObject.eniBlueDiesel.self = +fuel.price;
      }
      if (fuel.isSelf === false && fuelsObject.eniBlueDiesel.served !== false) {
        fuelsObject.eniBlueDiesel.served = +fuel.price;
      }
    }
    // alpinePetrol
    if (fuel.fuelId === 23) {
      fuelsObject.alpinePetrol = { ...fuelsObject.alpinePetrol };
      if (fuel.isSelf === true && fuelsObject.alpinePetrol.self !== false) {
        fuelsObject.alpinePetrol.self = +fuel.price;
      }
      if (fuel.isSelf === false && fuelsObject.alpinePetrol.served !== false) {
        fuelsObject.alpinePetrol.served = +fuel.price;
      }
    }
    // essoSupremeDiesel
    if (fuel.fuelId === 327) {
      fuelsObject.essoSupremeDiesel = { ...fuelsObject.essoSupremeDiesel };
      if (
        fuel.isSelf === true &&
        fuelsObject.essoSupremeDiesel.self !== false
      ) {
        fuelsObject.essoSupremeDiesel.self = +fuel.price;
      }
      if (
        fuel.isSelf === false &&
        fuelsObject.essoSupremeDiesel.served !== false
      ) {
        fuelsObject.essoSupremeDiesel.served = +fuel.price;
      }
    }
    // essoGasolioPremium
    if (fuel.fuelId === 10) {
      fuelsObject.essoGasolioPremium = { ...fuelsObject.essoGasolioPremium };
      if (
        fuel.isSelf === true &&
        fuelsObject.essoGasolioPremium.self !== false
      ) {
        fuelsObject.essoGasolioPremium.self = +fuel.price;
      }
      if (
        fuel.isSelf === false &&
        fuelsObject.essoGasolioPremium.served !== false
      ) {
        fuelsObject.essoGasolioPremium.served = +fuel.price;
      }
    }
    // q8HiQDiesel
    if (fuel.fuelId === 6) {
      fuelsObject.q8HiQDiesel = { ...fuelsObject.q8HiQDiesel };
      if (fuel.isSelf === true && fuelsObject.q8HiQDiesel.self !== false) {
        fuelsObject.q8HiQDiesel.self = +fuel.price;
      }
      if (fuel.isSelf === false && fuelsObject.q8HiQDiesel.served !== false) {
        fuelsObject.q8HiQDiesel.served = +fuel.price;
      }
    }
    // q8HiQPerformPlus
    if (fuel.fuelId === 28) {
      fuelsObject.q8HiQPerformPlus = { ...fuelsObject.q8HiQPerformPlus };
      if (fuel.isSelf === true && fuelsObject.q8HiQPerformPlus.self !== false) {
        fuelsObject.q8HiQPerformPlus.self = +fuel.price;
      }
      if (
        fuel.isSelf === false &&
        fuelsObject.q8HiQPerformPlus.served !== false
      ) {
        fuelsObject.q8HiQPerformPlus.served = +fuel.price;
      }
    }
    // lGnc
    if (fuel.fuelId === 323) {
      fuelsObject.lGnc = { ...fuelsObject.lGnc };
      if (fuel.isSelf === true && fuelsObject.lGnc.self !== false) {
        fuelsObject.lGnc.self = +fuel.price;
      }
      if (fuel.isSelf === false && fuelsObject.lGnc.served !== false) {
        fuelsObject.lGnc.served = +fuel.price;
      }
    }
    // gnl
    if (fuel.fuelId === 324) {
      fuelsObject.gnl = { ...fuelsObject.gnl };
      if (fuel.isSelf === true && fuelsObject.gnl.self !== false) {
        fuelsObject.gnl.self = +fuel.price;
      }
      if (fuel.isSelf === false && fuelsObject.gnl.served !== false) {
        fuelsObject.gnl.served = +fuel.price;
      }
    }
  });

  return fuelsObject;
};

export default getfuelsObject;

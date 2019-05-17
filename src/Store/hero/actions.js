export function incluirSerie(e, mass) {
  return async dispatch => {
    const Arr = mass.series.items;
    Arr.push({
      name: e,
      resourceURI: "Pedro URL"
    });
  };
}

export function retirarSerie(item, mass) {
  return async dispatch => {
    const Arr = mass.series.items;

    for (var i = 0; i < Arr.length; i++) {
      if (Arr[i].name === item) {
        Arr.splice(i, 1);
      }
    }
  };
}

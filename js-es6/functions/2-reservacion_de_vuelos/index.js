export function arilineBooker(airline) {
  // Lista privada de pasajeros
  let passengers = [];

  // Método para listar los pasajeros
  function listPassengers() {
    return passengers;
  }

  // Método para registrar un pasajero
  function registerPassenger(nombre, numeroDeVuelo) {
    // Verificar si el pasajero ya está registrado en ese vuelo
    const pasajeroExistente = passengers.find(p => p.name === nombre && p.flightNumber === numeroDeVuelo);
    if (pasajeroExistente) {
      return `Pasajero ${nombre} ya registrado en el vuelo ${numeroDeVuelo} de ${airline}`;
    };

    // Si no existe, agregar el pasajero a la lista
    passengers.push({ name: nombre, flightNumber: numeroDeVuelo, checkIn: false });
    return `Pasajero ${nombre} registrado en el vuelo ${numeroDeVuelo} de ${airline}`;
  };

  // Método para hacer check-in a un pasajero
  function checkIn(nombre, numeroDeVuelo) {
    const pasajero = passengers.find(p => p.name === nombre && p.flightNumber === numeroDeVuelo);
        if (!pasajero) {
      return `Pasajero ${nombre} no registrado en el vuelo ${numeroDeVuelo} de ${airline}`;
    }
    if (pasajero.checkIn) {
      return `Pasajero ${nombre} ya realizo checkIn`;
    }

    pasajero.checkIn = true;
     return `CheckIn realizado para el pasajero ${nombre} en el vuelo ${numeroDeVuelo} de ${airline}`;
  }

  // Método para eliminar un pasajero si no ha hecho check-in
  function delerePassenger (nombre, numeroDeVuelo) {
    const pasajeroIndex = passengers.findIndex(p => p.name === nombre && p.flightNumber === numeroDeVuelo);
    if (pasajeroIndex === -1) {
      return `Pasajero ${nombre} no registrado en el vuelo ${numeroDeVuelo} de ${airline}`;
    }
    const pasajero = passengers[pasajeroIndex];
    if (pasajero.checkIn) {
      return `Pasajero ${nombre} ya realizo checkIn`;
    }

    // Eliminar al pasajero
    passengers.splice(pasajeroIndex, 1);
    return `Pasajero ${nombre} eliminado del vuelo ${numeroDeVuelo} de ${airline}`;
  }

  // Retornar el objeto con los métodos solicitados
  return {
    listPassengers,
    registerPassenger,
    checkIn,
    delerePassenger
  };
}

// Ejemplo de uso
// const avianca = airlineBooker("Avianca");

// // Registrar pasajeros
// //console.log(avianca.registrarPasajero("Sebas", 123)); // "Pasajero Sebas registrado en el vuelo 123 de Avianca"
// //console.log(avianca.registrarPasajero("Sebas", 123)); // "Pasajero Sebas ya registrado en el vuelo 123 de Avianca"

// // Listar pasajeros
// console.log(avianca.listPasajeros()); // [{ nombre: "Sebas", numeroDeVuelo: 123, checkIn: false }]

// // Realizar checkIn
// console.log(avianca.checkIn("Sebas", 123)); // "CheckIn realizado para el pasajero Sebas en el vuelo 123 de Avianca"
// console.log(avianca.checkIn("Sebas", 123)); // "Pasajero Sebas ya realizó checkIn"

// // Eliminar pasajero
// console.log(avianca.eliminarPasajero("Sebas", 123)); // "Pasajero Sebas ya realizó checkIn"

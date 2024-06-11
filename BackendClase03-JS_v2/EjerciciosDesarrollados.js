// JavaScript utilizando funciones relacionadas con una Clínica. 
// Estos ejercicios incluyen conceptos como manejo de objetos, arrays, callbacks, promesas 
// y programación asíncrona.


/* Ejercicio01.- Crea una función para agregar pacientes a una lista, buscar pacientes 
por nombre y eliminar pacientes.*/


let pacientes = [];

function agregarPaciente(nombre, edad, enfermedad) {
    const paciente = { nombre, edad, enfermedad };
    pacientes.push(paciente);
    return paciente;
}

function buscarPaciente(nombre) {
    return pacientes.find(paciente => paciente.nombre === nombre);
}

function eliminarPaciente(nombre) {
    const indice = pacientes.findIndex(paciente => paciente.nombre === nombre);
    if (indice !== -1) {
        return pacientes.splice(indice, 1)[0];
    }
    return null;
}

// Ejemplo de uso
agregarPaciente("Juan", 30, "Gripe");
agregarPaciente("Maria", 25, "Fiebre");

console.log(buscarPaciente("Juan")); // Salida: { nombre: 'Juan', edad: 30, enfermedad: 'Gripe' }
console.log(eliminarPaciente("Maria")); // Salida: { nombre: 'Maria', edad: 25, enfermedad: 'Fiebre' }
console.log(pacientes); // Salida: [{ nombre: 'Juan', edad: 30, enfermedad: 'Gripe' }]


/* Ejercicio02.- Crea una función para agendar citas, listar todas las citas y cancelar citas*/

let citas = [];

function agendarCita(paciente, doctor, fecha) {
    const cita = { paciente, doctor, fecha };
    citas.push(cita);
    return cita;
}

function listarCitas() {
    return citas;
}

function cancelarCita(paciente, fecha) {
    const indice = citas.findIndex(cita => cita.paciente === paciente && cita.fecha === fecha);
    if (indice !== -1) {
        return citas.splice(indice, 1)[0];
    }
    return null;
}

// Ejemplo de uso
agendarCita("Juan", "Dr. Pérez", "2023-06-10");
agendarCita("Maria", "Dr. López", "2023-06-11");

console.log(listarCitas());
// Salida: [{ paciente: 'Juan', doctor: 'Dr. Pérez', fecha: '2023-06-10' }, { paciente: 'Maria', doctor: 'Dr. López', fecha: '2023-06-11' }]

console.log(cancelarCita("Maria", "2023-06-11"));
// Salida: { paciente: 'Maria', doctor: 'Dr. López', fecha: '2023-06-11' }

console.log(listarCitas());
// Salida: [{ paciente: 'Juan', doctor: 'Dr. Pérez', fecha: '2023-06-10' }]




/*Ejercicio03.-  Crea una función para asignar médicos a pacientes basándote en la especialidad 
requerida por el paciente.*/

let medicos = [
    { nombre: "Dr. Pérez", especialidad: "Cardiología" },
    { nombre: "Dr. López", especialidad: "Dermatología" },
    { nombre: "Dr. Sánchez", especialidad: "Pediatría" }
];

function asignarMedico(paciente, especialidad) {
    const medico = medicos.find(m => m.especialidad === especialidad);
    if (medico) {
        return { paciente, medico: medico.nombre };
    } else {
        return `No hay médicos disponibles para la especialidad: ${especialidad}`;
    }
}

// Ejemplo de uso
console.log(asignarMedico("Juan", "Cardiología")); 
// Salida: { paciente: 'Juan', medico: 'Dr. Pérez' }

console.log(asignarMedico("Maria", "Odontología")); 
// Salida: No hay médicos disponibles para la especialidad: Odontología


/*Ejercicio04.-Simula la consulta de disponibilidad de médicos con una función 
asíncrona que use promesas.*/

function consultarDisponibilidad(medico) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const disponible = Math.random() > 0.5; // Simula disponibilidad al azar
            if (disponible) {
                resolve(`${medico} está disponible`);
            } else {
                reject(`${medico} no está disponible`);
            }
        }, 1000);
    });
}

async function verificarDisponibilidad(medico) {
    try {
        const mensaje = await consultarDisponibilidad(medico);
        console.log(mensaje);
    } catch (error) {
        console.log(error);
    }
}

// Ejemplo de uso
verificarDisponibilidad("Dr. Pérez");
verificarDisponibilidad("Dr. López");








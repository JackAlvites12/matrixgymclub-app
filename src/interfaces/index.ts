export interface User {
    username: string,
    email: string,
    password: string,
}

// 
export interface SignUpProps extends User{
    confirmPassword: string
}

export interface LoginProps {
    email: string,
    password: string,
}

export interface Membership {
    _id: string
    congelacion?: boolean,
    clasesIncluidas: string[],
    tipo: TipoMembresia,
    duracion: string,
    costo: number,
    clientes: string[],
}

export interface Cliente {
    codigo: number,
    nombre: string,
    apellido: string,
    fechaNacimiento: Date,
    edad: any,
    docIdentidad: number,
    genero: string
    domicilio: string,
    distrito: string,
    telefono: string,
}   

export interface ClientData extends Cliente {
    _id: string,
    membershipData: CustomerMembership,
    transactionData: TransactionData,
    userData: UserData,
}

export interface CustomerMembership {
    congelacion?: boolean,
    clasesIncluidas: string[],
    tipo: TipoMembresia,
    duracion: string,
    costo: number,
    fechaInicio: string,
    fechaExpiracion: string,
}

interface TransactionData {
    transactionId: string,
    estado: string,
    fecha: string,
    metodo: string,
    moneda: string,
    monto_total: number,
}

export interface UserData {
    email: string,
    username: string
}

export interface Sede {
    id: number,
    nombre: string, 
    img: string,
    region: string,
    direccion: string,
    telefono: number,
}

type TipoMembresia = 'Nuevo' | 'Renovación' | 'Reinscripción' | 'Recuperado'

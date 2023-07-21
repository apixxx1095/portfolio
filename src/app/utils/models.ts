export enum LIVELLO{
    BASE = 'Basic',
    INTERMEDIO = 'Intermediate',
    AVANZATO = 'Advanced',
    NATIVE_LANGUAGE = 'Native language'
}

export interface Language{
    lingua: string,
    livello: LIVELLO
}

export interface Education{
    titolo?: string,
    nome: string,
    indirizzo: string,
    commento?: string
}

export interface Experience extends Education{
    periodo?: string;
    posizione: string;
    responsabilita: string;
}
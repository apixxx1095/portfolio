import { Education, Experience, LIVELLO, Language } from "./models";

const EXPERIENCES_LIST: Experience[] = [
    {
        nome: 'Capgemini Italia',
        indirizzo: 'Via Marcello Nizzoli 6 - 20147 Milano ',
        // periodo: '',
        posizione: 'Full stack developer',
        responsabilita: ''
    },
    {
        nome: 'GFT Italia',
        indirizzo: 'Via Sile, 18 - 20139 Milano',
        periodo: '2022 - 2023',
        posizione: 'Project Development',
        responsabilita: ''
    },
    {
        nome: 'F1 Consulting & Services',
        indirizzo: 'Via Legnone 4 - 20158 Milano',
        periodo: '2021 - 2022',
        posizione: 'Software Developer',
        responsabilita: ''
    },
    {
        nome: 'AGS Advanced Global Solutions',
        indirizzo: 'Strada Statale Del Sempione 170 - 20016 Pero',
        periodo: '2020 - 2021',
        posizione: 'Junior Python and Java Developer',
        responsabilita: ''
    },
];

const LANGUAGES_LIST: Language[] = [
    {
        lingua: 'Spanish',
        livello: LIVELLO.NATIVE_LANGUAGE
    },
    {
        lingua: 'Italian',
        livello: LIVELLO.AVANZATO
    },
    {
        lingua: 'English',
        livello: LIVELLO.BASE
    }
]

const EDUCATION_LIST: Education[] = [
    {
        titolo: 'LAUREA IN INFORMATICA',
        nome: 'Università degli Studi dell\'Insubria',
        indirizzo: 'VARESE, ',
        commento: 'ATTUALMENTE FREQUENTO'
    },
    {
        titolo: 'Perito Informatico',
        nome: 'ITIS CANNIZZARO',
        indirizzo: 'RHO, VIA RAFFAELO SANZIO 23',
    }
]

export const INFO = {
    NAME: 'Jean Pierre',
    SURNAME: 'Sotamba Acosta',
    EMAIL: 'jean.sotamba@outlook.it',
    PHONE: '+39 328 8321074',
    WEB: 'work in progress...',
    LINKEDIN: 'work in progress...',
    EXPERIENCES: EXPERIENCES_LIST,
    LANGUAGES: LANGUAGES_LIST,
    EDUCATION: EDUCATION_LIST
}
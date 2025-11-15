export type Movie = {
    id: number;
    title: string;
    image: string;
    progress?: number;
    description?: string;
};

export type RowData = {
    id: number;
    title: string;
    type?: "continueWatching" | "default";
    items: Movie[];
};

export const rows: RowData[] = [
    {
        id: 1,
        title: "Trending",
        type: "default",
        items: [
            {id: 1, title:"Young Sheldon", image: "/images/image1.jpg", description: "Un niño genio intenta adaptarse a una familia y escuela que no comprenden su inteligencia." },
            {id: 2, title:"Suits", image: "/images/image2.jpg", description: "Un abogado brillante sin título navega un mundo legal lleno de ambición y secretos."},
            {id: 3, title:"Brooklyn Nine-Nine", image: "/images/image3.jpg", description: "Las divertidas aventuras de un grupo de detectives en una comisaría de Nueva York." },
            {id: 4, title:"Dexter", image: "/images/image4.jpg", description: "Un forense de la policía con una doble vida como asesino en serie." },
            {id: 5, title:"Better Call Saul", image: "/images/image5.jpg", description: "La transformación de un abogado mediocre en el astuto Saul Goodman." },
            {id: 6, title: "Breaking Bad", image: "/images/image21.jpg", description: "Un profesor de química se convierte en fabricante de metanfetaminas para asegurar el futuro de su familia." },
            {id: 7, title: "Shameless", image: "/images/image22.jpg", description: "Las caóticas vidas de una familia disfuncional que lucha por sobrevivir en Chicago." },
            {id: 8, title: "The Rookie", image: "/images/image23.jpg", description: "Un joven de 40 años se convierte en el policía más viejo en un departamento de policía de Los Ángeles." },

        ],
    },
    {
        id: 2,
        title: "Populares en Honduras",
        type: "default",
        items: [
            {id: 1, title: "Money Heist", image: "/images/image6.jpg", description: "Un grupo de criminales lleva a cabo elaborados atracos bajo la dirección del enigmático 'El Profesor'." },
            {id: 2, title: "Focus", image: "/images/image7.jpg", description: "Un estafador experimentado toma a una novata bajo su ala, pero las cosas se complican cuando el romance entra en juego." },
            {id: 3, title: "Interstellar", image: "/images/image8.jpg", description: "Un equipo viaja a las estrellas para encontrar un futuro para la humanidad."},
            {id: 4, title: "Ginny & Georgia", image: "/images/image9.jpg", description: "Una madre e hija enfrentan secretos que amenazan su nueva vida." },
            {id: 5, title: "Baki", image: "/images/image10.jpg", description: "Un joven luchador busca superar a su padre, el hombre más fuerte del mundo."},
            {id: 6, title:"Ozark", image: "/images/image18.jpg", description: "Un asesor financiero se traslada con su familia a los Ozarks para lavar dinero y sobrevivir."},
            {id: 7, title:"Wednesday", image: "/images/image19.jpg", description: "Wednesday Addams navega la vida en la Academia Nevermore mientras descubre sus poderes psíquicos."},
            {id: 8, title: "Bodyguard", image: "/images/image20.jpg", description: "Un veterano de guerra se convierte en el guardaespaldas de una política británica, enfrentando amenazas y dilemas morales."},
        ],
    },
    {
        id: 3,
        title: "Continuar viendo",
        type: "continueWatching",
        items: [
            { id:1, title: "Naruto Shippuden", image: "/images/image11.jpg", progress: 42, description: "Naruto regresa decidido a proteger a su aldea y cumplir su destino."},
            { id:2, title: "Friends", image: "/images/image12.jpg", progress: 65, description: "Seis amigos enfrentan juntos el amor, el humor y la vida en Nueva York."},
            { id:3, title: "How i met your mother", image: "/images/image13.jpg", progress: 17, description: "Ted relata la historia del largo camino hacia conocer al amor de su vida"},
            { id:4, title: "Lucifer", image: "/images/image24.jpg", progress: 80, description: "Lucifer Morningstar, el Diablo, abandona el Infierno para vivir en Los Ángeles y ayudar a resolver crímenes."},
            { id:5, title: "Narcos Mexico", image: "/images/image25.jpg", progress: 33, description: "La historia del ascenso del Cártel de Guadalajara en México durante los años 80."},
            { id:6, title: "House of Cards", image: "/images/image26.jpg", progress: 50, description: "Un político ambicioso y su esposa manipulan el sistema para alcanzar el poder en Washington D.C."},
            { id:7, title: "The Crown", image: "/images/image27.jpg", progress: 22, description: "La vida y reinado de la Reina Isabel II, explorando los desafíos personales y políticos que enfrenta."},
            { id:8, title: "Dahmer", image: "/images/image28.jpg", progress: 75, description: "La historia del infame asesino en serie Jeffrey Dahmer y su perturbador camino hacia el crimen."},

            
        ],
    },
    {
        id:4,
        title: "Originales de Netflix",
        type: "default",
        items: [
            { id:1, title: "Dark", image: "/images/image14.jpg", description: "Un pueblo alemán enfrenta misteriosas desapariciones que revelan secretos oscuros y viajes en el tiempo." },
            { id:2, title: "You", image: "/images/image15.jpg", description: "Un hombre obsesivo utiliza las redes sociales para acercarse a la mujer de sus sueños." },
            { id:3, title: "Narcos", image: "/images/image16.jpg", description: "La historia del ascenso y caída de los cárteles de droga en Colombia." },
            { id:4, title: "Peaky Blinders", image: "/images/image17.jpg", description: "Una familia criminal en la Inglaterra de posguerra lucha por el poder y la supervivencia." },
            { id:5, title: "The Witcher", image: "/images/image29.jpg", description: "Un cazador de monstruos solitario navega un mundo lleno de magia y peligro." },
            { id:6, title: "Altered Carbon", image: "/images/image30.jpg", description: "En un futuro donde la conciencia humana puede transferirse entre cuerpos, un exsoldado es revivido para resolver un asesinato." },
            { id:7, title: "Squid Game", image: "/images/image31.jpg", description: "Cientos de personas con problemas financieros aceptan participar en juegos infantiles mortales por un gran premio en efectivo." },
            { id:8, title: "Elite", image: "/images/image32.jpg", description: "Tres estudiantes de clase trabajadora ingresan a una escuela exclusiva en España, desatando conflictos y secretos." },
        ],
    },
];
export type Movie = {
    id: number;
    title: string;
    image: string;
    progress?: number;
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
            {id: 1, title:"Young Sheldon", image: "/images/image1.jpg" },
            {id: 2, title:"Suits", image: "/images/image2.jpg" },
            {id: 3, title:"Brooklyn Nine-Nine", image: "/images/image3.jpg" },
            {id: 4, title:"Dexter", image: "/images/image4.jpg" },
            {id: 5, title:"Better Call Saul", image: "/images/image5.jpg" },
        ],
    },
    {
        id: 2,
        title: "Populares en Honduras",
        type: "default",
        items: [
            {id: 6, title: "Money Heist", image: "/images/image6.jpg" },
            {id: 7, title: "Focus", image: "/images/image7.jpg" },
            {id: 8, title: "Interstellar", image: "/images/image8.jpg" },
            {id: 9, title: "Ginny & Georgia", image: "/images/image9.jpg" },
            {id: 10, title: "Baki", image: "/images/image10.jpg" },
        ],
    },
    {
        id: 3,
        title: "Continuar viendo",
        type: "continueWatching",
        items: [
            { id:11, title: "Naruto Shippuden", image: "/images/image11.jpg", progress: 42},
            { id:12, title: "Friends", image: "/images/image12.jpg", progress: 65},
            { id:13, title: "How i met your mother", image: "/images/image13.jpg", progress: 17},
            
        ],
    },
    {
        id:4,
        title: "Originales de Netflix",
        type: "default",
        items: [
            { id:14, title: "Dark", image: "/images/image14.jpg" },
            { id:15, title: "You", image: "/images/image15.jpg" },
            { id:16, title: "Narcos", image: "/images/image16.jpg" },
            { id:17, title: "Peaky Blinders", image: "/images/image17.jpg" },
        ],
    },
];
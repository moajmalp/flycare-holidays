export interface ItineraryDay {
    day: number;
    header: string;
    points: string[];
}

export interface Itinerary {
    title: string;
    description: string;
    headerImage: string;
    days: ItineraryDay[];
    metaDescription: string;
}

export const itineraryData: Record<string, Itinerary> = {
    "amazing-kashmir": {
        title: "Amazing Kashmir: 4 Night–5 Days Itinerary",
        description: "Experience the paradise on earth with our carefully curated 5-day journey through the valley of Kashmir. From luxury houseboats to scenic Shikara rides, discover the true essence of Srinagar.",
        headerImage: "/images/kashmir.png",
        metaDescription: "Explore the beauty of Kashmir with Flycare Holidays. 5-day itinerary covering Srinagar, Dal Lake, and more.",
        days: [
            {
                day: 1,
                header: "Arrival in Srinagar",
                points: [
                    "Arrival: Meet our representative at Srinagar airport.",
                    "Check-in: Transfer to a luxury houseboat in Dal Lake.",
                    "Shikara Ride: Enjoy a 1-hour Shikara ride in Dal Lake as the sun sets.",
                ],
            },
            {
                day: 2,
                header: "Srinagar Local Sightseeing",
                points: [
                    "Mughal Gardens: Visit Nishat Bagh and Shalimar Bagh.",
                    "Shankaracharya Temple: Panoramic views of the city.",
                ],
            },
        ],
    },
    "mesmerizing-manali": {
        title: "Mesmerizing Manali: A 5-Day Adventure",
        description: "A perfect blend of adventure and peace in the heart of the Himalayas. Discover the magical landscapes of Manali and Solang Valley.",
        headerImage: "/images/manali.png",
        metaDescription: "Book your Manali adventure with Flycare Holidays. 5-day trip covering Solang Valley, Mall Road, and more.",
        days: [
            {
                day: 1,
                header: "Arrival in Manali",
                points: [
                    "Arrival: Welcome at Bhuntar Airport and transfer to your hotel.",
                    "Leisure: Explore the local markets or relax by the river.",
                ],
            },
            {
                day: 2,
                header: "Solang Valley Exploration",
                points: [
                    "Activities: Paragliding, zorbing, and beautiful snow vistas.",
                    "Evening: Visit the iconic Mall Road for local shopping.",
                ],
            },
        ],
    },
    "kerala-delight": {
        title: "Kerala Delight: Alleppey & Kochi",
        description: "Immerse yourself in the tranquility of God's Own Country. Experience the backwaters and colonial charm of Kochi.",
        headerImage: "/images/kerala.png",
        metaDescription: "Tranquil Kerala itinerary by Flycare Holidays. Cover Alleppey backwaters and Kochi culture.",
        days: [
            {
                day: 1,
                header: "Arrival in Kochi",
                points: [
                    "Welcome: Transfer to your boutique hotel in Fort Kochi.",
                    "Sightseeing: Visit Chinese Fishing Nets and St. Francis Church.",
                ],
            },
        ],
    },
    "vietnam-adventure": {
        title: "Vietnam: A Cultural Journey",
        description: "Explore the bustling streets of Hanoi and the serene beauty of Halong Bay in this curated cultural experience.",
        headerImage: "/images/vietnam.png",
        metaDescription: "Vietnam travel guide and itinerary. Explore Hanoi and Halong Bay with Flycare Holidays.",
        days: [
            {
                day: 1,
                header: "Arrival in Hanoi",
                points: [
                    "Transfer: Private transfer to your hotel in the Old Quarter.",
                    "Explore: Walking tour of the vibrant street markets.",
                ],
            },
        ],
    },
    "golden-triangle": {
        title: "Delhi & Agra: Golden Triangle Highlights",
        description: "Witness the architectural marvels of India, from the majestic Taj Mahal to the historic Red Fort.",
        headerImage: "/images/agra.png",
        metaDescription: "Flycare Holidays Golden Triangle tour. Experience Delhi and Agra in 3 days.",
        days: [
            {
                day: 1,
                header: "Arrival in Delhi",
                points: [
                    "Sightseeing: Visit Qutub Minar and India Gate.",
                    "Evening: Experience the bustling streets of Chandni Chowk.",
                ],
            },
        ],
    },
};

export const defaultItinerary: Itinerary = {
    title: "Explore Your Next Adventure",
    description: "Discover hidden gems and popular destinations with Flycare Holidays. We craft every trip with love and precision.",
    headerImage: "/images/kerala.png",
    metaDescription: "Plan your next dream vacation with Flycare Holidays. Expertly crafted itineraries for global destinations.",
    days: [
        {
            day: 1,
            header: "Start Your Journey",
            points: ["Arrival at destination.", "Check-in and relaxation."],
        },
    ],
};

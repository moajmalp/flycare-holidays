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
    price: string;
    startCity: string;
    experience: string;
    inclusions: string[];
    exclusions: string[];
}

export const itineraryData: Record<string, Itinerary> = {

    "goa-couple-package": {
        title: "Goa Couple Package: 4 Days / 3 Nights Romantic Beach Getaway",
        description: "Enjoy a romantic beach vacation with our specially designed Goa Couple Package. Known for its golden beaches, beautiful sunsets, vibrant nightlife, and Portuguese heritage, Goa is one of the most popular destinations in India for couples.",
        headerImage: "/images/goa-couple.png",
        metaDescription: "Romantic Goa honeymoon and couple getaway. 4 days of sunset walks, heritage sightseeing, and beach relaxation.",
        price: "5,999",
        startCity: "Goa",
        experience: "Romantic & Heritage",
        inclusions: [
            "3 Nights hotel accommodation",
            "Daily breakfast",
            "North Goa sightseeing",
            "South Goa sightseeing",
            "Pickup and drop service"
        ],
        exclusions: [
            "Flight / Train tickets",
            "Water sports activities",
            "Entry tickets at attractions",
            "Personal expenses"
        ],
        days: [
            {
                day: 1,
                header: "Arrival in Goa & Romantic Evening",
                points: [
                    "Arrival in Goa and transfer to the hotel.",
                    "Check in and relax at your leisure.",
                    "Evening: Spend time enjoying a peaceful walk along the beach or exploring nearby cafes and markets.",
                ],
            },
            {
                day: 2,
                header: "Exploring North Goa Together",
                points: [
                    "After breakfast, proceed for shared/private sightseeing in North Goa.",
                    "Visit Calangute Beach, Baga Beach, and Anjuna Beach.",
                    "Explore the historic Fort Aguada for panoramic sea views.",
                    "Evening free to enjoy beachside cafes and vibrant nightlife.",
                ],
            },
            {
                day: 3,
                header: "South Goa Heritage & Views",
                points: [
                    "After breakfast, proceed for South Goa sightseeing.",
                    "Visit historical sites: Basilica of Bom Jesus and Se Cathedral.",
                    "Enjoy spectacular views at Dona Paula View Point.",
                    "Relax at the serene Miramar Beach.",
                ],
            },
            {
                day: 4,
                header: "Departure with Memories",
                points: [
                    "After breakfast, check out from the hotel.",
                    "Transfer for departure with beautiful romantic memories of Goa.",
                ],
            },
        ],
    },
    "kashmir-friends-trip": {
        title: "Kashmir Bachelor / Friends Trip: 5 Days / 4 Nights Adventure Package",
        description: "Explore the breathtaking beauty of Kashmir with your friends. Known as Paradise on Earth, Kashmir is famous for its snow-covered mountains, stunning valleys, peaceful lakes, and unforgettable landscapes.",
        headerImage: "/images/kashmir-friends.png",
        metaDescription: "The ultimate Kashmir adventure for friends and bachelors. 5-day itinerary covering Srinagar, Gulmarg, Pahalgam, and Sonamarg.",
        price: "6,999",
        startCity: "Srinagar",
        experience: "Adventure & Nature",
        inclusions: [
            "4 Nights accommodation",
            "Daily breakfast and dinner",
            "Airport pickup and drop",
            "All sightseeing by private cab",
            "Shikara ride in Dal Lake"
        ],
        exclusions: [
            "Flight tickets",
            "Gondola ride in Gulmarg",
            "Pony rides and local taxis",
            "Entry tickets",
            "Personal expenses"
        ],
        days: [
            {
                day: 1,
                header: "Arrival in Srinagar & Dal Lake",
                points: [
                    "Arrival at Srinagar Airport and meet our representative.",
                    "Transfer to the hotel and check in.",
                    "Evening: Relaxing Shikara ride at Dal Lake.",
                    "Explore nearby markets and traditional crafts."
                ],
            },
            {
                day: 2,
                header: "Gulmarg Mountain Excursion",
                points: [
                    "After breakfast, proceed to Gulmarg, the 'Meadow of Flowers'.",
                    "Optional Gondola cable car ride (world's highest).",
                    "Enjoy seasonal snow activities and stunning mountain panoramas.",
                    "Return to Srinagar for dinner and overnight stay."
                ],
            },
            {
                day: 3,
                header: "Pahalgam Valley Exploration",
                points: [
                    "Full day trip to Pahalgam, the Valley of Shepherds.",
                    "Walk along the Lidder River banks.",
                    "Explore Betaab Valley and Aru Valley.",
                    "Soak in the peaceful surroundings of the Himalayas."
                ],
            },
            {
                day: 4,
                header: "Meadows of Gold - Sonamarg",
                points: [
                    "Full day excursion to Sonamarg, known for rich glaciers.",
                    "Visit Thajiwas Glacier (optional pony ride).",
                    "Enjoy Sindh River sightseeing and alpine meadows.",
                    "Return to Srinagar for farewell dinner."
                ],
            },
            {
                day: 5,
                header: "Farewell to Paradise",
                points: [
                    "After breakfast, check out from the hotel.",
                    "Transfer to Srinagar Airport for your departure journey."
                ],
            },
        ],
    },
    "kashmir-couple-package": {
        title: "Kashmir Couple Package: 5 Days / 4 Nights Romantic Getaway",
        description: "Experience the magical beauty of Kashmir, often called Paradise on Earth. With its snow-covered mountains, beautiful valleys, peaceful lakes, and romantic landscapes, Kashmir is one of the most perfect destinations for couples.",
        headerImage: "/images/kashmir-couple.png",
        metaDescription: "Romantic Kashmir honeymoon and couple retreat. 5-day itinerary covering Srinagar, Gulmarg, Pahalgam, and Sonamarg.",
        price: "9,999",
        startCity: "Srinagar",
        experience: "Romantic & Serene",
        inclusions: [
            "4 Nights accommodation",
            "Daily breakfast and dinner",
            "Airport pickup and drop",
            "All sightseeing by private cab",
            "Shikara ride in Dal Lake"
        ],
        exclusions: [
            "Flight tickets",
            "Gondola ride in Gulmarg",
            "Pony rides and local union taxis",
            "Entry tickets",
            "Personal expenses"
        ],
        days: [
            {
                day: 1,
                header: "Arrival in Srinagar & Dal Lake",
                points: [
                    "Arrival at Srinagar Airport and meet our representative.",
                    "Transfer to the hotel and check in.",
                    "Evening: Relaxing Shikara ride at Dal Lake - a romantic highlight.",
                    "Explore local markets and traditional crafts together."
                ],
            },
            {
                day: 2,
                header: "Gulmarg Mountain Escape",
                points: [
                    "After breakfast, proceed to Gulmarg, the 'Meadow of Flowers'.",
                    "Enjoy the Gondola cable car ride (optional) for scenic peaks.",
                    "Stunning mountain views and winter activities (seasonal).",
                    "Overnight stay in Srinagar."
                ],
            },
            {
                day: 3,
                header: "Pahalgam - Valley of Shepherds",
                points: [
                    "Drive to Pahalgam after breakfast.",
                    "Visit romantic spots: Lidder River, Betaab Valley, and Aru Valley.",
                    "Enjoy the scenic beauty and peaceful Himalayan surroundings.",
                    "Overnight stay in Srinagar."
                ],
            },
            {
                day: 4,
                header: "Sonamarg - Meadow of Gold",
                points: [
                    "Full day excursion to Sonamarg, known for rich glaciers.",
                    "Visit Thajiwas Glacier and beautiful river views.",
                    "Enjoy snow landscapes and natural beauty.",
                    "Return to Srinagar for farewell dinner."
                ],
            },
            {
                day: 5,
                header: "Departure with Memories",
                points: [
                    "After breakfast, check out from the hotel.",
                    "Transfer to Srinagar Airport for your return journey with unforgettable memories."
                ],
            },
        ],
    },
    "manali-friends-trip": {
        title: "Manali Bachelor / Friends Trip: 5 Days / 4 Nights Adventure Package",
        description: "Planning a trip with your friends? Our Manali Bachelor Package is the perfect mountain getaway for adventure, fun, and unforgettable memories. Elevated by professional Volvo bus travel from Delhi.",
        headerImage: "/images/manali-friends.png",
        metaDescription: "The absolute best Manali adventure for guys and friends. 5-day package covering Solang Valley, Kullu, and local mountain charm.",
        price: "5,500",
        startCity: "Delhi (via Volvo)",
        experience: "Adventure & Fun",
        inclusions: [
            "Delhi – Manali – Delhi Volvo bus tickets",
            "2 Nights hotel accommodation in Manali",
            "Daily breakfast and dinner",
            "Local sightseeing by cab",
            "All hotel taxes"
        ],
        exclusions: [
            "Adventure activities in Solang Valley",
            "Entry tickets at sightseeing places",
            "Personal expenses",
            "Lunch and snacks"
        ],
        days: [
            {
                day: 1,
                header: "Delhi to Manali (Overnight Volvo)",
                points: [
                    "Report at the designated Volvo boarding point in Delhi.",
                    "Start your journey in the evening by AC Volvo bus.",
                    "Enjoy a comfortable overnight journey through scenic mountain roads."
                ],
            },
            {
                day: 2,
                header: "Manali Arrival & Mountain Heritage",
                points: [
                    "Morning arrival in Manali and hotel check-in.",
                    "After fresh up, proceed for local mountain sightseeing.",
                    "Visit Hadimba Devi Temple, Vashisht Temple, and Tibetan Monastery.",
                    "Evening free for exploring vibrant Mall Road cafes and local markets.",
                    "Dinner at the hotel."
                ],
            },
            {
                day: 3,
                header: "High-Energy Solang Valley Adventure",
                points: [
                    "After breakfast, visit the world-famous Solang Valley.",
                    "Optional high-adventure: Paragliding, Snow scooter ride, or Skiing (seasonal).",
                    "Take a ropeway ride or zipline for panoramic Himalayan views.",
                    "Return to the hotel for a cozy dinner."
                ],
            },
            {
                day: 4,
                header: "Kullu Valley Exploration & Return",
                points: [
                    "After breakfast, proceed to the scenic Kullu Valley.",
                    "Optional River Rafting or visit a local Shawl factory.",
                    "Riverside sightseeing and shopping at the local markets.",
                    "Board the return AC Volvo bus to Delhi in the evening."
                ],
            },
            {
                day: 5,
                header: "Arrival in Delhi",
                points: [
                    "Morning arrival back in Delhi.",
                    "Trip ends with unforgettable Himalayan memories shared with friends."
                ],
            },
        ],
    },
    "manali-couple-package": {
        title: "Manali Couple Package: 5 Days / 4 Nights Romantic Getaway",
        description: "Enjoy a romantic getaway to the beautiful hill station of Manali, one of the most loved mountain destinations in India. Surrounded by snow-capped peaks, pine forests, and scenic valleys.",
        headerImage: "/images/manali-couple.png",
        metaDescription: "Romantic Manali honeymoon and couple retreat. 5-day itinerary covering Solang Valley, Kullu, and local mountain peaks.",
        price: "7,999",
        startCity: "Delhi (via Volvo)",
        experience: "Romantic & Serene",
        inclusions: [
            "Delhi – Manali – Delhi Volvo bus tickets",
            "2 Nights hotel accommodation in Manali",
            "Daily breakfast and dinner",
            "Local sightseeing by cab",
            "All hotel taxes"
        ],
        exclusions: [
            "Adventure activities in Solang Valley",
            "Entry tickets at sightseeing places",
            "Personal expenses",
            "Lunch and snacks"
        ],
        days: [
            {
                day: 1,
                header: "Delhi to Manali (Overnight)",
                points: [
                    "Begin your journey from Delhi in the evening by comfortable Volvo bus.",
                    "Enjoy an overnight journey through the scenic mountain routes of Himachal Pradesh."
                ],
            },
            {
                day: 2,
                header: "Arrival Manali & Local Scenic Spots",
                points: [
                    "Morning arrival in Manali and hotel check-in.",
                    "After fresh up, proceed for local heritage sightseeing.",
                    "Visit Hadimba Devi Temple, Vashisht Temple, and Tibetan Monastery.",
                    "Evening free to explore Mall Road and local mountain culture.",
                    "Dinner at hotel."
                ],
            },
            {
                day: 3,
                header: "Romantic Solang Valley Trip",
                points: [
                    "Visit the beautiful Solang Valley after breakfast.",
                    "Famous for snow views and peaceful mountain vistas.",
                    "Optional activities: Paragliding, Snow scooter ride, or Ropeway ride.",
                    "Dinner at hotel."
                ],
            },
            {
                day: 4,
                header: "Kullu Valley Visit & Return",
                points: [
                    "Proceed for a short excursion to Kullu Valley after breakfast.",
                    "Visit local shawl factories and enjoy riverside views.",
                    "Board the return AC Volvo bus to Delhi in the evening."
                ],
            },
            {
                day: 5,
                header: "Arrival in Delhi",
                points: [
                    "Morning arrival in Delhi.",
                    "Trip ends with beautiful romantic memories of your Manali holiday."
                ],
            },
        ],
    },

    "goa-bachelor-package": {
        title: "Goa Bachelor / Friends Package: 4 Days / 3 Nights Beach Party Trip",
        description: "Plan the ultimate friends getaway with our exciting Goa Bachelor Package. Famous for its beaches, nightlife, beach parties, and water sports, Goa is one of the most popular destinations for bachelor and friends trips in India.",
        headerImage: "/images/goa.png",
        metaDescription: "The ultimate Goa bachelor and friends trip itinerary. 4 days of beach parties, nightlife, and sightseeing in North and South Goa.",
        price: "4,999",
        startCity: "Goa",
        experience: "Party & Adventure",
        inclusions: [
            "3 Nights hotel accommodation",
            "Daily breakfast",
            "North Goa sightseeing",
            "South Goa sightseeing",
            "Pickup and drop service"
        ],
        exclusions: [
            "Flight / Train tickets",
            "Water sports activities",
            "Entry tickets at attractions",
            "Personal expenses"
        ],
        days: [
            {
                day: 1,
                header: "Arrival in Goa",
                points: [
                    "Arrival: Transfer to your hotel upon arrival in Goa.",
                    "Leisure: Check in and relax.",
                    "Evening: Free to explore nearby beaches, cafes, and vibrant nightlife.",
                    "Stay: Goa Hotel",
                ],
            },
            {
                day: 2,
                header: "North Goa Sightseeing",
                points: [
                    "Morning: Breakfast at the hotel.",
                    "Sightseeing: Visit Calangute Beach, Baga Beach, Anjuna Beach, and Fort Aguada.",
                    "Evening: Free for beach parties and experiencing Goa's famous nightlife.",
                    "Stay: Goa Hotel",
                ],
            },
            {
                day: 3,
                header: "South Goa Sightseeing",
                points: [
                    "Morning: Breakfast at the hotel.",
                    "Sightseeing: Explore Basilica of Bom Jesus, Se Cathedral, Dona Paula View Point, and Miramar Beach.",
                    "Evening: Return to hotel and relax or explore more local spots.",
                    "Stay: Goa Hotel",
                ],
            },
            {
                day: 4,
                header: "Departure",
                points: [
                    "Morning: Breakfast at the hotel and check out.",
                    "Departure: Transfer for departure with unforgettable memories of your Goa trip.",
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
    price: "9,999",
    startCity: "TBD",
    experience: "Premium",
    inclusions: ["Guided Tours", "Luxury Stay"],
    exclusions: ["Personal Expenses"],
    days: [
        {
            day: 1,
            header: "Start Your Journey",
            points: ["Arrival at destination.", "Check-in and relaxation."],
        },
    ],
};

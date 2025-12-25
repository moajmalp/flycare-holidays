import { Metadata } from 'next';
import { itineraryData, defaultItinerary } from '@/data/itinerary-data';

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const data = itineraryData[params.slug] || defaultItinerary;

    return {
        title: `${data.title} | Flycare Holidays`,
        description: data.metaDescription,
        openGraph: {
            title: data.title,
            description: data.metaDescription,
            images: [data.headerImage],
        },
    };
}

export default function ItineraryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

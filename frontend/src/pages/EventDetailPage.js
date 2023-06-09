import React from 'react';
import { json, useLoaderData, useParams, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
    // const params = useParams();
    // const data = useLoaderData();
    const data = useRouteLoaderData('event-detail');

    return (
        <EventItem event={data.event} />
    );
}

export default EventDetailPage;

export async function loader({request, params}) {
    const id = params.eventId;

    const response = await fetch('http://localhost:8080/events/' + id);

    if(!response.ok) {
        return json({message: 'Could not fetch details for selected event.'}, {status: 500});
    } else {
        return response;
    }
};

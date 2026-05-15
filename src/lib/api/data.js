import { headers } from "next/headers";
import { auth } from "../auth";

export const getDestination = async () => {

    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
        headers: await headers({
            authorization: `Bearer ${token}`
        })
    })
    const data = await res.json()
    return data;
}

export const getDestinationDetails = async (id) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    // console.log(token)
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
        headers: {
            authorization: `bearer ${token}`
        }
    })
    const data = await res.json()
    return data;
}
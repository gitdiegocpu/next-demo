"use client"
import { useState, useEffect } from "react"
import Affirmation from "@/components/Affirmtationcard"

export default function Affirmold() {

    const [affirmations, setAffirmations] = useState()
    useEffect(() => {
        fetch("https://affirm-bc-api.web.app/affirmations")
            .then(res => res.json())
            .then(setAffirmations)
            .catch(alert)

     }, [] )

return (
    <>
        <h1 className="text-3xl font-bold text-amber-200">
            Old affirmations
            </h1>
        <section className="container mx-auto px-5 py-24 flex flex-wrap">
            {affirmations && affirmations.map(item => (
                <Affirmation key={item.id} item={item} />
            ))}
        </section>
    </>
)

}
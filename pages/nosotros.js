import React from 'react'
import { useRouter } from 'next/router';

export default function Nosotros() {
    let message = "Somos un grupo multicultural"

    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

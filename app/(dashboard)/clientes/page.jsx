import Link from "next/link"

import { fetchData } from "./services/get-users"
export const metadata = {
    title: 'Usuários - Sistema Olá Mundo!',

}

export default async function UserPage() {

    const [fetchData, setData] = useState([]);

    return (
        <>
            <h2>Usuários</h2>

            <ul>
                {fetchData && data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
        

        </ul >
        </>
    )
}

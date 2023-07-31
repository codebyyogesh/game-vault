import apiClient from "@/services/api-client"
import { CanceledError } from "axios"
import { useEffect, useState } from "react"

export interface GameResults{
    id: number
    name: string
    background_image : string
}

interface FetchGamesResponse{
    count: number
    results: GameResults[]
}

const useGames = () =>{

    const [games, setGames] = useState<GameResults[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        apiClient
        .get<FetchGamesResponse>('/games', {signal})
        .then(res => setGames(res.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
        })
        return () => controller.abort()
   }, [])
   return {games, error}
}

export default useGames;
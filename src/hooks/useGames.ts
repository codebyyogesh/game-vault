import apiClient from "@/services/api-client"
import { CanceledError } from "axios"
import { useEffect, useState } from "react"

export interface Platform {
    id : number
    slug : string
    name : string
}

export interface GameResults{
    id: number
    name: string
    background_image : string
    platforms : Array<{platform:Platform}>
    metacritic : number
}

interface FetchGamesResponse{
    count: number
    results: GameResults[]
}

const useGames = () =>{

    const [games, setGames] = useState<GameResults[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)


    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        const signal = controller.signal
        apiClient
        .get<FetchGamesResponse>('/games', {signal})
        .then((res) => {
            setGames(res.data.results)
            setLoading(false)
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
        })
        return () => controller.abort()
   }, [])
   return {games, error, isLoading}
}

export default useGames;
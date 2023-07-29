import {useEffect, useState } from 'react'
import apiClient from '@/services/api-client'
import { Text } from "@chakra-ui/react";

interface GameResults{
    id: number
    name: string
}

interface FetchGamesResponse{
    count: number
    results: GameResults[]
}

const GameGrid = () => {
   const [games, setGames] = useState<GameResults[]>([])
   const [error, setError] = useState('')

    useEffect(() => {
     apiClient.get<FetchGamesResponse>('/games')
     .then(res => setGames(res.data.results))
     .catch(err => setError(err.message))
   })
   
    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map((game) => (
                <li key={game.id}> {game.name}</li>
                ))}
            </ul>
        </>
    )
}

export default GameGrid
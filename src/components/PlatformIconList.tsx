import { Platform } from '@/hooks/useGames'
import { HStack, Icon } from '@chakra-ui/react'
import {FaWindows, FaApple, FaXbox, FaLinux, FaPlaystation, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { IconType } from 'react-icons'

interface Props{
    platforms : Platform[]
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap: {[key: string]: IconType} = {
        pc : FaWindows,
        playstation : FaPlaystation,
        xbox : FaXbox,
        nintendo : SiNintendo,
        android : FaAndroid,
        mac : FaApple,
        ios : MdPhoneIphone,
        linux : FaLinux,
        web : BsGlobe,
    }

    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                    <Icon as={iconMap[platform.slug]} color={'gray.500'}/>
            ))}
        </HStack>
    )
}

export default PlatformIconList
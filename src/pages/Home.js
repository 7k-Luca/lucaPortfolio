// Home Page File
import { useEffect } from 'react'
import {
    Box,
    Heading, 
    Text,
    Image,
    Main as MainPage,
    ResponsiveContext
} from 'grommet'
import { projectAnalytics } from '../firebase/config'

// images
import Main from '../assets/Main.png'

export default function Home() {
    useEffect(() => {
        // Log a custom event when the Home component is mounted
        projectAnalytics.logEvent('home_page_view', { page_name: 'Home Page' });
    }, [])
    return (
        <Box overflow="hidden" direction='row-responsive' align='center' justify="evenly" id="home">
            {/* Text */}
            <Box align='center' direction='column' pad="medium">
                <Heading textAlign='center'>Luca Marinelli</Heading>
                <Text textAlign='center'>Computer Engineer | Web Developer</Text>
                <Box
                    width="50%"
                    background="brand" // You can change this color to the color you desire
                    height="3px"
                    margin={{ top: '10px' }}
                />
            </Box>

            {/* Image */} 
            <Box align='center'  pad="medium">
                <Image src={Main} alt="Main Image of Me" />
            </Box>
        </Box>
    )
}

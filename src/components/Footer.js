// Footer Component File
import {
    Box,
    Footer as Foot,
    Text,
    Heading,
    Anchor,
    Image
} from 'grommet'
import {
    Instagram
} from 'grommet-icons'

import Logo from '../assets/Logo.png'

export default function Footer() {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };

    return (
        <Foot background="brand" pad={{horizontal: 'small'}} >
            <Box  align="center" direction='row' gap='xsmall'>
                <Image src={Logo}/>
                <Heading level={2} size="18px" >
                    Luca Marinelli
                </Heading>
            </Box>
            <Anchor color="analogous" href="https://www.flaticon.com/free-icons/code" title="code icons" ><Text size='12px' textAlign='center' alignSelf='center' >Code icons created by Freepik - Flaticon</Text></Anchor>
            <Anchor 
                onClick={() => openInNewTab("https://www.instagram.com/lucamarinelli2/")}   
                label={<Instagram size="medium"/>}
            />
        </Foot>
    )
}

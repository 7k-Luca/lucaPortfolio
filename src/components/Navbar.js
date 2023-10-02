// Navar Component File
import { useState } from 'react'
import {
    Anchor,
    Box,
    Button,
    Text,
    Image,
    Header,
    Menu,
    ResponsiveContext,
    Layer,
    Heading
} from 'grommet'
import {
    Menu as MenuIcon
} from 'grommet-icons'
import { projectAnalytics } from '../firebase/config'
// images
import Logo from '../assets/Logo.png'
// documents
import pdf from '../assets/Documents/Luca_Marinelli_Resume(current).pdf'


export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    const openPdf = () => {
        projectAnalytics.logEvent('button_click', { button_name:  'Resume'})
        window.open(pdf, '_blank');
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        projectAnalytics.logEvent('button_click', { button_name:  section})
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToSectionMobile = (sectionId) => {
        projectAnalytics.logEvent('button_click', { button_name:  section})
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        closeMenu()
    };

    const openMenuClicker = () => {
        setOpenMenu(true)
    }

    const closeMenu = () => {
        setOpenMenu(false)
    }
    
    return (
        <ResponsiveContext.Consumer>
                {(size) => size==='small' || size==='xsmall' ? (
                // Smaller Screens
                <Header align='center' justify='between'pad={{horizontal: 'large', vertical: 'medium'}}>
                    {/* Logo */}
                    <Box align='center'>
                        <Anchor
                            onClick={() => scrollToSection('home')}
                            icon={<Image src={Logo}/>}
                        />
                    </Box>
                    {/* Menu */}
                    <Button icon={<MenuIcon/>} onClick={() => openMenuClicker()}/>
                    {openMenu && (
                        <Layer style={{height: '100%'}} background="background">
                            <Box direction='column' gap="large">
                                <Anchor
                                label={<Heading textAlign='center'>About Me</Heading>}
                                onClick={() => scrollToSectionMobile('about')}
                            />
                            <Anchor
                                label={<Heading textAlign='center'>Projects</Heading>}
                                onClick={() => scrollToSectionMobile('projects')}
                            />
                            <Anchor
                                label={<Heading textAlign='center'>Contact Me</Heading>}
                                onClick={() => scrollToSectionMobile('contact')}
                            />
                            <Button
                                label={<Heading>Resume</Heading>}
                                primary
                                alignSelf='center'
                                onClick={openPdf}
                            />
                            </Box>
                        </Layer>
                    )}
                </Header>
                ):(
                // Larger Screens
                <Header  align="center" justify="between"  pad={{ horizontal: 'large', vertical: 'medium' }}>
                    {/* Logo */}
                    <Box align='center'>
                        <Anchor
                            onClick={() => scrollToSection('home')}
                            icon={<Image src={Logo}/>}
                        />
                    </Box>

                    {/* Tabs */}
                    <Box direction='row' align='center' gap="large">
                        <Anchor
                            label={<Text textAlign='center'>About Me</Text>}
                            onClick={() => scrollToSection('about')}
                        />
                        <Anchor
                            label={<Text textAlign='center'>Projects</Text>}
                            onClick={() => scrollToSection('projects')}
                        />
                        <Anchor
                            label={<Text textAlign='center'>Contact Me</Text>}
                            onClick={() => scrollToSection('contact')}
                        />
                    </Box>

                    {/* Resume button */}
                    <Box align='center'>
                        <Button label="Resume" hoverIndicator={{background: 'analogous'}} onClick={openPdf} primary />    
                    </Box>            

                </Header>
                )
                }
            </ResponsiveContext.Consumer>
        
    )
}

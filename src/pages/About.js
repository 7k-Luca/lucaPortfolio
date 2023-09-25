// About Page File
import { useState } from 'react'
import {
    List,
    Box,
    Image,
    Heading,
    Text,
    Tip
} from 'grommet'


// experiences images
import Code from '../assets/experience/Code.png'
import Database from '../assets/experience/Database.png'
import Hardware from '../assets/experience/Hardware.png'
import WebDev from '../assets/experience/WebDev.png'


export default function About() {
    const experiences = [
        {
            image: Code,
            title: 'Programming and Software',
            skills: ['C++', 'JavaScript', 'Python'] 
        },
        {
            image: Database,
            title: 'Database Management and Web Services',
            skills: ['MongoDB', 'PostMan', 'StableHost'] 
        },
        {
            image: Hardware,
            title: 'Electronics and Hardware',
            skills: ['Altium Developer', 'Arduino', 'Raspberry Pi']
        },
        {
            image: WebDev,
            title: 'Web Development and Tools',
            skills: ['ReactJs', 'MERN', 'HTML', 'CSS', 'Node.js', 'Heroku', 'Firebase']
        }
    ]
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(true)
    }
    return (
        <Box id="about" >
            {/* Heading */}
            <Box background="brand" height='auto' width="612px">
                <Heading alignSelf='center' >About Me</Heading>
            </Box>
            <Box direction='row-responsive' margin={{top: 'large'}} justify='evenly'>
                {/* Text */}
                <Box width="433px" alignSelf='center' gap="xsmall" direction="row"> 
                <Box
                    width="30px"
                    background="brand" 
                />
                    <Text>
                    I am a dedicated Computer Engineering student at the University of Florida’s Herbert Wertheim College of Engineering, seeking a Summer Internship in Computer Engineering. My passion for delivering impactful solutions through technical expertise and collaboration skills drives me to excel in my field. Committed to continuous learning and development, I actively work to enhance my skill set. Fueled by a strong work ethic and innate curiosity, I am eager to bring my technical skills, dedication, and collaborative spirit to a professional environment where I can thrive as a Computer Engineer.
                    </Text>
                </Box>
                {/* Skill Boxes */}
                <Box direction='column' gap="large" align='center'>
                    <Box align='center'  direction="column"> 
                        <Heading level={2} size="32px" textAlign='center'>
                            Experiences in the following:
                        </Heading>
                            <Box direction="row-responsive" wrap={true}  align='center' gap='medium'>
                                {/* Mapping through images array */}
                                {experiences.map((experience, index) => (
                                    <Tip
                                        key={index}
                                        content={
                                        <Box background="#F9A875 " round pad="small" gap="small" width={{ max: 'small' }} >
                                            <Text textAlign='center' weight="bold">{experience.title}</Text>
                                                <Box overflow="hidden">
                                                {experience.skills.map((skill, skillIndex) => (
                                                    <Text key={skillIndex}><li>{skill}</li></Text>
                                                ))}
                                                </Box>
                                        </Box>
                                        }
                                        dropProps={{ align: { top: 'bottom' }}}
                                    >
                                        {/* <Button icon={experience.image}/> */}
                                        <Image style={{cursor: 'pointer'}} src={experience.image}/>
                                    </Tip>                        
                                ))}
                                </Box>
                            <Box pad={{top: "medium"}} justify='center'>
                                <Text weight="bold" textAlign='center'>And More...</Text>
                            </Box>
                        </Box>
                    </Box>
                    
                </Box>
            </Box>
            
        
    )
}

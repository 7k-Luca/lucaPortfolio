// Project Page File
import {useState} from 'react'
import {
    Main,
    Box,
    Button,
    Image,
    Text,
    Layer,
    Heading,
    Grid,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Anchor,
    Carousel,
    Video,
    ResponsiveContext
} from 'grommet'
import { projectAnalytics } from '../firebase/config';
// import data
import { projects } from '../assets/data/projectData';

export default function Projects() {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null)
    const mobile1 = projects.slice(0, 3)
    const mobile2 = projects.slice(3, 6)

    const large1 = projects.slice(0,6)
    const large2 = projects.slice(6,12)

    const openProject = (index) => {
        setSelectedProjectIndex(index);
        projectAnalytics.logEvent('button_click', { button_name:  projects[index].title})
    }
    const closeProject = () => {
        setSelectedProjectIndex(null);
    }

    const mobileCard = (project, index) => {
        return (
            <Card style={{border: '2px solid #000'}} key={index} height={{ min: 'auto' }} align='center'>
                <CardHeader width="100%">
                    <Box
                        height="75px"
                        background={{
                            round:"small",
                            color: '#edede9',
                        }}
                        style={{borderBottom: '2px solid #000'}}
                        width="100%"
                        pad={project.imagePad ? project.imagePad : 'none'}
                    >
                        <Image fit="contain" src={project.image} />
                    </Box>
                </CardHeader>
                <CardBody height="auto">
                    <Heading textAlign='center' level={2} >{project.title}</Heading>
                </CardBody>
                <CardFooter pad={{bottom: 'small'}}>
                    <Button label="More Info" hoverIndicator={{background: 'analogous'}} primary onClick={() => openProject(index)}/>
                </CardFooter>
            </Card>
        )
    }

    const mediumCard = (project, index) => {
        return(
            
                <Card style={{border: '2px solid #000'}} key={index} height={{ min: 'auto' }} align='center'>
                    <CardHeader width="100%">
                        <Box
                            height="45px"
                            background={{
                                round:"small",
                                color: '#edede9',
                            }}
                            style={{borderBottom: '2px solid #000'}}
                            width="100%"
                            pad={project.imagePad ? project.imagePad : 'none'}
                        >
                            <Image fit="contain" src={project.image} />
                        </Box>
                    </CardHeader>
                    <CardBody height="auto">
                        <Heading textAlign='center' level={2} size="24px">{project.title}</Heading>
                    </CardBody>
                    <CardFooter pad={{bottom: 'small'}}>
                        <Button label="More Info" hoverIndicator={{background: 'analogous'}} primary onClick={() => openProject(index)}/>
                    </CardFooter>
                </Card>
            
        )
    }

    const largeCard = (project, index) => {
        return(
            
            <Card  style={{border: '2px solid #000'}} key={index} height={{ min: 'auto' }} align='center'>
                <CardHeader width="100%">
                    <Box
                        height="85px"
                        background={{
                            round:"small",
                            color: '#edede9',
                        }}
                        style={{borderBottom: '2px solid #000'}}
                        width="100%"
                        pad={project.imagePad ? project.imagePad : 'none'}
                    >
                        <Image fit="contain" src={project.image} />
                    </Box>
                </CardHeader>
                <CardBody height="auto">
                    <Heading textAlign='center' level={2} size="34px">{project.title}</Heading>
                </CardBody>
                <CardFooter pad={{bottom: 'small'}}>
                    <Button label="More Info" hoverIndicator={{background: 'analogous'}} primary onClick={() => openProject(index)}/>
                </CardFooter>
            </Card>
        )
    }


    return (
        <Box id="projects" >
            <ResponsiveContext.Consumer>
                {size => (
                    <>
                    {/* Card Header */}
                    <Box width="612px" height="auto" pad={{vertical: 'medium'}} background="brand" alignSelf='center'>
                        <Heading textAlign='center'>Projects</Heading>
                    </Box>

                    {/* Projects Card */}
                    
                    {size==='xsmall' || size==='small' && (
                        // if size is xsmall to small
                        <Box margin={{top: "large"}} align='center' justify='center'>
                            {projects.length <= 3 ? (
                                // if the projects array has less than or equal to 3 items and is small to xsmall - no carousel
                                <Box pad="medium" direction='column' gap="large">
                                {projects.map((project, index) => (
                                    <Box >
                                        {mobileCard(project, index)}
                                    </Box>
                                ))}
                                </Box>
                            ) : (
                                // if the projects array has more than 3 items and is small - carousel
                                <Box pad="medium">
                                    <Carousel controls='arrows'>
                                        {/* First slide of carousel */}
                                        <Box pad="medium" direction='column' gap="large">
                                        {mobile1.map((project, index) => (
                                            <Box >
                                                {mobileCard(project, index)}
                                            </Box>
                                        ))}
                                        </Box>
                                        {/* Second slide of carousel */}
                                        <Box pad="medium" direction='column' gap="large">
                                        {mobile2.map((project, index) => (
                                            <Box  >
                                                {mobileCard(project, index)}
                                            </Box>
                                        ))}
                                        </Box>
                                    </Carousel>
                                </Box>
                            )}
                        </Box>
                    ) }
                    {size === 'medium' &&  (
                        // if size is medium
                        <Box margin={{top: ""}} align='center' justify='center'>
                            {projects.length <= 6 ? (
                                // if the projects array has less than or equal to 6 and is medium - no carousel
                                <Box pad="medium">
                                    <Grid columns={{ count: 3, size: 'auto' }} gap="medium">
                                        {projects.map((project, index) => (
                                            <Box>
                                                {mediumCard(project, index)}
                                            </Box>
                                        ))}
                                    </Grid>
                                </Box>
                            ) : (
                                // if the projects array has more than 6 items and is medium - carousel
                                <Box>
                                    <Carousel controls={true}>
                                        {/* First slide of carousel */}
                                        <Box pad="medium">
                                            <Grid columns={{ count: 3, size: 'auto' }} gap='small'>
                                            {large1.map((project, index) => (
                                                <Box>
                                                    {mediumCard(project, index)}
                                                </Box>
                                            ))}</Grid>
                                        </Box>
                                        {/* Second slide of carousel */}
                                        <Box  pad="medium">
                                            <Grid columns={{ count: 3, size: 'auto' }} >
                                            {large2.map((project, index) => (
                                                <Box>
                                                    {mediumCard(project, index)}
                                                </Box>
                                            ))}</Grid>
                                        </Box>
                                    </Carousel>
                                </Box>
                            )}
                        </Box>
                    )
                    }
                    {size === 'large' && (
                        // if size is large
                        <Box margin={{top: ""}} align='center' justify='center'>
                            {projects.length <= 6 ? (
                                // if the projects array has less than or equal to 6 and is large - no carousel
                                <Box pad="medium">
                                    <Grid columns={{ count: 3, size: 'auto' }} gap="medium">
                                        {projects.map((project, index) => (
                                            <Box>
                                                {largeCard(project, index)}
                                            </Box>
                                        ))}
                                    </Grid>
                                </Box>
                            ) : (
                                // if the projects array has more than 6 items and is large - carousel
                                <Box>
                                    <Carousel controls={true}>
                                        {/* First slide of carousel */}
                                        <Box pad="medium">
                                            <Grid columns={{ count: 3, size: 'auto' }} gap='small'>
                                            {large1.map((project, index) => (
                                                <Box>
                                                    {largeCard(project, index)}
                                                </Box>
                                            ))}</Grid>
                                        </Box>
                                        {/* Second slide of carousel */}
                                        <Box  pad="medium">
                                            <Grid columns={{ count: 3, size: 'auto' }} >
                                            {large2.map((project, index) => (
                                                <Box>
                                                    {largeCard(project, index)}
                                                </Box>
                                            ))}</Grid>
                                        </Box>
                                    </Carousel>
                                </Box>
                            )}
                        </Box>
                    )}
                        {/* Project Layers */}
                        {selectedProjectIndex !== null && (
                            <Layer
                                onEsc={closeProject}
                                onClickOutside={closeProject}
                            >
                                <Box align='center'  pad="medium" style={{maxWidth: '700px'}}>
                            {/* Display project details using projects[selectedProjectIndex] */}
                            <Heading textAlign="center" size="32px" level={2}>
                                {projects[selectedProjectIndex].title}
                            </Heading>
                            
                                {projects[selectedProjectIndex].images && projects[selectedProjectIndex].images.length > 1 && (
                                    <Box height="200px" fill="horizontal" margin={{bottom: 'small'}} overflow="hidden">
                                        <Carousel controls="arrows" >
                                            {projects[selectedProjectIndex].images.map((media, index) => {
                                                if (media.endsWith('mp4')) {
                                                    return (
                                                        <Video loop={true} fit="contain" autoPlay={false} controls={{ play: 'true', volume: 'true'}} type="video/mp4" key={index}>
                                                            <source src={media} type="video/mp4"/>    
                                                        </Video>
                                                    )
                                                } else {
                                                    return <Image fit="contain" src={media} key={index}/> 
                                                }
                                            })}
                                        </Carousel>
                                    </Box>
                                )}
                                {projects[selectedProjectIndex].images == null && (
                                    <Box height="100px" margin={{bottom: 'small'}} overflow="hidden">
                                        <Image fit='contain' src={projects[selectedProjectIndex].image}/>
                                    </Box>
                                )}
                            
                            <Box height="200px" overflow="auto">
                                {/* Conditional rendering of project message properties */}
                                {projects[selectedProjectIndex].message.map((item, index) => (
                                <div key={index}>
                                    {item.responseMessage && (
                                        <>
                                        <Text weight="bold">{item.title}:&nbsp;</Text>
                                        <Text size="14px">{item.responseMessage}</Text>
                                        </>
                                    )}
                                    <br /><br />
                                </div>
                                ))}
                                {!projects[selectedProjectIndex].message.some(item => item.responseMessage) && (
                                    <Text align="center">No messages available</Text>
                                )}
                            </Box>
                            {projects[selectedProjectIndex].Link && (
                                <Box direction="row" align='center' justify='center' pad="medium">
                                <Text>Link:&nbsp;</Text>
                                <Anchor href={projects[selectedProjectIndex].Link}  label={projects[selectedProjectIndex].Link} target='_blank'/>
                                </Box>
                            )}
                            <Button margin={{vertical: 'small'}} hoverIndicator={{background: 'analogous'}} label="Close" onClick={closeProject} />
                        </Box>
                            </Layer>
                        )}

                    </>
                )}
            </ResponsiveContext.Consumer>
        </Box>
    )
}

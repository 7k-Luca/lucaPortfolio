// Contact Page File
import { useState } from "react"
import {
    Box,
    Image,
    Heading,
    Text,
    Form,
    FormField,
    TextInput,
    TextArea,
    Button,
    Anchor,
    Main,
    Layer
} from 'grommet'
import {
    Github,
    Linkedin,
    StatusCritical,
    StatusGood
} from 'grommet-icons'

// Image
import ContactTitle from '../assets/ContactTitle.png'

// Firebase
import { useFirestore } from "../hooks/useFirestore"

export default function Contact() {
    // form values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // disable button
    const [isPending, setIsPending] = useState(false);
    // error and success messages
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    // firebase collection
    const { addDocument, response } = useFirestore('contact');

    // handleSubmit Function
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true)
        resetModal();
        

        const post = {
            name,
            email,
            message
        };

        await addDocument(post)
        if(response.error) { // if error
            console.log("Error:", response.error)
            onErrorOpen();
            setIsPending(false)
        } else { // if successful
            console.log("Form submitted successfully:", post);
            onSuccessOpen();
            handleReset();
            setIsPending(false)
        }
    }

    // handleReset Function
    const handleReset = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    // Reset Modal Function
    const resetModal = () => {
        setShowErrorMessage(false);
        setShowSuccessMessage(false);
    }

    // Open Success Layer Function
    const onSuccessOpen = () => {
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
    };

    // Open Error Layder Function
    const onErrorOpen = () => {
        setShowErrorMessage(true);
        setTimeout(() => {
            setShowErrorMessage(false);
        }, 3000);
    };

    // Open LinkedIn profile in new tab
    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };

    return (
        <Box id="contact" direction="column" align="center" gap="medium" >
            {/* Contact Heading */}
            <Box align="center" background={{  image: `url(${ContactTitle})`, size: 'contain' }} width='100%' > 
                <Heading textAlign="center">Contact Me</Heading>
            </Box>

            {/* Contact Box */}
            <Box style={{border: '2px solid #000'}} round direction="row-responsive" gap="small" pad="medium" justify="evenly" width="large">
                <Box align="center">
                    <Heading level={2} textAlign="center" alignSelf="center">
                        Let's Get in Touch!
                    </Heading>
                    <Box width="400px" alignSelf="center">
                        <Text textAlign="center">
                            Have a question, want to work together, or simply want to have a chat? Feel free to leave me an e-mail at {<Anchor color="brand" href="mailto:lmarinelli12@yahoo.com?" subject="subject text" label="lmarinelli12@yahoo.com"/>} or simply fill out the form on this page and I will reply to you soon!
                        </Text>
                    </Box>
                    <Box justify="center" align="center" gap='medium'  margin={{top:'medium'}}  direction="row-responsive" >
                        <Anchor 
                            onClick={() => openInNewTab("https://www.linkedin.com/in/luca-marinelli-b90655207/")}
                            label={<Linkedin color="plain" size="medium"/>}
                        />
                        <Anchor 
                            onClick={() => openInNewTab("https://github.com/7k-Luca")}
                            label={<Github color="plain" size="medium"/>}
                        />
                    </Box>
                </Box>

                {/* Form */}
                <Box alignSelf="center">
                    <Form onSubmit={handleSubmit} onReset={handleReset}>
                        <FormField name="name" htmlFor="name" label="Name">
                            <TextInput name="name" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="John Doe"/>
                        </FormField>
                        <FormField name="email" htmlFor="email" label="Email">
                            <TextInput name="email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="yourEmail@gmail.com"/>
                        </FormField>
                        <FormField name="message" htmlFor="message" label="Message">
                            <TextArea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} resize={false} required placeholder="Your Message..."/>
                        </FormField>
                        {/* Disable Buttons if Pending to Defeat Multiple Clicks */}
                        {isPending && (
                            <Box direction='row-responsive' justify='end' gap='small'>
                                <Button disabled label="Reset" type="reset" secondary/>
                                <Button disabled label="Sending..." type="submit"primary/>
                            </Box>
                        )}
                        {!isPending && (
                            <Box direction='row-responsive' justify='end' gap='small'>
                                <Button hoverIndicator={{background: 'analogous'}} label="Reset" type="reset" secondary/>
                                <Button hoverIndicator={{background: 'analogous'}} label="Send" type="submit"primary/>
                            </Box>
                        )}
                    </Form>
                </Box>
            </Box>

                {/* Show Success Message */}
                {showSuccessMessage && (
                    <Layer position="top" modal={false} margin={{ vertical: 'medium', horizontal: 'small' }} responsive="false" plain> 
                        <Box align="center" direction="row" gap="small" justify="between" round="medium" elevation="medium" pad={{ vertical: 'medium', horizontal: 'large' }} background="status-ok">
                            <Box align="center" direction="row" gap="xsmall">
                                <StatusGood />
                                <Text textAlign="center">
                                    Your message was successfully sent!
                                </Text>
                            </Box>
                        </Box>
                    </Layer>
                )}
                {/* Show Error message */}
                {showErrorMessage && (
                    <Layer position="top" modal={false} margin={{ vertical: 'medium', horizontal: 'small' }} responsive="false" plain> 
                        <Box align="center" direction="row" gap="small" justify="between" round="medium" elevation="medium" pad={{ vertical: 'medium', horizontal: 'large' }} background="status-critical">
                            <Box align="center" direction="row" gap="xsmall">
                                <StatusCritical />
                                <Text textAlign="center">
                                    Your message was unsuccessfully sent! Please try again later or email me.
                                </Text>
                            </Box>
                        </Box>
                    </Layer>
                )}
        </Box>
    )
}

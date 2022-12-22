
import { Box, Container} from '@chakra-ui/react'
import Footer from '../components/footer'
import { Navigation } from '../components/navbar'
import Styler_ from '../styles/extras/Extra.module.scss'
export default function status() {
    return (
        <>
            <Navigation />
            <Container>
            <Box >
                
                    <img src="/images/Soon.png" alt="Soon" width={'400px'} className={Styler_.Soon} />
                    <p className={Styler_.Soon_P}>Coming Soon...</p>


            
            </Box>
        </Container>
<Footer/>
        </>
        
    )
}
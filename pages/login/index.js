import React from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
// Next inbuilt Image
import Image from 'next/image';
import insta from '../../assets/influence-concept-people-letters-icons-colored-flat-vector-illustration-isolated-white-background-influence-concept-139612179.jpeg';
import { CarouselProvider, Slider, Slide, Image as Img } from 'pure-react-carousel';
import bg1 from '../../assets/bg1dash.png'
import bg3 from '../../assets/bg3dash.png'
import bg4 from '../../assets/bg4dash.png'
import { Carousel } from 'react-responsive-carousel';
function index() {
    return (
        <div className="login-container">
            <div className="carbg">
                <div className='car'>
                <Carousel showIndicators={false}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                interval={2000}
                autoPlay={true}
                showArrows={false}
                >
                    <Image src={bg1}></Image>
                    <Image src={bg3}></Image>
                    <Image src={bg4}></Image>
                </Carousel>
                </div>
            </div>
            <div>
                <div className='login-card'>
                    <Image src={insta} />

                    <TextField size="small" margin='dense' id="outlined-basic" fullWidth
                        label="Email" variant="outlined" />
                    <TextField size="small" margin='dense' id="outlined-basic" fullWidth
                        label="Password" type="password" variant="outlined" />

                    <div style={{ color: 'red' }}>Error yha aaega</div>
                    <Button variant="contained" fullWidth
                        style={{ marginTop: '1rem' }}>
                        Login In
                    </Button>
                    <div style={{ color: 'blue', marginTop: '0.5rem' }}>Forgot Password ?</div>

                </div>
                <div className='bottom-card'>
                    Don't Have an Account? <span style={{ color: 'blue' }}>Sign Up</span>
                </div>
            </div>
        </div>
    )
}

export default index

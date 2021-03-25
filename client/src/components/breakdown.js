import React from 'react';
import Step1 from '../images/Step1.jpeg';
import Step2 from '../images/Step2.jpeg';
import Step3 from '../images/Step3.jpeg';
import { Container, Card, CardActionArea, CardMedia,
CardContent, Typography} from '@material-ui/core'



const Breakdown = (props) => {
    return (
        <Container maxWidth="md" className='breakdown-info'>
        <h3 className='in-block'>
            <div className="alt-block">
            <div>
                "Step 1"
            </div>
                <span className="bd-headline">Ensure your firearm is unloaded</span>
            </div>
            <Card className='breakdown-cards'>
                     <CardActionArea>
                         <CardMedia
                         component="img"
                         alt='1911'
                         height='600'
                         image={Step1}
                         title='1911'
                         />
                         <CardContent>
                             <Typography gutterBottom variant='h5' component='h2'>
                                 The first and most important step to taking apart your firearm is making
                                 sure it is safe and unloaded.
                             </Typography>
                         </CardContent>
                     </CardActionArea>
             </Card>
        </h3>

        <h3 className='in-block'>
            <div className="alt-block">
            <div>
                "Step 2"
            </div>
                <span className="bd-headline">Field strip your firearm</span>
            </div>
            <Card className='breakdown-cards'>
                     <CardActionArea>
                         <CardMedia
                         component="img"
                         alt='1911'
                         height='600'
                         image={Step2}
                         title='1911'
                         />
                         <CardContent>
                             <Typography gutterBottom variant='h5' component='h2'>
                                 The next thing to do is field strip your handgun which will be taking
                                 the slide, slide pin, recoil spring, barrel, bearing, and the pin inside the spring.
                             </Typography>
                         </CardContent>
                     </CardActionArea>
             </Card>
        </h3>

        <h3 className='in-block'>
            <div className="alt-block">
            <div className="step-num">
                "Step 3"
            </div>
                <span className="bd-headline">Clean your firearm</span>
            </div>
            <Card className='breakdown-cards'>
                     <CardActionArea>
                         <CardMedia
                         component="img"
                         alt='1911'
                         height='600'
                         image={Step3}
                         title='1911'
                         />
                         <CardContent>
                             <Typography gutterBottom variant='h5' component='h2'>
                                 Next you will need some CLP or your favorite cleaning/lubricant solution.
                                 Take a rag that doesnt leave cloth particles everywhere and spray it with your 
                                 cleaning solution and wipe down all weapon components until desired result. You 
                                 choose how meticulous you'd like to be.
                             </Typography>
                         </CardContent>
                     </CardActionArea>
             </Card>
        </h3>
        </Container>
    )
};

export default Breakdown;

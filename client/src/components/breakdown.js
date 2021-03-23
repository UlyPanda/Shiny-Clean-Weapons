import React from 'react';
import handGunPic from '../../images/handGunPic.jpg';
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
                         height='200'
                         image={handGunPic}
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
                <span className="bd-headline"></span>
            </div>
            <Card className='breakdown-cards'>
                     <CardActionArea>
                         <CardMedia
                         component="img"
                         alt='1911'
                         height='200'
                         image={handGunPic}
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
        </Container>
    )
};

export default Breakdown;

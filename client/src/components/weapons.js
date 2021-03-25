import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import handGunPic from '../images/handGunPic.jpg';
import { Link } from 'react-router-dom'



 class Weapons extends React.Component {
     constructor(props){
         super(props)
         this.state = {
             weapons: this.props.weapons
         }
     }
     

     componentDidMount() {
        this.props.getAllWeapons()
     }

 
    render() {
    return(

        <div className='weapons-container'>
                    <Card className='cards'>
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
                                 1911
                                 <Link to='/breakdown'> Break it down for me!</Link>
                             </Typography>
                         </CardContent>
                     </CardActionArea>
                    </Card>
        </div>
    )
  }
 }

export default Weapons;
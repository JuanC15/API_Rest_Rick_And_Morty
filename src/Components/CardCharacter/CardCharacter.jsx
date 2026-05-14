import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Fondo from '../../IMG/Fondo.jpg';

const CardCharacter = (props) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(rgba(6, 10, 26, 0.35), rgba(6, 10, 26, 0.78)), url(${Fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: 3,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.28)',
        color: 'white',
      }}
    >
      <CardActionArea
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        <CardMedia
          component="img"
          image={props.image}
          sx={{
            height: 290,
            paddingTop: '18px',
            objectFit: 'contain',
            '&:hover': {
              transform: 'scale(1.2)',
              transition: 'transform 0.3s ease-in-out',
            },
          }}
          alt={props.name}
        />
        <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
            {props.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.82)' }}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardCharacter;

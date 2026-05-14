import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './CardCharacter.css';

const CardCharacter = (props) => {
  const secondaryInfo =
    props.description || [props.species, props.gender, props.race].filter(Boolean).join(' · ');

  return (
    <Card className="card-character" sx={{ backgroundColor: 'transparent' }}>
      <CardActionArea className="card-action-area" sx={{ backgroundColor: 'transparent' }}>
        <CardMedia
          component="img"
          image={props.image}
          className="card-media"
          alt={props.name}
        />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="div" className="card-title">
            {props.name}
          </Typography>
          {secondaryInfo ? (
            <Typography variant="body2" className="card-description">
              {secondaryInfo}
            </Typography>
          ) : null}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardCharacter;

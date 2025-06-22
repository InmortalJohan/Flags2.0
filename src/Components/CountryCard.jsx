import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';    
const CountryCard = ({country}) => {
    return (
        <Paper itemSize={3} component={Link} to={`/country/${country.cca3}`} elevation={3} sx={{ width: '320px', textDecoration: 'none',paddingBottom: '16px', backgroundColor: 'secondary.main',display:' flex' , flexDirection: 'column' , alignItems: 'center' , justifyContent: 'center', gap: '8px', }}>
                <Box component="img" src={country.flags.png} alt={country.name.common} style={{p:0, margin:0, width: '100%', height: '150px', objectFit: 'cover' }} />
                <Typography variant="h6" component="h2">
                    {country.name.common}
                </Typography>
                <Typography variant="body1" component="p">
                    Region: {country.region}
                </Typography>
                <Typography variant="body1" component="p">
                    Capital:   {country.capital}
                </Typography>
                <Typography variant="body1" component="p">
                    Population: {country.population.toLocaleString()} people
                </Typography>
        </Paper>
    );
};

export default CountryCard;
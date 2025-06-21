import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';    
const CountryCard = ({country}) => {
    return (
        <Paper component={Link} to={`/country/${country.name.common}`} elevation={3} sx={{ textDecoration: 'none', p:2, backgroundColor: 'secondary.main' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={country.flags.png} alt={country.name.common} style={{p:0, margin:0, width: '250px', height: '150px', objectFit: 'cover' }} />
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
            </Box>
        </Paper>
    );
};

export default CountryCard;
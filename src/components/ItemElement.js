import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

function ItemElement() {
    return(
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Typography variant='h5' component='div'>frameworkName</Typography>
                <Typography variant='h5' component='div'>Lead by leadby</Typography>
                <Link href='/' underline='none' component='div'>Official Docs</Link>
            </CardContent>
            <CardActions>
                <Button variant='outlined' color='success' size='small' href='/qqq'>Edit</Button>
                <Button variant='outlined' color='error' size='small' href='/qqq'>Delete</Button>
            </CardActions>
        </Card>
    )
}

export default ItemElement;
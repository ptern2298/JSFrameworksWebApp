import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

function ItemElement({ id, frameworkName, leadBy, officialDocs }) {

    function deleteFramework() {
        let frameworks = JSON.parse(localStorage.getItem('frameworks'));
        if(frameworks != null) {
            frameworks.splice(id,1);
            localStorage.setItem('frameworks', JSON.stringify(frameworks));
            console.log(frameworks);
        }
    }

    return(
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Typography variant='h5' component='div'>${frameworkName}</Typography>
                <Typography variant='h5' component='div'>Lead by ${leadBy}</Typography>
                <Link href={officialDocs} underline='none' component='div'>Official Docs</Link>
            </CardContent>
            <CardActions>
                <Button variant='outlined' color='success' size='small' href={`/edit/${id}`}>Edit</Button>
                <Button variant='outlined' color='error' size='small' href='/' onClick={(event) => { deleteFramework() }}>Delete</Button>
            </CardActions>
        </Card>
    )
}

export default ItemElement;
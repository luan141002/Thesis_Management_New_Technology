import React from 'react';
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom';
import thesisService from '../services/thesisService';

function ThesisDetail() {
    const {id} = useParams()
    const [thesis , setThesis] = React.useState({});

    React.useEffect(()=>{
        async function fetchThesis() {
            const data = await thesisService.getThesisById(id);
            setThesis(data);
        }
        fetchThesis();
        console.log(thesis);
    },[])
    return (
        <Box>
        <div>
            Title: {thesis.title}
        </div>
        <div>
            Authors: {thesis.authors?.length> 0 && thesis.authors.map((author)=> author.firstName +', '+author.lastName)}
        </div>
        <div>
            Adviser: {thesis.adviser && thesis.adviser.firstName +" " + thesis.adviser.lastName}
        </div>
        <div>
            Major: {thesis.major?.name}
        </div>
        <div>
            Description: {thesis.description}
        </div>
    </Box>
    )
}

export default ThesisDetail;
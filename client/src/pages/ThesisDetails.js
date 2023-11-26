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
    },[])
    return (
        <Box>
        <div>
            Title: {thesis.title}
        </div>
        <div>
            Authors: {thesis.authors?.map((author)=>author+', ')}
        </div>
        <div>
            Adviser: {thesis.advisers}
        </div>
        <div>
            Major: {thesis.major}
        </div>
        <div>
            Description: {thesis.description}
        </div>
    </Box>
    )
}

export default ThesisDetail;
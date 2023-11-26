import React from 'react';
import Box from '@mui/material/Box'
import { useNavigate, useParams } from 'react-router-dom';
import userService from '../services/userServices';

function FacultyDetail() {
    const {id} = useParams()
    const [faculty , setFaculty] = React.useState({});
    React.useEffect(()=>{
        async function fetchFaculty() {
            const data = await userService.getUserById(id);
            setFaculty(data);
        }
        fetchFaculty();
    },[])
    return ( 
        <Box>
            <div>
                First Name: {faculty.firstName}
            </div>
            <div>
                Last Name: {faculty.lastName}
            </div>
            <div>
                Email: {faculty.email}
            </div>
            <div>
                Phone: {faculty.phone}
            </div>
            <div>
                Address: {faculty.address}
            </div>
        </Box>
     );
}

export default FacultyDetail;
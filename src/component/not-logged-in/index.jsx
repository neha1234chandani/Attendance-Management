import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const NotLoggedIn = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/");
    }, [])
    return <>401</>
}

export default NotLoggedIn;
import React from 'react';
import HomeLink from './style';
const NotFound = () => {
    return (
        <div>
            <h2>404 Not Found</h2>
            <p>The page you're looking for doesn't exist.</p>
            <HomeLink href="/">Go to Home Page</HomeLink>  
         </div>
    )
}

export default NotFound;

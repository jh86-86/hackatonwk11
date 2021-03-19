import React from 'react';
import Button from '../Button';

function HomePage({user = "test"}){
    return (
        <div>
        {/* //greeting user */}
        <p>{`Hello ${user}`}</p>
        <p>What would you like to listen to today?</p>

        {/* //genre buttons */}
        <Button />
        <Button />
        <Button />
        <Button />
        </div>
    )
}

export default HomePage;
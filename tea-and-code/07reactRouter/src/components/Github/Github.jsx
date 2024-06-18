import React, { useState, useEffect } from 'react'


export default function Github() {
    const [data, setData] = useState([])


useEffect(() => {
    fetch('https://api.github.com/users/bdkoder')
        .then((response) => response.json())
        .then((data) => setData(data));

}
, []);
    return (
        <div>
            <h1 className="text-2xl font-medium text-center py-2">Github</h1>
            <div className="grid place-items-center">
                <h2 className="text-2xl font-medium text-center py-2">{data.name}</h2>
            </div>
            <div className="grid place-items-center">
                <h2 className="text-2xl font-medium text-center py-2">{data.bio}</h2>
            </div>
            <div className="grid place-items-center py-2">
                <img className="w-96" src={data.avatar_url} alt="image2" />
            </div>
        </div>
    );
}
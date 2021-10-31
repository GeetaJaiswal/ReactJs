import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Services = () => {
    return(
        <>
        <div className="mt-5">
        <h1 className="text-center">Services</h1>
        </div>

        <div className="col-md-1"></div>
        <div className="container container-sm">
            <div className="col-md-10 col-10 mx-auto pt-5">
            <div className="row gy-4">
            {
                Sdata.map((val,index)=>{
                    return <Card key={index} imgsrc={val.imgsrc} title={val.title} />
                })
            }
            </div>
            </div>
        </div>
        <div className="col-md-1"></div>
        </>
    );
}

export default Services;
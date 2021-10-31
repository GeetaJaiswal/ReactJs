import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname:"",
        mobile:"",
        email:"",
        msg:"",
    });

    const InputEvent = (event) => {
        console.log(event.target);
        const {name, value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]:value,
            };
        });
    };

    const formSubmit = (event) => {
        event.preventDefault();
        alert(
            `My name is ${data.fullname} . mobile number is ${data.mobile} .
             email is ${data.email} . and your message is ${data.msg}`
        )
    }

    return(
        <>
        <div className="mt-5">
        <h1 className="text-center">Contact</h1>
        </div>

        <div className="col-md-4"></div>
        <div className="container container-sm">
            <div className="col-md-4 col-10 mx-auto pt-5">
            <div className="row gy-4">

            <form onSubmit={formSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email"
                 className="form-control"
                 id="exampleInputEmail1"
                 aria-describedby="emailHelp"
                 name="email"
                 value={data.email}
                 onChange={InputEvent}
                 />
            </div>
    
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">FullName</label>
                <input type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="fullname"
                 value={data.fullname}
                 onChange={InputEvent}
                />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Mobile</label>
                <input
                type="text"
                 className="form-control"
                  id="exampleInputPassword1"
                  name="mobile"
                 value={data.mobile}
                 onChange={InputEvent}
                  />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Message</label>
                <textarea
                 className="form-control"
                  id="exampleInputPassword1"
                  name="msg"
                 value={data.msg}
                 onChange={InputEvent}
                  />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            </div>
            </div>
        </div>
        <div className="col-md-4"></div>
        </>
    );
}

export default Contact;
import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../Sidebar/Sidebar";
import './MakeAdmin.css';

const MakeAdmin = () => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data.email);
    const adminData = {
      email: data.email
    };
    const url = `http://localhost:5550/addAdmin`;
    console.log(adminData);
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(adminData)
    })
      .then(res => console.log('Servier side response', res))
  };

  return (
    <div className="container ">
      <div className="admin-area">
        <div className="row">
          <div className="col-md-3">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-9">
            <div className="form-area">
              <div className="">
                <form className="form-style" action="/addService" method="POST" onSubmit={handleSubmit(onSubmit)}>
                  <input name="name" type="email" placeholder="Admin Email" {...register("email", { required: true })} />
                  <br />
                  <input className="btn btn-brand text-white" type="submit" />
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
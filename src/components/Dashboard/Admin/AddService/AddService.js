import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../Sidebar/Sidebar";
import './AddService.css';

const AddService = () => {

  const { register, handleSubmit, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = data => {
    console.log(data.image);
    const serviceData = {
      name: data.name,
      title: data.title,
      description: data.description,
      price: data.price,
      imageURL: imageURL
    };
    const url = `http://localhost:5550/addService`;
    console.log(serviceData);
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(serviceData)
    })
      .then(res => console.log('Servier side response', res))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', 'a7915b9f212a4d28faff77a845b1d274');
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }


  return (
      <div className="container ">
        <div className="admin-area">
          <div className="row">
            <div className="col-md-3">
              <Sidebar></Sidebar>
            </div>
        <div className="col-md-9">
        <div className="form-area">
              <div className="text-center">
                <form className="form-style" action="/addService" method="POST" onSubmit={handleSubmit(onSubmit)}>
                  <input name="name" type="text" placeholder="Service Name" {...register("name", { required: true })}  />
                  <br />
                  <input name="title" type="text" placeholder="Service Title" {...register("title", { required: true })}/>
                  <br />
                  <input name="price" type="text" placeholder="Price" {...register("price", { required: true })}/>
                  <br />
                  <textarea type="textArea" name="description" id="" cols="30" rows="10" placeholder="Service Details" {...register("description", { required: true })}/>
                  <br/>
                  <input name="image" type="file" onChange={handleImageUpload} />
                  <br />
                  <input className="btn btn-brand" type="submit" />
                </form>

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
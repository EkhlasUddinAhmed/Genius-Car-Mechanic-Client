import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {

    const {anyUser}=useContext(AuthContext);
  const service = useLoaderData();
 const navigate=useNavigate();

  console.log("LoggedUser is:",anyUser);

const onSubmitHandling=(e)=>{
    e.preventDefault();
    const nameFirst=e.target.first.value;
    const nameLast=e.target.last.value;
    const name=`${nameFirst} ${nameLast}`;

    const email=anyUser?.email;
    const phone=e.target.phone.value;
    const message=e.target.message.value;
    const carServiceID=service[0]?._id;
    const serviceName=service[0]?.title;
    const price=service[0]?.price;
    const customer={
        carServiceID,
        serviceName,
        price,
        customer:name,
        email,
        phone,
        message,
        img:service[0].img
    }

    console.log("Customer is:",customer)
    fetch('https://genius-car-server-xi-rust.vercel.app/order/service', {
  method: 'POST',
  body: JSON.stringify(customer),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    e.target.reset();
    toast("Your Order is Successfully submitted");
    navigate("/",{replace:true});

  });
    
}

  return (
    <div className="row justify-content-center">
      <h1 className="text-center text-danger">Your Are about to Order:{service[0]?.title}</h1>
      <div className="col-md-6">
        <div className="my-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          
          <form onSubmit={onSubmitHandling}>
            <div class="mb-3">
              <label for="exampleInputFirst" class="form-label">
                Your First Name
              </label>
              <input
                name="first"
                type="text"
                class="form-control"
                id="exampleInputFirst"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputLast" class="form-label">
                Your Last Name
              </label>
              <input
                name="last"
                type="text"
                class="form-control"
                id="exampleInputLast"
                required
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                readOnly
                 disabled
                value={anyUser?.email}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPhone" class="form-label">
                Your Phone
              </label>
              <input
                name="phone"
                type="text"
                class="form-control"
                id="exampleInputPhone"
                required
              />
            </div>
            <div class="mb-3">
              <textarea
                name="message"
                type="text"
                class="form-control"
                placeholder="Comment Here"
                id="floatingTextarea2"
                style={{ height: "100px" }}
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-danger w-100">
              Place Your Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

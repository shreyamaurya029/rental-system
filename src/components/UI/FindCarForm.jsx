import React from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Full Name" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Kuch daal dena" required />
        </FormGroup>
        
        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="text"
            placeholder="Destination"
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <h6>Pickup Date</h6>
          <input type="date" placeholder="Pickup date" required />
        </FormGroup>
        
        <FormGroup className="form__group">
          <h6>Drop Date</h6>
          <input type="date" placeholder="Drop date" required />
        </FormGroup>

        <FormGroup className="select__group">
          <h6>Types</h6>
          <select>
            <option value="bike">Bike</option>
            <option value="scooty">Scooty</option>
            <option value="bicycle">Bicycle</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;

import React from "react";
import { useRef } from "react";


const ContactUs = (props) => {
  const name = useRef("");
  const mobile = useRef("");
  const email = useRef("");
  function submitHandler(event) {
    event.preventDefault();

    const details = {
      name: name.current.value,
      mobile: mobile.current.value,
      email: email.current.value,
    };

    props.addDetailsHandler(details)
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label for="formGroupName">Name</label>
          <input
            type="text"
            class="form-control"
            id="formGroupName"
            ref={name}
          />
        </div>
        <div class="form-group">
          <label for="formGroupMobile">Mobile</label>
          <input
            type="text"
            class="form-control"
            id="formGroupMobile"
            ref={mobile}
          />
        </div>
        <div class="form-group">
          <label for="formGroupEmail">Email</label>
          <input
            type="email"
            class="form-control"
            id="formGroupEmail"
            ref={email}
          />
        </div>
        <div>
          <br></br>
          <button type="submit" class="btn btn-primary" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;

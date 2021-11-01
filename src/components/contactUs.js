const ContactUs = () => {
    return (
        <div className="wrapper">
        <div className="brand">
            <div className="cover"></div>
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/assets/logo-ALTA-v2.png'} alt=""/>
            </div>
            </div>
        <div className="form">
            <h3>Contact Us</h3>

            <form action="review_message.html" className="needs-validation" name="form1" onSubmit="return sendToLocal()" noValidate>
                <div className="mb-3">
                    <label for="exampleInputFullName" className="form-label">Full Name<span>*</span></label>
                    <input type="text" className="form-control" id="exampleInputFullName" name="fullname" required/>
                    <div className="invalid-feedback">
                        You have wrong input fullname
                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address<span>*</span></label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <div className="invalid-feedback">
                        You have wrong input email
                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPhoneNumber1" className="form-label">Phone Number<span>*</span></label>
                    <input type="number" name="phone" className="form-control" id="exampleInputphone" minlength="11" required/>
                    <div className="invalid-feedback">
                        You have wrong input Phone Number
                    </div>
                </div>
                <div className="mb-3">
                    <label for="nasionality" className="form-label">Nasionality</label>
                    <select className="form-select" aria-label="Default select example" id="nasionality" name="nasionality">
                        <option value="indonesia">Indonesia</option>
                        <option value="germany">Germany</option>
                        <option value="france">France</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select the nasionality
                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" placeholder="Your Message here..."></textarea>
                </div>
                <div className="mb-3">
                    <input type="submit" className="button" value="Submit" />
                </div>
            </form>
        </div>
    </div>
    )
}

export default ContactUs;
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const AddContact = (props) => {
    const { actions } = useContext(context);
    
    const contact = props.location.state.contact;

    const title = props.location.state.title;

    const [person, setPerson] = useState({
        address : title == "update contact" ? contact.address : "",
        agenda_slug: "PedroRD",
        email: title == "update contact" ? contact.email : "",
        full_name: title == "update contact" ? contact.full_name : "",
        phone: title == "update contact" ? contact.phone : ""
    }),

    const handleChange = (event) => {
        
        serPerson({...person, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = title == "update contact" ? contact.id : "";
        actions.addContact(user, title, id, props);
    }
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onChange={handleChange} onSubmit={handleSubmit}>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="form-control" placeholder="Full Name" defaultValue={title == "Update contact" ? contact.full_name : ""} name="full_name"/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" placeholder="Enter email" defaultValue={title == "Update contact" ? contact.email : ""}  name="email"/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="form-control" placeholder="Enter phone" name="phone" />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="form-control" placeholder="Enter address" name="address"/>
					</div>
					<button type="button" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

AddContact.propTypes = {
	location: PropTypes.object
};
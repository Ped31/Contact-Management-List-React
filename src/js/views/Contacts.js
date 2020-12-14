import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});

	const { store, actions } = useContext(context);

	useEffect(() => {
		actions.loadData();
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link
						to={{
							pathname: "/add",
							state: {
								title: "Add new contact"
							}
						}}
						className="btn btn-success">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.agenda.map((contact, index) => {
							return (
								<ContactCard
									key={index}
									contact={contact}
									onDelete={() => setState({ showModal: true })}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			agenda: [],
			idName: ""
		},
		actions: {
			loadData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/PedroRD")
					.then(res => res.json())
					.then(data => setStore({ agenda: data }))

					.catch(err => console.log(err));
			},
			newContact: (contact, title, id = "", props) => {
				console.log(contact);

				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: title == "Update contact" ? "PUT" : "POST",
					body: JSON.stringify(contact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(respose => {
						if (respose.ok) {
							props.history.push("/");
						}
					})
					.catch(err => console.log(err));
			},
			deleteContact: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => console.log("Success:", JSON.stringify(response)))

					.catch(err => console.log(err));
			},
			setId: id => {
				const stateId = setStore();
				setStore({ ...stateId, idName: id });
			}
		}
	};
};

export default getState;

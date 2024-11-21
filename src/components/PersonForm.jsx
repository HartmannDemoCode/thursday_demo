const PersonForm = ({setPerson}) => {
    const url = "http://localhost:3000/api";

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const formData = new FormData(form);
    const entries = formData.entries();
    const formJson = Object.fromEntries(entries);
    console.log(formJson);
    console.log(JSON.stringify(formJson))
    delete formJson.id;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formJson)
        }).then((res)=>res.json())
        .then((data)=>{setPerson(data)});
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input name="id" id="1" type="number" readOnly placeholder="id" /><br />
        <label htmlFor="name">Name</label>
        <input name="name" id="name" type="text" placeholder="name" /><br />
        <label htmlFor="age">Age</label>
        <input name="age" id="age" type="number" min="1" max="120" placeholder="age" /><br />
        <label htmlFor="email">Email</label>
        <input name="email" id="email" type="email" placeholder="email" /><br />
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender">
          <option defaultChecked>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select><br />
        <button type="submit">Save Person</button>
      </form>
    </>
  );
};

export default PersonForm;
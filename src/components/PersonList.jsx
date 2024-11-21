const PersonList = ({persons, setPerson}) => {
    const url = 'http://localhost:3000/api';

    const handleDelete = (id) => {
        fetch(`${url}/${id}`, {
            method: 'DELETE',
        }).then((res)=>res.json()).then((data)=>setPerson(data));
    }
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person)=><tr key={person.id}><td>{person.id}</td>
          <td>{person.name}</td><td>{person.age}</td><td>{person.email}</td>
          <td>{person.gender}</td><td>
              <button>Edit</button>
              <button onClick={()=>handleDelete(person.id)}>Delete</button>
            </td></tr>)}
            
        </tbody>
      </table>
    </>
  );
};

export default PersonList;

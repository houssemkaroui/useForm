
import axios from 'axios'

const ListeUser = () => {
    return axios.get("http://localhost:5000/api/v1/users/listeUtilisateur");
  };
  
  const addUser = (data) => {
    return axios.post("http://localhost:5000/api/v1/users/addUtilisateur",data);
  };
  
  const Listeconger = () => {
    return axios.get("http://localhost:5000/api/v1/users/listeConger");
  };
  
  const addconger = (data) => {
    return axios.post("http://localhost:5000/api/v1/users/addConger",data);
  };
  const Listetache = () => {
    return axios.get("http://localhost:5000/api/v1/users/listeTache");
  };
  
  const addtache = (data) => {
    return axios.post("http://localhost:5000/api/v1/users/addTache",data);
  };

  const deleteuser = (id) => {
    return axios.delete("http://localhost:5000/api/v1/users/user/"+id);
  };

  const updateuser = (data,id) => {
    return axios.patch("http://localhost:5000/api/v1/users/user/"+id,data);
  };
export {
    ListeUser,
    addUser,
    Listeconger,
    addconger,
    Listetache,
    addtache,
    deleteuser,
    updateuser,
};
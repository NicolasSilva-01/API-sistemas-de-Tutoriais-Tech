import dados from "./../models/dados.js";
const {tutoriais} = dados;

const getAllTutoriais = (req, res) => {
    res.status(200).json({
      total: tutoriais.length,
      tutoriais: tutoriais,
    });
  };
  
 
  
  
  export { getAllTutoriais };
import dados from "./../models/dados.js";
const {tutoriais} = dados;

const getAllTutoriais = (req, res) => {
    res.status(200).json({
      total: tutoriais.length,
      tutoriais: tutoriais,
    });
  };

  const getTutorialById = (req, res) => {
    let id = parseInt(req.params.id);
  
    const tutorial = tutoriais.find((b) => b.id === id);
  
    res.status(200).json({
      sucess: true,
      tutorial: tutorial,

    });
  };

  const createTutorial = (req, res) => {
    const { titulo, tema, autor, dificuldade, duracao, plataforma, visualizacoes, atualizado } = req.body;
  
    if (!titulo || !tema) {
      return res.status(400).json({
        sucess: false,
        message: "titulo e tema são obrigatorios!!",
      });
    }

    const novoTutorial = {
        id: tutoriais.length + 1,
        titulo: titulo,
        tema: tema,
        autor: autor,
        dificuldade: dificuldade,
        duracao: duracao,
        plataforma: plataforma,
        visualizacoes: visualizacoes,
        atualizado: atualizado,
      };
    
      tutoriais.push(novoTutorial);
    
      res.status(201).json({
        sucess: true,
        message: "Tutorial cadastrado com sucesso!!",
        tutorial: novoTutorial
      });
    };

    const deleteTutorial = (req, res) => {
        let id = parseInt(req.params.id);
      
        const tutorialParaRemover = tutoriais.find((b) => b.id === id);
      
        if (!tutorialParaRemover) {
          return res.status(404).json({
            sucess: false,
            message: `Esse tutorial não existe, ${id}`,
          });
        }
      
        const tutoriaisFiltrados = tutoriais.filter((tutorial) => tutorial.id !== id);
      
        tutoriais.splice(0, tutoriais.length, ...tutoriaisFiltrados);
      
        res.status(200).json({
          sucess: true,
          message: "o personagem foi removido com sucesso",
          tutorialRemovido: tutorialParaRemover,
        });
      };

      const updateTutorial = (req, res) => {
        const id = parseInt(req.params.id);
      
        const {titulo, tema, autor, dificuldade, duracao, plataforma, visualizacoes, atualizado} = req.body;
      
        const idParaEditar = id;
      
        if(isNaN(idParaEditar)){
          return res.status(400).json({
            sucess: false,
            message: "O id deve ser um número válido!!!"
          })
        }
        const tutorialExiste = tutoriais.find(tutorial => tutorial.id === idParaEditar);
      
        if (!tutorialExiste) {
          return res.status(404).json({
            sucess: false,
            message: `tutorial com Id: ${id} não existe.`
          })
        }
      
        const tutoriaisAtualizados = tutoriais.map(tutorial => tutorial.id === idParaEditar ? {
          ...tutorial,
          ...(titulo && { titulo }),
          ...(tema && {  tema }),
          ...(visualizacoes && {  visualizacoes: parseInt(visualizacoes)}),
          ...(autor && { autor }),
          ...(duracao && { duracao }),
          ...(plataforma && {plataforma}),
          ...(atualizado && {atualizado}),
          ...(dificuldade && {dificuldade}),
        } : tutorial)
      
        tutoriais.splice(0, tutoriais.length, ...
          tutoriaisAtualizados);
      
          const tutorialNovo = tutoriais.find(tutorial => tutorial.id === idParaEditar);
      
          res.status(200).json({
            sucess: true,
            message: `Dados do tutorial ID ${idParaEditar} atualizados com sucesso!`,
            tutorial: tutorialNovo
          })
      
      }
  
 
  
  
  export { getAllTutoriais, getTutorialById, createTutorial, deleteTutorial, updateTutorial  };
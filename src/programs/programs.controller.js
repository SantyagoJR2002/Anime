const uuid = require('uuid')

const programsDB = [
  {
    "id": "88ebed0b-8095-4190-adde-d1165ca48815",
    "title": "Boku no hero academia",
    "description":
      "Las personas no nacen igual. El protagonista de esta historia es uno de esos casos raros que nacen sin superpoderes, pero esto no le impedirá perseguir su sueño: ser un gran héroe como el legendario All-Might. Para convertirse en el héroe que quiere ser, se apuntará a una de las academias de héroes más prestigiosas del país: Yueiko. Con la ayuda de su ídolo, All-Might, ¿podrá convertirse en un verdadero héroe?",
    "seasons": 4,
    "cover": "localhost:8000/uploads/animes/bnha-cover.jpg",
    "categories": ["Accion", "Comedia", "Escolares", "Shounen", "Superpoderes"],
	  "chapters": [{
      "id": "0868504c-436e-43a6-87b5-ea811326d416",
      "program_id": "88ebed0b-8095-4190-adde-d1165ca48815",
      "chapter_num": 1,
      "url": "localhost:8000/uploads/anime/chapters/bnha-1-1.mp4"
    },
    {
      "id": "d01ea354-a2f0-4115-95f2-2f0ae7acd948",
      "program_id": "88ebed0b-8095-4190-adde-d1165ca48815",
      "chapter_num": 2,
      "url": "localhost:8000/uploads/anime/chapters/bnha-1-2.mp4"
    },{
      "id": "0e18b6f3-fe8e-4a37-a28e-7a1248cc8642",
      "program_id": "88ebed0b-8095-4190-adde-d1165ca48815",
      "chapter_num": 3,
      "url": "localhost:8000/uploads/anime/chapters/bnha-1-3.mp4"
    },
    {
      "id": "1710acbf-e68e-40a9-ae7a-96717d23b928",
      "program_id": "88ebed0b-8095-4190-adde-d1165ca48815",
      "chapter_num": 4,
      "url": "localhost:8000/uploads/anime/chapters/bnha-1-4.mp4"
    },
    {
      "id": "1bc7e252-d559-4ff8-bb8c-ba1dbbab7d3c",
      "program_id": "88ebed0b-8095-4190-adde-d1165ca48815",
      "chapter_num": 5,
      "url": "localhost:8000/uploads/anime/chapters/bnha-1-5.mp4"
    },
    {
      "id": "1cc5e2c3-b2ec-4f5d-898e-8ba4b3562f66",
      "program_id": "88ebed0b-8095-4190-adde-d1165ca48815",
      "chapter_num": 6,
      "url": "localhost:8000/uploads/anime/chapters/bnha-1-6.mp4"
    },
    {
      "id": "bf3b3ded-61e7-4cd6-8f19-fa4e91417318",
      "program_id": "88ebed0b-8095-4190-adde-d1165ca48815",
      "chapter_num": 7,
      "url": "localhost:8000/uploads/anime/chapters/bnha-1-7.mp4"
    },
    {
      "id": "70a0ac38-9958-4e7e-9fe5-8a1c3a81e330",
      "program_id": "88ebed0b-8095-4190-adde-d1165ca48815",
      "chapter_num": 8,
      "url": "localhost:8000/uploads/anime/chapters/bnha-1-8.mp4"
    },
    {
      "id": "408aa7c9-a738-446d-9c9e-60268e0a46b6",
      "program_id": "88ebed0b-8095-4190-adde-d1165ca48815",
      "chapter_num": 9,
      "url": "localhost:8000/uploads/anime/chapters/bnha-1-9.mp4"
    },
    {
      "id": "8b5599f5-439a-4fea-aeeb-d1461d494131",
      "program_id": "88ebed0b-8095-4190-adde-d1165ca48815",
      "chapter_num": 10,
      "url": "localhost:8000/uploads/anime/chapters/bnha-1-10.mp4"
    },
    {
      "id": "b0bc8cfa-7e7a-455f-9640-683602dadbc2",
      "program_id": "88ebed0b-8095-4190-adde-d1165ca48815",
      "chapter_num": 11,
      "url": "localhost:8000/uploads/anime/chapters/bnha-1-11.mp4"
    },
    {
      "id": "3add99db-e954-432b-842d-d6c138ef3838",
      "program_id": "88ebed0b-8095-4190-adde-d1165ca48815",
      "chapter_num": 12,
      "url": "localhost:8000/uploads/anime/chapters/bnha-1-12.mp4"
    },
    {
      "id": "ad27f649-a255-47a2-b376-19b7d231a4ac",
      "program_id": "88ebed0b-8095-4190-adde-d1165ca48815",
      "chapter_num": 13,
      "url": "localhost:8000/uploads/anime/chapters/bnha-1-13.mp4"
    }
  ] 
	}
];

const getAllPrograms = () => {
  return programsDB;
};

const getProgramById = (id) => {
  const data = programsDB.filter((program) => program.id === id);
  
 return data.length ? data[0] : null
};

const createProgram = (data, program_id) => {
  const newProgram = {
    id: uuid.v4(),
    title: data.title,
    description: data.description,
    seasons: data.seasons,
    cover: data.cover,
    categories: data.categories,
  };
  programsDB.push(newProgram);
  return newProgram;
};

const deleteProgram = (id) => {
  const index = programsDB.findIndex((program) => program.id === id);
  if (index !== -1) {
    programsDB.slice(index, 1);
    return true;
  }
  return false;
};

const editProgram = (id, data) => {
  const index = programsDB.findIndex((program) => program.id === id);
  const editedProgram = {
    id: id,
    title: data.title ? data.title : programsDB[index].title,
    description: data.description ? data.description : programsDB[index].description,
    seasons: data.seasons ? data.seasons : programsDB[index].seasons,
    cover: data.cover ? data.cover : programsDB[index].cover,
    categories: data.categories ? data.categories : programsDB[index].categories,
  };
  if (index !== -1) {
    programsDB[index] = editedProgram;
    return programsDB[index];
  }
  return false;
};



//chapters



const getAllChapters = () => {
  return programsDB.data.chapters;
};

const getChaptersById = (id, idCh) => {
  const data = programsDB.filter((program) => program.id === id && program.chapters.id === idCh);
  return data.id === id ? data.chapters : false ;
};

const createChapters = (data, program_id) => {
  const newProgram = {
    chapters:{
      chapter_num: data.chapters.chapter_num,
      url: data.chapters.url
    }
  };
  programsDB.push(newProgram);
  return newProgram;
};

const deleteChapters = (id) => {
  const index = programsDB.findIndex((program) => program.chapters.id === id);
  if (index !== -1) {
    programsDB.slice(index, 1);
    return true;
  }
  return false;
};

const editChapters = (id, data) => {
  const index = programsDB.findIndex((program) => program.id === id);
  const editedChapter= {
   chapters:{
    id:id,
    chapter_num: data.chapters.chapter_num,
    url: data.chapters.url,
    program_id: data.chapters.program_id
   }
  };
  if (index !== -1) {
    programsDB[index] = editedChapter;
    return programsDB[index];
  }
  return false;
  
}
module.exports = {
  getAllPrograms,
  getProgramById,
  createProgram,
  deleteProgram,
  editProgram,
  getAllChapters,
  getChaptersById,
  createChapters,
  deleteChapters,
  editChapters
};

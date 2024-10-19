import React from 'react'
import { FlashCardArray} from "react-flashcards";

const flashcards = [
  { id: 1, front: "What is the powerhouse of the cell?", back: "Mitochondria" },
  { id: 2, front: "What is the process by which plants make their own food?", back: "Photosynthesis" },
  { id: 3, front: "What method in JavaScript is used to stop further propagation of an event during its execution?", back: "event.stopPropagation()" },
  { id: 4, front: "What does the acronym DOM stand for in web development?", back: "Document Object Model" },
  { id: 5, front: "Who developed the theory of evolution by natural selection?", back: "Charles Darwin" },
  { id: 6, front: "What is the term for a word that is similar in meaning to another word?", back: "Synonym" },

  { id: 7, front: "Which part of speech describes a noun or pronoun?", back: "Adjective" },
]


const Flatcard = () => {
  return (<>
<FlashCardArray
cards={flashcards}
width="600px"
// Other props..
/>
</>
  )
}

export default Flatcard

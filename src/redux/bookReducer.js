const initalState = {
    books: [
        {
            id:1,
            title:"the great gatsby",
            author:"A novel about the american dream, set in the 1920s that explores themes of wealth,classs abd love",
            rating:4.3,
            category:"friction"
        },
        {
            id:2,
            title:"1984",
            author:"george orwell",
            description:"A dystopian novel that  critooques totalitarianism and explores themes of survellence , propganda, and individual  amd explores themes of survellence,propagands ,and individual freedom",
            rating:4.7,
            category:"friction"
        },
        {
            id:3,
            title:"sapiens,A brief History of HumanKind",
            author:"Yuval nosh harari",
            description:"an  exploration of the history of humanity",
            rating:4.6,
            category:"non-friction"
        },{
            id:4,
            title:"Educated : A memoir",
            author:"Tara westover",
            description:"a memoir about a women who grow up in a history of humanity ,foorm the earliest days of homo sapiens to the  present and abusive household i",
              rating:4.5,
              category:"non-friction"
        },
        {
            id:5,
            title:"dune",
            author:"frank herbert",
            description:"a science fiction novel set in the future set on deset of Arrakis ,exploring politics ,who grow uup in a strict and abusive in rural idaho , and eventually escape to arrakis,exploring politics,religion and ecology",
           rating:4.8,
           category:"sci-fi"
        
        },
        {
          id:6,
          title:"Neuromancer",
          author:"willin gibson",
          description:"a novel that explores  inter intersection of artifical intelligence,cyberspace, and inteelligence , cyberspace, and cyberpunk culture",
          rating:4.3,
          category:"sci-fi"
        }
    ],
};

const bookReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {
                ...state,
                books: 
                [...state.books,
                {...action.payload}],
                
            };
            case 'REMOVE_BOOK':
                return{
                    ...state,
                    books: state.books.filter(book => book.id !== action.payload),
                };
               default:
                return state;
    }
};
export default bookReducer;
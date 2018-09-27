import { QUIZ_DATA, ADD_NEW, REMOVE_TECH } from '../Constants/AppConstants';


const initialState = {
    Low: [
        {
            id: 'L0',
            technologyId: 0,
            technology: '',
            type: '',
            numberOfQuestions: ''
        }
    ],
}
export default function QuizData(state = initialState, action) {
    switch (action.type) {
        case QUIZ_DATA:
            console.log("calling QUIZ_DATA");
            return {
                ...state,
                Low: action.data,
                error: false,
            }
        case ADD_NEW:
            return {
                ...state,
                Low: action.data,
                error: false,
            }
        case REMOVE_TECH:
            return {
                ...state,
                Low: action.data,
                error: false,
            }
        default:
            return state
    }
}
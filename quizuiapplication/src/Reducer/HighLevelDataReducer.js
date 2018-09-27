import { QUIZ_DATA_HIGH, ADD_NEW_HIGH, REMOVE_TECH_HIGH } from '../Constants/AppConstants';


const initialState = {
    High: [
        {
            id: 'H0',
            technologyId: 0,
            technology: '',
            type: '',
            numberOfQuestions: ''
        }
    ],
}
export default function HighLevel(state = initialState, action) {
    switch (action.type) {
        case QUIZ_DATA_HIGH:
            return {
                ...state,
                High: action.data,
                error: false,
            }
        case ADD_NEW_HIGH:
            return {
                ...state,
                High: action.data,
                error: false,
            }
        case REMOVE_TECH_HIGH:
            return {
                ...state,
                High: action.data,
                error: false,
            }
        default:
            return state
    }
}
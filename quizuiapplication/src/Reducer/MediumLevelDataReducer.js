import { QUIZ_DATA_MID, ADD_NEW_MID, REMOVE_TECH_MID } from '../Constants/AppConstants';


const initialState = {
    Medium: [
        {
            id: 'M0',
            technologyId: 0,
            technology: '',
            type: '',
            numberOfQuestions: ''
        }
    ],
}
export default function MediumLevel(state = initialState, action) {
    switch (action.type) {
        case QUIZ_DATA_MID:
            return {
                ...state,
                Medium: action.data,
                error: false,
            }
        case ADD_NEW_MID:
            return {
                ...state,
                Medium: action.data,
                error: false,
            }
        case REMOVE_TECH_MID:
            return {
                ...state,
                Medium: action.data,
                error: false,
            }
        default:
            return state
    }
}
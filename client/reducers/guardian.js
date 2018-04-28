import {RECEIVE_ARTICLES} from '../actions'

function articles (state = [], action) {
    switch (action.type) {
        case RECEIVE_ARTICLES:
        return action.articles
    
        default: 
            return state
    }
}

export default articles


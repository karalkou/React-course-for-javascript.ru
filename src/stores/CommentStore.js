import AppDispatcher from '../Dispatcher'

import Store from './Store'
import { ADD_NEW_COMMENT, DELETE_COMMENT } from '../actions/constants'

class ArticleStore extends Store {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case ADD_NEW_COMMENT:
                    this.add(Object.assign({
                        id: this.getIncrementalId(),
                        text: ''
                    },data))

                    break;
                case DELETE_COMMENT:
                    this.delete(data.id)
            }
        })
    }
}

export default ArticleStore
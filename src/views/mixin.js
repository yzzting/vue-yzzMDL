import docItem from '../components/index.js';
import Prism from '../prism.js';
export default {
    docView:{
        components: {
            'com-item':docItem.item,
            'com-code':docItem.code,
            'com-title':docItem.title,
            'com-content':docItem.content
        }
    },
    hasCode:{
        ready(){
            Prism.highlightAll();
        }
    }
}

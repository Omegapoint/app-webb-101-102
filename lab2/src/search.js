import findKey from 'lodash/findKey';

const dataBlob = {
    kitten: [
        "http://i.giphy.com/3oriO0OEd9QIDdllqo.gif",
        "http://i.giphy.com/iNMz8LF8y3g4.gif",
        "http://i.giphy.com/OmK8lulOMQ9XO.gif",
        "http://i.giphy.com/11s7Ke7jcNxCHS.gif",
        "http://i.giphy.com/IcXFEz3QvEmpG.gif",
        "http://i.giphy.com/yFQ0ywscgobJK.gif"
    ],
    puppy: [
        "http://i.giphy.com/dp7QYhsdgN2Yo.gif",
        "http://i.giphy.com/iNMz8LF8y3g4.gif",
        "http://i.giphy.com/cdTUkj59dLFmg.gif"
    ],
    bunny: [
        "http://i.giphy.com/10xUg8DdgQSs9i.gif",
        "http://i.giphy.com/TT86traJyZRzq.gif",
        "http://i.giphy.com/SeM5SGt3LLKRq.gif",
        "http://i.giphy.com/871qwDxfSemEE.gif"
    ]
};

/**
 * Event is the event generated by the keyup listener in index.js.
 * It then calls performSearch which in turn performs the actual search operation.
 * OBS: You should not have to change this function.
 * @param event
 */
function search(event) {
    const value = event.target.value;
    performSearch(value).then(searchResult => {
        if (searchResult.length > 0) {
            const resultNode = document.querySelector('#results');
            resultNode.innerHTML = "";
            const listHTML = searchResult.map(result => `<li><img class='img-thumbnail' src=${result} /></li>`)
                .forEach(result => resultNode.innerHTML += result);
        }
    });
}

/**
 * This is a private function, not visible outside this module/file.
 * You may need to change this one ;)
 * @param searchTerm
 * @returns {Promise}
 */
function performSearch(searchTerm = '') {
    const findKeyFromDataBlob = findKey(dataBlob, (item, index) => index === searchTerm);
    // since our final application uses fetch api and promises
    // we use promises here to keep the same interface for all the helper functions
    return new Promise((resolve, reject) => {
        if (findKeyFromDataBlob) {
            resolve(dataBlob[findKeyFromDataBlob]);
        }
        resolve([]);
    })
}

// This is the API we export.
// What's the difference between named and unnamed exports?
export {
    search
};

function init(){
    const data = ['first', 'second', 'third', ['fourth-one', 'fourth-two'], ['fifth-one', 'fifth-two']];
    const container = document.getElementById('container');
    const select  = document.createElement('select');
            
    const selectName = document.createElement('option')
    selectName.setAttribute('value', '');
    selectName.textContent = 'Choose';
    select.appendChild(selectName);

    container.appendChild(select);

    for (const element of data){
        if (Array.isArray(element)){
            appendArrayOptions(select, element);
            continue;
        }
                
        appendOption(select, element);
    }
}

function appendArrayOptions(parent, data){
    const select  = document.createElement('optgroup');
    select.setAttribute('label', 'Choose');

    for (const element of data){
        if (Array.isArray(element)){
            appendArrayOptions(select, element);
            continue;
        }

        appendOption(select, element);
    }
    parent.appendChild(select);
}

function appendOption(parent, data){
    const option = document.createElement('option');
    option.setAttribute('value', data);
    option.textContent = `${data}`;
    parent.appendChild(option);
}


(function(){
    const data = ['first', 'second', 'third', ['fourth-one', 'fourth-two']];

    const container = document.getElementById('container');


    function init(container){
        const select  = document.createElement('select');
        container.appendChild(select);
    }
    console.log(container)
    init(container);
})();
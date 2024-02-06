const searchBox = document.getElementById('searchbox');
function showSearchbox(){
    if(searchBox.className == 'searchbox'){
        searchBox.className += ' show-searchbox'
    }
    else{
        searchBox.className = 'searchbox'
    }
}

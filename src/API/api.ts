
const API_BASE='https://youtube-v31.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		'X-RapidAPI-Key': 'be559cde00mshf65d71a37883b15p17a4d6jsn7da1d0f93b55'
	}
};



const getMoreDetails=(details:string, state:any)=>{
    fetch(`${API_BASE}videos?part=contentDetails%2Csnippet%2Cstatistics&id=${details}`, options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data.items
        })
        .then(state)
        .catch(err => console.error(err));
}

const searcVideos=(video:string,state:any)=>{
    fetch(`${API_BASE}search?q=${video}&part=snippet%2Cid&regionCode=US&maxResults=50&order=viewCount`, options)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        return data.items
        
    })
    .then(state)
    .catch(err => console.error(err));
}



export {searcVideos, getMoreDetails}

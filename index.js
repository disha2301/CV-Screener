console.log("This is my CV Screener Project");
//Data is an array of objects which contains information about the candidates
const data = [
    {
        name :'Rohan Das',
        age : 18,
        city : 'Kolkata',
        language : 'Python',
        framework : 'Django',
        image :'https://randomuser.me/api/portraits/men/9.jpg'
    },

    {
        name :'Dysha Roberts',
        age : 18,
        city : 'California',
        language : 'Java',
        framework : 'Angular',
        image :'https://randomuser.me/api/portraits/women/17.jpg'
    },

    {
        name :'Rahul Singh',
        age : 20,
        city : 'LA',
        language : 'C++',
        framework : 'Flask',
        image :'https://randomuser.me/api/portraits/men/18.jpg'
    },

    {
        name :'Harsh Gopal',
        age : 23,
        city : 'New Delhi',
        language : 'NodeJs',
        framework : 'Go FrameWork',
        image :'https://randomuser.me/api/portraits/men/34.jpg'
    },

    {
        name :'Rosy David',
        age : 30,
        city : 'New York',
        language : 'Java',
        framework : 'Foreign FrameWork',
        image :'https://randomuser.me/api/portraits/women/44.jpg'
    },

    {
        name :'Richard Parker',
        age : 35,
        city : 'Mexico',
        language : 'React',
        framework : '2D WireFrame',
        image :'https://randomuser.me/api/portraits/men/78.jpg'
    },
]

//CV Iterator
function CvIterator(profiles){
    let nextIndex = 0;
    return{
        next: function(){
            return nextIndex<profiles.length ? 
            {value: profiles[nextIndex++], done:false} : 
            {done : true}
        }
    }
}


//button listener for next button
const next = document.getElementById('next');
next.addEventListener('click',nextCV);

const candidates = CvIterator(data);

nextCV();

function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src = '${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('End of candidate aplications');
        window.location.reload();
    }
}
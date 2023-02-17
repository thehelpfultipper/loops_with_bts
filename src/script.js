// Doc elements
const grid = document.querySelector('#grid');

// Image path
const domain = 'https://thehelpfultipper.github.io/loops_with_bts/img/';

// Create object instance => { [] }
const BTS = [
  {
    name: 'Jung Kook',
    main: 'Main Vocals',
    url: domain + 'jungkook_bts.PNG'
  },
  {
    name: 'V',
    main: 'Vocals',
    url: domain + 'v_bts.PNG'
  },
  {
    name: 'Jimin',
    main: 'Lead Vocals',
    url: domain + 'jimin_bts.PNG'
  },
  {
    name: 'SUGA', 
    main: 'Main Rapper',
    url: domain + 'suga_bts.PNG'
  },
  {
    name: 'Jin',
    main: 'Vocals',
    url: domain + 'jin_bts.PNG'
  },
  {
    name: 'RM',
    main: 'Rapper',
    url: domain + 'rm_bts.PNG'
  },
  {
    name: 'j-hope',
    main: 'Rapper',
    url: domain + 'jhope_bts.PNG'
  }  
];

// Generate BTS member grid cards
for( let i = 0; i < BTS.length; i++ ) {
  // Create div elements
  let divCard = document.createElement('div'),
      divInner = document.createElement('div'),
      divFront = document.createElement('div'),
      divBack = document.createElement('div'),
      img = document.createElement('img'),
      memberInfo = document.createElement('div'),
      name = document.createElement('p'),
      main = document.createElement('p');
  
  // Assign class(es) to divs
  memberInfo.setAttribute('class', 'member-info');
  name.setAttribute('class', 'member-name');
  main.setAttribute('class', 'member-main');
  divCard.setAttribute('class', 'member');
  divInner.setAttribute('class', 'flip-card-inner');
  divFront.setAttribute('class', 'flip-card-front');
  divBack.setAttribute('class', 'flip-card-back');
  img.setAttribute('src', BTS[i].url);
  img.setAttribute('class', 'member-img');
  name.innerHTML = BTS[i].name;
  main.innerHTML = BTS[i].main;
    
  // Nest divs under respective parents
  divFront.appendChild(img);
  memberInfo.appendChild(main);
  memberInfo.appendChild(name);
  divBack.appendChild(memberInfo); 
  divInner.appendChild(divFront);
  divInner.appendChild(divBack);
  divCard.appendChild(divInner);
  grid.appendChild(divCard);
}


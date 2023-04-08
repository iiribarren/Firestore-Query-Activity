// TASK 1

let team1 = {
    'team name': 'Real Madrid',
    city: 'Madrid',
    country: 'Spain',
    'top scorers': ['Ronaldo', 'Benzema', 'Hazard'],
    'worldwide fans (in millions)': 798
};

let team2 = {
    'team name': 'Barcelona',
    city: 'Barcelona',
    'country': 'Spain',
    'top scorers': ['Messi', 'Suarez', 'Puyol'],
    'worldwide fans (in millions)': 738
};

let team3 = {
    'team name': 'Manchester United',
    city: 'Manchester',
    country: 'England',
    'top scorers': ['Cantona', 'Rooney', 'Ronaldo'],
    'worldwide fans (in millions)': 755
};
let team4 = {
    'team name': 'Manchester City',
    city: 'Manchester',
    country: 'England',
    'top scorers': ['Sterling', 'Aguero', 'Haaland'],
    'worldwide fans (in millions)': 537
};

let team5 = {
    'team name': 'Brazil National Team',
    city: 'Not applicable',
    country: 'Brazil',
    'top scorers': ['Ronaldinho', 'Cafu', 'Bebeto'],
    'worldwide fans (in millions)': 950
};

let team6 = {
    'team name': 'Argentina National Team',
    city: 'Not applicable',
    country: 'Argentina',
    'top scorers': ['Messi', 'Batistuta', 'Maradona'],
    'worldwide fans (in millions)': 888
};

let team7 = {
    'team name': 'Atletico Madrid',
    city: 'Madrid',
    country: 'Spain',
    'top scorers': ['Aragonés', 'Griezmann', 'Torez'],
    'worldwide fans (in millions)': 400
};


// store the objects

db.collection('teams').doc('realmadrid').set(team1);
db.collection('teams').doc('barcelona').set(team2);
db.collection('teams').doc('manchester_united').set(team3);
db.collection('teams').doc('mancester_city').set(team4);
db.collection('teams').doc('brazil').set(team5);
db.collection('teams').doc('argentina').set(team6);
db.collection('teams').doc('atletico_madrid').set(team7);




// TASK 2
// Q1
db.collection('teams').where('country', '==', 'Spain').get().then((response) => {
    let docs = response.docs;
    html = '<h1>Task 2</h1><h3>Q1</h3>';
    let q1 = document.querySelector('#q1');
    // loop through the docs
    docs.forEach((doc) => {
        html += `<p>- ${doc.data()['team name']}</p>`
        q1.innerHTML = html;
        // console.log(doc.data()['team name'])
    })
});

// Q2
db.collection('teams').where('country', '==', 'Spain').where('city', '==', 'Madrid').get().then((response) => {
    let docs = response.docs;
    html = '<h3>Q2</h3>';
    let q2 = document.querySelector('#q2');
    // loop through the docs
    docs.forEach((doc) => {
        html += `<p>- ${doc.data()['team name']}</p>`
        q2.innerHTML = html;
        // console.log(doc.data()['team name'])
    })
});

// Q3
db.collection('teams').where('city', '==', 'Not applicable').get().then((response) => {
    let docs = response.docs;
    html = '<h3>Q3</h3>';
    let q3 = document.querySelector('#q3');
    // loop through the docs
    docs.forEach((doc) => {
        html += `<p>- ${doc.data()['team name']}</p>`
        q3.innerHTML = html;
        // console.log(doc.data()['team name'])
    })
});

// Q4
db.collection('teams').where('country', '!=', 'Spain').get().then((response) => {
    let docs = response.docs;
    html = '<h3>Q4</h3>';
    let q4 = document.querySelector('#q4');
    // loop through the docs
    docs.forEach((doc) => {
        html += `<p>- ${doc.data()['team name']}</p>`
        q4.innerHTML = html;
        // console.log(doc.data()['team name'])
    })
});

// Q5
db.collection('teams').where('country', 'not-in', ['Spain', 'England']).get().then((response) => {
    let docs = response.docs;
    html = '<h3>Q5</h3>';
    let q5 = document.querySelector('#q5');
    // loop through the docs
    docs.forEach((doc) => {
        html += `<p>- ${doc.data()['team name']}</p>`
        q5.innerHTML = html;
        // console.log(doc.data()['team name'])
    })
});

// Q6
db.collection('teams').where('worldwide fans (in millions)', '>', 700).get().then((response) => {
    let docs = response.docs;
    html = '<h3>Q6</h3>';
    let q6 = document.querySelector('#q6');
    // loop through the docs
    docs.forEach((doc) => {
        html += `<p>- ${doc.data()['team name']}</p>`
        q6.innerHTML = html;
        // console.log(doc.data()['team name'])
    })
});

// Q7
db.collection('teams').where('worldwide fans (in millions)', '>', 500).where('worldwide fans (in millions)', '<', 600).get().then((response) => {
    let docs = response.docs;
    html = '<h3>Q7</h3>';
    let q7 = document.querySelector('#q7');
    // loop through the docs
    docs.forEach((doc) => {
        html += `<p>- ${doc.data()['team name']}</p>`
        q7.innerHTML = html;
        // console.log(doc.data()['team name'])
    })
});

// Q8
db.collection('teams').where('top scorers', 'array-contains', 'Ronaldo').get().then((response) => {
    let docs = response.docs;
    html = '<h3>Q8</h3>';
    let q8 = document.querySelector('#q8');
    // loop through the docs
    docs.forEach((doc) => {
        html += `<p>- ${doc.data()['team name']}</p>`
        q8.innerHTML = html;
        // console.log(doc.data()['team name'])
    })
});

// Q9
db.collection('teams').where('top scorers', 'array-contains-any', ['Ronaldo', 'Maradona', 'Messi']).get().then((response) => {
    let docs = response.docs;
    html = '<h3>Q9</h3>';
    let q9 = document.querySelector('#q9');
    // loop through the docs
    docs.forEach((doc) => {
        html += `<p>- ${doc.data()['team name']}</p>`
        q9.innerHTML = html;
        // console.log(doc.data()['team name'])
    })
});


// TASK 3

// a)
db.collection('teams').doc('realmadrid').update({
    'worldwide fans (in millions)': 811,
    'team name': 'Real Madrid FC',
    'top scorers': firebase.firestore.FieldValue.arrayRemove('Hazard'),
});

db.collection('teams').doc('barcelona').update({
    'worldwide fans (in millions)': 747,
    'team name': 'FC Barcelona',
    'top scorers': firebase.firestore.FieldValue.arrayRemove('Puyol'),
});

db.collection('teams').doc('realmadrid').update({
    'top scorers': firebase.firestore.FieldValue.arrayUnion('Crispo'),
});

db.collection('teams').doc('barcelona').update({
    'top scorers': firebase.firestore.FieldValue.arrayUnion('Deco'),
});


// b)
db.collection('teams').doc('realmadrid').update({
    color: {
        home: 'White',
        away: 'Black'
    }
});
db.collection('teams').doc('barcelona').update({
    color: {
        home: 'Red',
        away: 'Gold'
    }
});

// c)
db.collection('teams').doc('realmadrid').update({
    'color.away': 'Purple'
});

// d)
db.collection('teams').doc('barcelona').update({
    'color.away': 'Pink'
});
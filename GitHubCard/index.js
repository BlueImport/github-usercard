

const createGithubCard = (user) => {
  const card = document.createElement('div');
  card.className = 'card';

  const cardImage = document.createElement('img');
  cardImage.src = user.data.avatar_url;
  card.appendChild(cardImage);

  const cardInfo = document.createElement('div');
  cardInfo.className = 'card-info';
  card.appendChild(cardInfo);

  const name = document.createElement('h3');
  name.className = 'name';
  name.textContent = user.data.name;
  cardInfo.appendChild(name);

  const userName = document.createElement('p');
  userName.className = 'username';
  userName.textContent = user.data.login;
  cardInfo.appendChild(userName);

  if (user.data.location) {
    const location = document.createElement('p');
    location.textContent = `Location: ${user.data.location}`;
    cardInfo.appendChild(location);
  }

  const profile = document.createElement('p');
  profile.textContent = 'Profile: ';
  cardInfo.appendChild(profile);

  const profileLink = document.createElement('a');
  profileLink.href = user.data.html_url;
  profileLink.textContent = user.data.html_url;
  profile.appendChild(profileLink);

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${user.data.followers}`;
  cardInfo.appendChild(followers);

  const following = document.createElement('p');
  following.textContent = `Following: ${user.data.following}`;
  cardInfo.appendChild(following);

  if (user.data.bio) {
    const bio = document.createElement('p');
    bio.textContent = `Bio: ${user.data.bio}`;
    cardInfo.appendChild(bio);
  }

  document.querySelector('.cards').appendChild(card);
};

axios.get('https://api.github.com/users/BlueImport')
  .then ((result) => {
    createGithubCard(result);
  })

  .catch ((error) => {
    console.log(error);
  });

  const followersArray = [
    'EricFerguson76',
    'TinySquid',
    'ndacode',
    'Lfritze',
    'VivaCode',
  ];

  followersArray.forEach((user) => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(((result) => {
      createGithubCard(result);
    }))
    .catch((error) => {
      console.log(error);
    });
  });

function username_get() {
  return prompt("Informe o nome do usuário no GITHUB");
}

async function request_user(username) {
  const endpoint = `https://api.github.com/users/${username}`;

  try {
    const response = await fetch(endpoint, { method: "GET" });
    if (response.ok) {
      const json = await response.json();
      return json;
    }

    throw ({
      avatar_url: "https://via.placeholder.com/180x180",
      name: "Error",
      login: "Error",
      public_repos: 0,
      followers: 0,
      following: 0,
      html_url: "https://github.com/",
    });
  } catch (error) {
    return error;
  }
}

async function set_fields() {
  // API constants
  const username = username_get();
  const data = await request_user(username);

  // DOM elements
  const AVATAR = $(".profile-avatar")[0];
  const NAME = $(".profile-name")[0];
  const USERNAME = $(".profile-username")[0];
  const REPOS = $(".numbers-item").find(".number")[0];
  const FOLLOWERS = $(".numbers-item").find(".number")[1];
  const FOLLOWING = $(".numbers-item").find(".number")[2];
  const BTN_SEE_IN_GITHUB = $(".profile-link");

  // POPULATING THE FIELDS
  $(AVATAR).attr("src", data.avatar_url);
  $(NAME).text(data.name);
  $(USERNAME).text(`@${data.login}`);
  $(REPOS).text(data.public_repos);
  $(FOLLOWERS).text(data.followers);
  $(FOLLOWING).text(data.following);
  $(BTN_SEE_IN_GITHUB).attr("href", data.html_url);
}

set_fields();

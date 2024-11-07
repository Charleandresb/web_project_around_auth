const BASE_URL = "https://tripleten.desarrollointerno.com/";

export async function register(email, password) {
  try {
    const response = await fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.log("error al registrar", err);
  }
}

export async function login(email, password) {
  const response = await fetch("http://localhost:3000/users/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (!response.ok) {
    throw new Error("no se ha proporcionado uno o más campos");
  }

  const data = await response.json();
  localStorage.setItem("jwt", data.token);
  return data;
}

export async function checkToken(token) {
  const response = await fetch("http://localhost:3000/users/userinfo", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("token inválido");
  }

  const data = response.json();
  return data;
}

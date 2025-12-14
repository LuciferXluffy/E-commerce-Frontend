const BASE_URL = "http://localhost:8082/v1/api";

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new error(error || "Registraton Failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Register error:", error.message);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if(!response.ok) {
      const error = await response.text();
      throw new error(error || "Login Failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};

const LOGIN_URL = "https://staging.fastor.ai/v1/pwa/user/login";
const RESTAURANT_URL =
  "https://staging.fastor.ai/v1/m/restaurant?city_id=118";

export const sendOtp = async (phone: string) => {
  const body = new URLSearchParams();
  body.append("phone", phone);

  const res = await fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.message || "OTP failed");

  return data;
};

export const verifyOtp = async (phone: string, otp: string) => {
  const body = new URLSearchParams();
  body.append("phone", phone);
  body.append("otp", otp);

  const res = await fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.message || "OTP verification failed");

  return data;
};

export const fetchRestaurants = async (token: string) => {
  const res = await fetch(
            RESTAURANT_URL,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const json = await res.json();

  if (!res.ok) {
    throw new Error("Failed to load restaurants");
  }

  return json.data.results;
};


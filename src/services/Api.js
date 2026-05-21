import axios from "axios";

const API_URL =
  "https://script.google.com/macros/s/AKfycbwO6HHqYqYIimfkfUNH8xz4I1pN_0NCh0xLBwzxO9n61sOPjckGL2xCFyvd8m6-Z-4/exec";


async function postData(data) {

  const formData =
    new URLSearchParams();

  for (const key in data) {

    formData.append(
      key,
      data[key]
    );
  }

  const response =
    await fetch(API_URL, {

      method: "POST",

      body: formData,

    });

  return await response.json();
}

// LOGIN
export const loginStudent = (
  username,
  password
) => {

  return postData({

    action: "login",

    username,

    password,

  });
};

// DASHBOARD
export const getDashboardData = (
  username
) => {

  return postData({

    action: "getDashboard",

    username,

  });
};

// ATTENDANCE
export const getAttendance = (
  username
) => {

  return postData({
    action: "getAttendance",
    username,
  });
};

// LECTURES
export const getLectures = () => {

  return postData({
    action: "getLectures",
  });
};

// PROJECTS
export const getProjects = (
  username
) => {

  return postData({
    action: "getProjects",
    username,
  });
};

// CERTIFICATES
export const getCertificates = (
  username
) => {

  return postData({
    action: "getCertificates",
    username,
  });
};
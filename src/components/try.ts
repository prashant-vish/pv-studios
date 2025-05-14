async function f() {
  try {
    const response = await fetch(
      "https://youtube-v31.p.rapidapi.com/search?part=snippet&order=date&q=music",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "7c3a3df4a5msh548f42319ac7166p11ba78jsn8eedcb3ca395",
          "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
        },
      }
    );

    if (response.ok) {
      const result = await response.json();
      console.log(result);
    }
  } catch (err) {
    console.error(err);
  }
}

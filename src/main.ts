import './style.css'


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("dataForm") as HTMLFormElement;
  const responseText = document.getElementById("response") as HTMLElement;

  form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const email = (document.getElementById("email") as HTMLInputElement).value;
      const password = (document.getElementById("password") as HTMLInputElement).value;

      try {
          const response = await fetch("http://localhost:3000/api/data", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, password }),
          });

          const result = await response.json();
          responseText.innerText = `Réponse du serveur : ${JSON.stringify(result)}`;
      } catch (error) {
          responseText.innerText = "Erreur lors de l'envoi des données.";
      }
  });
});

import { FormData } from "../contact/page";

export async function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const responseContent = await response.json();
    alert(responseContent.message);
  } catch (error) {
    console.error(error);
  }
}

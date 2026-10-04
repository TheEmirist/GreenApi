const apiUrl = "https://7201.api.green-api.com";

const idInstanceInput = document.getElementById("idInstance");
const apiTokenInput = document.getElementById("apiTokenInstance");
const phoneMessageInput = document.getElementById("phoneMessage");
const messageTextInput = document.getElementById("messageText");
const phoneFileInput = document.getElementById("phoneFile");
const fileUrlInput = document.getElementById("fileUrl");

const btnGetSettings = document.getElementById("btnGetSettings");
const btnGetStateInstance = document.getElementById("btnGetStateInstance");
const btnSendMessage = document.getElementById("btnSendMessage");
const btnSendFileByUrl = document.getElementById("btnSendFileByUrl");

const responseOutput = document.getElementById("responseOutput");

function getCredentials() {
  const idInstance = idInstanceInput.value.trim();
  const apiTokenInstance = apiTokenInput.value.trim();

  if (!idInstance || !apiTokenInstance) {
    throw new Error("Заполните idInstance и apiTokenInstance");
  }

  return { idInstance, apiTokenInstance };
}

function buildUrl(method) {
  const { idInstance, apiTokenInstance } = getCredentials();
  return `${apiUrl}/waInstance${idInstance}/${method}/${apiTokenInstance}`;
}

btnGetSettings.addEventListener("click", async () => {
  try {
    const url = buildUrl("getSettings");
    const response = await fetch(url);
    const data = await response.json();

    responseOutput.value = JSON.stringify(data, null, 2);
  } catch (error) {
    responseOutput.value = String(error);
  }
});

btnGetStateInstance.addEventListener("click", async () => {
  try {
    const url = buildUrl("getStateInstance");
    const response = await fetch(url);
    const data = await response.json();

    responseOutput.value = JSON.stringify(data, null, 2);
  } catch (error) {
    responseOutput.value = String(error);
  }
});

btnSendMessage.addEventListener("click", async () => {
  try {
    const phone = phoneMessageInput.value.trim();
    const message = messageTextInput.value.trim();

    if (!phone || !message) {
      throw new Error("Заполните телефон и текст сообщения");
    }

    const url = buildUrl("sendMessage");

    const body = {
      chatId: `${phone}@c.us`,
      message: message,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    responseOutput.value = JSON.stringify(data, null, 2);
  } catch (error) {
    responseOutput.value = String(error);
  }
});

btnSendFileByUrl.addEventListener("click", async () => {
  try {
    const phone = phoneFileInput.value.trim();
    const urlFile = fileUrlInput.value.trim();

    if (!phone || !urlFile) {
      throw new Error("Заполните телефон и URL файла");
    }

    const url = buildUrl("sendFileByUrl");

    const fileName = urlFile.split("/").pop() || "file.png";

    const body = {
      chatId: `${phone}@c.us`,
      urlFile: urlFile,
      fileName: fileName,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    responseOutput.value = JSON.stringify(data, null, 2);
  } catch (error) {
    responseOutput.value = String(error);
  }
});
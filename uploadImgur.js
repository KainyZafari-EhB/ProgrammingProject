export async function uploadToImgur(blob) {
    const clientId = 'b78a50342dbc6bd'; // Imgur Client-ID
  
    const formData = new FormData();
    formData.append('image', blob);
  
    const response = await fetch('https://api.imgur.com/3/image', {
      method: 'POST',
      headers: {
        Authorization: `Client-ID ${clientId}`,
      },
      body: formData,
    });
  
    const json = await response.json();
  
    if (json.success) {
      return json.data.link;
    } else {
      throw new Error('Upload naar Imgur mislukt');
    }
  }
  
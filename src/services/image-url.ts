const cropImage = (url: string) => {
  const index = url.indexOf("media/") + 'media/'.length;  // /media.length =6
  console.log(url);
  
  console.log(url.slice(0, index) + "crop/600/400/" + url.slice(index));
  
  return url;
};
export default cropImage;

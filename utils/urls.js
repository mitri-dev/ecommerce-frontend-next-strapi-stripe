export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const GOOGLE_CLIENT_ID = '949149514231-6onc876li9s6fmkstvb1v41fne8al6o8.apps.googleusercontent.com'

/**
 * Given an img retuns the Url
 * Works for local and deployed strapis
 * @param {any} img 
 */
export const fromImgToUrl = (img) => {
  // No img default
  if(!img) {
    return '/mitri.svg'
  }

  // If img has a relative path
  if(img.url.indexOf('/') === 0) {
    let array = img.url.split('/')
    array[2] = 'thumbnail_'+img.url.split('/')[2]
    let result = array.join('/')
    return `${API_URL}${result}`
  }

  return img.url
}
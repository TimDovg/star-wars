import axios from 'axios'

export const getDigitsFromString = url => url && url.replace(/\D/g, '')
export const addSpacesToNumber = num => String(num).trim().split('').reverse().join('').replace(/\d{3}/g, m => `${m} `).split('').reverse().join('').trim()
// fixed firebase Mixed Content bug (http -> https)
export const promisifyURLS = urls => urls.map(url => axios(url.replace(/^http/, 'https')))

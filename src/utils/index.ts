import CryptoJS from 'crypto-js'

export const aesUtil = {
  encrypt: function (t: string, r: string) {
    const p = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(t),
      CryptoJS.enc.Utf8.parse(r),
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      },
    )
    return p.toString()
  },
  decrypt: function (t: string, r: string) {
    // eslint-disable-next-line prefer-const
    let p = CryptoJS.AES.decrypt(t, CryptoJS.enc.Utf8.parse(r), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }),
      e = CryptoJS.enc.Utf8.stringify(p).toString()
    return (
      ('{' !== e.charAt(0) && '[' !== e.charAt(0)) || (e = JSON.parse(e)), e
    )
  },
}

export * from './constants'

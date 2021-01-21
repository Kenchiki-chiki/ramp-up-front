// ランダムでemailとpassword,password_confirmationを自動生成し、this.userにセットする処理
let password_base = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function genPassword(length = 20)
{
  console.log('===1===')
  let password = '';
  for (let i = 0; i < length; i++) {
    password += password_base.charAt(Math.floor(Math.random() * password_base.length));
  }
  console.log('===2===')
  console.log(password)
  return password;
}
// console.log(password)

export default { genPassword }

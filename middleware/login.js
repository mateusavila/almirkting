export default function ({ redirect }) {
  // é uma middleware bem zuada
  const token = window.localStorage.getItem('token')
  if (token !== 'tokenDeSegurançaDaCIA') {
    return redirect('/status')
  } 
}

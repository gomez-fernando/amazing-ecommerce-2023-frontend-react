export const getError = (error) => {
  console.log(error.response.request.status)
  return error.response?.request?.status === 500
    ? 'Se ha producido un error. Vuelva a intentarlo más tarde.'
    : error.response && error.response.data.message
      ? error.response.data.message
      : error.message

}
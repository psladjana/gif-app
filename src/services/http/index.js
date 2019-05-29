
export function responseTransformer(response) {
  return response ? response.data : null;
}

export function errorHandler(error) {
  return error.response;
}

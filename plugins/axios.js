export default function ({ $axios, redirect }) {
  $axios.onResponseError(error => {
    if (error.response.status === 401) {
      redirect('/login')
    }
    if (error.response.status === 403) {
      console.error("Error with code 403 - access to the requested resource is forbidden. The server understood the request, but will not fulfill it. Maybe you don't have needed access rights for get this resource");
    }
  });
}

export const getAuthToken = () => {
	const currentUserDetails = localStorage.getItem('currentUser');
  if (!currentUserDetails){
    return null;
	}
  return currentUserDetails;
}

export const isAuthenticated = () => {
	return getAuthToken() === null ? false : true;
}

const logoutService = () => {
    localStorage.removeItem('token'); 
};

export { logoutService };
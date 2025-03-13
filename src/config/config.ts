//We can transform the environment variables into a configuration object that can be used throughout the application. 
// This is a good practice because it centralizes the configuration and makes it easier to change it in the future. 

export default {
    API_URL: import.meta.env.VITE_API_URL.toUpperCase(), //Sanitized env variable
    API_ORGANIZATION: import.meta.env.VITE_API_ORGANIZATION//Sanitized env variable
}
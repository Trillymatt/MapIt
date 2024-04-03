import { signIn } from './aws-amplify/auth';

async function handleSignIn(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('signInUsername').value;
    const password = document.getElementById('signInPassword').value;

    try {
        const user = await signIn({
            username,
            password
        });

        console.log("Sign in successful:", user);
        // Redirect or perform any action after successful sign-in
    } catch (error) {
        console.error('Error signing in:', error);
        alert("Error signing in. Please check your credentials and try again.");
    }
}

document.getElementById('signInForm').addEventListener('submit', handleSignIn);

import { signUp } from './aws-amplify/auth';

async function handleSignUp(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validate passwords
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const { user } = await signUp({
      username,
      password,
      attributes: {
        // You can add more attributes here if needed
      }
    });

    console.log("Sign up successful:", user);
    // Redirect or perform any action after successful signup
  } catch (error) {
    console.error('Error signing up:', error);
    alert("Error signing up. Please try again.");
  }
}

document.getElementById('registrationForm').addEventListener('submit', handleSignUp);

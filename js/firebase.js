<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBzGqJdJh_np9NQabOWwF-R7iNg661r7iI",
    authDomain: "learning-outcome-analytics.firebaseapp.com",
    projectId: "learning-outcome-analytics",
    storageBucket: "learning-outcome-analytics.firebasestorage.app",
    messagingSenderId: "517416070222",
    appId: "1:517416070222:web:fd5afdd44e9ddc3be6671f",
    measurementId: "G-KQJWJ4NTE8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

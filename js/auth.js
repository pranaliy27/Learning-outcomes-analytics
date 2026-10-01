```javascript
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

import {
    doc,
    setDoc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

import {
    auth,
    db
} from "./firebase.js";

let selectedRole = "student";


window.openLogin = function(role) {

    selectedRole = role;

    document.getElementById("loginModal").style.display = "flex";

    if (role === "student") {
        document.getElementById("loginHeading").innerText =
            "👨‍🎓 Student Login";
    } else {
        document.getElementById("loginHeading").innerText =
            "👩‍🏫 Teacher Login";
    }
};


window.closeLogin = function() {

    document.getElementById("loginModal").style.display = "none";

    document.getElementById("loginMessage").innerText = "";
};


window.registerUser = async function() {

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;

    const message =
        document.getElementById("loginMessage");


    if (!email || !password) {

        message.innerText =
            "Please enter email and password.";

        return;
    }


    if (password.length < 6) {

        message.innerText =
            "Password must contain at least 6 characters.";

        return;
    }


    try {

        const userCredential =
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

        const user = userCredential.user;


        await setDoc(
            doc(db, "users", user.uid),
            {
                email: email,
                role: selectedRole,
                createdAt: new Date()
            }
        );


        message.innerText =
            "✅ Account created successfully!";

    } catch (error) {

        console.error(error);

        message.innerText =
            "❌ " + error.message;
    }
};


window.loginUser = async function() {

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;

    const message =
        document.getElementById("loginMessage");


    if (!email || !password) {

        message.innerText =
            "Please enter email and password.";

        return;
    }


    try {

        const userCredential =
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

        const user = userCredential.user;


        const userDocument =
            await getDoc(
                doc(db, "users", user.uid)
            );


        if (!userDocument.exists()) {

            message.innerText =
                "User profile not found.";

            return;
        }


        const userData =
            userDocument.data();


        if (selectedRole !== userData.role) {

            message.innerText =
                "Wrong login type selected.";

            return;
        }


        message.innerText =
            "✅ Login successful!";


        setTimeout(() => {

            if (userData.role === "student") {

                window.location.href =
                    "student-dashboard.html";

            } else {

                window.location.href =
                    "teacher-dashboard.html";
            }

        }, 1000);


    } catch (error) {

        console.error(error);

        message.innerText =
            "❌ Login failed: " + error.message;
    }
};
```

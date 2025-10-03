# Axiom

Axiom is a modern, visually rich, single-page landing page built using React, TypeScript, and Tailwind CSS. Designed as a promotional and informational website for the MAHE Innovation Centre (MIC), the application is fully client-side and highly responsive, delivering a seamless experience on any device.

---

## 🚀 Overview

Axiom serves as a comprehensive digital front for MIC, showcasing its mission, events, and resources. The landing page is interactive, cleanly organized, and leverages modern frontend technologies. There is *no custom backend server*—all functionality runs entirely in the user's browser.

---

## 🛠 Technologies Used

- *TypeScript (with JSX)*: Adds static typing for safer JavaScript, with .tsx files for React components.
- *React*: Component-based UI library for modular and maintainable code.
- *Tailwind CSS*: Utility-first CSS framework for rapid and adaptive styling.
- *HTML5*: Provides the core structure in index.html.
- *Google Fonts (Poppins)*: For a unique and readable typographic style.
- *EmailJS*: Client-side email service for handling form submissions without a backend.

---

## 🧩 Application Architecture

- *Single-Page Application (SPA)*: Only loads index.html once; all navigation and UI updates are handled by React.
- *Component-Based*: All UI sections (Header, Hero, Stats, FAQ, Footer, Modals, etc.) live in the components/ directory.
- *Responsive Design*: Uses Tailwind's responsive utility classes for a great experience on desktop, tablet, and mobile.

---

## ✉ Mailing System (Client-Side Email via EmailJS)

### How It Works

Axiom handles all form submissions using [EmailJS](https://www.emailjs.com/), a client-side service that enables sending emails directly from the browser—*no backend required*.

1. *User fills out a form* (Contact or Event Registration) in a modal popup.
2. On submit, the app uses the EmailJS SDK to send the form data as an email:
   - The form data is securely transmitted to the EmailJS service.
   - EmailJS delivers the message to your designated email address, with a subject and body based on the user's input.
3. The user sees a confirmation or error message in the UI—no need to open a separate email client.

#### Advantages

- No backend server needed—works entirely in the browser.
- More reliable and seamless than mailto links.
- Supports custom email templates, attachments, and spam prevention.

#### Setup Requirements

- A free EmailJS account.
- EmailJS Service ID, Template ID, and Public Key (usually stored in environment variables or a config file).
- Configuration in the form handler (typically in the modal or form component).

#### Example Usage

typescript
import emailjs from 'emailjs-com';

emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formElement,
  'YOUR_PUBLIC_KEY'
)
.then((result) => {
  // Success handling
}, (error) => {
  // Error handling
});


---

## ▶ Getting Started

1. *Clone the repo:*
   bash
   git clone https://github.com/Sourish-19/Axiom.git
   cd Axiom
   

2. *Install dependencies:*
   bash
   npm install
   

3. *Configure EmailJS:*
   - Create an account at [EmailJS](https://www.emailjs.com/) and set up your service, template, and (optionally) email verification.
   - Add your EmailJS Service ID, Template ID, and Public Key to your environment variables or directly into the app's config as needed.

4. *Run the app locally:*
   bash
   npm start
   

5. *Open* [http://localhost:3000](http://localhost:3000) to view in your browser.

---

## 🖼 Screenshots

![alt text](<./public/ss1.png>)
![alt text](<./public/ss2.png>)

---

## 📜 License

Specify your license here (e.g., MIT, Apache 2.0, etc.)

---

## 🙏 Credits

- Developed by [Sourish-19](https://github.com/Sourish-19)
- Inspired by MAHE Innovation Centre

---

Feel free to contribute or open issues for feature requests or bug reports!
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        "primary" : "#504bfd",
        "secondary" : "red",
        "white" : "#ffffff",
        "black" : "#000000",
        "lightorange" : "#fdbd00",
        "darkblue" : "#020230",
        "lightgray" :"#fafafa",
        
      },
      backgroundImage : {
        reason: "url('@/assets/images/background/LayerReason.png')",
        'footer' : "linear-gradient(180deg, #090955 0%, #020230 100%)",
        "login" : "url('https://pcrender.com/static/media/background.767c9c75cc9698859c10.jpg')",
      }
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
      },
    },
  },
  plugins: [],
  important: true,
};

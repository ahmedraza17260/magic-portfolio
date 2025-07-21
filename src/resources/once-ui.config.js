import { home } from "./content";

// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://m-ahmedraza-portfolio.vercel.app/";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
};

const display = {
  location: true,
  time: true,
  themeSwitcher: true
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

// Import and set font for each variant
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "system", // dark | light | system
  neutral: "gray", // sand | gray | slate | custom
  brand: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  accent: "red", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100" // 90 | 95 | 100 | 105 | 110
};

const dataStyle = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 40,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const mailchimp = {
  action: "https://gmail.us9.list-manage.com/subscribe/post?u=c3a9564390f2e9c857dfc7668&amp;id=6bab507f16&amp;f_id=00dd50e1f0",
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 20,
      size: "2",
      color: "brand-on-background-weak",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  }
};

// default schema data
const schema = {
  logo: "",
  type: "Portfolio",
  name: "AhmedRaza",
  description: home.description,
  email: person.email,
};

// social links
const sameAs = {
  threads: "https://www.threads.com/@ahmedraza17260",
  linkedin: "https://www.linkedin.com/in/ahnedraza17260/",
  // discord: "https://discord.com/invite/5EyAQ4eNdS",
};

export { display, mailchimp, routes, protectedRoutes, baseURL, fonts, style, schema, sameAs, effects, dataStyle };


// <div id="mc_embed_shell">
//       <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
//   <style type="text/css">
//         #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
//         /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
//            We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
// </style>
// <div id="mc_embed_signup">
//     <form action="https://gmail.us9.list-manage.com/subscribe/post?u=c3a9564390f2e9c857dfc7668&amp;id=6bab507f16&amp;f_id=00dd50e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
//         <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
//             <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
//             <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div><div class="mc-field-group"><label for="mce-FNAME">First Name <span class="asterisk">*</span></label><input type="text" name="FNAME" class="required text" id="mce-FNAME" required="" value=""></div><div class="mc-field-group"><label for="mce-LNAME">Last Name <span class="asterisk">*</span></label><input type="text" name="LNAME" class="required text" id="mce-LNAME" required="" value=""></div><div class="mc-field-group"><label for="mce-PHONE">Phone Number </label><input type="text" name="PHONE" class="REQ_CSS" id="mce-PHONE" value=""></div>
//         <div id="mce-responses" class="clear foot">
//             <div class="response" id="mce-error-response" style="display: none;"></div>
//             <div class="response" id="mce-success-response" style="display: none;"></div>
//         </div>
//     <div aria-hidden="true" style="position: absolute; left: -5000px;">
//         /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
//         <input type="text" name="b_c3a9564390f2e9c857dfc7668_6bab507f16" tabindex="-1" value="">
//     </div>
//         <div class="optionalParent">
//             <div class="clear foot">
//                 <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
//                 <p style="margin: 0px auto;"><a href="http://eepurl.com/jjFerk" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
//             </div>
//         </div>
//     </div>
// </form>
// </div>
// <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[4]='PHONE';ftypes[4]='phone';fnames[3]='ADDRESS';ftypes[3]='address';fnames[5]='BIRTHDAY';ftypes[5]='birthday';fnames[6]='COMPANY';ftypes[6]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>

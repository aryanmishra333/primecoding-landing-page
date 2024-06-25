import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  searchMd,
  telegram,
  twitter,
} from "../assets";

import card1 from '../assets/benefits/card-1.svg';
import card2 from '../assets/benefits/card-2.svg';
import card3 from '../assets/benefits/card-3.svg';
import card4 from '../assets/benefits/card-4.svg';
import card5 from '../assets/benefits/card-5.svg';
import card6 from '../assets/benefits/card-6.svg';

export const navigation = [
  {
    id: "0",
    title: "Offerings",
    url: "#offerings",
  },
  {
    id: "1",
    title: "Reviews",
    url: "#reviews",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Contact Us",
    url: "#footer",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const pricing = [
  {
    id: "0",
    title: "Resume Review with expert feedback",
    description: "Receive detailed feedback and recommendations to enhance your resume.",
    price: "69",  
    features: [
      "⏱️ Quick 10-15 minute expert review session",
      "Expert evaluation of your resume's content and structure",
      "Personalized feedback to improve its effectiveness",
      "Insights to make your resume stand out to employers",
    ],
  },
  {
    id: "1",
    title: "Technical + HR + Resume Review (Ninja)",
    description: "Complete preparation package for Technical, HR, and resume reviews aimed at Ninja roles at TCS.",
    price: "249",
    features: [
      "⏱️ Comprehensive 60-minute preparation session",
      "In-depth technical interview practice specific to TCS Ninja roles",
      "Resume enhancement to align with TCS Ninja job requirements",
      "Best Mock interview to build confidence and reduce anxiety",
    ],
  },
  {
    id: "2",
    title: "Technical + HR + Resume Review (Digital)",
    description: "All-in-one session designed for Digital roles at TCS, focusing on technical, HR, and resume improvements.",
    price: "299",
    features: [
      "⏱️ Intensive 60-minute all-in-one preparation session",
      "Extensive technical interview preparation for TCS Digital roles",
      "Resume optimization to highlight your fit for TCS Digital positions",
      "Feedback on digital skills and projects relevant to TCS",
    ],
  },
  {
    id: "3",
    title: "Technical + HR + Resume Review (Prime)",
    description: "Premium preparation package for Technical, HR, and resume reviews aimed at Prime roles at TCS.",
    price: "349",
    features: [
      "⏱️ Premium 60-minute coaching and review session",
      "Advanced technical interview preparation for TCS Prime roles",
      "Comprehensive HR interview guidance and best practices",  
      "One-on-one mock interview session with our experts",
    ],
  },
];


export const benefits = [
  {
    id: "0",
    title: "Expertly Crafted Questions",
    text: "We meticulously curate questions tailored to help you excel, mimicking real-world scenarios.",
    backgroundUrl: card1,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Diverse Session Types",
    text: "Choose from a variety of session types, including HR, Managerial, Behavioral, Technical, and Resume Review.",
    backgroundUrl: card2,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Flexible Booking Options",
    text: "Book single or multiple sessions according to your preferences and schedule.",
    backgroundUrl: card3,
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Personalized Guidance",
    text: "Receive personalized guidance and feedback to enhance your resume and interview performance.",
    backgroundUrl: card4,
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Comprehensive Support",
    text: "Benefit from comprehensive support across technical, HR, and resume review domains.",
    backgroundUrl: card5,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Continuous Improvement",
    text: "Our commitment to excellence drives us to continuously improve and refine our services.",
    backgroundUrl: card6,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];


export const socials = [
  {
    id: "0",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://t.me/+Di5pNs9VmuhkMjM1",
  },
  {
    id: "1",
    title: "Linkedin",
    iconUrl: twitter,
    url: "https://www.linkedin.com/company/primecoding/about/",
  },
  {
    id: "2",
    title: "Youtube",
    iconUrl: facebook,
    url: "https://www.youtube.com/channel/UCdpSMCd3kmLBNG8GSe1GWGA",
  },
  {
    id: "3",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/primecoding/",
  },
];

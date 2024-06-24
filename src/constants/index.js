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
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const pricing = [
  {
    id: "0",
    title: "Resume Review",
    description: "Receive detailed feedback and recommendations to enhance your resume.",
    price: "69",  
    features: [
      "Expert evaluation of your resume's content and structure",
      "Personalized feedback to improve its effectiveness",
      "Insights to make your resume stand out to employers",
    ],
  },
  {
    id: "1",
    title: "HR/Managerial/Behavioral",
    description: "Prepare for HR, managerial, and behavioral interview questions.",
    price: "99",
    features: [
      "Guidance on handling common HR and managerial queries",
      "Behavioral interview preparation and techniques",
      "Strategies to showcase your skills and experience effectively",
    ],
  },
  {
    id: "2",
    title: "Technical + Resume Based Questions",
    description: "Combine technical and resume-based questions for a comprehensive session.",
    price: "199",
    features: [
      "Technical question practice tailored to your field",
      "Resume review with technical insights and feedback",
      "Integration of technical expertise into resume optimization",
    ],
  },
  {
    id: "3",
    title: "Technical + HR + Resume Review (Ninja)",
    description: "Complete preparation package for Technical, HR, and resume reviews aimed at Ninja roles at TCS.",
    price: "249",
    features: [
      "In-depth technical interview practice specific to TCS Ninja roles",
      "HR interview strategies to ace managerial and behavioral questions",
      "Resume enhancement to align with TCS Ninja job requirements",
      "Best Mock interview to build confidence and reduce anxiety",
    ],
  },
  {
    id: "4",
    title: "Technical + HR + Resume Review (Digital)",
    description: "All-in-one session designed for Digital roles at TCS, focusing on technical, HR, and resume improvements.",
    price: "299",
    features: [
      "Extensive technical interview preparation for TCS Digital roles",
      "HR and behavioral question handling techniques",
      "Resume optimization to highlight your fit for TCS Digital positions",
      "Feedback on digital skills and projects relevant to TCS",
    ],
  },
  {
    id: "5",
    title: "Technical + HR + Resume Review (Prime)",
    description: "Premium preparation package for Technical, HR, and resume reviews aimed at Prime roles at TCS.",
    price: "349",
    features: [
      "Advanced technical interview preparation for TCS Prime roles",
      "Comprehensive HR interview guidance to navigate complex",
      "Premium resume review to emphasize your suitability for",
      "One-on-one coaching sessions with our experts Aditya and Yash",
    ],
  },
];




export const benefits = [
  {
    id: "0",
    title: "Expertly Crafted Questions",
    text: "We meticulously curate questions tailored to help you excel, mimicking real-world scenarios.",
    backgroundUrl: card1, // Updated to use imported path
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Session Types to Suit Your Needs",
    text: "Choose from a variety of session types, including HR, Managerial, Behavioral, Technical, and Resume Review.",
    backgroundUrl: card2, // Updated to use imported path
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Flexible Booking Options",
    text: "Book single or multiple sessions according to your preferences and schedule.",
    backgroundUrl: card3, // Updated to use imported path
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Personalized Guidance",
    text: "Receive personalized guidance and feedback to enhance your resume and interview performance.",
    backgroundUrl: card4, // Ensure you have this SVG imported similarly
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Comprehensive Support",
    text: "Benefit from comprehensive support across technical, HR, and resume review domains.",
    backgroundUrl: card5, // Updated to use imported path
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Continuous Improvement",
    text: "Our commitment to excellence drives us to continuously improve and refine our services.",
    backgroundUrl: card6, // Updated to use imported path
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

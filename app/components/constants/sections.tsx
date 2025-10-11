import { Badge } from "../ui/badge"

export const sections = [
  {
    id: "hero",
    subtitle: (
      <Badge variant="outline" className="text-white border-white">
        Full-Stack Developer
      </Badge>
    ),
    title: "Kamogelo Mosia",
    content: "Building scalable web solutions with a focus on user experience and business impact.",
    showButton: true,
    buttonText: "View Portfolio",
    buttonLink: "/projects",
  },
  {
    id: "about",
    title: "About Me",
    content:
      "A motivated IT professional with a BSc in Information Technology from the University of Johannesburg. I combine technical expertise with proven sales and customer service experience to create solutions that drive real business value.",
  },
  {
    id: "experience",
    title: "Professional Experience",
    content:
      "Sales Consultant at Solar Solutions SA, exceeding targets by 15%. Retail Sales Assistant at Clicks, driving customer engagement. IT Support Intern at UJ, providing technical solutions to students and staff.",
  },
  {
    id: "skills",
    title: "Technical Skills",
    content:
      "HTML, CSS, JavaScript, PHP, Python. Experienced with Zoho CRM, Git, and full-stack development. Strong problem-solving abilities with a focus on creating user-focused applications.",
  },
  {
    id: "work",
    title: "View My Work",
    content: "Explore my portfolio featuring full-stack web applications, from concept to deployment.",
    showButton: true,
    buttonText: "Visit Full Portfolio",
    showPhoneMockup: true,
  },
  {
    id: "projects",
    title: "Featured Projects",
    content:
      "Portfolio Website (kamocodes.xyz), DrSalumu Medical Website, Math Mentor, and Todo Application. Each project demonstrates end-to-end development from concept to deployment.",
    showButton: true,
    buttonText: "View All Projects",
    buttonLink: "/projects",
    showPhoneMockups: true,
    mockups: [
      {
        type: "website",
        url: "https://kamocodes.xyz",
        title: "Portfolio Website",
      },
      {
        type: "app",
        url: "https://drsalumu.co.za",
        title: "DrSalumu App",
      },
    ],
  },
  {
    id: "contact",
    title: "Let's Connect",
    content:
      "Ready to collaborate on your next project? I bring technical skills, business acumen, and a commitment to excellence.",
    showButton: true,
    buttonText: "Get In Touch",
  },
]

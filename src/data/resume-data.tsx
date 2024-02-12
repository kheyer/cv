import {
  DmaiLogo,
  NeumoraLogo,
  BTRXLogo,
  ZymergenLogo
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Karl Heyer",
  initials: "KH",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/SanFrancisco",
  about:
    "Machine Learning Engineer with a focus on drug discovery and bioscience",
  summary:
    "As a Machine Learning Engineer, I have successfully deployed high impact solutions to problems in drug discovery, RNA-Seq, small molecule design, and more. I leverage my background as a wet lab scientist to work effectively between developer teams and scientist teams, ensuring critical domain expertise is incorporated into ML solutions. Currently I work mainly in Python, PyTorch and the AWS stack.",
  avatarUrl: "https://avatars.githubusercontent.com/u/38166299?v=4",
  personalWebsiteUrl: "https://github.com/kheyer",
  contact: {
    email: "karlheyerv@gmail.com",
    tel: "1-808-282-7920",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/karl-heyer/",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/kheyer",
        icon: GitHubIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/DarkMatterAI",
        icon: GitHubIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Southern California",
      degree: "Master's Degree in Chemical Engineering and Materials Science (GPA 3.85)",
      start: "2016",
      end: "2017",
    },
    {
      school: "University of Southern California",
      degree: "Bachelor's Degree in Chemical Engineering (GPA 3.9)",
      start: "2012",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Darkmatter AI",
      link: "https://github.com/DarkMatterAI",
      badges: ["Remote"],
      title: "Founder",
      logo: DmaiLogo,
      start: "2022",
      end: "Present",
      description:
        "Developed open source python libraries applying machine learning and generative AI to problems in cheminformatics and drug design. Technologies: PyTorch, Generative AI, LLMs, RDKit, FastAPI, Docker",
    },
    {
      company: "Independent Contractor",
      link: "https://www.linkedin.com/in/karl-heyer/",
      badges: ["Remote"],
      title: "Machine Learning Engineer",
      logo: DmaiLogo,
      start: "2022",
      end: "2023",
      description:
        "Worked for client companies developing in-house PyTorch libraries, ETL data pipelines, and production systems for training and deploying machine learning models. Technologies: PyTorch, Python, RDKit, RabbitMQ , Docker, Kubernetes, AWS (EC2, Lambda, Sagemaker, S3)",
    },
    {
      company: "Neumora",
      link: "https://neumoratx.com/",
      badges: ["Remote"],
      title: "Data Scientist",
      logo: NeumoraLogo,
      start: "2021",
      end: "2021",
      description:
        "Analyzed RNA-Seq data to derive insights for patient subtyping, drug selection and improved treatment outcomes for mental health therapeutics. Technologies: R, Bioconductor",
    },
    {
      company: "BlackThorn Therapeutics (Acquired by Neumora)",
      link: "http://www.blackthornrx.com/",
      badges: ["Remote"],
      title: "Data Scientist",
      logo: BTRXLogo,
      start: "2020",
      end: "2021",
      description: "Designed, developed and productionized BlackThorn's chem/ML systems to support multiple drug design programs with a suite of tools including data tracking/warehouse, ETL pipelines, predictive models, and generative models for drug design. Technologies: Python, PyTorch, RDKit, Docker, Kubernetes, AWS (EC2, Sagemaker, S3, Redshift)",
    },
    {
      company: "Zymergen (Acquired by Ginkgo Bioworks)",
      link: "https://zymergen.gcs-web.com/",
      badges: [],
      title: "Research Associate",
      logo: ZymergenLogo,
      start: "2017",
      end: "2019",
      description: "As a member of the R&D team, I helped develop, scale, and productionize novel molecular biology methods for large scale pooled DNA assembly and high throughput bioinformatics analysis pipelines. I worked across the full scale range from microliter bench top scale to factory production.",
    },
  ],
  skills: [
    "Python",
    "PyTorch",
    "Numpy",
    "scikit-learn",
    "HuggingFace",
    "LLMs",
    "Generative AI",
    "Vector Databases",
    "Diffusion Models",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "Redis",
    "FastAPI",
    "AWS",
    "RDKit",
    "Schrodinger",
    "CCDC",
    "Autodock Vina"
  ],
  projects: [
    {
      title: "Vector Virtual Screen",
      techStack: [
        "PyTorch",
        "Qdrant",
        "MongoDB",
        "Redis",
        "Docker",
        "Python",
        "FastAPI"
      ],
      description: "A platform for using vector databases to accelerate virtual screening for drug discovery",
      logo: DmaiLogo,
    },
    {
      title: "CPU Embedding Server",
      techStack: ["Python", "FastAPI", "Pytorch", "HuggingFace", "Docker"],
      description:
        "A containerized FastAPI server for computing embeddings on CPU, optimized for concurrent requests",
      logo: DmaiLogo,
      link: {
        label: "github.com",
        href: "https://github.com/kheyer/simple_cpu_embedding_server",
      },
    },
    {
      title: "Roberta Zinc 480m",
      techStack: ["Pytorch", "HuggingFace"],
      description:
        "A model trained on 480m SMILES strings to compute meaningful molecule embeddings",
      logo: DmaiLogo,
      link: {
        label: "huggingface.co",
        href: "https://huggingface.co/entropy/roberta_zinc_480m",
      },
    },
    {
      title: "GPT Zinc 87m",
      techStack: ["Pytorch", "HuggingFace"],
      description:
        "A GPT-2 style generative model trained on 480m SMILES strings to generate molecular compounds",
      logo: DmaiLogo,
      link: {
        label: "huggingface.co",
        href: "https://huggingface.co/entropy/gpt2_zinc_87m",
      },
    },
    {
      title: "Chem Templates",
      techStack: ["Python", "RDKit"],
      description:
        "A flexible and extensible python library for filtering large molecular libraries and defining chemical spaces",
      logo: DmaiLogo,
      link: {
        label: "github.com",
        href: "https://github.com/DarkMatterAI/chem_templates",
      },
    },
    {
      title: "Chem Templates Server",
      techStack: ["FastAPI", "Docker", "MongoDB"],
      description:
        "A FastAPI inference server for the Chem Templates library with a focus on scalability and parallel processing",
      logo: DmaiLogo,
      link: {
        label: "github.com",
        href: "https://github.com/DarkMatterAI/chem_templates_server",
      },
    },
  ],
} as const;

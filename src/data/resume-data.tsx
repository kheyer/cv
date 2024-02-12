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
  location1: "San Francisco, CA",
  locationLink1: "https://www.google.com/maps/place/SanFrancisco",
  location2: "Los Angeles, CA",
  locationLink2: "https://www.google.com/maps/place/LosAngeles",
  location3: "Honolulu, HI",
  locationLink3: "https://www.google.com/maps/place/Honolulu",
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
      title: "Emb Opt",
      techStack: ["Python", "Numpy"],
      description:
        "A python library for running hill climbing algorithms in embedding spaces, with a focus on searching vector databases",
      logo: DmaiLogo,
      link: {
        label: "github.com",
        href: "https://github.com/DarkMatterAI/emb_opt",
      },
    },
    {
      title: "Emb Opt Server",
      techStack: ["FastAPI", "Docker", "MongoDB", "Redis"],
      description:
        "A multi-container service for running search with the Emb Opt library, including a RESTful API server, backend database, job queue, and worker container",
      logo: DmaiLogo,
      link: {
        label: "github.com",
        href: "https://github.com/DarkMatterAI/emb_opt_server",
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
    {
      title: "Molecular Reinforcement Learning",
      techStack: ["Python", "Pytorch", "RDKit"],
      description:
        "A python library for designing molecular compounds using a combination of machine learning and generative AI",
      logo: DmaiLogo,
      link: {
        label: "github.com",
        href: "https://github.com/DarkMatterAI/mrl",
      },
    },
    {
      title: "In-House ML Library",
      techStack: ["Contract", "Python", "Pytorch", "scikit-learn"],
      description: "A custom machine learning library for a scientist team with a focus on auto-ML and usability by lab scientists with little programming background",
      logo: DmaiLogo,
    },
    {
      title: "GB-GA Molecular Design",
      techStack: ["Contract", "Python", "RDKit", "Docker"],
      description: "A production system for molecular design using graph based genetic algorithms (GB-GA) compatible with an arbitrary reward function",
      logo: DmaiLogo,
    },
    {
      title: "ML Inference Endpoint Templates",
      techStack: ["Contract", "Python", "Docker"],
      description: "A template library to help scientists deploy custom ML models as docker containers using ECS and Sagemaker",
      logo: DmaiLogo,
    },
    {
      title: "Molecule Vector Database",
      techStack: ["Contract", "Python", "Pytorch", "Qdrant"],
      description: "Built a vector database system for large chemical libraries, including vector database backend, RESTful API query server, and batch process embedding computation",
      logo: DmaiLogo,
    },
    {
      title: "RNA-Seq Patient Subtyping",
      techStack: ["Neumora", "R", "Bioconductor"],
      description: "Used RNA-Seq analysis to identify patient subtypes in patient populations with mental health indicators",
      logo: NeumoraLogo,
    },
    {
      title: "Autoscaling Docking Service",
      techStack: ["BTRX", "Python", "Docker", "Kubernetes", "CCDC"],
      description: "Built an autoscaling kubernetes service running CCDC molecular docking",
      logo: BTRXLogo,
    },
    {
      title: "Reinforcement Learning Molecular Design",
      techStack: ["BTRX", "Pytorch", "RDKit"],
      description: "Developed a system combining generative AI and reinforcement learning to design optimized molecules for multiple drug programs",
      logo: BTRXLogo,
    },
    {
      title: "ADMET Prediction Pipeline",
      techStack: ["BTRX", "Pytorch", "RDKit"],
      description: "Deployed a production system to predict ADMET properties of molecules using in-house laboratory data",
      logo: BTRXLogo,
    },
    {
      title: "Pooled DNA Assembly",
      techStack: ["Zymergen"],
      description:
        "A molecular biology technique for assembling DNA plasmids in a deterministic multiplexed fashion",
      logo: ZymergenLogo,
      link: {
        label: "patents.google.com",
        href: "https://patents.google.com/patent/US20210324378A1/en",
      },
    },
  ],
} as const;

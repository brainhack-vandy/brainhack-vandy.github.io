// Instructions: id all keynote speakers as "keynote-[number]" and all panelists as "panelist-[number]"
const speakerData = [
    {
        id: "keynote-1",
        name: "Anastasia Yendiki",
        bio: "",
        imgPath: "assets/speakers/anastasia_yendiki.jpg",
        link: "https://dmri.mgh.harvard.edu/a-y/"
    },
    {
        id: "panelist-1",
        name: "Adina Wagner",
        bio: "Dr. Adina Wagner is a Scientific Coordinator and Software Developer at the Psychoinformatics Lab at Jülich Research Centre in Jülich, Germany. Her work focuses on advancing open and reproducible scientific practices in neuroscience through open-source software development. She played a key role in developing DataLad, a free and open-source distributed data management system that enhances data tracking, structure, reproducibility, and collaboration while integrating with widely used data infrastructure. Dr. Wagner earned her PhD in neuroinformatics at the Heinrich Heine University Düsseldorf, Germany, with projects intersecting experimental psychology, MEG, and research data management in high throughput computing.",
        imgPath: "assets/speakers/adina_wagner.jpg",
        link: "https://www.adina-wagner.com/"
    },
    {
        id: "panelist-2",
        name: "Jerome Lecoq",
        bio: "Dr. Jérôme Lecoq is a neuroscientist at the Allen Institute leading cortical computation research in behaving animals. He pioneered OpenScope, a revolutionary open neuroscience platform that has democratized access to advanced brain recording technologies and generated extensive public datasets that accelerate neuroscience discovery. This platform enables researchers globally to conduct experiments within the Allen Institute Brain Observatory platform and record neuronal activity across the mouse brain. Before joining the Allen Institute in 2015, Dr. Lecoq completed his postdoctoral work in Mark Schnitzer's group at Stanford and earned his Ph.D. in Neuroscience from Pierre and Marie Curie University in Paris.",
        imgPath: "assets/speakers/jerome_lecoq.jpg",
        link: "https://alleninstitute.org/person/jerome-lecoq/"
    },
    {
        id: "panelist-3",
        name: "Megan Peters",
        bio: "Dr. Megan Peters is an Associate Professor in Cognitive Sciences at the University of California, Irvine, investigating how the brain processes uncertainty and adapts to noisy, incomplete information. She has transformed computational neuroscience education as Co-founder and President of Neuromatch Academy, which has trained thousands of students globally through its innovative online platform combining interactive tutorials with hands-on collaborative projects. Dr. Peters earned her Ph.D. in computational cognitive neuroscience (psychology) from UCLA, where she also completed her postdoc.",
        imgPath: "assets/speakers/megan_peters.jpg",
        link: "https://faculty.sites.uci.edu/cnclab/people/"
    },
    {
        id: "panelist-4",
        name: "James Booth",
        bio: "Dr. James Booth is the Patricia and Rodes Hart Professor of Psychology and Human Development at Vanderbilt. His research investigates brain mechanisms underlying language, reading, and cognitive development in typical and atypical populations. Dr. Booth is a pioneer in open science, having established the largest openly available developmental neuroimaging dataset globally, with over 1,000 participants and 12,000 scans focused on reading, math, and attention development in children. This resource has enabled numerous researchers to advance our understanding of learning and development. Dr. Booth completed his PhD in Psychology at the University of Maryland, College Park, and his postdoc at Carnegie Mellon.",
        imgPath: "assets/speakers/james_booth.jpg",
        link: "https://www.vanderbilt.edu/psychological_sciences/bio/james-booth"
    },
    {
        id: "panelist-5",
        name: "Yamin Li",
        bio: "Yamin Li is a PhD student in Computer Science at Vanderbilt University's Neuroimaging and Brain Dynamics Lab. She developed NeuroBOLT, an innovative transformer model that translates EEG data into fMRI BOLD signals, with findings presented at NeurIPS 2024. Her commitment to open science is demonstrated through publicly available code repositories and detailed documentation that enable other researchers to build upon her work. Her research applies deep learning to neural decoding and EEG-fMRI translation. She holds a B.E. in Biomedical Engineering from Xi'an Jiaotong University and an M.Sc. in Biomedical Engineering from Shanghai Jiao Tong University.",
        imgPath: "assets/speakers/yamin_li.jpg",
        link: "https://www.vanderbilt.edu/valiant/person/yamin-li/"
    },
    {
        id: "panelist-6",
        name: "Katja Heuer",
        bio: "Dr. Katja Heuer is a Postdoctoral Researcher at Institut Pasteur in Paris, France where she studies brain development, specifically brain organization and folding, using neuroimaging and histology. Dr. Heuer has contributed to the open neuroscience community by developing a host of groundbreaking tools to facilitate access to open data and foster global collaboration. Some of these tools include BrainBox and MicroDraw, allowing researchers to analyze and collaborate on publicly available neuroimaging and histology datasets. Previously, Dr. Heuer completed her PhD in Neuroscience at the Max Planck Institute in Germany.",
        imgPath: "assets/speakers/katja_heuer.jpg",
        link: "https://katjaq.github.io/"
    }
];

export default speakerData;
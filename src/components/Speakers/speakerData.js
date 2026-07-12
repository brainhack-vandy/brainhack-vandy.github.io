// Instructions: id all keynote speakers as "keynote-[number]" and all panelists as "panelist-[number]"
const speakerData = [
    {
        id: "keynote-1",
        name: "Russ Poldrack",
        bio: `<p><strong>Dr. Poldrack</strong> is a cognitive neuroscientist who uses brain imaging to study how the brain gives rise to the mind. He is also deeply interested in improving the way science is conducted by providing researchers with tools and knowledge to help them perform research that is more reproducible and transparent.</p>

<br>

<p>Dr. Poldrack received his BA in Psychology from Baylor University and his PhD from the University of Illinois at Urbana-Champaign. After completing a postdoctoral fellowship at Stanford University, he held faculty positions at Harvard Medical School, UCLA, and the University of Texas at Austin.</p>

<br>

<p>He is currently the Albert Ray Lang Professor and Chair of the Department of Psychology at Stanford University. More information about his lab's work can be found on the Poldrack Lab website, poldracklab.org. The lab also maintains an online manual outlining its policies, standard operating procedures, and his mentoring philosophy.</p>

<br>

<p>In addition, Dr. Poldrack serves as an Associate Director for Stanford Data Science and as Director of the Center for Open and Reproducible Science.</p>

<br>

<p>He has published several books, including <em>Statistical Thinking: Analyzing Data in an Uncertain World</em> (with an open-source version available online), <em>Hard to Break: Why Our Brains Make Habits Stick</em>, <em>The New Mind Readers: What Neuroimaging Can and Cannot Reveal about Our Thoughts</em>, and <em>Handbook of fMRI Data Analysis</em> (co-authored with Jeanette Mumford and Tom Nichols).</p>

<br>

<p>Dr. Poldrack is currently writing a living textbook on reproducible coding with AI titled <em>Better Code, Better Science</em> and regularly releases new sections of the book through his Substack.</p>`,
        imgPath: "assets/speakers/russell-poldrack.webp",
        link: "https://profiles.stanford.edu/russell-poldrack"
    }
    /*
    {
        id: "keynote-1",
        name: "Anastasia Yendiki",
        bio: `<p><strong>Dr. Poldrack</strong> is a cognitive neuroscientist who uses brain imaging to study how the brain gives rise to the mind. He is also deeply interested in improving the way science is conducted by providing researchers with tools and knowledge to help them perform research that is more reproducible and transparent.</p>

<br>

<p>Dr. Poldrack received his BA in Psychology from Baylor University and his PhD from the University of Illinois at Urbana-Champaign. After completing a postdoctoral fellowship at Stanford University, he held faculty positions at Harvard Medical School, UCLA, and the University of Texas at Austin.</p>

<br>

<p>He is currently the Albert Ray Lang Professor and Chair of the Department of Psychology at Stanford University. More information about his lab's work can be found on the Poldrack Lab website, poldracklab.org. The lab also maintains an online manual outlining its policies, standard operating procedures, and his mentoring philosophy.</p>

<br>

<p>In addition, Dr. Poldrack serves as an Associate Director for Stanford Data Science and as Director of the Center for Open and Reproducible Science.</p>

<br>

<p>He has published several books, including <em>Statistical Thinking: Analyzing Data in an Uncertain World</em> (with an open-source version available online), <em>Hard to Break: Why Our Brains Make Habits Stick</em>, <em>The New Mind Readers: What Neuroimaging Can and Cannot Reveal about Our Thoughts</em>, and <em>Handbook of fMRI Data Analysis</em> (co-authored with Jeanette Mumford and Tom Nichols).</p>

<br>

<p>Dr. Poldrack is currently writing a living textbook on reproducible coding with AI titled <em>Better Code, Better Science</em> and regularly releases new sections of the book through his Substack.</p>`,
        imgPath: "assets/speakers/anastasia_yendiki.jpg",
        link: "https://dmri.mgh.harvard.edu/a-y/"
    },
    {
        id: "panelist-1",
        name: "Adina Wagner",
        bio: `<p><strong>Dr. Poldrack</strong> is a cognitive neuroscientist who uses brain imaging to study how the brain gives rise to the mind. He is also deeply interested in improving the way science is conducted by providing researchers with tools and knowledge to help them perform research that is more reproducible and transparent.</p>

<br>

<p>Dr. Poldrack received his BA in Psychology from Baylor University and his PhD from the University of Illinois at Urbana-Champaign. After completing a postdoctoral fellowship at Stanford University, he held faculty positions at Harvard Medical School, UCLA, and the University of Texas at Austin.</p>

<br>

<p>He is currently the Albert Ray Lang Professor and Chair of the Department of Psychology at Stanford University. More information about his lab's work can be found on the Poldrack Lab website, poldracklab.org. The lab also maintains an online manual outlining its policies, standard operating procedures, and his mentoring philosophy.</p>

<br>

<p>In addition, Dr. Poldrack serves as an Associate Director for Stanford Data Science and as Director of the Center for Open and Reproducible Science.</p>

<br>

<p>He has published several books, including <em>Statistical Thinking: Analyzing Data in an Uncertain World</em> (with an open-source version available online), <em>Hard to Break: Why Our Brains Make Habits Stick</em>, <em>The New Mind Readers: What Neuroimaging Can and Cannot Reveal about Our Thoughts</em>, and <em>Handbook of fMRI Data Analysis</em> (co-authored with Jeanette Mumford and Tom Nichols).</p>

<br>

<p>Dr. Poldrack is currently writing a living textbook on reproducible coding with AI titled <em>Better Code, Better Science</em> and regularly releases new sections of the book through his Substack.</p>`,
        imgPath: "assets/speakers/adina_wagner.jpg",
        link: "https://www.adina-wagner.com/"
    },
    {
        id: "panelist-2",
        name: "Jerome Lecoq",
        bio: `<p><strong>Dr. Poldrack</strong> is a cognitive neuroscientist who uses brain imaging to study how the brain gives rise to the mind. He is also deeply interested in improving the way science is conducted by providing researchers with tools and knowledge to help them perform research that is more reproducible and transparent.</p>

<br>

<p>Dr. Poldrack received his BA in Psychology from Baylor University and his PhD from the University of Illinois at Urbana-Champaign. After completing a postdoctoral fellowship at Stanford University, he held faculty positions at Harvard Medical School, UCLA, and the University of Texas at Austin.</p>

<br>

<p>He is currently the Albert Ray Lang Professor and Chair of the Department of Psychology at Stanford University. More information about his lab's work can be found on the Poldrack Lab website, poldracklab.org. The lab also maintains an online manual outlining its policies, standard operating procedures, and his mentoring philosophy.</p>

<br>

<p>In addition, Dr. Poldrack serves as an Associate Director for Stanford Data Science and as Director of the Center for Open and Reproducible Science.</p>

<br>

<p>He has published several books, including <em>Statistical Thinking: Analyzing Data in an Uncertain World</em> (with an open-source version available online), <em>Hard to Break: Why Our Brains Make Habits Stick</em>, <em>The New Mind Readers: What Neuroimaging Can and Cannot Reveal about Our Thoughts</em>, and <em>Handbook of fMRI Data Analysis</em> (co-authored with Jeanette Mumford and Tom Nichols).</p>

<br>

<p>Dr. Poldrack is currently writing a living textbook on reproducible coding with AI titled <em>Better Code, Better Science</em> and regularly releases new sections of the book through his Substack.</p>`,
        imgPath: "assets/speakers/jerome_lecoq.jpg",
        link: "https://alleninstitute.org/person/jerome-lecoq/"
    },
    {
        id: "panelist-3",
        name: "Megan Peters",
        bio: `<p><strong>Dr. Poldrack</strong> is a cognitive neuroscientist who uses brain imaging to study how the brain gives rise to the mind. He is also deeply interested in improving the way science is conducted by providing researchers with tools and knowledge to help them perform research that is more reproducible and transparent.</p>

<br>

<p>Dr. Poldrack received his BA in Psychology from Baylor University and his PhD from the University of Illinois at Urbana-Champaign. After completing a postdoctoral fellowship at Stanford University, he held faculty positions at Harvard Medical School, UCLA, and the University of Texas at Austin.</p>

<br>

<p>He is currently the Albert Ray Lang Professor and Chair of the Department of Psychology at Stanford University. More information about his lab's work can be found on the Poldrack Lab website, poldracklab.org. The lab also maintains an online manual outlining its policies, standard operating procedures, and his mentoring philosophy.</p>

<br>

<p>In addition, Dr. Poldrack serves as an Associate Director for Stanford Data Science and as Director of the Center for Open and Reproducible Science.</p>

<br>

<p>He has published several books, including <em>Statistical Thinking: Analyzing Data in an Uncertain World</em> (with an open-source version available online), <em>Hard to Break: Why Our Brains Make Habits Stick</em>, <em>The New Mind Readers: What Neuroimaging Can and Cannot Reveal about Our Thoughts</em>, and <em>Handbook of fMRI Data Analysis</em> (co-authored with Jeanette Mumford and Tom Nichols).</p>

<br>

<p>Dr. Poldrack is currently writing a living textbook on reproducible coding with AI titled <em>Better Code, Better Science</em> and regularly releases new sections of the book through his Substack.</p>`,
        imgPath: "assets/speakers/megan_peters.jpg",
        link: "https://faculty.sites.uci.edu/cnclab/people/"
    },
    {
        id: "panelist-4",
        name: "Katja Heuer",
        bio: `<p><strong>Dr. Poldrack</strong> is a cognitive neuroscientist who uses brain imaging to study how the brain gives rise to the mind. He is also deeply interested in improving the way science is conducted by providing researchers with tools and knowledge to help them perform research that is more reproducible and transparent.</p>

<br>

<p>Dr. Poldrack received his BA in Psychology from Baylor University and his PhD from the University of Illinois at Urbana-Champaign. After completing a postdoctoral fellowship at Stanford University, he held faculty positions at Harvard Medical School, UCLA, and the University of Texas at Austin.</p>

<br>

<p>He is currently the Albert Ray Lang Professor and Chair of the Department of Psychology at Stanford University. More information about his lab's work can be found on the Poldrack Lab website, poldracklab.org. The lab also maintains an online manual outlining its policies, standard operating procedures, and his mentoring philosophy.</p>

<br>

<p>In addition, Dr. Poldrack serves as an Associate Director for Stanford Data Science and as Director of the Center for Open and Reproducible Science.</p>

<br>

<p>He has published several books, including <em>Statistical Thinking: Analyzing Data in an Uncertain World</em> (with an open-source version available online), <em>Hard to Break: Why Our Brains Make Habits Stick</em>, <em>The New Mind Readers: What Neuroimaging Can and Cannot Reveal about Our Thoughts</em>, and <em>Handbook of fMRI Data Analysis</em> (co-authored with Jeanette Mumford and Tom Nichols).</p>

<br>

<p>Dr. Poldrack is currently writing a living textbook on reproducible coding with AI titled <em>Better Code, Better Science</em> and regularly releases new sections of the book through his Substack.</p>`,
        imgPath: "assets/speakers/katja_heuer.jpg",
        link: "https://katjaq.github.io/"
    },
    {
        id: "panelist-5",
        name: "James Booth",
        bio: `<p><strong>Dr. Poldrack</strong> is a cognitive neuroscientist who uses brain imaging to study how the brain gives rise to the mind. He is also deeply interested in improving the way science is conducted by providing researchers with tools and knowledge to help them perform research that is more reproducible and transparent.</p>

<br>

<p>Dr. Poldrack received his BA in Psychology from Baylor University and his PhD from the University of Illinois at Urbana-Champaign. After completing a postdoctoral fellowship at Stanford University, he held faculty positions at Harvard Medical School, UCLA, and the University of Texas at Austin.</p>

<br>

<p>He is currently the Albert Ray Lang Professor and Chair of the Department of Psychology at Stanford University. More information about his lab's work can be found on the Poldrack Lab website, poldracklab.org. The lab also maintains an online manual outlining its policies, standard operating procedures, and his mentoring philosophy.</p>

<br>

<p>In addition, Dr. Poldrack serves as an Associate Director for Stanford Data Science and as Director of the Center for Open and Reproducible Science.</p>

<br>

<p>He has published several books, including <em>Statistical Thinking: Analyzing Data in an Uncertain World</em> (with an open-source version available online), <em>Hard to Break: Why Our Brains Make Habits Stick</em>, <em>The New Mind Readers: What Neuroimaging Can and Cannot Reveal about Our Thoughts</em>, and <em>Handbook of fMRI Data Analysis</em> (co-authored with Jeanette Mumford and Tom Nichols).</p>

<br>

<p>Dr. Poldrack is currently writing a living textbook on reproducible coding with AI titled <em>Better Code, Better Science</em> and regularly releases new sections of the book through his Substack.</p>`,
        imgPath: "assets/speakers/james_booth.jpg",
        link: "https://www.vanderbilt.edu/psychological_sciences/bio/james-booth"
    },
    {
        id: "panelist-6",
        name: "Yamin Li",
        bio: `<p><strong>Dr. Poldrack</strong> is a cognitive neuroscientist who uses brain imaging to study how the brain gives rise to the mind. He is also deeply interested in improving the way science is conducted by providing researchers with tools and knowledge to help them perform research that is more reproducible and transparent.</p>

<br>

<p>Dr. Poldrack received his BA in Psychology from Baylor University and his PhD from the University of Illinois at Urbana-Champaign. After completing a postdoctoral fellowship at Stanford University, he held faculty positions at Harvard Medical School, UCLA, and the University of Texas at Austin.</p>

<br>

<p>He is currently the Albert Ray Lang Professor and Chair of the Department of Psychology at Stanford University. More information about his lab's work can be found on the Poldrack Lab website, poldracklab.org. The lab also maintains an online manual outlining its policies, standard operating procedures, and his mentoring philosophy.</p>

<br>

<p>In addition, Dr. Poldrack serves as an Associate Director for Stanford Data Science and as Director of the Center for Open and Reproducible Science.</p>

<br>

<p>He has published several books, including <em>Statistical Thinking: Analyzing Data in an Uncertain World</em> (with an open-source version available online), <em>Hard to Break: Why Our Brains Make Habits Stick</em>, <em>The New Mind Readers: What Neuroimaging Can and Cannot Reveal about Our Thoughts</em>, and <em>Handbook of fMRI Data Analysis</em> (co-authored with Jeanette Mumford and Tom Nichols).</p>

<br>

<p>Dr. Poldrack is currently writing a living textbook on reproducible coding with AI titled <em>Better Code, Better Science</em> and regularly releases new sections of the book through his Substack.</p>`,
        imgPath: "assets/speakers/yamin_li.jpg",
        link: "https://www.vanderbilt.edu/valiant/person/yamin-li/"
    }
    */
];

export default speakerData;
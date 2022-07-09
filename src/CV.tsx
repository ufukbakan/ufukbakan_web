import portrait from "./assets/portrait.jpeg"
import "./cv.css"

export default function CV() {
    return (
        <>
            <div id="cv-page">
                <h1 id="name">Ufuk Bakan</h1>
                <div className="personal-title"></div>

                <div className="grid-40-60">
                    <div className="auto-divided-grid">
                        <h3>Contact</h3>
                        <ul className="no-bullet no-indent">
                            <li><a target="_blank" href="mailto:println.ufukbakan@gmail.com">println.ufukbakan@gmail.com</a>
                            </li>
                            <li><a href="tel:+90censored">+90 censored</a></li>
                            <li><a target="_blank" href="https://github.com/ufukbakan">github.com/ufukbakan</a></li>
                        </ul>
                    </div>
                    <div className="auto-divided-grid">
                        <div className="portrait">
                            <img src={portrait} />
                        </div>
                        <h3>Personal Information</h3>
                        <table className="colon-before-second">
                            <tr>
                                <td>Birthdate</td>
                                <td>28.02.2000</td>
                            </tr>
                            <tr>
                                <td>Driving License</td>
                                <td>B</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <td>Military Services</td>
                                <td>Postponed until 31.12.2025</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <h3>Summary</h3>
                <p>I’m interested in Full Stack Development and Object Oriented Programming. I can built and
                    design web pages and databases. I am skilled at CSS , Javascript, C# and Java.
                    Beside that I’m coding games and AI. I'm also familiar with C, Haskell, Ruby, Prolog, PHP,
                    GDScript, SQL, Photoshop and Blender. I know CEFSharp and also .NET Core. Recently I'm developing
                    applications with Node.js and React. I can use English as communication language.</p>

                <div className="half-grid">
                    <div className="auto-divided-grid">
                        <h3>Education</h3>
                        <ul className="no-indent no-bullet">
                            <li>Atatürk İlköğretim/Ortaöğretim Okulu (Kars)</li>
                            <li>Macit Zeren Fen Lisesi (Amasya)</li>
                            <li>Gazi Üniversitesi Bilgisayar Mühendisliği (Ankara - Mühendislik Fakültesi)</li>
                        </ul>
                    </div>
                    <div className="auto-divided-grid">
                        <h3>Computer Skills</h3>
                        <ul id="computer-skills">
                            <li className="computer-skill">Javascript</li>
                            <li className="computer-skill">Node.js</li>
                            <li className="computer-skill">React Js</li>
                            <li className="computer-skill">Java</li>
                            <li className="computer-skill">C</li>
                            <li className="computer-skill">C#</li>
                            <li className="computer-skill">.NET Framework</li>
                            <li className="computer-skill">.NET Core</li>
                            <li className="computer-skill">Mono</li>
                            <li className="computer-skill">SQL</li>
                            <li className="computer-skill">MySQL</li>
                            <li className="computer-skill">PostgreSQL</li>
                            <li className="computer-skill">Visual Basic</li>
                            <li className="computer-skill">Python</li>
                            <li className="computer-skill">PHP</li>
                            <li className="computer-skill">HTML</li>
                            <li className="computer-skill">CSS</li>
                            <li className="computer-skill">Spring Boot</li>
                            <li className="computer-skill">JUnit</li>
                            <li className="computer-skill">Mockito</li>
                            <li className="computer-skill">Jest</li>
                            <li className="computer-skill">Selenium</li>
                            <li className="computer-skill">Haskell</li>
                            <li className="computer-skill">Ruby</li>
                            <li className="computer-skill">Prolog</li>
                            <li className="computer-skill">Godot</li>
                            <li className="computer-skill">GDScript</li>
                            <li className="computer-skill">Photoshop</li>
                            <li className="computer-skill">Illustrator</li>
                            <li className="computer-skill">Wordpress</li>
                            <li className="computer-skill">Blender (3D Modelling)</li>
                            <li className="computer-skill">MS Office</li>
                            <li className="computer-skill">Bash</li>
                            <li className="computer-skill">Shell scripting</li>
                            <li className="computer-skill">x8086 Assembly</li>
                            <li className="computer-skill">NoSQL</li>
                            <li className="computer-skill">GraphQL</li>
                            <li className="computer-skill">MongoDB</li>
                            <li className="computer-skill">Electron Js</li>
                            <li className="computer-skill">Express Js</li>
                            <li className="computer-skill">Fastify</li>
                            <li className="computer-skill">Git</li>
                            <li className="computer-skill">WebGL</li>
                            <li className="computer-skill">Three.js</li>
                            <li className="computer-skill">Back-end Development</li>
                            <li className="computer-skill">Front-end Development</li>
                            <li className="computer-skill">Full stack Development</li>
                            <li className="computer-skill">Object Oriented Programming</li>
                        </ul>
                    </div>
                </div>
                <h3>Experience</h3>
                <ul className="no-bullet li-headings" id="experiences">
                    <li>Summer Intern at TEST STB</li>
                    <p>I worked on a selenium project with front-end developing interns for Yetenek Kapısı.</p>
                    <li>Summer Intern at TÜBİTAK BİLGEM YTE</li>
                    <p>I got courses and developed a Spring Boot Web project alongside React user interface.</p>
                    <li>Part-time Software Developer at TÜBİTAK BİLGEM YTE</li>
                    <p>I worked as a full stack software developer. Spring framework is mostly used at job. Using continious integration tools like Jira was a daily routine. </p>
                    <li>BİLGEM YTE & Patika Bootcamp</li>
                    <p>I completed a java bootcamp which is organized by TÜBİTAK BİLGEM and Patika. Bootcamp took 8 weeks. Weekly tasks are published publicly on github at the end of every week.</p>
                </ul>
                <h3>Projects</h3>
                <ol className="li-headings" id="projects">
                    <li>Open Source Projects
                        <ol>
                            <br/>
                                <div className="project">
                                    <li>WebGL Tower Defense Game</li>
                                    <p>
                                        A tower defense game developed with node.js and Three.js.
                                    </p>
                                    <div className="source"><a href="https://github.com/ufukbakan/WebGL-TowerDefense">https://github.com/ufukbakan/WebGL-TowerDefense</a></div>
                                </div>

                                <div className="project">
                                    <li>Wolf Sheep Rabbit Game</li>
                                    <p>It's an online game which is similar to rock paper scissors. Node.js, Postgresql, React and
                                        Docker were used to develop this game project.</p>
                                    <div className="source"><a href="https://github.com/ufukbakan/wolf_sheep_rabbit">https://github.com/ufukbakan/wolf_sheep_rabbit</a></div>
                                </div>

                                <div className="project">
                                    <li>Reliable Studio Code</li>
                                    <p>The application is developed with Electron and React. It allows developers to encode and
                                        decode
                                        source code files, generates a secret key from a passphrase and remembers the last one.
                                    </p>
                                    <div className="source"><a href="https://github.com/ufukbakan/Reliable-Studio-Code">https://github.com/ufukbakan/Reliable-Studio-Code</a></div>
                                </div>

                                <div className="project">
                                    <li>Gender Recognition by Voice</li>
                                    <p>This application guesses your gender by your voice, allows recordings and file uploads. GUI
                                        was
                                        written in C# and AI was written in Python.
                                    </p>
                                    <div className="source"><a href="https://github.com/ufukbakan/GenderRecognitionByVoice">https://github.com/ufukbakan/GenderRecognitionByVoice</a></div>
                                </div>

                                <div className="project">
                                    <li>Precision-timeout-interval</li>
                                    <p>This project is a javascript package which is published on npm. It fixes unreliable javascript timers.</p>
                                    <div className="source"><a href="https://www.npmjs.com/package/precision-timeout-interval">https://www.npmjs.com/package/precision-timeout-interval</a></div>
                                </div>

                                <div className="project">
                                    <li>Hospital Finder</li>
                                    <p>It's a QGIS plugin that's written in Python. This plugin allows users to find the most
                                        suitable
                                        hospital by their filters in Ankara.</p>
                                    <div className="source"><a href="https://github.com/ufukbakan/QGIS-HospitalFinder">https://github.com/ufukbakan/QGIS-HospitalFinder</a></div>
                                </div>

                                <div className="project">
                                    <li>Blitz Auto Killer</li>
                                    <p>A scheduler project to automatically kill specific processes while gaming.</p>
                                    <div className="source"><a href="https://ufukbakan.github.io/BlitzAutoKiller/">https://ufukbakan.github.io/BlitzAutoKiller/</a></div>

                                </div>

                                <div className="project">
                                    <li>KMS Simulation</li>
                                    <p>It's a containerized node.js project that simulates key management services.</p>
                                    <div className="source"><a href="https://github.com/ufukbakan/KMS-Sim">https://github.com/ufukbakan/KMS-Sim</a></div>
                                </div>

                                <div className="project">
                                    <li>U Type Pass</li>
                                    <p>Encyription tool which uses three different asymetric keys created by me. Written in C#.</p>
                                    <div className="source"><a href="https://github.com/ufukbakan/UTypePass">https://github.com/ufukbakan/UTypePass</a></div>
                                </div>

                                <div className="project">
                                    <li>Windows Vista with CSS</li>
                                    <p>An uncomplete project, front-end copy of windows vista written with HTML, CSS and Js. It's
                                        open
                                        source on my codepen (<a target="_blank"
                                            href="https://codepen.io/ufukbakan/pen/KKNxZjJ">codepen.io/ufukbakan/pen/KKNxZjJ</a>).
                                    </p>
                                </div>

                                <div className="project">
                                    <li>Web Page Creator</li>
                                    <p>Project done with C Programming Language. This console program allows user to set
                                        title, paragraphs and color scheme. When all done, web page converted into HTML file
                                        and saved on to desktop.</p>
                                </div>
                        </ol>

                    </li>

                    <li>Closed Source Projects
                        <ol>
                            <br />
                            <div className="project">
                                <li>SNP Trade Consulting Website</li>
                                <p>Responsive Wordpress website with custom CSS. <a href="https://snptradeconsulting.com/"
                                    target="_blank">https://snptradeconsulting.com/</a>
                                </p>
                            </div>

                            <div className="project">
                                <li>Messaging App using SQL</li>
                                <p>A messaging app without using socket programming. Project done with C# and Mysql. Server
                                    commands
                                    are
                                    sent users via SQL signals.</p>
                            </div>

                            <div className="project">
                                <li>League of Legends AI Player</li>
                                <p>It’s a image processing project done with C# and .Net Core. The AI is going to walk to
                                    lane, attack and cast skills when detect an enemy on the screen, use summoner spells
                                    when health level is critical, escape and return back to base, buy items and walk to lane
                                    again.</p>
                            </div>

                            <div className="project">
                                <li>StopTheHack Web Page Design</li>
                                <p>Contest winning CSS design at freelancer.com.</p>
                            </div>
                        </ol>
                    </li>

                </ol>
                <h3>Hobbies and Interests</h3>
                <p>I'm playing guitar since 9 years old and also I love playing soccer. I'm making CSS animations and 3D models
                    in my free time.</p>
            </div>
        </>
    )
}